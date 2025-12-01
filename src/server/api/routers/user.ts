import bcrypt from "bcryptjs";
import z from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  // Endpoint pro vytvoření uživatele
  createUser: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
        role: z.enum(["USER"]), // uprav podle Roles v DB
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // hash hesla
      const hashedPassword = await bcrypt.hash(input.password, 10);

      const user = await ctx.db.user.create({
        data: {
          email: input.email,
          password: hashedPassword,
          role: input.role,
        },
        select: { id: true, email: true, role: true, name: true }, // nikdy neposílej hash na frontend
      });

      return user;
    }),

  // Endpoint pro login
  loginUserCredentials: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { email: input.email },
        select: { id: true, email: true, password: true, role: true },
      });

      if (!user?.password) return null;

      const isValid = await bcrypt.compare(input.password, user.password);
      if (!isValid) return null;

      return { id: user.id, email: user.email, role: user.role };
    }),
});
