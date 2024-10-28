import React, { useState } from 'react';

const MiniGame: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [intensity, setIntensity] = useState<number>(1);
  const [results, setResults] = useState<number[]>([]);

  const intensityDescriptions = [
    "1단계: 인원수 - 1명을 제외한 나머지 인원에게 몰빵",
    "2단계: 3명을 뽑아 각 33%씩 분담",
    "3단계: 3명을 뽑아 각각 25%, 25%, 50%로 분담",
    "4단계: 한 명을 뽑아 전액 부담"
  ];

  const calculateResults = () => {
    let newResults: number[] = new Array(playerCount).fill(0);

    switch (intensity) {
      case 1:  
        if (playerCount > 1) {
          const amountPerPerson = totalAmount / (playerCount - 1);
          newResults = newResults.map((_, index) => index === 0 ? 0 : amountPerPerson);
        }
        break;

      case 2:
        if (playerCount >= 3) {
          const amountPerPerson = totalAmount / 3;
          for (let i = 0; i < 3; i++) {
            newResults[Math.floor(Math.random() * playerCount)] += amountPerPerson;
          }
        }
        break;

      case 3:
        if (playerCount >= 3) {
          const indices: number[] = [];
          while (indices.length < 3) {
            const index = Math.floor(Math.random() * playerCount);
            if (!indices.includes(index)) indices.push(index);
          }
          newResults[indices[0]] += totalAmount * 0.25;
          newResults[indices[1]] += totalAmount * 0.25;
          newResults[indices[2]] += totalAmount * 0.5;
        }
        break;

      case 4:
        newResults[Math.floor(Math.random() * playerCount)] = totalAmount;
        break;
    }

    setResults(newResults);
  };

  return (
    <section className="py-20 md:py-32 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-center">몰아주기 게임</h2>
        
        <div className="max-w-2xl mx-auto mb-12 md:mb-16 text-center">
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            누가 오늘의 행운의 주인공이 될까요?
          </p>
          
          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-4 md:p-6 text-left">
            <h3 className="text-base md:text-lg font-medium mb-4 text-white">게임 진행 방법</h3>
            <ol className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
              <li className="flex gap-2">
                <span className="text-yellow-400">1.</span>
                <span>참여할 인원들에게 1번부터 순서대로 번호를 지정해주세요.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-400">2.</span>
                <span>전체 결제 금액을 입력해주세요.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-400">3.</span>
                <span>게임에 참여하는 총 인원 수를 입력해주세요.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-400">4.</span>
                <span>원하는 분배 방식의 강도를 선택해주세요.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-400">5.</span>
                <span>Run! 버튼을 눌러 결과를 확인하세요.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-400"> ** </span>
                <span>입금과 주문은 테이블당 한명이 일괄적으로 해주세요 :)</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-black/50 backdrop-blur-lg rounded-2xl p-6 md:p-8">
          <div className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="totalAmount" className="block mb-2 text-base md:text-lg">전체 금액:</label>
              <input
                type="number"
                id="totalAmount"
                value={totalAmount}
                onChange={(e) => setTotalAmount(Number(e.target.value))}
                className="w-full p-2 md:p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-white focus:outline-none transition-colors text-sm md:text-base"
                min="0"
              />
            </div>
            
            <div>
              <label htmlFor="playerCount" className="block mb-2 text-base md:text-lg">인원 수:</label>
              <input
                type="number"
                id="playerCount"
                value={playerCount}
                onChange={(e) => setPlayerCount(Number(e.target.value))}
                className="w-full p-2 md:p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-white focus:outline-none transition-colors text-sm md:text-base"
                min="0"
              />
            </div>
            
            <div>
              <label htmlFor="intensity" className="block mb-2 text-base md:text-lg">세기 선택:</label>
              <input
                type="range"
                id="intensity"
                min="1"
                max="4"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <p className="mt-2 text-sm md:text-base text-gray-400">{intensityDescriptions[intensity - 1]}</p>
            </div>

            <button
              onClick={calculateResults}
              className="w-full bg-white text-black py-2 md:py-3 rounded-lg text-base md:text-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Run!
            </button>

            {results.length > 0 && (
              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gray-800/50 rounded-xl">
                <h3 className="text-lg md:text-xl font-bold mb-4">결과:</h3>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                  {results.map((result, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span>인원 {index + 1}</span>
                      <span className={`font-medium ${result > 0 ? 'text-yellow-400' : 'text-green-400'}`}>
                        {result > 0 ? `${result.toLocaleString()}원` : '면제'}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniGame;
