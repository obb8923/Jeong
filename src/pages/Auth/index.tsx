import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const hashString = location.hash.startsWith('#') ? location.hash.substring(1) : location.hash;
        const hashParams = new URLSearchParams(hashString);

        let error: string | null = null;
        let errorCode: string | null = null;
        let errorDescription: string | null = null;
        let accessToken: string | null = null;

        // 해시 파라미터 우선 (error 관련)
        if (hashParams.has('error')) {
            error = hashParams.get('error');
            errorCode = hashParams.get('error_code');
            errorDescription = hashParams.get('error_description');
        } 
        // 해시에 error가 없고, 쿼리 파라미터에 error가 있는 경우
        else if (queryParams.has('error')) {
            error = queryParams.get('error');
            errorDescription = queryParams.get('error_description');
        }

        // accessToken 처리: 해시 우선, 그 다음 쿼리 파라미터
        if (hashParams.has('access_token')) {
            accessToken = hashParams.get('access_token');
        } else if (queryParams.has('access_token')) {
            accessToken = queryParams.get('access_token');
        }

        if (error) {
            navigate('/auth/verify', { state: { error, errorCode, errorDescription }, replace: true });
        } else if (accessToken) {
            navigate('/auth/verify', { state: { accessToken }, replace: true });
        } else {
            // 에러도 없고 토큰도 없는 경우 (직접 /auth로 접근 등)
            navigate('/auth/verify', { replace: true });
        }
    }, [location, navigate]);

    return null; 
};

export default Auth;
