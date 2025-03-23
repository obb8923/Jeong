// import React from 'react'; 제거
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>소개</h1>
      <p className={styles.description}>이 웹사이트에 대해 알아보세요.</p>
    </div>
  );
};

export default About; 