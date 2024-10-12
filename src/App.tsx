import React, { useState, useEffect } from 'react';
import MainPage from './components/MainPage';
import MenuSection from './components/MenuSection';
import MiniGame from './components/MiniGame';
import Footer from './components/Footer';

function App() {
  const [showTypingEffect, setShowTypingEffect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypingEffect(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <MainPage showTypingEffect={showTypingEffect} />
      <MenuSection />
      <MiniGame />
      <Footer />
    </div>
  );
}

export default App;