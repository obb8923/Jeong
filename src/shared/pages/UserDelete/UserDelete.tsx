import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import styles from './UserDelete.module.css';

const supabaseUrl = 'https://bcurkqacgacpwybrtcsg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjdXJrcWFjZ2FjcHd5YnJ0Y3NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0ODgxMjksImV4cCI6MjA1OTA2NDEyOX0.t7h5NNhajDPcIL7Ry2DG7jxDTDXqQ-r0mUB3eL3mXqE';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const UserDelete = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');

    try {
      const { data, error } = await supabase.functions.invoke('delete-user', {
        body: { email, password },
      });

      if (error) {
        console.error('Edge Function invocation error:', error);
        setMessage(`회원 탈퇴 중 오류가 발생했습니다: ${error.message}. 자세한 내용은 콘솔을 확인하세요.`);
        return;
      }

      if (data && data.error) {
        setMessage(`회원 탈퇴 실패: ${data.error}`);
      } else if (data && data.message) {
        setMessage(data.message);
        setEmail('');
        setPassword('');
      } else {
        setMessage('회원 탈퇴 요청이 성공적으로 처리되었습니다.');
        setEmail('');
        setPassword('');
      }
    } catch (e) {
      console.error('Unexpected error during handleSubmit:', e);
      const errorMessage = e instanceof Error ? e.message : '알 수 없는 오류';
      setMessage(`예상치 못한 오류가 발생했습니다: ${errorMessage}. 자세한 내용은 콘솔을 확인하세요.`);
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

export default UserDelete;

