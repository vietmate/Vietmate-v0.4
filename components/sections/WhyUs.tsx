import React from 'react';
import { FEATURES } from '../../constants';

export const WhyUs: React.FC = () => {
  return (
    <section className="stage min-h-screen bg-background-warm texture-overlay scroll-snap-align-start flex flex-col justify-center relative overflow-hidden py-20" id="why">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[60rem] font-black text-brand-red opacity-[0.03] pointer-events-none hidden lg:block select-none leading-none">
        V
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <h2 className="font-display text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight text-charcoal">
          LOCALLY DESIGNED. <span className="text-brand-red">PERSONALLY DELIVERED</span>
        </h2>
        <p className="text-muted-gray max-w-2xl mx-auto mb-12 text-lg lg:text-xl font-bold leading-relaxed">
          Every journey is created personally and operated locally, with a focus on quality, clarity, and real connections.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="p-8 lg:p-12 bg-white border-t-4 border-brand-red rounded-3xl transition-all duration-300 group text-left shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1">
              <h3 className="text-xl lg:text-2xl font-black mb-6 font-display uppercase tracking-tight text-charcoal">
                {feature.title}
              </h3>
              <p className="text-muted-gray leading-relaxed text-sm lg:text-base font-semibold">
                {feature.description.split(' ').map((word, i) => {
                    // Simple highlighting logic based on pre-defined highlights
                    const isHighlight = feature.highlight.some(h => feature.description.includes(h) && (h.includes(word) || word.includes(h.split(' ')[0])));
                    // Note: A real app might use a more robust rich-text parser, but this simulates the visual
                    return <span key={i} className={isHighlight ? "" : ""}>{word} </span>
                })}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <button 
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/50 text-charcoal px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all backdrop-blur-sm"
          >
            Back
          </button>
          <button 
             onClick={() => document.getElementById('regions')?.scrollIntoView({ behavior: 'smooth' })}
             className="bg-charcoal text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-brand-red transition-all inline-flex items-center gap-4 group shadow-xl"
          >
            Explore Regions ➔
          </button>
        </div>
      </div>
    </section>
  );
};