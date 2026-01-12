import React from 'react';
import { STEPS } from '../constants';

const StepGuide: React.FC = () => {
  return (
    <section className="py-10 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text">
          <span className="text-brand-accent">かんたん！</span><br/>
          7つの運用ステップ
        </h2>
        <div className="h-1 w-20 bg-brand-accent mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="space-y-8 relative">
        {/* Connecting Line (visual only) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-brand-pink/30 transform -translate-x-1/2 z-0 hidden md:block border-l-2 border-dashed border-brand-pink"></div>

        {STEPS.map((step, index) => (
          <div key={step.stepNumber} className="relative z-10">
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-md border-b-4 border-r-4 border-brand-light transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Step Number Badge */}
                <div className="md:w-1/4 flex flex-col items-center justify-center shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-pink to-brand-accent flex items-center justify-center shadow-lg border-4 border-white ring-2 ring-brand-bg text-white font-black text-2xl mb-2">
                    STEP<br/>{step.stepNumber}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/4 text-center md:text-left">
                  <h3 className="text-xl font-bold text-brand-accent mb-3 border-b-2 border-dashed border-brand-bg pb-2 inline-block md:block">
                    {step.title}
                  </h3>
                  <p className="text-brand-text font-medium mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Image Placeholder */}
                  <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden relative border-2 border-gray-100 group">
                    <img 
                        src={`https://picsum.photos/500/300?random=${index + 200}`} 
                        alt={step.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                     <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 text-xs rounded text-gray-500 font-mono">
                         Img: {step.imageAlt}
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepGuide;