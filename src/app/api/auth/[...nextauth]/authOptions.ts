import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const admins = [
          { id: "1", email: "admin@gmail.com", password: "admin" },
        ];

        if (!credentials) {
          throw new Error("No credentials provided");
        }

        const user = admins.find(
          (u) =>
            u.email === credentials.email && u.password === credentials.password
        );

        if (!user) {
          return null;
        }

        return { id: user.id, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
