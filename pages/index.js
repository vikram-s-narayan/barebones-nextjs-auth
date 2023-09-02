import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Helpful Marketing Content</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
        Landing Page Content Goes Here
       
        </h1>

        <p className={styles.description}>
        <Link href="auth/signup">Signup</Link> <br/>
        <Link href="auth/login">Login</Link> <br/>
        Read <Link href="/course/protected-page-1">protected content</Link>
        </p>
      </main>

         </div>
  )
}
