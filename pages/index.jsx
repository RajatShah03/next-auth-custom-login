import { useSession } from 'next-auth/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { data: session, status } = useSession({ required: true })
  
  if(status === 'authenticated')
    return (
      <div className={styles.container}>
        <Head>
          <title>Next auth custom login</title>
          <meta name="description" content="Next auth with custom login" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Hi {session.user.name}, Welcome to App
          </h1>
        </main>
      </div>
    )
  return <div>loading...</div>
}
