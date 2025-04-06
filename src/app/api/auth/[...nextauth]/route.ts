import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import pool from "@/lib/db";
import { DefaultSession } from "next-auth"; // ✅ Required for type merging

// ✅ Module augmentation to add `id` to session.user
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { name, email, image } = user;

      await pool.query(
        `
        INSERT INTO users (name, email, image)
        VALUES ($1, $2, $3)
        ON CONFLICT (email) DO NOTHING
        `,
        [name, email, image]
      );

      return true;
    },

    async session({ session }) {
      const result = await pool.query(
        `SELECT id FROM users WHERE email = $1`,
        [session.user?.email]
      );

      if (result.rows.length && session.user) {
        session.user.id = result.rows[0].id;
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };
