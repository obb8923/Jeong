import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>연락처</h1>
      <p className={styles.description}>문의사항이 있으시다면 연락해주세요.</p>
    </div>
  );
};

export default Contact; 