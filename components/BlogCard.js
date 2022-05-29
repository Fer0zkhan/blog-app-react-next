import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

const BlogCard = ({ title, slug, author, datePublish, coverPicture }) => {
  return (
    <div className={styles.card}>
      <Link href={"/posts/" + slug}>
        <div className={styles.imageContainer}>
          <img src={coverPicture?.url} alt="..." width="100" height="100" />
        </div>
      </Link>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div className={styles.author}>
            <img src={author.avatar.url} alt="..." width="100" height="100" />
            <h3>{author.name}</h3>
          </div>
          <div className={styles.datePublish}>
            <h3>{datePublish}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
