import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      authorize: async (credentials) => {
        if (
          credentials?.username === "user" &&
          credentials?.password === "pass"
        ) {
          const user = {
            id: "1", // Convert the id to a string
            name: "John Doe",
            email: "john@example.com",
          };

          return user;
        }

        return null; // Return null if authentication fails
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      // Merge user object into the token if available
      if (user) {
        return { ...token, ...user };
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token as any; // Pass the token data to the session

      return session;
    },
    async redirect({ url, baseUrl }) {
      // Ensure redirection to the base URL plus a relative path
      if (url.startsWith(baseUrl)) {
        return url;
      } else if (url.startsWith("/")) {
        return baseUrl + url;
      }

      return baseUrl; // Default redirection
    },
  },
};
