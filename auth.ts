import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { client } from "./lib/client";

export const { auth, handlers } = NextAuth({
    secret: process.env.secret,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                const userFound = await client.user.findUnique({
                    where: {
                        email: user.email || ''
                    }
                })
                if (userFound) {
                    token.id = userFound.id
                    return token
                }
                const createUser = await client.user.create({
                    data: {
                        email: user.email || "",
                        provider: 'Google'
                    }
                })

                token.id = createUser.id
            }
            return token
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.id = String(token.id)
            }
            return session
        }
    }
})
