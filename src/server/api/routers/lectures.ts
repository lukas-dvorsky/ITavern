import type { MarkdownBlock } from "generated/prisma";
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

  getMarkdownBlocksByOrder: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      if (!input) return [];

      let order: number[] = [];

      try {
        order = JSON.parse(input) as number[];

        if (!Array.isArray(order)) return [];
        order = order.map(Number).filter((n) => !isNaN(n));
      } catch {
        return [];
      }

      if (order.length === 0) return [];

      const blocks = await ctx.db.markdownBlock.findMany({
        where: {
          id: { in: order },
        },
      });

      const mapById = new Map(blocks.map((b) => [b.id, b]));
      const ordered = order
        .map((id) => mapById.get(id))
        .filter((b): b is MarkdownBlock => Boolean(b));

      return ordered;
    }),

  getMarkdownBlock: publicProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      return await ctx.db.markdownBlock.findFirst({
        where: {
          id: input,
        },
      });
    }),

  getMarkdownBlocks: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.markdownBlock.findMany({});
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

  udpateMarkdownBlock: roleProcedure(["ADMIN"])
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
        userId: z.string(),
        content: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.markdownBlock.update({
        where: {
          id: input.id,
        },
        data: {
          updatedById: input.userId,
          name: input.name,
          content: input.content,
        },
      });
    }),

  updateOrder: roleProcedure(["ADMIN"])
    .input(
      z.object({
        lectureId: z.number(),
        order: z.array(z.number()),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { lectureId, order } = input;

      const orderString = JSON.stringify(order);

      const updatedLecture = await ctx.db.lectureHierarchy.update({
        where: { id: lectureId },
        data: {
          order: orderString,
        },
      });

      return updatedLecture;
    }),

  createMarkdownBlock: roleProcedure(["ADMIN"])
    .input(
      z.object({
        content: z.string().optional(),
        name: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.markdownBlock.create({
        data: {
          content: input.content,
          name: input.name,
          createdById: input.userId,
          updatedById: input.userId,
        },
        select: {
          id: true,
        },
      });
    }),

  getLectureOrder: roleProcedure(["ADMIN"])
    .input(z.number())
    .query(async ({ ctx, input }) => {
      return await ctx.db.lectureHierarchy.findFirst({
        where: {
          id: input,
        },
        select: {
          order: true,
        },
      });
    }),
});
