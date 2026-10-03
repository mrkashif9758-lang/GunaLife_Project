import React from 'react';
import { FaInstagram, FaPinterest, FaLinkedin } from "react-icons/fa";
import { FaTruck, FaUndo, FaLock } from "react-icons/fa";

const Footer = () => {
  const features = [
    { icon: <FaTruck size={18} />, title: "FREE SHIPPING", desc: "On all US domestic orders over $75" },
    { icon: <FaUndo size={18} />, title: "30 DAY RETURNS", desc: "Hassle-free, easy return process" },
    { icon: <FaLock size={18} />, title: "SECURE PAYMENT", desc: "100% encrypted, secure checkout" }
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Ambient Glows on Dark Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#dfa568]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d49452]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1250px] mx-auto px-6 relative z-10">
        
        {/* Features Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-16 border-b border-white/10">
          {features.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-neutral-900/50 p-5 rounded-2xl border border-white/5">
              <div className="w-12 h-12 border border-[#dfa568]/40 bg-white/5 rounded-full flex items-center justify-center text-[#dfa568] shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-[0.2em] text-white">{item.title}</h4>
                <p className="text-xs text-neutral-400 mt-1 font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-16 pb-16 border-b border-white/10">
          
          {/* Branding Column */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-serif tracking-wider mb-4 text-white">AURA</h2>
            <p className="text-xs text-neutral-400 mb-6 leading-relaxed font-light">
              Elevated skincare made with clean ingredients and backed by science. We build routines to empower your skin.
            </p>
            <div className="flex gap-4">
              <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#dfa568] transition-all cursor-pointer">
                <FaInstagram size={16} />
              </div>
              <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#dfa568] transition-all cursor-pointer">
                <FaPinterest size={16} />
              </div>
              <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#dfa568] transition-all cursor-pointer">
                <FaLinkedin size={16} />
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {[
            { title: "SHOP", links: ["All Products", "Bestsellers", "New Arrivals", "Sets & Kits", "Gift Cards"] },
            { title: "COLLECTIONS", links: ["Hydration", "Brightening", "Anti-Aging", "Sensitive Skin", "Clear Skin"] },
            { title: "ABOUT", links: ["Our Story", "Ingredients", "Sustainability", "Press", "Careers"] },
            { title: "HELP", links: ["FAQ", "Shipping & Returns", "Track Order", "Contact Us", "Privacy Policy"] },
          ].map((section) => (
            <div key={section.title}>
              <h5 className="text-[11px] font-bold uppercase tracking-[0.25em] mb-5 text-[#dfa568]">
                {section.title}
              </h5>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-neutral-400 hover:text-white transition-colors font-light tracking-wide">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-2 text-[11px] text-neutral-500 font-light tracking-wider gap-4">
          <p>© 2026 AURA SKINCARE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">PRIVACY POLICY</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;