import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import StepGuide from './components/StepGuide';
import AdditionalInfo from './components/AdditionalInfo';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-bg to-white selection:bg-brand-light selection:text-brand-text">
      <Header />
      
      <main className="w-full">
        <Hero />
        
        {/* Curved separator */}
        <div className="w-full h-12 bg-white rounded-t-[50%] -mt-6 relative z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]"></div>
        
        <Intro />
        
        <div className="bg-gradient-to-b from-white to-brand-bg/30">
             <StepGuide />
        </div>
        
        <AdditionalInfo />
      </main>

      <StickyCTA />
    </div>
  );
}

export default App;