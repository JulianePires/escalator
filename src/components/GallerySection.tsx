import styles from "../styles/components/GallerySection.module.css";

export function GallerySection() {
  return (
    <div className={styles.galleryContainer}>
      <h2 style={{ width: "100%" }}>categories</h2>
      <h3>discover new possibilities to help you today</h3>

      <div className={styles.galleryBox}>
        <section className={styles.gallerySection}>
          <span>
            <div className={styles.textBox}>
              <h2>nature</h2>
              <h3>Lorem ipsum dolor sit amet</h3>
            </div>
            <img src="./images/nature.png" alt="leaves" />
          </span>

          <span>
            <div className={styles.textBox}>
              <h2>daily</h2>
              <h3>Praesent tincidunt consectetur diam</h3>
            </div>
            <img src="./images/daily.png" alt="a place with people working" />
          </span>
        </section>

        <section className={styles.gallerySection}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
          >
            <div className={styles.textBox}>
              <h2>together</h2>
              <h3>Praesent tincidunt consectetur diam</h3>
            </div>
            <img src="./images/together.png" alt="a city under war" />
          </span>
        </section>

        <section className={styles.gallerySection}>
          <span style={{ display: "flex", justifyContent: "flex-end" }}>
            <div className={styles.textBox}>
              <h2 style={{ textAlign: "right" }}>analysis</h2>
              <h3>Duis sollicitudin mauris vitae venenatis aliquet</h3>
            </div>
            <img src="./images/analysis.png" alt="sport car running" />
          </span>

          <span>
            <div className={styles.textBox}>
              <h2>pictures</h2>
              <h3>Quisque eu nisl purus</h3>
            </div>
            <img src="./images/picture.png" alt="sunset beach" />
          </span>
        </section>
      </div>
    </div>
  );
}
