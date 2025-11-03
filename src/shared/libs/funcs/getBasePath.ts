import { useLocation } from 'react-router-dom';
import { NavKey } from '../../types';
import { navConfigs } from '../../components/Nav/NavConfig';

const isValidNavKey = (key: string): key is NavKey => {
  return key in navConfigs;
}

export const useGetBasePath = (): NavKey => {
  const location = useLocation();
  const path = location.pathname;
  
  if (path === '/') return '/';
  
  if (path.startsWith('/')) {
    const segments = path.split('/');
    if (segments.length > 1 && segments[1]) {
      const potentialBasePath = `/${segments[1]}`;
      if (isValidNavKey(potentialBasePath)) {
        return potentialBasePath;
      }
    }
  }
  
  if (isValidNavKey(path)) return path;
  
  return '/';
};

