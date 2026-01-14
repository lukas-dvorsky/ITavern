import { TRPCError } from "@trpc/server";
import {
  Roles,
  type LectureHierarchy,
  type LecturePermissions,
} from "generated/prisma";
import z from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  roleProcedure,
} from "~/server/api/trpc";

interface LectureHierarchyPermission extends LectureHierarchy {
  permissions: LecturePermissions[];
}

function validateUserLecturePermissions(
  lecture: LectureHierarchyPermission,
  userId: string,
): "PERMITTED" | "NO_PERMISSION" {
  if (userId === lecture.createdById) return "PERMITTED";

  const hasPermission = lecture.permissions.some(
    (p) => p.userId == userId && p.type === "CREATOR",
  );

  return hasPermission ? "PERMITTED" : "NO_PERMISSION";
}

export const lectureRouter = createTRPCRouter({
  //==================
  //      [GET]
  //==================

  getUserPermissionTypeonLecture: protectedProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      const { user } = ctx.session;

      const lecture = await ctx.db.lectureHierarchy.findFirst({
        where: {
          id: input,
        },
        include: {
          permissions: true,
        },
      });

      if (!lecture) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Lekce nenalezena nebo k ní nemáte přístup.",
        });
      }

      // USER JE VLASTNIK LEKCE
      if (user.id === lecture?.createdById) return "ADMIN";

      // USER MA OWNER PRAVA
      const hasOwnerPermission = lecture.permissions.some(
        (p) => p.userId == user.id && p.type === "CREATOR",
      );
      if (hasOwnerPermission) return "OWNER";

      // USER MA MINIMAL PRAVA
      const hasMinimalPermission = lecture.permissions.some(
        (p) => p.userId == user.id && p.type === "MINIMAL",
      );
      if (hasMinimalPermission) return "MINIMAL";

      // USER NEMA NIJAKE PRAVA
      return "NONE";
    }),

  getParentLectures: protectedProcedure.query(async ({ ctx }) => {
    const { user } = ctx.session;

    let whereClause: any = {};

    if (user.role === Roles.ADMIN) {
      whereClause = { HierarchyParentId: null };
    } else if (user.role === Roles.OWNER) {
      whereClause = {
        HierarchyParentId: null,
        OR: [
          { isPublic: true },
          { createdById: user.id },
          {
            permissions: {
              some: { userId: user.id },
            },
          },
        ],
      };
    } else {
      whereClause = {
        HierarchyParentId: null,
        isPublic: true,
      };
    }

    return await ctx.db.lectureHierarchy.findMany({
      where: whereClause,
      include: {
        subscriptions: {
          where: {
            userId: user.id,
          },
        },
        permissions: {
          where: {
            userId: user.id,
          },
        },
        _count: {
          select: {
            subscriptions: true,
          },
        },
      },
    });
  }),

  getLecture: protectedProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      const { user } = ctx.session;

      if (user.role === Roles.ADMIN) {
        const lecture = await ctx.db.lectureHierarchy.findUnique({
          where: { id: input },
        });
        if (!lecture)
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Lekce nenalezena.",
          });
        return lecture;
      }

      const lecture = await ctx.db.lectureHierarchy.findFirst({
        where: {
          id: input,
          OR: [
            { isPublic: true },
            { createdById: user.id },
            { permissions: { some: { userId: user.id } } },
          ],
        },
      });

      if (!lecture) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Lekce nenalezena nebo k ní nemáte přístup.",
        });
      }

      return lecture;
    }),

  /**
   * Funkce, ktera vrati childy lekce v hierarchii. Viditelnosti jsou na zaklade nastevenych prav
   */
  getLectureChildren: protectedProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      const { user } = ctx.session;

      let whereClause = {};

      const lecture = await ctx.db.lectureHierarchy.findUnique({
        where: {
          id: input,
        },
        include: {
          permissions: true,
        },
      });

      if (!lecture) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Lekce nenalezena nebo k ní nemáte přístup.",
        });
      }

      let root = lecture;
      while (root.HierarchyParentId !== null) {
        const parent = await ctx.db.lectureHierarchy.findUnique({
          where: {
            id: root.HierarchyParentId,
          },
          include: {
            permissions: true,
          },
        });

        if (!parent) break;

        root = parent;
      }

      // vlastnik celeho kurzu vidi vsechny i ty, co nejsou jeho to stejny admin
      // uzivatel s pravy na konkretni lekci na ktere se nachazime ma CREATOR prava

      //nebo ma CREATOR PRAVA na nejakeho predka, TOTO BUDEME RESIT TAK, ZE PRI ZAKLADANI PRAV SE VYTVORI ZAZNAMY DO PERMISSIONS.
      //pokud ma uzivatel na predkovy creator prava, tak se vytvori zaznam do tabulky pri vytvoreni lekce.
      if (
        root.createdById === user.id ||
        user.role === "ADMIN" ||
        lecture.permissions.some(
          (p) => p.userId === user.id && p.type === "CREATOR",
        )
      ) {
        whereClause = {
          HierarchyParentId: input,
        };
      } else if (
        // MINIMAL vidi jen ty, co muze editovat, ale muzou byt i isPublic = false
        lecture.permissions.some(
          (p) => p.userId === user.id && p.type === "MINIMAL",
        )
      ) {
        whereClause = {
          OR: [
            {
              AND: [
                {
                  HierarchyParentId: input,
                },
                {
                  isPublic: true,
                },
              ],
            },
            {
              AND: [
                {
                  HierarchyParentId: input,
                },
                {
                  permissions: {
                    some: {
                      AND: [
                        {
                          userId: ctx.session.user.id,
                        },
                        {
                          type: "MINIMAL",
                        },
                      ],
                    },
                  },
                },
              ],
            },
          ],
        };
      } else {
        // USER vidi jen public
        whereClause = {
          AND: [
            {
              HierarchyParentId: input,
            },
            {
              isPublic: true,
            },
          ],
        };
      }

      return await ctx.db.lectureHierarchy.findMany({
        where: whereClause,
        include: {
          createdBy: {
            select: {
              name: true,
            },
          },
          updatedBy: {
            select: {
              name: true,
            },
          },
          hierarchyChildren: {
            where: {
              completedBy: {
                some: {
                  userId: ctx.session.user.id,
                },
              },
            },
            select: {
              isPublic: true,
            },
          },
          _count: {
            select: {
              hierarchyChildren: {
                where: {
                  isPublic: true,
                },
              },
            },
          },
        },
      });
    }),

  getLectureCompletionStatus: protectedProcedure
    .input(z.number())
    .query(async ({ ctx, input }): Promise<boolean> => {
      const completion = await ctx.db.completedLectures.findFirst({
        where: {
          lectureId: input,
          userId: ctx.session.user.id,
        },
      });

      return completion !== null;
    }),

  //==================
  //    [UPDATE]
  //==================

  updateLecture: protectedProcedure
    .input(
      z.object({
        lectureId: z.number(),
        name: z.string(),
        image: z.string(),
        description: z.string(),
        isPublic: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const lecture = await ctx.db.lectureHierarchy.findFirst({
        where: {
          id: input.lectureId,
        },
        include: {
          permissions: true,
        },
      });

      if (!lecture) {
        throw new Error("Lecture not found");
      }

      let permissionType = validateUserLecturePermissions(
        lecture,
        ctx.session.user.id,
      );

      if (permissionType === "NO_PERMISSION") {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "K upravení této lekce nemáte práva.",
        });
      }

      return ctx.db.lectureHierarchy.update({
        where: {
          id: input.lectureId,
        },
        data: {
          name: input.name,
          isPublic: input.isPublic,
          updatedById: ctx.session.user.id,
          image: input.image,
          description: input.description,
        },
      });
    }),
  //==================
  //    [DELETE]
  //==================
});
