import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "~/server/db";
import bcrypt from "bcryptjs";
import type { DefaultSession, NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import type { Roles } from "generated/prisma";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: Roles;
    } & DefaultSession["user"];
  }

  interface User {
    role: Roles;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    role: Roles;
  }
}

export const authConfig: NextAuthConfig = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        action: { label: "Action", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email a heslo jsou povinné");
        }

        const email = credentials.email as string;
        const password = credentials.password as string;
        const action = credentials.action as string;

        // ---------- REGISTRACE ----------
        if (action === "register") {
          const existingUser = await db.user.findUnique({
            where: { email },
          });

          if (existingUser) {
            throw new Error("Uživatel s tímto emailem již existuje");
          }

          const hashedPassword = await bcrypt.hash(password, 12);

          const newUser = await db.user.create({
            data: {
              email,
              password: hashedPassword,
              role: "USER",
            },
          });

          return {
            id: newUser.id,
            email: newUser.email,
            role: newUser.role,
          };
        }

        // ---------- PŘIHLÁŠENÍ ----------
        const user = await db.user.findUnique({
          where: { email },
        });

        if (!user?.password) {
          throw new Error("Nesprávný email nebo heslo");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          throw new Error("Nesprávný email nebo heslo");
        }

        return {
          id: user.id,
          email: user.email,
          role: user.role,
          name: user.name,
        };
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 dní
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
        session.user.role = token.role as Roles;
      }
      return session;
    },
  },
  trustHost: true,
};
