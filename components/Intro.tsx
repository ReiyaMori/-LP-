import React from 'react';
import { INTRO_CONTENT, FEATURES } from '../constants';
import SectionTitle from './SectionTitle';

const Intro: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-2 border-brand-bg relative overflow-visible">
        {/* Cute Mascot Decoration Placeholder */}
        <div className="absolute -top-10 -right-4 w-24 h-24 bg-yellow-300 rounded-full border-4 border-white shadow-md flex items-center justify-center transform rotate-12 z-20">
           <span className="text-2xl">✨</span>
        </div>

        <SectionTitle title={INTRO_CONTENT.title} isMain />
        
        <p className="text-brand-text leading-relaxed font-medium mb-8 text-center whitespace-pre-wrap">
          {INTRO_CONTENT.description}
        </p>

        <div className="mt-12">
            <SectionTitle title="なにができるの？" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {FEATURES.map((feature, idx) => (
                <div key={idx} className="bg-brand-bg/30 rounded-2xl p-6 text-center border-2 border-brand-light hover:border-brand-accent transition-colors">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-brand-accent">
                        <feature.icon size={32} strokeWidth={2.5} />
                    </div>
                    <h3 className="font-bold text-lg text-brand-text mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;