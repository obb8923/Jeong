import { Link, useNavigate } from 'react-router-dom';
import styles from './Nav.module.css';
import useModeStore from '../../store/HomeModeStore';
import { useGetBasePath } from '../../libs/funcs/getBasePath';
import { navConfigs } from './NavConfig';

const Nav = () => {
  const { setCurrentMode } = useModeStore();
  const basePath = useGetBasePath();
  const navigate = useNavigate();
  const config = navConfigs[basePath];

  return (
    <nav className={styles.nav}>
      <div className={styles.logo} onClick={() => {
        if (basePath === '/') setCurrentMode('home');
        else navigate(basePath);
      }}>
        {config.logo}
      </div>
      {config.menu && config.menu.length > 0 && (
        <ul className={styles.menu}>
          {config.menu.map((item, index) => (
            <li key={index}>
              {item.type === 'link' && item.to && (
                <Link to={item.to}>{item.text}</Link>
              )}
              {item.type === 'external_link' && item.href && (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.text}
                </a>
              )}
              {item.type === 'button' && (
                <button onClick={() => setCurrentMode('products')}>{item.text}</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;

