import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>홈페이지</h1>
      <p className={styles.description}>환영합니다!</p>
    </div>
  );
};

export default Home; 