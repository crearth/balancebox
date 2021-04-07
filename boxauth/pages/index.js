import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
          Please log in. <br />
          <button onClick={signIn}>Sign in</button>
          </>
        )}
        {session && (
          <>
          Signed in as {session.user.name}. <br />
          <button><Link href="/balance">Check your balance</Link></button>
          <button onClick={signOut}>Sign out</button>
          </>
        )}
      </main>
    </div>
  )
}
