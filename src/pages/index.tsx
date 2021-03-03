import Head from "next/head";
import React from "react";
import { GallerySection } from "../components/GallerySection";
import { HeaderBanner } from "../components/HeaderBanner";
import { ResultsSection } from "../components/ResultsSection";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Escalator | Ideas to growth your business</title>
        <meta
          name="title"
          content="Escalator | Ideas to growth your business"
        />
      </Head>
      <HeaderBanner />
      <GallerySection />
      <ResultsSection />
    </div>
  );
}
