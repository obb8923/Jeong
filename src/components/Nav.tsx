import { Link, useNavigate } from 'react-router-dom';
import styles from './Nav.module.css';
import useModeStore from '../store/HomeModeStore';
import { nav } from '../constants';
import { useGetBasePath } from '../libs/funcs/getBasePath';

const Nav = () => {
  const { setCurrentMode } = useModeStore();
  const basePath = useGetBasePath(); // 현재 경로에서 기본 경로 추출
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo} onClick={() => {if(basePath === '/') setCurrentMode('home'); else navigate(basePath)}}>
        {nav[basePath].logo}
      </div>
      <ul className={styles.menu}>
        {basePath === '/' && (
          <li><button onClick={() => setCurrentMode('products')}>제품</button></li>
        )}
        {basePath === '/ToyDo' && (
          <li><Link to="/ToyDo/terms-and-policy">약관 및 정책</Link></li>
        )}
        {basePath === '/readin' && (
          <>
            <li><Link to="/readin/terms-and-policy">약관 및 정책</Link></li>
            <li><Link to="/readin/user/delete">회원 탈퇴</Link></li>
          </>
        )}
        {basePath === '/pio' && (
          <>
            <li>
              <a href="mailto:companyjeong25@gmail.com?subject=문의하기" target="_blank" rel="noopener noreferrer">
                문의하기
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZNHnBRyogMjZqO1jyGvQJfIHhoW4UhKv_8xS-mKyRzaVXTg/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                건의하기
              </a>
            </li>
            <li><Link to="/pio/terms-and-policy">약관 및 정책</Link></li>
            <li><Link to="/pio/user/delete">회원 탈퇴</Link></li>
          </>
        )}
         {basePath === '/layered' && (
          <>
            <li><Link to="/layered/terms-and-policy">약관 및 정책</Link></li>
          </>
        )}
        {basePath === '/HanaDiary' && (
          <>
            <li>
              <a href="mailto:companyjeong25@gmail.com?subject=문의하기" target="_blank" rel="noopener noreferrer">
                문의하기
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/forms/d/1UwFIDg3nLWFeGyZTOcXMOe4Nvoy5z6NtjOu3rtB8RLc/edit" target="_blank" rel="noopener noreferrer">
                건의하기
              </a>
            </li>
            <li><Link to="/HanaDiary/terms-and-policy">약관 및 정책</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
