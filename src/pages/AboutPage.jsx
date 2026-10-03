import React from 'react';
import { Sparkles, Leaf, Heart, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  { icon: Sparkles, label: 'Clean Beauty Standards' },
  { icon: Leaf,     label: 'Ethically Sourced' },
  { icon: Heart,    label: 'Cruelty-Free & Vegan' },
  { icon: RefreshCw,label: 'Sustainable Packaging' },
];

const AboutPage = () => (
  <div 
    // Top is deeper gilt tone (#efe0c4), bottom fades to light cream (#fffbf4)
    style={{ background: 'linear-gradient(to bottom, #efe0c4, #f2e3cb, #fffbf4)' }}
    className="min-h-screen text-gray-900 overflow-x-hidden pt-28 relative"
  >
    {/* Luxurious Gilt Ambient Background Glows */}
    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#dfa568]/15 blur-[140px] pointer-events-none" />
    <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-[#d49452]/15 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#dfa568]/15 blur-[120px] pointer-events-none" />

    {/* ── Hero ── */}
    <header className="relative px-6 py-20 md:py-32 max-w-5xl mx-auto text-center z-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-[#dfa568]/40 text-[#7d5225] text-[10px] uppercase tracking-[0.35em] font-bold mb-8 shadow-sm backdrop-blur-md">
        <Sparkles size={12} className="text-[#a87038]" /> Chapter I — Our Genesis
      </div>

      <h1 className="font-serif font-light text-4xl sm:text-6xl md:text-7xl leading-[1.1] tracking-tight text-gray-900 mb-8">
        A Gentle Rebellion<br />
        <em className="font-serif italic text-[#a87038]">Against Ordinary</em> Skincare.
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-2xl mx-auto">
        We didn't start to create another beauty brand. We started to redefine what self-care means — moving from routine rituals to mindful moments of healing.
      </p>
    </header>

    {/* ── Why Us ── */}
    <section className="max-w-[1250px] mx-auto px-4 sm:px-6 my-12 relative z-10">
      <div className="rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-[#dfa568]/40 shadow-[0_15px_40px_rgba(223,165,104,0.12)] p-8 md:p-16 grid md:grid-cols-3 gap-10 md:gap-16 items-center">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfa568]/15 text-[#7d5225] text-[10px] uppercase tracking-[0.3em] font-bold border border-[#dfa568]/30">
            <Leaf size={12} className="text-[#a87038]" /> Chapter II
          </span>
          <h2 className="font-serif font-light text-3xl md:text-4xl leading-tight text-gray-900">
            The Skin We're In<br />Deserves More.
          </h2>
        </div>
        <div className="md:col-span-2 space-y-4 text-sm sm:text-base md:text-lg text-gray-700 font-light leading-relaxed">
          <p>Traditional beauty standards often dictate "flawless" skin, ignoring the reality that skin is living, breathing, and ever-changing. We saw a disconnect between harsh chemical solutions and the gentle nourishment our bodies actually crave.</p>
          <p>Our philosophy is rooted in <strong className="font-medium text-[#a87038]">radical kindness</strong>. We formulate products that work with your skin's microbiome, not against it. Healing over hiding. Nurturing over perfecting.</p>
        </div>
      </div>
    </section>

    {/* ── Philosophy ── */}
    <section className="max-w-[1250px] mx-auto px-4 sm:px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center relative z-10">
      <div className="md:col-span-3 space-y-8">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 border border-[#dfa568]/40 text-[#7d5225] text-[10px] uppercase tracking-[0.3em] font-bold shadow-sm backdrop-blur-md">
          <Heart size={12} className="text-[#a87038]" /> Chapter III
        </span>
        <h2 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl leading-tight text-gray-900">
          Crafted Consciously.<br />
          <span className="italic text-[#a87038]">Rituals, Not Routine.</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 font-light leading-relaxed">
          Every product begins with a question: Does this bring peace to the user? We source rare botanicals and pair them with proven dermatological science. The result is potent, clean beauty that feels like a whisper.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          {pillars.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-4 rounded-2xl border border-[#dfa568]/30 shadow-sm text-gray-900 font-medium text-xs sm:text-sm hover:border-[#a87038] transition-all duration-300">
              <Icon size={16} className="text-[#a87038] flex-shrink-0" /> {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-2 flex items-center justify-center">
        <div className="relative aspect-[3/4] w-full max-w-sm rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#dfa568]/40 bg-white">
          <img
            src="/category3.webp"
            alt="Minimalist skincare aesthetic"
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          {/* overlay shimmer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-28 pt-8 relative z-10 text-center">
      <div className="relative p-10 md:p-16 rounded-[3rem] overflow-hidden bg-white/90 backdrop-blur-md border border-[#dfa568]/50 shadow-[0_20px_50px_rgba(223,165,104,0.2)]">
        {/* glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#dfa568]/15 via-transparent to-[#d49452]/15" />
        
        <p className="relative text-[10px] uppercase tracking-[0.4em] text-[#7d5225] mb-4 font-bold">Final Chapter</p>
        <h2 className="relative font-serif font-light text-3xl md:text-5xl text-gray-900 mb-5 leading-tight">
          Your Body's Ritual Awaits.
        </h2>
        <p className="relative text-sm sm:text-base text-gray-700 mb-8 font-light max-w-md mx-auto leading-relaxed">
          Step into a world where skincare is self-love. Explore our curated collection and begin your mindful journey.
        </p>
        <Link
          to="/shop"
          className="relative inline-flex items-center gap-3 bg-gray-900 text-white px-9 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#a87038] hover:shadow-lg transition-all duration-300 group"
        >
          Discover Your Ritual
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>

  </div>
);

export default AboutPage;