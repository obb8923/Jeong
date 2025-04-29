
import { nav } from '../../constants';
import { useLocation } from 'react-router-dom';
// nav 객체의 키 타입을 정의합니다.
type NavKey = keyof typeof nav;

// 타입 가드 함수
const isValidNavKey = (key: string): key is NavKey => {
  return key in nav;
}


// 경로의 기본 부분을 찾는 함수
export const useGetBasePath = (): NavKey => {
    const location = useLocation();
    const path = location.pathname;
    if (path === '/') return '/'; // 루트 경로는 그대로 반환
  
    // '/'로 시작하는 경로만 처리
    if (path.startsWith('/')) {
      const segments = path.split('/'); // 예: ['', 'ToyDo', 'privacy']
      if (segments.length > 1 && segments[1]) {
        const potentialBasePath = `/${segments[1]}`; // 예: '/ToyDo'
        if (isValidNavKey(potentialBasePath)) {
          return potentialBasePath; // 유효한 키면 반환
        }
      }
    }
    // 루트도 아니고 유효한 기본 경로도 찾지 못함
    if(isValidNavKey(path)) return path; // 혹시 전체 경로가 키일 수도 있으니 체크
  
    return '/'; // 매칭되는 기본 경로 없음(기본 경로 반환)
  }
  