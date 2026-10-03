import React from 'react';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';

const ServiceGrid = () => {
  const cards = [
    { title: 'CONSULTATIONS', type: 'video', src: '/remove-bg-hero.mp4', span: 'md:row-span-2' },
    { title: 'DEEP CLEANSING', type: 'video', src: '/bg-video2.mp4', span: 'md:row-span-2' },
    { title: 'SKIN THERAPY', type: 'video', src: '/bg3.mp4', span: 'md:col-span-2' },
    { title: 'PEEL TREATMENTS', type: 'video', src: '/remove-bg-hero.mp4', span: 'md:col-span-2' },
    { title: 'AESTHETIC CARE', type: 'video', src: '/bg-video2.mp4', span: '' },
    { title: 'ACTIVE COSMETICS', type: 'video', src: '/bg3.mp4', span: '' },
    { title: 'EXPLORE MORE ON INSTAGRAM', type: 'text', span: '' },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#fffbf4] via-[#f7ecd9] to-[#efe0c4] relative overflow-hidden">
      
      {/* Luxurious Gilt Ambient Background Glows */}
      <div className="absolute top-1/4 left-5 w-96 h-96 bg-[#dfa568]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-96 h-96 bg-[#d49452]/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header for context */}
      <div className="max-w-[1250px] mx-auto px-6 mb-12 text-center md:text-left relative z-10">
        <div className="inline-flex items-center gap-2 text-[#a87038] font-bold tracking-[0.3em] text-xs uppercase mb-3 bg-white/60 px-4 py-1.5 rounded-full border border-[#dfa568]/30 backdrop-blur-md">
          <Sparkles size={14} className="text-[#dfa568]" /> Signature Offerings
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">
          CURATED EXPERIENCES
        </h2>
      </div>

      <div className="mx-auto px-6 max-w-[1250px] grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[300px] relative z-10">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={`group text-black relative overflow-hidden rounded-[2rem] border border-[#dfa568]/40 shadow-[0_12px_35px_rgba(223,165,104,0.15)] hover:shadow-[0_22px_50px_rgba(223,165,104,0.35)] hover:border-[#d49452] transition-all duration-700 bg-white ${card.span}`}
          >
            
            {/* Background Content */}
            {card.type === 'video' ? (
              <>
                <video 
                  src={card.src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                {/* Sophisticated Dark to Warm Gradient Overlay for Video Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500" />
              </>
            ) : (
              /* Enhanced Instagram Text Card */
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full h-full bg-gradient-to-br from-white via-[#fff9f0] to-[#f7ecd9] flex flex-col items-center justify-center p-6 text-center group-hover:bg-white transition-colors duration-500 relative"
              >
                <div className="w-12 h-12 rounded-full bg-[#dfa568]/20 flex items-center justify-center text-[#a87038] mb-3 group-hover:scale-110 group-hover:bg-[#dfa568] group-hover:text-white transition-all duration-500 shadow-sm">
                  <ExternalLink size={22} />
                </div>
                <span className="font-serif text-base md:text-lg tracking-widest text-gray-900 font-semibold group-hover:text-[#a87038] transition-colors">
                  {card.title}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mt-1 font-medium">@skincare_luxury</span>
              </a>
            )}

            {/* Video Card Title */}
            {card.type === 'video' && (
              <div className="absolute top-6 left-6 right-6 z-10">
                <span className="inline-block text-[10px] tracking-[0.25em] font-extrabold uppercase text-[#fff] mb-1">
                  Treatment
                </span>
                <h3 className="font-display text-black text-lg md:text-xl tracking-wider font-medium group-hover:text-[#f3d3b0] transition-colors">
                  {card.title}
                </h3>
              </div>
            )}

            {/* Interactive Arrow Button for Video Cards */}
            {card.type === 'video' && (
              <div className="absolute bottom-6 right-6 z-10 w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white bg-black/30 backdrop-blur-md group-hover:bg-white group-hover:text-gray-900 group-hover:border-white group-hover:scale-105 transition-all duration-500 shadow-lg">
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;