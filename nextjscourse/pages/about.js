import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About-NextJs Course</title>
        <link rel="icon" href="/favicon.ico" />
        <meta description="This is the NextJs course from codingPhase" />
      </Head>
      <h1>About</h1>
      <p>This is the about page </p>
      <img src="/image/goku.png" />
      <style global jsx>
        {`
          body {
            background: yellow;
            color: black;
          }
          h1 {
            font-family: sans-serif;
            font-size: 5rem;
          }
        `}
      </style>
    </div>
  );
}
