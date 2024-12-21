import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="GanzSchool Tananyagok"
      description="Minden tananyag egy helyen, dizájnos és letisztult megjelenéssel"
    >
      <header className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.title}>Üdvözöllek a GanzSchool tananyagai között!</h1>
          <p className={styles.subtitle}>
            Válaszd ki az alábbi tananyagok egyikét a kezdéshez.
          </p>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.cardGrid}>
          <a href="/Materials/docs/javascript" className={styles.card}>
            <h3>JavaScript Tananyag</h3>
          </a>
          <a href="/Materials/docs/python" className={styles.card}>
            <h3>Python Tananyag</h3>
          </a>
          <a href="/Materials/docs/csharp" className={styles.card}>
            <h3>C++ Tananyag</h3>
          </a>
        </div>
      </main>
    </Layout>
  );
}
