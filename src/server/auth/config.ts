import { type DefaultSession, type NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

/**
 * NextAuth type extension
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: "ADMIN";
    } & DefaultSession["user"];
  }

  interface User {
    role: "ADMIN";
  }
}

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Yoga Admin Login",
      credentials: {
        password: {
          label: "Admin Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        const password = credentials?.password;

        if (password === process.env.ADMIN_PASSWORD) {
          return {
            id: "1",
            name: "Yoga Admin",
            email: "admin@yoga.local",
            role: "ADMIN",
          };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }

      return token;
    },

    session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          role: token.role as "ADMIN",
        },
      };
    },
  },

  pages: {
    signIn: "/admin/login",
  },
} satisfies NextAuthConfig;