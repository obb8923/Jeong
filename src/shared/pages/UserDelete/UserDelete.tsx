import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

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
    <div className="m-0 pt-16 bg-gradient-to-b from-black/50 to-black/50 bg-[url('/jpg/forest.jpg')] bg-[length:110%] bg-center bg-no-repeat text-white w-full h-full animate-pan overflow-y-auto">
      <form className="flex flex-col items-center p-8" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일"
          className="mb-4 p-2 rounded-md border border-[#ccc] w-[300px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="mb-4 p-2 rounded-md border border-[#ccc] w-[300px]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button 
          type="submit" 
          className="py-3 px-6 rounded-md border-none bg-[#007bff] text-white cursor-pointer w-[318px] hover:bg-[#0056b3]"
        >
          탈퇴
        </button>
        {message && <p className="mt-4 text-white">{message}</p>}
      </form>
    </div>
  );
};

export default UserDelete;

