import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">Jeong</Link>
      </div>
      <ul className={styles.menu}>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/products">제품</Link></li>
        <li><Link to="/contact">연락처</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
