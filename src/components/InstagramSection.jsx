import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { Sparkles } from 'lucide-react';

const InstagramSection = () => {
    const images = [
        { src: '/category1.webp', className: 'md:row-span-2' },
        { src: '/category2.webp', className: '' },
        { src: '/category3.webp', className: '' },
        { src: '/category4.webp', className: 'md:row-span-2' },
        { src: '/category5.webp', className: '' },
        { src: '/category6.webp', className: '' },
        { src: '/category7.webp', className: '' },
        { src: '/category8.webp', className: '' },
    ];

    return (
        <section 
            style={{ background: 'linear-gradient(to bottom, #fffbf4, #f7ecd9, #efe0c4)' }}
            className="py-20 md:py-28 relative overflow-hidden"
        >
            {/* Luxurious Gilt Ambient Background Glows */}
            <div className="absolute top-1/4 left-5 w-96 h-96 bg-[#dfa568]/15 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-5 w-96 h-96 bg-[#d49452]/15 rounded-full blur-[130px] pointer-events-none" />

            <div className="mx-auto max-w-[1250px] px-4 sm:px-6 relative z-10">
                
                {/* Header Aligned with Luxury Aesthetic */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-6 sm:gap-0">
                    <div>
                        <div className="inline-flex items-center gap-2 text-[#a87038] font-bold tracking-[0.3em] text-[10px] uppercase mb-3 bg-white/60 px-4 py-1.5 rounded-full border border-[#dfa568]/40 backdrop-blur-md shadow-sm">
                            <Sparkles size={12} className="text-[#dfa568]" /> Global Community
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 tracking-tight">
                            Follow us on Instagram
                        </h2>
                    </div>
                    
                    <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-[#dfa568]/50 bg-white/60 backdrop-blur-md px-6 sm:px-8 py-3.5 rounded-full font-bold uppercase text-[0.7rem] sm:text-[0.75rem] tracking-[0.2em] text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-500 w-fit text-center shadow-sm"
                    >
                        @BLISSFUL_COSMETICS →
                    </a>
                </div>

                {/* Grid Layout - Perfectly Aligned with Luxury Frames */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 auto-rows-[200px] sm:auto-rows-[260px]">
                    {images.map((img, index) => (
                        <div 
                            key={index} 
                            className={`relative group overflow-hidden rounded-[2rem] border border-[#dfa568]/40 shadow-[0_12px_35px_rgba(223,165,104,0.12)] bg-white cursor-pointer ${img.className}`}
                        >
                            {/* Image */}
                            <img
                                src={img.src}
                                alt="Instagram luxury lifestyle feed"
                                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                            />

                            {/* Luxurious Champagne Gradient Overlay with Instagram Icon */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6">
                                <div className="self-end">
                                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                                        <FaInstagram className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#f3d3b0] font-semibold block mb-1">
                                        Ritual #0{index + 1}
                                    </span>
                                    <span className="text-xs text-white font-serif tracking-wider">
                                        Explore Routine
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;