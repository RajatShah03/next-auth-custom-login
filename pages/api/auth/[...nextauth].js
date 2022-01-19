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
                                name: 'Firstname Lastname',
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
        async jwt({ token, user, account, profile, isNewUser }) {
            console.log({ token, user, account, profile, isNewUser })
            return token
        },
        async session({ session, token, user }) {
            console.log({ session, token, user })
            return session
        }
    },
    pages: {
        signIn: '/auth/login',
        error: '/auth/login',
        newUser: '/'
    }
}

export default NextAuth(nextAuthConfig)