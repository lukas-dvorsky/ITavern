import bcrypt from "bcryptjs";
import { Themes } from "generated/prisma";
import z from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const ThemeEnum = z.enum(Object.values(Themes) as [Themes, ...Themes[]]);

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

  createUserSettings: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.userSettings.create({
        data: {
          userId: input,
        },
      });
    }),

  getUserSettings: protectedProcedure.query(async ({ ctx }) => {
    let userSettings = await ctx.db.userSettings.findFirst({
      where: { userId: ctx.session.user.id },
    });

    if (!userSettings) {
      userSettings = await ctx.db.userSettings.create({
        data: {
          userId: ctx.session.user.id,
        },
      });
    }

    return userSettings;
  }),

  setTheme: protectedProcedure
    .input(ThemeEnum)
    .mutation(async ({ ctx, input }) => {
      const updated = await ctx.db.userSettings.upsert({
        where: { userId: ctx.session.user.id },
        update: { theme: input },
        create: { userId: ctx.session.user.id, theme: input },
      });

      return updated;
    }),

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
