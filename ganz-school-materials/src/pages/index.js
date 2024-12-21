import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Ganz School Tananyag"
      description="Egyedi Docusaurus oldal a tanulóknak"
    >
      {/* Felső harmad - bemutatkozás */}
      <header className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.title}>Üdv a Ganz School tananyagaihoz!</h1>
          <p className={styles.subtitle}>
            Röviden bemutatkozás, cél, kinek szól ez az oldal...
          </p>
        </div>
      </header>

      {/* Alsó 2/3 - ikonok/dobozok */}
      <main className={styles.mainContent}>
        <div className={styles.iconGrid}>
          {/* Java */}
          <a href="/docs/javascript" className={styles.iconCard}>
            <img
              src="img/java-icon.png"
              alt="Java ikon"
              className={styles.iconImage}
            />
            <h3>Java tananyag</h3>
          </a>

          {/* Python */}
          <a href="/docs/python" className={styles.iconCard}>
            <img
              src="img/python-icon.png"
              alt="Python ikon"
              className={styles.iconImage}
            />
            <h3>Python tananyag</h3>
          </a>

          {/* C++ */}
          <a href="/docs/csharp" className={styles.iconCard}>
            <img
              src="img/cpp-icon.png"
              alt="C++ ikon"
              className={styles.iconImage}
            />
            <h3>C++ tananyag</h3>
          </a>
        </div>
      </main>
    </Layout>
  );
}
