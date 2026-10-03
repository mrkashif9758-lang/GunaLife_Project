import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const collectionData = [
  {
    id: 1,
    title: "NMN TABLETS",
    image: "/prod1.webp",
  },
  {
    id: 2,
    title: "OMEGA 3 FISH OIL",
    image: "/prod2.webp",
  },
  {
    id: 3,
    title: "COLLAGEN+",
    image: "/prod3.webp",
  },
];

const HorizontalScroll = () => {
  const triggerRef = useRef(null);
  const trackRef   = useRef(null);

  useLayoutEffect(() => {
    if (!triggerRef.current || !trackRef.current) return;

    const mediaQuery = window.matchMedia('(min-width: 768px)');

    let ctx = gsap.context(() => {
      if (mediaQuery.matches) {
        gsap.to(trackRef.current, {
          x: () => -(trackRef.current.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger:            triggerRef.current,
            start:              'top top',
            end:                () => `+=${trackRef.current.scrollWidth - window.innerWidth}`,
            scrub:              1.2,
            pin:                true,
            pinSpacing:         true,
            anticipatePin:      1,
            invalidateOnRefresh: true,
          },
        });
      }

      ScrollTrigger.refresh();
    }, triggerRef);

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        window.location.reload(); 
      }, 200);
    };
    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={triggerRef}
      style={{ background: 'linear-gradient(to bottom, #fffbf4, #f7ecd9, #efe0c4)' }}
      className="mb-[-1px] w-full overflow-hidden py-16 md:py-0 relative flex items-center"
    >
      {/* trackRef strip — Gap kam kiya (gap-4 md:gap-6) aur width badhayi */}
      <div
        ref={trackRef}
        className="flex flex-col md:flex-row md:h-screen items-center justify-start gap-4 md:gap-6 px-6 md:px-16 w-full md:w-max mx-auto"
      >

        {/* ── Intro Card (Width increased: md:w-[82vw] lg:w-[75vw]) ───────── */}
        <div className="luxury-card w-full md:w-[82vw] lg:w-[75vw] h-auto md:h-[68vh] flex flex-col md:flex-row shrink-0 overflow-hidden rounded-2xl bg-white shadow-xl border border-[#dfa568]/30">

          {/* Left: text */}
          <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-16 flex items-center">
            <div className="max-w-md">
              <span className="eyebrow mb-3 md:mb-4 block text-[#a87038] tracking-[0.25em] font-bold text-xs">AURA COLLECTIONS</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 md:mb-6 leading-tight text-gray-900">
                Alternative rituals <br className="hidden sm:inline" /> for <i>skin health.</i>
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Discover our carefully curated products and step-by-step rituals.
                Scroll horizontally to browse on desktop.
              </p>
              <p className="font-bold tracking-widest uppercase text-[10px] sm:text-xs text-gray-900">
                SCROLL TO EXPLORE →
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div className="w-full md:w-1/2 h-[260px] sm:h-[350px] md:h-full bg-gray-50">
            <img
              src="/hero-products.webp"
              alt="Skin Health"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── Product Cards (Width increased: md:w-[45vw] lg:w-[38vw]) ───── */}
        {collectionData.map((item, index) => (
          <div
            key={item.id}
            className="luxury-card w-full md:w-[45vw] lg:w-[38vw] h-[380px] sm:h-[450px] md:h-[68vh] shrink-0 flex flex-col items-center justify-center relative overflow-hidden rounded-2xl shadow-xl border border-[#dfa568]/30 bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* label */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10">
              <span className="text-[0.6rem] md:text-[0.7rem] uppercase tracking-widest text-[#f3d3b0] font-semibold block mb-1">
                [ STEP 0{index + 1} ]
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display">{item.title}</h3>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default HorizontalScroll;