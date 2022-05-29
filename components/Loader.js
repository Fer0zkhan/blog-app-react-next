import styles from "../styles/LoadingSvg.module.css";

const Loader = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loader;
