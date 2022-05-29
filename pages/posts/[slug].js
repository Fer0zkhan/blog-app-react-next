import { GraphQLClient } from "graphql-request";
import { GET_ONE_POST, SLUG_LIST } from "../../graphQl";
import Link from "next/link";
import styles from "../../styles/DetailPage.module.css";

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPH_CMS_API);

export const getStaticPaths = async () => {
  const { posts } = await graphcms.request(SLUG_LIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const data = await graphcms.request(GET_ONE_POST, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

const Article = ({ post }) => {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleBack}>
        <Link href="/"><span>Go Back</span></Link>
      </div>
      <div className={styles.articleCoverImage}>
        <img src={post.coverPicture.url} alt="..." />
      </div>
      <div className={styles.articleHeader}>
        <div className={styles.articleHeaderUpper}>
          <h1>{post.title}</h1>
        </div>
        <div className={styles.articleHeaderLower}>
          <div className={styles.authorSection}>
            <img src={post.author.avatar.url} alt="..." />
            <h1>{post.author.name}</h1>
          </div>
          <span>{post.datePublish}</span>
        </div>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
    </div>
  );
};

export default Article;
