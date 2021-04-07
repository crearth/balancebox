import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Check your Balance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Check your <Link href="/balance"><a>balance</a></Link>.
        </h1>

        <p className={styles.description}>
          Because you want to.
        </p>
      </main>
    </div>
  )
}