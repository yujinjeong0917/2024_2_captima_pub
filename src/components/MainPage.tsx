import React from 'react';
import { ExternalLink } from 'lucide-react';

interface MainPageProps {
  showTypingEffect: boolean;
}

const MainPage: React.FC<MainPageProps> = ({ showTypingEffect }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className={`typing-effect mb-8 ${showTypingEffect ? 'w-full' : 'w-0'}`}>
        CAPTIMA
      </h1>
      <p className="text-gray-400 mb-8 max-w-md">
        주문은 여기 KakaoTalk 오픈 채팅에 접속하여, 프로필에 인상착의를 제시해주고 메뉴 주문 및 송금 후 캡처를 보내주세요.
      </p>
      <a
        href="https://open.kakao.com/o/sBFth7Tg"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md flex items-center hover:bg-yellow-600 transition-colors"
      >
        카카오톡으로 바로 이동하기
        <ExternalLink className="ml-2" size={18} />
      </a>
    </section>
  );
};

export default MainPage;