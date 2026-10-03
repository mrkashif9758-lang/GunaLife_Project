import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Clock, Calendar } from 'lucide-react';

const journalArticles = [
  {
    id: 1,
    title: 'The Art of Botanical Layering: Achieving Deep Hydration in Winter',
    excerpt: 'Discover how combining organic seed oils with botanical hyaluronic acid can completely transform your skin barrier during harsher seasonal shifts.',
    category: 'Skincare Science',
    readTime: '4 min read',
    date: 'July 18, 2026',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Why Clean Hair Care Starts Right at the Scalp Microbiome',
    excerpt: 'Unlocking the secrets of sulfate-free cleansers and natural extracts designed to revitalize roots without stripping natural oils.',
    category: 'Hair Care Rituals',
    readTime: '5 min read',
    date: 'July 14, 2026',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 3,
    title: 'Morning Rituals: 5 Minutes to Mindful Glow',
    excerpt: 'Elevate your daily AM skincare routine into a meditative ritual with upward facial massage techniques.',
    category: 'Wellness & Lifestyle',
    readTime: '3 min read',
    date: 'July 10, 2026',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 4,
    title: 'Demystifying Niacinamide: The Ultimate Multi-Tasking Elixir',
    excerpt: 'A deep dive into pore regulation, brightening effects, and why this ingredient belongs in every minimalist collection.',
    category: 'Skincare Science',
    readTime: '6 min read',
    date: 'July 05, 2026',
    image: 'https://images.unsplash.com/photo-1608248597359-9943b1aa6e9a?q=80&w=1000&auto=format&fit=crop',
    featured: false,
  },
];

const categories = ['All', 'Skincare Science', 'Hair Care Rituals', 'Wellness & Lifestyle'];

const JournalPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All' 
    ? journalArticles 
    : journalArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = journalArticles.find(article => article.featured);

  return (
    <div 
      // Top is deeper gilt tone (#efe0c4), bottom fades to light cream (#fffbf4)
      style={{ background: 'linear-gradient(to bottom, #efe0c4, #f2e3cb, #fffbf4)' }}
      className="min-h-screen pt-32 pb-28 text-gray-900 relative overflow-hidden"
    >
      {/* Luxurious Gilt Ambient Background Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#dfa568]/15 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-[#d49452]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#dfa568]/15 blur-[120px] pointer-events-none" />

      {/* Header Title Section */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#dfa568]/40 text-[#7d5225] text-[10px] uppercase tracking-[0.3em] font-bold shadow-sm mb-4">
          <Sparkles size={12} className="text-[#a87038]" /> The Journal & Stories
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-gray-900 tracking-tight font-light">
          Wisdom & Rituals
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-700 font-light max-w-xl mx-auto leading-relaxed">
          Explore expert insights, clean beauty science, and mindful self-care practices designed to elevate your everyday ritual.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                selectedCategory === cat 
                  ? 'bg-gray-900 text-white shadow-md' 
                  : 'bg-white/80 backdrop-blur-md text-gray-700 hover:bg-white border border-[#dfa568]/40 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1250px] mx-auto px-6 space-y-16 relative z-10">

        {/* Featured Hero Article */}
        {featuredArticle && (selectedCategory === 'All' || featuredArticle.category === selectedCategory) && (
          <div className="group relative bg-white/90 backdrop-blur-md rounded-[2.5rem] border border-[#dfa568]/40 overflow-hidden shadow-[0_15px_40px_rgba(223,165,104,0.12)] grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-72 sm:h-96 lg:h-[450px] overflow-hidden relative">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] text-[#7d5225] font-bold shadow-sm border border-[#dfa568]/30">
                Featured Story
              </div>
            </div>
            
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mb-3">
                  <span className="flex items-center gap-1"><Calendar size={13} className="text-[#a87038]" /> {featuredArticle.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock size={13} className="text-[#a87038]" /> {featuredArticle.readTime}</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#a87038] font-bold mb-2 block">{featuredArticle.category}</span>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 font-light leading-snug group-hover:text-[#a87038] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-gray-700 font-light leading-relaxed line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-bold text-gray-900">Read Article</span>
                <Link to={`/journal/${featuredArticle.id}`}>
                  <button className="group/btn flex h-12 w-12 items-center justify-center rounded-full border border-[#dfa568]/40 bg-white transition-all duration-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:rotate-45 shadow-sm">
                    <ArrowUpRight size={18} className="transition-transform duration-300 group-hover/btn:scale-110" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div 
              key={article.id}
              className="group bg-white/90 backdrop-blur-md rounded-[2rem] border border-[#dfa568]/40 overflow-hidden shadow-[0_10px_30px_rgba(223,165,104,0.1)] hover:shadow-[0_20px_45px_rgba(223,165,104,0.2)] hover:border-[#a87038] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="h-60 overflow-hidden relative bg-gray-100">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] text-[#7d5225] font-bold shadow-sm border border-[#dfa568]/30">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium mb-2.5">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl text-gray-900 font-light leading-snug group-hover:text-[#a87038] transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-gray-600 font-light leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-100 mt-4">
                <span className="text-[11px] uppercase tracking-widest font-bold text-gray-900">Explore</span>
                <Link to={`/journal/${article.id}`}>
                  <button className="group/btn flex h-10 w-10 items-center justify-center rounded-full border border-[#dfa568]/40 bg-white transition-all duration-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:rotate-45 shadow-sm">
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:scale-110" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default JournalPage;