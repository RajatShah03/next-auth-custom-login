import { getSession, SessionProvider } from 'next-auth/react'
import Header from '../components/header';
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
      <SessionProvider session={session} refetchInterval={2*60}>
          <Header />
          <Component {...pageProps} />
      </SessionProvider>
  );
}

export default MyApp

export const getServerSideProps = async (context) => {
  return {
    props: {
      session: await getSession(context)
    }
  }
}