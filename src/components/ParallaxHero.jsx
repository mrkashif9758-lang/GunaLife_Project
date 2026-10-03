import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxHero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Dynamic translation value based on screen size to prevent over-scrolling
      const getTranslateX = () => {
        if (window.innerWidth < 768) return -800;
        if (window.innerWidth < 1024) return -1500;
        return -2500;
      };

      gsap.to(textRef.current, {
        x: getTranslateX,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      style={{ background: 'linear-gradient(to bottom, #fffbf4, #f7ecd9, #efe0c4)' }}
      className="w-full overflow-hidden relative"
    >
      {/* Luxurious Gilt Ambient Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#dfa568]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#d49452]/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Wrapper to constrain layout width */}
      <div ref={containerRef} className="h-screen w-full max-w-[1250px] mx-auto relative flex flex-col justify-between py-10 px-6 z-10">
        
        {/* Navigation Tags - Responsive layout */}
        <div className="flex flex-wrap justify-between items-center z-25 w-full">
          <div className="flex gap-4">
            <span className="px-4 py-1 border border-[#dfa568]/40 text-black rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-white/60 backdrop-blur-md shadow-sm">
              Products
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-0">
            {['AESTHETICS', 'COMFORT', 'CARE'].map((label) => (
              <span key={label} className="px-3 sm:px-4 py-1 border border-[#dfa568]/40 text-black rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-white/60 backdrop-blur-md shadow-sm">
                {label}
              </span>
            ))}
          </div>
        </div>
        
        {/* Parallax Moving Text - Responsive font sizing */}
        <div className="absolute inset-0 flex items-center whitespace-nowrap z-0 pointer-events-none">
          <h1 ref={textRef} className="text-[10rem] sm:text-[18rem] lg:text-[25rem] font-display text-black uppercase tracking-tighter opacity-80">
            THE ACT THE ACT THE ACT
          </h1>
        </div>

        {/* Central Sticky Image - Responsive sizing */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-6">
          <img src="/cream-splash.webp" alt="Product" className="w-[240px] sm:w-[320px] lg:w-[400px] h-auto object-contain animate-float" />
        </div>

        {/* Floating Product Card - Responsive positioning */}
        <div className="relative sm:absolute sm:bottom-12 sm:left-12 z-20 bg-white/90 sm:bg-white backdrop-blur-md p-6 sm:p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(223,165,104,0.18)] w-full sm:w-72 border border-[#dfa568]/40 mx-auto sm:mx-0 mt-auto">
          <p className="text-[10px] sm:text-xs uppercase mb-1 sm:mb-2 text-gray-500 font-semibold tracking-wider">( FOR BODY )</p>
          <h3 className="font-display text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-900 leading-snug">Body scrub <br/> coconut</h3>
          <div className="flex items-center justify-between">
            <span className="font-bold text-base sm:text-lg text-gray-900">8$</span>
            <button className="bg-gray-900 text-white px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold hover:bg-[#a87038] transition-colors shadow-md">
              BUY NOW
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ParallaxHero;