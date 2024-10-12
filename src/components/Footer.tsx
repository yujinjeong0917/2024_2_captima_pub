import React, { useState } from 'react';
import { Copy, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const accountNumber = '333333333';

  const copyAccountNumber = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-gray-800 py-4 px-4 fixed bottom-0 left-0 right-0">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto">
        <div className="mb-4 sm:mb-0">
          <button
            onClick={copyAccountNumber}
            className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center hover:bg-gray-600 transition-colors"
          >
            {copied ? '복사됨!' : `계좌번호: ${accountNumber}`}
            <Copy className="ml-2" size={18} />
          </button>
        </div>
        <div>
          <a
            href="https://open.kakao.com/o/sBFth7Tg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md flex items-center hover:bg-yellow-600 transition-colors"
          >
            카카오톡으로 바로 이동하기
            <ExternalLink className="ml-2" size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;