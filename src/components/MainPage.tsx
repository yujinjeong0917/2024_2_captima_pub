import React, { useState, useEffect, useRef } from 'react';
import MenuSection from './MenuSection';
import MiniGame from './MiniGame';
import FadeIn from './FadeIn';

const MainPage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const miniGameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMiniGame = () => {
    miniGameRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold">CAPTIMA</h1>
          <button 
            onClick={scrollToMiniGame}
            className="px-3 py-1.5 md:px-4 md:py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            미니게임
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <FadeIn>
        <div className="pt-20 md:pt-24 pb-12 md:pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              메리 크리스마스
              <br />
              with CAPTIMA
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
              축제를 축제답게,
              <br />
              낭만있는 축제를 위해
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Menu Section with Delay */}
      <FadeIn delay={200}>
        <MenuSection />
      </FadeIn>

      {/* MiniGame Section with Ref and Delay */}
      <div ref={miniGameRef}>
        <FadeIn delay={400}>
          <MiniGame />
        </FadeIn>
      </div>
    </>
  );
};

export default MainPage;