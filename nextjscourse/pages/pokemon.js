import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export default function Pokemon({ data }) {
  const [state, setState] = useState({
    name: data.name,
  });
  //   useEffect(() => {
  //     console.log('component loaded');
  //     axios.get('https://pokeapi.co/api/v2/pokemon/pikachu').then((res) => {
  //       console.log(res);
  //       setState({ name: res.data.name });
  //     });
  //   }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon - NEXTJS Course</title>
        <link rel="icon" href="/favicon.ico" />
        <meta description="This is the POKEMON PAGE" />
      </Head>
      <h1>This is the Pokemon Component</h1>
      <h2 style={{ fontSize: '4rem' }}>{state.name}</h2>
    </div>
  );
}
//static site generation
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
//server side generation
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
