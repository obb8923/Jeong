import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
    if (messageType === 'success') return 'text-xl text-[#555] p-4 rounded-md w-auto box-border bg-[#e6ffed] border border-[#b7ebc9] text-[#257942]';
    if (messageType === 'error') return 'text-xl text-[#555] p-4 rounded-md w-auto box-border bg-[#ffeeee] border border-[#fcc2c3] text-[#a82a2a]';
    return 'text-xl text-[#555] p-4 rounded-md w-auto box-border bg-[#eef6fc] border border-[#c2dcf2] text-[#2a67a8]';
  };

  return (
    <div className="m-0 pt-16 px-8 bg-gradient-to-b from-black/50 to-black/50 bg-[url('/jpg/forest.jpg')] bg-[length:110%] bg-center bg-no-repeat text-white w-full h-full animate-pan overflow-y-auto">
      <h1 className="text-3xl mb-5 text-white">인증 확인</h1>
      {message && <p className={getMessageClassName()}>{message}</p>}
    </div>
  );
};

export default AuthVerify;

