import z from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  roleProcedure,
} from "~/server/api/trpc";

export const blockRouter = createTRPCRouter({
  //==================
  //      [GET]
  //==================

  getLectureBlocks: protectedProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      return ctx.db.lectureMarkdown.findMany({
        where: {
          lectureId: input,
        },
        orderBy: {
          order: "asc",
        },
        include: {
          block: true,
        },
      });
    }),

  getMarkdownBlocks: roleProcedure(["ADMIN"]).query(async ({ ctx }) => {
    return ctx.db.markdownBlock.findMany();
  }),

  //==================
  //    [CREATE]
  //==================
  createBlockConnectToLecture: roleProcedure(["ADMIN"])
    .input(
      z.object({
        lectureId: z.number(),
        name: z.string(),
        userId: z.string(),
        order: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const result = await ctx.db.$transaction(async (tx) => {
        await tx.lectureMarkdown.updateMany({
          where: {
            lectureId: input.lectureId,
            order: {
              gte: input.order,
            },
          },
          data: {
            order: {
              increment: 1,
            },
          },
        });

        const newBlock = await tx.markdownBlock.create({
          data: {
            name: input.name,
            content: `# ${input.name}`,
            createdById: input.userId,
            updatedById: input.userId,
          },
          select: {
            id: true,
          },
        });

        await tx.lectureMarkdown.create({
          data: {
            lectureId: input.lectureId,
            blockId: newBlock.id,
            order: input.order,
          },
        });

        return newBlock;
      });

      return {
        id: result.id,
      };
    }),

  //==================
  //    [UPDATE]
  //==================
  updateBlock: roleProcedure(["ADMIN"])
    .input(
      z.object({
        blockId: z.number(),
        content: z.string(),
        name: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.markdownBlock.update({
        where: {
          id: input.blockId,
        },
        data: {
          name: input.name,
          content: input.content,
          updatedById: input.userId,
        },
      });
    }),

  reorderBlocks: roleProcedure(["ADMIN"])
    .input(
      z.object({
        lectureId: z.number(),
        blockId: z.number(),
        oldOrder: z.number(),
        newOrder: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { lectureId, blockId, oldOrder, newOrder } = input;

      const isMovingDown = newOrder > oldOrder;

      const updateBlocks = ctx.db.lectureMarkdown.updateMany({
        where: {
          lectureId: lectureId,
          order: {
            gte: isMovingDown ? oldOrder + 1 : newOrder,
            lte: isMovingDown ? newOrder : oldOrder - 1,
          },
        },
        data: {
          order: {
            increment: isMovingDown ? -1 : 1,
          },
        },
      });

      const updateMovedBlock = ctx.db.lectureMarkdown.update({
        where: {
          lectureId_blockId: {
            lectureId: lectureId,
            blockId: blockId,
          },
        },
        data: {
          order: newOrder,
        },
      });

      return ctx.db.$transaction([updateBlocks, updateMovedBlock]);
    }),

  //==================
  //    [DELETE]
  //==================
  removeBlockFromLecture: roleProcedure(["ADMIN"])
    .input(z.object({ lectureId: z.number(), blockId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.lectureMarkdown.delete({
        where: {
          lectureId_blockId: {
            lectureId: input.lectureId,
            blockId: input.blockId,
          },
        },
      });
    }),
});
