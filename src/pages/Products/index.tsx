import React from 'react';
import styles from './Products.module.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: '앱 1',
      description: '첫 번째 앱 설명입니다.',
      icon: '🎮',
      category: '게임',
      platform: 'iOS / Android'
    },
    {
      id: 2,
      name: '앱 2',
      description: '두 번째 앱 설명입니다.',
      icon: '📱',
      category: '유틸리티',
      platform: 'Android'
    },
    {
      id: 3,
      name: '앱 3',
      description: '세 번째 앱 설명입니다.',
      icon: '📚',
      category: '교육',
      platform: 'iOS'
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Jeong 앱스토어</h1>
      <div className={styles.grid}>
        {products.map(product => (
          <div key={product.id} className={styles.card}>
            <div className={styles.icon}>{product.icon}</div>
            <div className={styles.content}>
              <h2 className={styles.productName}>{product.name}</h2>
              <div className={styles.tags}>
                <span className={styles.category}>{product.category}</span>
                <span className={styles.platform}>{product.platform}</span>
              </div>
              <p className={styles.description}>{product.description}</p>
              <button className={styles.button}>자세히 보기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;