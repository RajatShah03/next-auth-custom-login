import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Posts({ posts }) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Posts Static Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Posts</h1>
        <article className={styles.grid}>
            {posts.map(({ title, body }) => (
                <div className={styles.card}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{body}</p>
                </div>
            ))}
        </article>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
    const resJson = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await resJson.json()

    return {
        props: {
            posts
        }
    }
}
