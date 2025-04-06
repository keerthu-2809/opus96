// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import pool from "@/lib/db";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const { name, email, image } = user;

      // Store user in DB manually if not exists
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
      // Optionally fetch user ID or other info
      const result = await pool.query(
        `SELECT id FROM users WHERE email = $1`,
        [session.user?.email]
      );

      if (result.rows.length) {
        (session.user as any).id = result.rows[0].id;
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };
