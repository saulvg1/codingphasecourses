import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta description="This is the NextJs course from codingPhase" />
      </Head>
      <h1>This is the home Component</h1>
    </div>
  );
}
