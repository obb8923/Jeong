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

    if (hashParams.has('error')) {
      error = hashParams.get('error');
      errorCode = hashParams.get('error_code');
      errorDescription = hashParams.get('error_description');
    } else if (queryParams.has('error')) {
      error = queryParams.get('error');
      errorDescription = queryParams.get('error_description');
    }

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
      navigate('/auth/verify', { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default Auth;

