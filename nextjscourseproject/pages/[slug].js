import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
//components
import styles from '../styles/Home.module.css';
import Layout from '../components/layout.js';

export default function PostPage({ postData, content }) {
  return (
    <Layout id="wrapper" className={styles.container}>
      <Head>
        <title>Saul's Blog</title>
      </Head>
      <div id="main" className="alt">
        {/* One */}
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{postData.title}</h1>
            </header>
            <span className="image main">
              <img src={`/assets/images/${postData.featured_image}`} alt="" />
            </span>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </section>
      </div>
    </Layout>
  );
}
export const getStaticPaths = async () => {
  const files = fs.readdirSync('posts');
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params: { slug } }) => {
  const post = fs.readFileSync(path.join('posts', `${slug}.md`)).toString();
  const postData = matter(post);
  const content = marked(postData.content);
  return {
    props: {
      slug,
      content,
      postData: postData.data,
    },
  };
};
