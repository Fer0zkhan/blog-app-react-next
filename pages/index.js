import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GraphQLClient } from "graphql-request";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";
import { GET_ALL_POSTS_QUERY } from "../graphQl";

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPH_CMS_API);

export const getStaticProps = async () => {
  const { posts } = await graphcms.request(GET_ALL_POSTS_QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>BlogMe</title>
        <meta name="description" content="A blog website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.length === 0 ? (
          <Loader />
        ) : (
          <>
            {posts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </>
        )}
      </main>
    </div>
  );
}
