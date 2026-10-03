import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from "gsap";

// Har category ke sath uska target product ki ID map ki gayi hai
const categories = [
  { name: 'New Arrivals', productId: 1, img: '/category1.webp' },
  { name: 'Cleansers', productId: 1, img: '/category2.webp' },
  { name: 'Serums', productId: 2, img: '/category3.webp' },
  { name: 'Moisturizers', productId: 3, img: '/category4.webp' },
  { name: 'Sun Care', productId: 4, img: '/category5.webp' },
  { name: 'Toners', productId: 5, img: '/category6.webp' },
  { name: 'Sets & Kits', productId: 6, img: '/category1.webp' },
];

const CategoryMarquee = () => {
  const track = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // GSAP infinite marquee animation
    const tween = gsap.to(track.current, {
      xPercent: -50,
      duration: 35,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill(); // Cleanup on unmount to prevent memory leaks
    };
  }, []);

  // Click handler jo direct product detail page par le jayega
  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="py-12 sm:py-16 overflow-hidden bg-gradient-to-br from-[#fdf2f8] via-[#fce7f3] to-[#b772f4]">
      <div className="mx-auto max-w-[1250px] mb-8 sm:mb-10 px-6">
        <p className="eyebrow">Shop by Category</p>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex w-full overflow-hidden">
        <div className="flex gap-4 sm:gap-6" ref={track}>
          {/* Content ko 2 baar map kiya hai taaki loop smooth rahe */}
          {[...categories, ...categories].map((item, index) => (
            <div 
              key={index} 
              onClick={() => handleCardClick(item.productId)} 
              className="luxury-card w-48 h-48 sm:w-60 sm:h-60 flex-shrink-0 relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm"
            >
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white font-medium tracking-widest uppercase text-xs sm:text-sm drop-shadow-md">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryMarquee;