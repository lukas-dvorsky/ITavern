import type { LectureHierarchy } from "generated/prisma";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { buildHierarchyTree } from "~/server/utils/lectures";

export const lectureRouter = createTRPCRouter({
  getLectureHierarchies: protectedProcedure.query(async ({ ctx }) => {
    const flat = await ctx.db.lectureHierarchy.findMany({
      select: {
        id: true,
        name: true,
        hierarchyChildren: true,
        HierarchyParentId: true,
      },
    });

    return buildHierarchyTree(flat);
  }),

  createLecture: protectedProcedure
    .input(z.object({ name: z.string(), parentId: z.number() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.lectureHierarchy.create({
        data: {
          name: input.name,
          HierarchyParentId: input.parentId,
        },
      });
    }),
});
