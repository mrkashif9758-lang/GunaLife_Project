import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { products } from '../data/products';

// Use first 5 products for the marquee
const marqueeProducts = products.slice(0, 5);

const ProductMarquee = () => {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        x: '-50%',
        duration: 32, // Smooth continuous speed
        ease: 'none',
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      // Reversed gradient: Top is deeper gilt tone (#efe0c4), bottom fades to light cream (#fffbf4)
      style={{ background: 'linear-gradient(to bottom, #efe0c4, #f2e3cb, #fffbf4)' }}
      className="py-16 md:py-24 overflow-hidden relative"
    >
      {/* Luxurious Gilt Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#dfa568]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#d49452]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-[1250px] mx-auto text-center mb-10 md:mb-14 px-6 relative z-10">
        <div className="inline-flex items-center gap-2 text-[#7d5225] font-bold tracking-[0.3em] text-[10px] uppercase mb-3 bg-white/60 px-4 py-1.5 rounded-full border border-[#dfa568]/50 backdrop-blur-md shadow-sm">
          <Sparkles size={12} className="text-[#a87038]" /> Featured Collection
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">
          The Aura Cabinet
        </h2>
      </div>

      {/* Marquee Strip */}
      <div className="overflow-hidden w-full relative z-10 py-2">
        <div ref={marqueeRef} className="flex gap-5 whitespace-nowrap w-max px-3">
          {[...marqueeProducts, ...marqueeProducts].map((item, index) => (
            <Link
              key={index}
              to={`/product/${item.id}`}
              // Compact card height and sleek proportions
              className="group w-60 sm:w-68 h-[280px] sm:h-[300px] p-4 flex flex-col justify-between shrink-0 rounded-[1.25rem] bg-white/95 backdrop-blur-md border border-[#dfa568]/40 shadow-[0_10px_30px_rgba(223,165,104,0.15)] hover:border-[#a87038] hover:shadow-[0_18px_40px_rgba(223,165,104,0.3)] transition-all duration-500"
            >
              {/* Compact Image Frame */}
              <div className="w-full h-32 sm:h-36 overflow-hidden rounded-lg bg-gray-50 border border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-0.5 mt-2">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#a87038] font-semibold">
                  {item.category || 'Skincare'}
                </span>
                <h3 className="text-sm sm:text-base font-serif text-gray-900 tracking-wide truncate">
                  {item.title}
                </h3>
              </div>

              {/* Price & Action */}
              <div className="flex justify-between items-center pt-2.5 border-t border-gray-100 mt-auto">
                <span className="font-bold text-gray-900 text-xs sm:text-sm">${item.price}</span>
                <div className="w-7 h-7 rounded-full bg-[#dfa568]/15 flex items-center justify-center text-[#a87038] group-hover:bg-[#a87038] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Subtext */}
      <p className="text-center mt-10 md:mt-12 text-xs sm:text-sm text-gray-700 tracking-[0.2em] uppercase px-6 relative z-10 font-medium">
        Clean care, curated for your daily wellness.
      </p>
    </section>
  );
};

export default ProductMarquee;