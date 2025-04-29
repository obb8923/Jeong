import styles from './index.module.css';
import useHomeModeStore from '../../store/HomeModeStore';
import { products } from '../../constants';
const Home = () => {
  const { currentMode} = useHomeModeStore();
  const handleClick = ( link: string) => {
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

export default Home; 