import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

const nextAuthConfig = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            async authorize(credentials) {
                try {
                    const { email, password } = credentials
                    if(email === 'abc@test.com' && password === 'test') {
                        return {
                            accessToken: 'valid access token',
                            data: {
                                id: '1234',
                                name: 'John Doe',
                                email: 'abc@test.com',
                                role: 0
                            }
                        }
                    } else {
                        return null;
                    }
                } catch(error) {
                    throw Error(error.message)
                }
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if(user) {
                token.accessToken = user.accessToken
                token.user = user.data
            }

            return token
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken
            session.user = token.user

            return session
        }
    },
    pages: {
        signIn: '/auth/login',
        error: '/auth/login',
    }
}

export default NextAuth(nextAuthConfig)