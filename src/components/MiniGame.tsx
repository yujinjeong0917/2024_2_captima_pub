import React, { useState, useEffect } from 'react';

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
          const indices = [];
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
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">몰아주기 게임</h2>
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="totalAmount" className="block mb-2">전체 금액:</label>
          <input
            type="number"
            id="totalAmount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(Number(e.target.value))}
            className="w-full p-2 bg-gray-800 rounded"
            min="0"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="playerCount" className="block mb-2">인원 수:</label>
          <input
            type="number"
            id="playerCount"
            value={playerCount}
            onChange={(e) => setPlayerCount(Number(e.target.value))}
            className="w-full p-2 bg-gray-800 rounded"
            min="0"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="intensity" className="block mb-2">세기 선택:</label>
          <input
            type="range"
            id="intensity"
            min="1"
            max="4"
            value={intensity}
            onChange={(e) => setIntensity(Number(e.target.value))}
            className="slider w-full"
          />
          <p className="mt-2 text-sm text-gray-400">{intensityDescriptions[intensity - 1]}</p>
        </div>
        <button
          onClick={calculateResults}
          className="w-full bg-yellow-500 text-gray-900 py-2 rounded-md hover:bg-yellow-600 transition-colors"
        >
          Run!
        </button>
        {results.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">결과:</h3>
            <ul>
              {results.map((result, index) => (
                <li key={index} className="mb-2">
                  인원 {index + 1}: {result > 0 ? `낼 금액: ${result.toFixed(0)}원` : '면제'}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default MiniGame;