import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const NewsletterCTA = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section 
      // Top is deeper gilt tone (#efe0c4), bottom fades to light cream (#fffbf4)
      style={{ background: 'linear-gradient(to bottom, #efe0c4, #f2e3cb, #fffbf4)' }}
      className="py-24 md:py-32 relative overflow-hidden text-gray-900"
    >
      {/* Luxurious Gilt Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#dfa568]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1250px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2 text-[#7d5225] font-bold tracking-[0.3em] text-[10px] uppercase mb-4 bg-white/60 px-4 py-1.5 rounded-full border border-[#dfa568]/50 backdrop-blur-md shadow-sm">
          <Sparkles size={12} className="text-[#a87038]" /> Let's Glow Together
        </div>
        
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-5 max-w-3xl leading-tight text-gray-900 tracking-tight">
          Subscribe to get <span className="italic text-[#a87038]">15% off</span> your first order
        </h2>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-gray-700 mb-10 max-w-lg leading-relaxed font-light">
          Receive expert skincare rituals, early VIP access to new product drops, and private seasonal privileges.
        </p>
        
        {/* Form / Input Area */}
        {submitted ? (
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#dfa568] px-8 py-4 rounded-full text-gray-900 shadow-md">
            <CheckCircle2 size={18} className="text-[#a87038]" />
            <span className="text-xs sm:text-sm font-medium tracking-wide uppercase">Welcome to the inner circle. Check your inbox!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="w-full bg-white/90 backdrop-blur-md border border-[#dfa568]/50 rounded-full px-6 py-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#a87038] shadow-[0_4px_20px_rgba(223,165,104,0.1)] transition-all"
            />
            <button 
              type="submit"
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#a87038] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-4">
          By subscribing you agree to our Terms & Privacy Policy. Unsubscribe anytime.
        </p>
        
      </div>
    </section>
  );
};

export default NewsletterCTA;