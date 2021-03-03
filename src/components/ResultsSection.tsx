import styles from "../styles/components/ResultsSection.module.css";

export function ResultsSection() {
  return (
    <div className={styles.resultsContainer}>
      <div>
        <h2>growth plans</h2>
        <h3>take your business to the next level</h3>
      </div>
      <section className={styles.resultsSection}>
        <span>
          <div className={styles.resultsHeader}>
            <p className={styles.resultsPrice}>$ 100</p>
            <p className={styles.resultsDescription}>100 + hours</p>
          </div>
          <div className={styles.resultsText}>
            Lorem ipsum dolor sit amet, consectetura dipiscing elit.
          </div>
        </span>

        <span style={{ height: "12rem" }}>
          <div className={styles.resultsHeader}>
            <p className={styles.resultsPrice}>$ 150</p>
            <p className={styles.resultsDescription}>180 + hours</p>
          </div>
          <div className={styles.resultsText}>
            <p>Lorem ipsum dolor sit amet, consectetura dipiscing elit.</p>
          </div>
        </span>

        <span style={{ height: "15rem" }}>
          <div className={styles.resultsHeader}>
            <p className={styles.resultsPrice}>$ 200</p>
            <p className={styles.resultsDescription}>260 + hours</p>
          </div>
          <div className={styles.resultsText}>
            <p>Lorem ipsum dolor sit amet, consectetura dipiscing elit.</p>
          </div>
        </span>

        <span style={{ height: "18rem" }}>
          <div className={styles.resultsHeader}>
            <p className={styles.resultsPrice}>$ 250</p>
            <p className={styles.resultsDescription}>380 + hours</p>
          </div>
          <div className={styles.resultsText}>
            <p>Lorem ipsum dolor sit amet, consectetura dipiscing elit.</p>
          </div>
        </span>

        <span style={{ height: "21rem" }}>
          <div className={styles.resultsHeader}>
            <p className={styles.resultsPrice}>$ 300</p>
            <p className={styles.resultsDescription}>420 + hours</p>
          </div>
          <div className={styles.resultsText}>
            <p>Lorem ipsum dolor sit amet, consectetura dipiscing elit.</p>
          </div>
        </span>

        <span style={{ height: "24rem" }}>
          <div className={styles.resultsHeader}>
            <p className={styles.resultsPrice}>$ 350</p>
            <p className={styles.resultsDescription}>520 + hours</p>
          </div>
          <div className={styles.resultsText}>
            <p>Lorem ipsum dolor sit amet, consectetura dipiscing elit.</p>
          </div>
        </span>
      </section>
    </div>
  );
}
