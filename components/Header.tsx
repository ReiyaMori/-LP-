import React from 'react';
import { APP_NAME } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b-4 border-brand-pink shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-extrabold text-2xl text-brand-accent tracking-tighter">
          {APP_NAME}
        </div>
        <button className="bg-brand-accent text-white text-sm font-bold py-2 px-4 rounded-full shadow-md hover:bg-brand-pink transition-colors">
          ログイン
        </button>
      </div>
    </header>
  );
};

export default Header;