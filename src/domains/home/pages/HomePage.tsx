import styles from './HomePage.module.css';
import useHomeModeStore from '../../../shared/store/HomeModeStore';
import { products } from '../../../shared/constants';

const HomePage = () => {
  const { currentMode } = useHomeModeStore();
  
  const handleClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className={styles.container}>
      {currentMode === 'products' && (
        <div className={styles.gridContainer}>
          {products.map(product => (
            <div key={product.id} className={styles.card} onClick={() => handleClick(product.link)}>
              <img src={product.icon_url} alt={product.name} className={styles.productImage} />
              <h2 className={styles.productName}>{product.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;

