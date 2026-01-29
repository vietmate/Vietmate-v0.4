import React from 'react';
import { REGIONS } from '../../constants';

export const Regions: React.FC = () => {
  return (
    <section className="stage min-h-screen bg-white texture-overlay scroll-snap-align-start flex flex-col justify-center py-20" id="regions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="mb-12 text-center md:text-left">
          <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Stage 3: Exploration</span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-2 mb-6 uppercase tracking-tighter text-charcoal">
            Journey Through <span className="text-brand-red">Vietnam</span>
          </h2>
          <p className="text-muted-gray max-w-xl text-lg leading-relaxed font-bold">
            Every traveler is different, so every journey should be too. Use these regions as inspiration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {REGIONS.map((region) => (
            <div key={region.id} className="group cursor-pointer bg-slate-50 p-4 rounded-[40px] border border-slate-100 shadow-xl transition-all hover:bg-white h-full flex flex-col">
              <div className="overflow-hidden aspect-[16/9] mb-6 relative bg-slate-200 rounded-[30px]">
                <img 
                    src={region.image} 
                    alt={region.title} 
                    className="w-full h-full object-cover vivid-img group-hover:scale-105 transition-transform duration-[1s]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="px-4 flex-1 flex flex-col">
                <h3 className="font-display text-2xl font-black mb-2 uppercase tracking-tight text-charcoal">{region.title}</h3>
                <p className="text-[10px] text-muted-gray font-extrabold uppercase tracking-[0.2em] mb-4">{region.subtitle}</p>
                <p className="text-muted-gray text-sm leading-relaxed mb-6 font-semibold line-clamp-3 flex-1">{region.description}</p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 bg-charcoal text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-red transition-all"
                >
                    EXPLORE TOURS ➔
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:justify-start gap-4">
          <button 
             onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}
             className="bg-slate-100 text-charcoal px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all"
          >
            Back
          </button>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-red text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all"
          >
            The Story ➔
          </button>
        </div>
      </div>
    </section>
  );
};