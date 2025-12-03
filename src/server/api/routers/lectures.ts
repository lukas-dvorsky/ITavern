import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
  roleProcedure,
} from "~/server/api/trpc";

export const lectureRouter = createTRPCRouter({
  getLectureHierarchiesBuilded: protectedProcedure.query(async ({ ctx }) => {
    const flat = await ctx.db.lectureHierarchy.findMany({
      where: {
        isPublic: true,
      },
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
        userId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.lectureHierarchy.create({
        data: {
          name: input.name,
          HierarchyParentId: input.lectureId,
          createdById: input.userId,
          updatedById: input.userId,
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
});
