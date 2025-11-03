import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './AuthVerify.module.css';

interface LocationState {
  error?: string;
  errorDescription?: string;
  errorCode?: string;
  accessToken?: string;
}

type MessageType = 'success' | 'error' | 'info';

const AuthVerify = () => {
  const location = useLocation();
  const [message, setMessage] = useState<string>('');
  const [messageType, setMessageType] = useState<MessageType>('info');

  useEffect(() => {
    const state = location.state as LocationState | null;

    if (state?.error) {
      let errorMessage = '회원가입에 실패하였습니다. 에러: ' + state.error;
      if (state.errorCode) {
        errorMessage += ' (코드: ' + state.errorCode + ')';
      }
      if (state.errorDescription) {
        errorMessage += ' (상세: ' + state.errorDescription.replace(/\+/g, ' ') + ')';
      }
      setMessage(errorMessage);
      setMessageType('error');
    } else if (state?.accessToken) {
      setMessage('인증에 성공했습니다. 어플에서 로그인을 해주세요');
      setMessageType('success');
    } else {
      setMessage('알 수 없는 접근입니다.');
      setMessageType('info');
    }
  }, [location.state]);

  const getMessageClassName = () => {
    if (messageType === 'success') return `${styles.message} ${styles.success}`;
    if (messageType === 'error') return `${styles.message} ${styles.error}`;
    return `${styles.message} ${styles.info}`;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>인증 확인</h1>
      {message && <p className={getMessageClassName()}>{message}</p>}
    </div>
  );
};

export default AuthVerify;

