import { TRPCError } from "@trpc/server";
import {
  PermissionType,
  Roles,
  type CompletedLectures,
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

const permissionTypeValues = Object.values(PermissionType) as [
  PermissionType,
  ...PermissionType[],
];
const permissionTypeSchema = z.enum(permissionTypeValues);

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

      /**
       * 1️⃣ Definice viditelnosti lekce pro uživatele
       * (stejná logika jako v getLecture)
       */
      const visibilityWhere = {
        OR: [
          { isPublic: true },
          { createdById: user.id },
          { permissions: { some: { userId: user.id } } },
        ],
      };

      /**
       * 2️⃣ Načti aktuální lekci – pouze pokud je VIDITELNÁ
       * (díky tomu se public child bez public parenta chová jako root)
       */
      const lecture = await ctx.db.lectureHierarchy.findFirst({
        where: {
          id: input,
          ...visibilityWhere,
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

      /**
       * 3️⃣ Vyhodnocení práv uživatele k TÉTO lekci
       */
      const isAdmin = user.role === Roles.ADMIN;

      const isOwner = lecture.createdById === user.id;

      const hasCreatorPermission = lecture.permissions.some(
        (p) => p.userId === user.id && p.type === "CREATOR",
      );

      const hasMinimalPermission = lecture.permissions.some(
        (p) => p.userId === user.id && p.type === "MINIMAL",
      );

      /**
       * 4️⃣ Sestavení WHERE podmínky pro children
       */
      let whereClause: any;

      // ADMIN / OWNER / CREATOR → vidí všechny childy
      if (isAdmin || isOwner || hasCreatorPermission) {
        whereClause = {
          HierarchyParentId: input,
        };
      }
      // MINIMAL → public + ty, ke kterým má explicitní právo
      else if (hasMinimalPermission) {
        whereClause = {
          HierarchyParentId: input,
          OR: [
            { isPublic: true },
            {
              permissions: {
                some: {
                  userId: user.id,
                  type: "MINIMAL",
                },
              },
            },
          ],
        };
      }
      // OSTATNÍ → pouze public
      else {
        whereClause = {
          HierarchyParentId: input,
          isPublic: true,
        };
      }

      /**
       * 5️⃣ Načtení child lekcí
       */
      return ctx.db.lectureHierarchy.findMany({
        where: whereClause,
        include: {
          createdBy: {
            select: { name: true },
          },
          updatedBy: {
            select: { name: true },
          },
          hierarchyChildren: {
            where: {
              completedBy: {
                some: {
                  userId: user.id,
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
    .query(async ({ ctx, input }) => {
      const completion = await ctx.db.completedLectures.findFirst({
        where: {
          lectureId: input,
          userId: ctx.session.user.id,
        },
      });

      const children = await ctx.db.lectureHierarchy.findMany({
        where: {
          HierarchyParentId: input,
        },
      });

      const completedChildrenCount = await ctx.db.completedLectures.count({
        where: {
          userId: ctx.session.user.id,
          lectureId: {
            in: children.map((c) => c.id),
          },
        },
      });
      const childrenLectureCompleted =
        children.length > 0 && completedChildrenCount === children.length;

      return {
        lectureCompleted: completion !== null,
        childrenLectureCompleted:
          children.length === 0 ? true : childrenLectureCompleted,
      };
    }),

  getLecturesCompletionStatus: protectedProcedure
    .input(z.array(z.number()))
    .query(async ({ ctx, input }) => {
      const completions = await ctx.db.completedLectures.findMany({
        where: {
          lectureId: { in: input },
          userId: ctx.session.user.id,
        },
        select: {
          lectureId: true,
        },
      });

      return completions;
    }),

  setLecturePublic: protectedProcedure
    .input(z.number())
    .mutation(async ({ ctx, input }) => {
      const currentStatus = await ctx.db.lectureHierarchy.findUnique({
        where: {
          id: input,
        },
        select: {
          isPublic: true,
        },
      });

      const completions = await ctx.db.lectureHierarchy.update({
        where: {
          id: input,
        },
        data: {
          isPublic: !currentStatus?.isPublic,
          updatedById: ctx.session.user.id,
        },
      });

      return completions;
    }),

  getPermittedUsers: protectedProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      return await ctx.db.lecturePermissions.findMany({
        where: {
          lectureId: input,
        },
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
      });
    }),

  getUnpermittedUsers: protectedProcedure
    .input(z.object({ lectureId: z.number() }))
    .query(async ({ ctx, input }) => {
      const usersWithPermission = await ctx.db.lecturePermissions.findMany({
        where: { lectureId: input.lectureId },
        select: { userId: true },
      });

      const userIdsWithPermission = usersWithPermission.map((u) => u.userId);

      return ctx.db.user.findMany({
        where: {
          AND: [
            { id: { notIn: userIdsWithPermission } },
            { id: { not: ctx.session.user.id } },
          ],
        },
        select: {
          id: true,
          name: true,
        },
      });
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

  deleteLectureProgression: protectedProcedure
    .input(z.number())
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      const lecturesToDelete: number[] = [];

      const queue: number[] = [input];

      while (queue.length > 0) {
        const current = queue.shift()!;
        lecturesToDelete.push(current);

        const children = await ctx.db.lectureHierarchy.findMany({
          where: { HierarchyParentId: current },
          select: { id: true },
        });

        queue.push(...children.map((c) => c.id));
      }

      await ctx.db.completedLectures.deleteMany({
        where: {
          lectureId: { in: lecturesToDelete },
          userId,
        },
      });

      return { deletedLectures: lecturesToDelete.length };
    }),

  removePermission: protectedProcedure
    .input(z.object({ userId: z.string(), lectureId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.lecturePermissions.delete({
        where: {
          userId_lectureId: {
            userId: input.userId,
            lectureId: input.lectureId,
          },
        },
      });
    }),

  //==================
  //    [CREATE]
  //==================
  createCompletion: protectedProcedure
    .input(z.number())
    .mutation(async ({ ctx, input }) => {
      const currentStatus = await ctx.db.completedLectures.findFirst({
        where: {
          lectureId: input,
          userId: ctx.session.user.id,
        },
      });

      if (currentStatus) return;

      return await ctx.db.completedLectures.create({
        data: {
          lectureId: input,
          userId: ctx.session.user.id,
        },
      });
    }),

  gainPermission: protectedProcedure
    .input(
      z.object({
        lectureId: z.number(),
        userId: z.string(),
        type: permissionTypeSchema,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.lecturePermissions.create({
        data: {
          userId: input.userId,
          lectureId: input.lectureId,
          type: input.type,
        },
      });
    }),
});
