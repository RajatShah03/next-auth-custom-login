import { getSession, SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return <SessionProvider session={session} refetchInterval={2*60}><Component {...pageProps} /></SessionProvider>
}

export default MyApp

export const getServerSideProps = async (context) => {
  return {
    props: {
      session: await getSession(context)
    }
  }
}