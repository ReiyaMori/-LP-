import React from 'react';

interface SectionTitleProps {
  number?: string | number;
  title: string;
  isMain?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ number, title, isMain = false }) => {
  return (
    <div className={`relative mb-8 text-center ${isMain ? 'mt-12' : 'mt-16'}`}>
      {number && (
        <span className="inline-block bg-brand-accent text-white font-black rounded-full px-3 py-1 text-sm absolute -top-4 left-1/2 transform -translate-x-1/2 border-2 border-white shadow-sm z-10">
          POINT {number}
        </span>
      )}
      <h2 className={`relative inline-block px-8 py-3 bg-white border-4 border-brand-pink rounded-full text-brand-text font-extrabold shadow-[4px_4px_0px_0px_rgba(251,111,146,0.3)] ${isMain ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
        <span className="relative z-10">{title}</span>
        {/* Decor dots */}
        <span className="absolute top-1/2 left-2 w-2 h-2 bg-brand-light rounded-full transform -translate-y-1/2"></span>
        <span className="absolute top-1/2 right-2 w-2 h-2 bg-brand-light rounded-full transform -translate-y-1/2"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;