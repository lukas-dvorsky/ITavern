import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
  roleProcedure,
} from "~/server/api/trpc";

export const lectureRouterOld = createTRPCRouter({
  getLectureHierarchiesBuilded: protectedProcedure.query(async ({ ctx }) => {
    const flat = await ctx.db.lectureHierarchy.findMany({
      // where: {
      //   isPublic: true,
      // },
    });

    return flat;
  }),

  getLectureHierarchies: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.lectureHierarchy.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return data;
  }),

  createLecture: roleProcedure(["ADMIN"])
    .input(
      z.object({
        name: z.string(),
        lectureId: z.number().nullable(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.lectureHierarchy.create({
        data: {
          name: input.name,
          HierarchyParentId: input.lectureId,
          createdById: ctx.session.user.id,
          updatedById: ctx.session.user.id,
        },
      });
    }),

  getParent: publicProcedure.input(z.number()).query(async ({ ctx, input }) => {
    const data = await ctx.db.lectureHierarchy.findUnique({
      select: {
        HierarchyParentId: true,
        name: true,
      },
      where: {
        id: input,
      },
    });
    return data;
  }),

  setLecturePublic: roleProcedure(["ADMIN"])
    .input(
      z.object({
        lectureId: z.number(),
        isPublic: z.boolean(),
        userId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.lectureHierarchy.update({
        where: {
          id: input.lectureId,
        },
        data: { updatedById: input.userId, isPublic: input.isPublic },
      });
    }),

  updateLecture: roleProcedure(["ADMIN"])
    .input(
      z.object({
        id: z.number(),
        name: z.string().optional(),
        parentId: z.number().nullable().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.lectureHierarchy.update({
        where: { id: input.id },
        data: {
          name: input.name,
          HierarchyParentId: input.parentId,
        },
      });
    }),

  deleteLecture: roleProcedure(["ADMIN"])
    .input(z.number())
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.lectureHierarchy.delete({
        where: {
          id: input,
        },
      });
    }),

  getLecture: protectedProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      return await ctx.db.lectureHierarchy.findFirst({
        where: {
          id: input,
        },
      });
    }),

  getIsPermitted: protectedProcedure
    .input(z.object({ userId: z.string(), lectureId: z.number() }))
    .query(async ({ ctx, input }) => {
      const count = await ctx.db.lecturePermissions.count({
        where: {
          lectureId: input.lectureId,
          userId: input.userId,
        },
      });

      const isUserLecture = await ctx.db.lectureHierarchy.findFirst({
        where: {
          id: input.lectureId,
        },
        select: {
          createdById: true,
        },
      });

      return count > 0 || isUserLecture?.createdById === input.userId;
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

  gainPermission: protectedProcedure
    .input(z.object({ userId: z.string(), lectureId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.lecturePermissions.create({
        data: {
          userId: input.userId,
          lectureId: input.lectureId,
        },
      });
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
          id: { notIn: userIdsWithPermission },
        },
        select: {
          id: true,
          name: true,
        },
      });
    }),
});
