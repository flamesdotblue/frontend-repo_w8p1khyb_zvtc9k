import React from 'react';
import OfferTicker from './components/OfferTicker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-white text-gray-900">
      <OfferTicker />
      <Navbar />
      <main>
        <Hero />
        <Highlights />
      </main>
    </div>
  );
}

export default App;
