import React from 'react';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pb-32">
      <MainPage />
      <Footer />
    </div>
  );
};

export default App;