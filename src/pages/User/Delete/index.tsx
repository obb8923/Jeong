import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import styles from './index.module.css';

// 여기에 Supabase URL과 anon key를 입력하세요.
const supabaseUrl = 'https://bcurkqacgacpwybrtcsg.supabase.co';
const supabaseAnonKey = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjdXJrcWFjZ2FjcHd5YnJ0Y3NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0ODgxMjksImV4cCI6MjA1OTA2NDEyOX0.t7h5NNhajDPcIL7Ry2DG7jxDTDXqQ-r0mUB3eL3mXqE';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Delete = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(''); 

    try {
      // 'delete-user' Edge Function 호출
      const { data, error } = await supabase.functions.invoke('delete-user', {
        body: { email, password }, // Edge Function이 받을 파라미터
      });

      if (error) {
        console.error('Edge Function invocation error:', error); // 전체 에러 객체 로깅
        // Edge Function 내부에서 throw된 에러 또는 네트워크 에러 등
        setMessage(`회원 탈퇴 중 오류가 발생했습니다: ${error.message}. 자세한 내용은 콘솔을 확인하세요.`);
        return;
      }

      // Edge Function이 성공적으로 실행되었고, 반환된 data를 사용할 수 있습니다.
      // data 객체 안에 성공 여부나 메시지가 포함되어 있을 수 있습니다.
      // 예를 들어, function이 { success: true, message: "성공" } 또는 { error: "실패 이유" } 등을 반환한다고 가정
      if (data && data.error) { // Edge Function 내부 로직에서 에러를 반환한 경우
        setMessage(`회원 탈퇴 실패: ${data.error}`);
      } else if (data && data.message) { // 성공 메시지가 있는 경우
        setMessage(data.message);
        setEmail('');
        setPassword('');
      } else {
        // data가 없거나 예상치 못한 형식일 경우 일반 성공 메시지 표시
        setMessage('회원 탈퇴 요청이 성공적으로 처리되었습니다.');
        setEmail('');
        setPassword('');
      }

    } catch (e: any) {
      console.error('Unexpected error during handleSubmit:', e); // 예외 객체 전체 로깅
      // supabase.functions.invoke 자체에서 발생할 수 있는 예외 처리
      setMessage(`예상치 못한 오류가 발생했습니다: ${e.message}. 자세한 내용은 콘솔을 확인하세요.`);
    }
  };
 
  return (
  <div className={styles.container}>
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="이메일"
        className={styles.inputField}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="비밀번호"
        className={styles.inputField}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className={styles.submitButton}>탈퇴</button>
      {message && <p className={styles.message}>{message}</p>}
    </form>
  </div>
  );
};

export default Delete;
