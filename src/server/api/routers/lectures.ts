import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const lectureRouter = createTRPCRouter({
  getLectureHierarchiesBuilded: protectedProcedure.query(async ({ ctx }) => {
    const flat = await ctx.db.lectureHierarchy.findMany({
      select: {
        id: true,
        name: true,
        hierarchyChildren: true,
        HierarchyParentId: true,
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

  createLecture: protectedProcedure
    .input(z.object({ name: z.string(), parentId: z.number().nullable() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.lectureHierarchy.create({
        data: {
          name: input.name,
          HierarchyParentId: input.parentId,
        },
      });
    }),

  updateLecture: protectedProcedure
    .input(
      z.object({
        id: z.number(), // ID lekce, kterou chceme update
        name: z.string().optional(), // co chceme měnit
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

  deleteLecture: protectedProcedure
    .input(z.number())
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.lectureHierarchy.delete({
        where: {
          id: input,
        },
      });
    }),
});
