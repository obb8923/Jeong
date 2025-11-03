import useHomeModeStore from '../../../shared/store/HomeModeStore';
import { products } from '../../../shared/constants';

const HomePage = () => {
  const { currentMode } = useHomeModeStore();
  
  const handleClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="m-0 pt-16 bg-[url('/jpg/forest.jpg')] bg-[length:110%] bg-center bg-no-repeat text-white w-full h-full animate-pan">
      {currentMode === 'products' && (
        <div className="grid grid-cols-3 gap-5 p-5 w-full box-border justify-items-center">
          {products.map(product => (
            <div 
              key={product.id} 
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-md overflow-hidden transition-all duration-300 flex flex-col items-center justify-center p-4 w-full max-w-[200px] aspect-square cursor-pointer hover:-translate-y-2 hover:shadow-lg"
              onClick={() => handleClick(product.link)}
            >
              <img src={product.icon_url} alt={product.name} className="w-1/2 h-1/2 object-cover rounded-2xl" />
              <h2 className="text-2xl text-[#fafafa] mb-2 font-bold">{product.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;

