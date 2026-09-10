import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
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
          <Link to="/docs/Webprogramozás/Bevezető/" className={styles.card}>
            <h3>Bevezető</h3>
          </Link>
          <Link to="/docs/Webprogramozás/JavaScript/" className={styles.card}>
            <h3>JavaScript</h3>
          </Link>
          <Link to="/docs/sql/" className={styles.card}>
            <h3>SQL</h3>
          </Link>
          <Link to="/docs/Webprogramozás/Gyakorlás/" className={styles.card}>
            <h3>Gyakorlás</h3>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
