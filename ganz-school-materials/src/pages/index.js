import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="GanzSchool Materials"
      description="Minden tananyag egy helyen, dizájnos és letisztult megjelenéssel"
    >
      <header className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.title}>GanzSchool Materials</h1>
          <p className={styles.subtitle}>
            Válaszd ki az alábbi tananyagok egyikét a kezdéshez.
          </p>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.cardGrid}>
          <a href="/Materials/docs/Webprogramozás/HTML" className={styles.card}>
            <h3>HTML</h3>
          </a>
          <a href="/Materials/docs/Webprogramozás/CSS" className={styles.card}>
            <h3>CSS</h3>
          </a>
          <a href="/Materials/docs/Webprogramozás/JavaScript" className={styles.card}>
            <h3>JavaScript</h3>
          </a>
        </div>
      </main>
    </Layout>
  );
}
