import React, { useState } from 'react';
import { Copy, MessageCircle, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  // 환경변수 사용
  const accountNumber = import.meta.env.VITE_ACCOUNT_NUMBER || '';
  const kakaoUrl = import.meta.env.VITE_KAKAO_URL || '';

  const handleCopyAccount = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-3 md:px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center gap-1 md:gap-2">
              <span className="text-gray-400 text-xs md:text-base">계좌번호:</span>
              <span className="font-medium text-sm md:text-base">{accountNumber}</span>
              <button 
                onClick={handleCopyAccount}
                className="p-1.5 md:p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <Copy size={16} className="md:w-5 md:h-5" />
              </button>
              {copySuccess && (
                <span className="text-green-400 text-xs md:text-sm">복사완료!</span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <a
              href={kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white text-black rounded-full text-xs md:text-sm font-medium"
            >
              <MessageCircle size={14} className="md:w-4 md:h-4" />
              주문하기
              <ExternalLink size={12} className="md:w-3.5 md:h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
