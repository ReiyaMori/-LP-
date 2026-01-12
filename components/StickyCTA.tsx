import React from 'react';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 pb-6 md:pb-4 bg-gradient-to-t from-white via-white/90 to-transparent z-40 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <button className="group w-full relative bg-brand-accent hover:bg-brand-pink text-white font-black text-xl py-4 rounded-full shadow-[0px_4px_10px_rgba(251,111,146,0.5)] transform hover:-translate-y-1 transition-all duration-300 border-2 border-white">
          <span className="flex items-center justify-center gap-2">
            登録はこちら！
            <span className="bg-white text-brand-accent rounded-full w-8 h-8 flex items-center justify-center text-sm group-hover:rotate-12 transition-transform">
                →
            </span>
          </span>
          <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-brand-text text-xs font-bold px-3 py-1 rounded-full border border-brand-text animate-bounce">
            最短1分で完了！
          </span>
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;