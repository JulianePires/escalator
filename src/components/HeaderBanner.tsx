import styles from "../styles/components/HeaderBanner.module.css";

export function HeaderBanner() {
  return (
    <div className={styles.headerContainer}>
      <img
        className={styles.headerBanner}
        src="images/banner.png"
        alt="banner header"
      />
      <header>
        <img className={styles.logoBanner} src="logo.svg" alt="logo" />
        <h1>
          we have ideas to
          <br /> growth your business
        </h1>
        <button>see now</button>
      </header>
    </div>
  );
}
