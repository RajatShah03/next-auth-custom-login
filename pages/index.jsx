import { useSession } from 'next-auth/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { data: session, status } = useSession({ required: true })
  console.log({ session, status })
  return (
    <div className={styles.container}>
      <Head>
        <title>Next auth custom login</title>
        <meta name="description" content="Next auth with custom login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4><i>{status}</i></h4>
        <h1 className={styles.title}>
          Hi {'{User}'}, Welcome to App
        </h1>
      </main>
    </div>
  )
}
