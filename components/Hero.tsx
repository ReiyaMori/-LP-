import React from 'react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-brand-bg pt-10 pb-16 px-4">
      {/* Background decoration circles */}
      <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-brand-light rounded-full opacity-50 blur-xl"></div>
      <div className="absolute bottom-[20px] left-[-20px] w-32 h-32 bg-yellow-200 rounded-full opacity-60 blur-xl"></div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="inline-block bg-white text-brand-accent font-bold px-4 py-1 rounded-full text-sm mb-4 border-2 border-brand-pink border-dashed">
          クリエイター必見！
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-brand-text mb-6 leading-tight drop-shadow-sm">
          {HERO_CONTENT.title}
        </h1>
        <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-[0px_8px_0px_0px_rgba(255,143,171,0.5)] border-2 border-brand-pink mx-4">
          <p className="text-lg md:text-xl font-bold text-brand-accent whitespace-pre-wrap">
            {HERO_CONTENT.subtitle}
          </p>
        </div>
        
        {/* Placeholder for Hero Image */}
        <div className="mt-8 relative mx-auto w-full max-w-sm">
             <div className="aspect-[4/3] bg-white rounded-3xl border-4 border-brand-accent overflow-hidden shadow-xl">
                 <img 
                    src="https://picsum.photos/800/600?random=100" 
                    alt="Hero Illustration" 
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <span className="bg-black/50 text-white px-2 py-1 rounded text-xs font-mono">Image Area (800x600)</span>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;