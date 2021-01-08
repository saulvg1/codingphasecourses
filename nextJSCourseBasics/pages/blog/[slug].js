import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Article() {
  const router = useRouter();
  const { slug } = router.query;
  // console.log(router.query);
  return (
    <div className="">
      <Head>
        <title>{slug}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta description="This is the NextJs course from codingPhase" />
      </Head>
      <h1>{slug}</h1>
      <p>{slug} Description</p>
    </div>
  );
}
