import React from 'react';
import { PAYMENT_INFO, TESTIMONIALS, FAQS, LINKS } from '../constants';
import SectionTitle from './SectionTitle';
import { CreditCard, ChevronDown, MessageCircle, ExternalLink } from 'lucide-react';

const AdditionalInfo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-32">
      
      {/* Payment Methods */}
      <section className="mb-16 bg-white rounded-3xl p-8 border-2 border-brand-bg shadow-sm">
        <SectionTitle title={PAYMENT_INFO.title} number="i" />
        <div className="text-center">
           <p className="font-bold text-brand-text mb-6">{PAYMENT_INFO.description}</p>
           <div className="flex flex-wrap justify-center gap-3">
             {PAYMENT_INFO.cards.map((card, i) => (
               <div key={i} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-gray-600 font-bold text-sm">
                 <CreditCard size={16} /> {card}
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <SectionTitle title="クリエイターの声" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-light relative">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-brand-pink shrink-0">
                  <img src={`https://picsum.photos/100/100?random=${t.avatarId}`} alt="avatar" className="w-full h-full object-cover" />
                </div>
                <p className="font-bold text-brand-accent text-sm">{t.name}</p>
              </div>
              <div className="bg-brand-bg/30 p-4 rounded-xl relative">
                  {/* Triangle for speech bubble */}
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-[#FFF0F5] transform rotate-45"></div>
                  <p className="text-sm text-brand-text leading-relaxed">"{t.comment}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16 bg-white rounded-3xl p-6 md:p-10 border-4 border-brand-light shadow-[8px_8px_0px_0px_rgba(255,194,209,0.5)]">
        <SectionTitle title="よくある質問" />
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <details key={index} className="group bg-brand-bg/20 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-4 font-bold text-brand-text hover:bg-brand-bg/50 transition-colors list-none">
                <div className="flex items-center gap-3">
                    <span className="text-brand-accent text-xl">Q.</span>
                    <span>{faq.question}</span>
                </div>
                <ChevronDown className="text-brand-accent transition-transform group-open:rotate-180" />
              </summary>
              <div className="p-4 pt-0 text-sm text-gray-700 bg-brand-bg/50 border-t border-brand-light/30 leading-relaxed">
                <div className="flex gap-3">
                    <span className="text-brand-accent font-bold text-xl">A.</span>
                    <span>{faq.answer}</span>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer Links */}
      <section className="text-center mb-12 space-y-4">
        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-brand-accent underline decoration-dashed underline-offset-4">
            {LINKS.map((link, i) => (
                <a key={i} href={link.url} className="hover:text-brand-pink flex items-center gap-1">
                    {link.title} <ExternalLink size={12} />
                </a>
            ))}
        </div>
        <p className="text-xs text-gray-400 mt-8">© 2024 {PAYMENT_INFO.title === "〇〇〇〇" ? "Company Name" : "〇〇〇〇"}</p>
      </section>

    </div>
  );
};

export default AdditionalInfo;