import { Link, useNavigate } from 'react-router-dom';
import useModeStore from '../../store/HomeModeStore';
import { useGetBasePath } from '../../libs/funcs/getBasePath';
import { navConfigs } from './NavConfig';

const Nav = () => {
  const { setCurrentMode } = useModeStore();
  const basePath = useGetBasePath();
  const navigate = useNavigate();
  const config = navConfigs[basePath];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-white/20 backdrop-blur-md border border-white/30 shadow-md px-8 py-4 flex justify-between items-center rounded-b-[10px]">
      <div 
        className="text-2xl font-bold text-[#fafafa] cursor-pointer"
        onClick={() => {
          if (basePath === '/') setCurrentMode('home');
          else navigate(basePath);
        }}
      >
        {config.logo}
      </div>
      {config.menu && config.menu.length > 0 && (
        <ul className="flex list-none m-0 p-0 gap-8">
          {config.menu.map((item, index) => (
            <li key={index}>
              {item.type === 'link' && item.to && (
                <Link className="text-[#fafafa] no-underline text-lg transition-colors duration-300" to={item.to}>
                  {item.text}
                </Link>
              )}
              {item.type === 'external_link' && item.href && (
                <a 
                  className="text-[#fafafa] no-underline text-lg transition-colors duration-300" 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {item.text}
                </a>
              )}
              {item.type === 'button' && (
                <button 
                  className="bg-transparent border-none cursor-pointer text-[#fafafa] text-lg"
                  onClick={() => setCurrentMode('products')}
                >
                  {item.text}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;

