import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Star, 
  Sparkles, 
  ShoppingBag, 
  Eye, 
  CheckCircle2 
} from 'lucide-react';

const CategoryMarquee = () => {
  const categories = [
    "100% Organic & Vegan", 
    "Cruelty-Free Certified", 
    "Dermatologist Tested", 
    "Sustainable Packaging", 
    "Clean Beauty Standards",
    "Hypoallergenic Formula"
  ];

  return (
    <div className="relative w-full bg-[var(--card)] text-[var(--foreground)] py-4 overflow-hidden border-t border-b border-[var(--border)]">
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[var(--card)] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[var(--card)] to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-max animate-marquee space-x-12 items-center">
        {[...categories, ...categories, ...categories].map((category, index) => (
          <div key={index} className="flex items-center space-x-3 text-xs sm:text-sm font-light tracking-[0.25em] uppercase text-[var(--muted-foreground)]">
            <Sparkles size={14} className="text-[var(--primary)] animate-pulse" />
            <span>{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState('butter');
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [notification, setNotification] = useState('');

  const products = {
    butter: {
      name: "COCONUT BUTTER",
      subtitle: "Ultra-Rich Body Repair",
      price: "$34.00",
      salePrice: "$28.90",
      image: "/hero-prod1.jpg",
      badge: "BESTSELLER",
      rating: "4.9",
      reviews: "1,420",
      description: "Deeply nourishing organic cold-pressed coconut whipped with shea butter for 48h moisture."
    },
    serum: {
      name: "ROSE PETAL OIL",
      subtitle: "Radiance Body Elixir",
      price: "$42.00",
      salePrice: "$35.70",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      badge: "NEW ARRIVAL",
      rating: "5.0",
      reviews: "850",
      description: "Infused with damask rose and squalane for an instant luminous, non-greasy satin glow."
    },
    scrub: {
      name: "SEA SALT POLISH",
      subtitle: "Exfoliating Cleanse",
      price: "$29.00",
      salePrice: "$24.65",
      image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      badge: "LIMITED EDITION",
      rating: "4.8",
      reviews: "930",
      description: "Mineral-rich Himalayan pink salt and botanical oils to gently buff away dull winter skin."
    }
  };

  const currentProduct = products[activeTab];

  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        .floating-badge {
          animation: floatSlow 6s ease-in-out infinite;
        }
      `}</style>

      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-6 right-6 z-50 bg-[var(--card)] text-[var(--foreground)] px-6 py-3 rounded-full shadow-2xl flex items-center space-x-3 text-xs tracking-wider uppercase border border-[var(--border)] transition-all duration-300 animate-bounce">
          <CheckCircle2 size={16} className="text-[var(--primary)]" />
          <span>{notification}</span>
        </div>
      )}

      {/* Hero Section Container */}
      <section className="relative w-full min-h-[100vh] lg:h-[100vh] flex items-center justify-center py-24 lg:py-0 overflow-hidden bg-[var(--background)]">

        {/* Background Video - Fully visible with balanced styling */}
        <video className="absolute inset-0 w-full h-full object-cover z-0 opacity-85" autoPlay loop muted playsInline>
          <source src="/remove-bg-hero.mp4" type="video/mp4" />
        </video>
        
        {/* Soft gradient overlay so text remains readable while video shines through */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/70 via-[var(--background)]/40 to-transparent z-0 pointer-events-none"></div>

        {/* Content Container */}
        <div className="container mx-auto max-w-[1200px] relative z-10 px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

          {/* Left Side - Typography & Floating Card */}
          <div className="w-full lg:max-w-lg mt-0 lg:mt-12 text-center lg:text-left">
            
            <div className="inline-flex items-center space-x-2 bg-[var(--card)]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[var(--border)] shadow-lg mb-6">
              <div className="flex text-[var(--primary)]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <span className="text-[11px] font-semibold text-[var(--foreground)] tracking-wider">
                4.9/5 RATED BY 15,000+ GLOW SEEKERS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--foreground)] leading-tight font-light drop-shadow-md">
              Cosmetics for the
              <br />
              <span className="font-normal italic text-[var(--primary)]">whole body. </span>
              <span className="font-bold">For every body.</span>
            </h1>

            {/* Small floating card */}
            <div className="floating-badge bg-[var(--card)]/95 backdrop-blur-md mt-8 sm:mt-10 p-3.5 max-w-xs mx-auto lg:mx-0 rounded-2xl shadow-xl border border-[var(--border)] flex items-center gap-3 text-left">
              <img src="/hero-img2.webp" className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-[var(--border)]" alt="User" />
              <p className="text-[0.7rem] leading-tight text-[var(--muted-foreground)]">
                Inspired by you. <br />
                <span className="font-bold text-[var(--foreground)]">REALIZING OUR VALUE.</span>
              </p>
            </div>
          </div>

          {/* Right Side - Dark Luxury Product Card */}
          <div className="w-full max-w-[340px] sm:w-[350px] rounded-[28px] bg-[var(--card)]/90 backdrop-blur-md p-5 shadow-2xl border border-[var(--border)] mx-auto lg:mx-0 lg:mt-12">
            
            {/* Category Selector Tabs */}
            <div className="flex bg-[var(--muted)] p-0.5 rounded-full mb-4 border border-[var(--border)]">
              {[
                { id: 'butter', label: 'Butter' },
                { id: 'serum', label: 'Serum' },
                { id: 'scrub', label: 'Scrub' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm' 
                      : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Sale / Badge & Rating */}
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--primary)] font-semibold">
                [ {currentProduct.badge} ]
              </p>
              <div className="flex items-center space-x-1 text-[11px] text-[var(--muted-foreground)]">
                <Star size={12} className="text-[var(--primary)] fill-[var(--primary)]" />
                <span className="font-bold text-[var(--foreground)]">{currentProduct.rating}</span>
                <span>({currentProduct.reviews})</span>
              </div>
            </div>

            {/* Title + Arrow */}
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-xl sm:text-2xl font-light leading-tight text-[var(--foreground)]">
                {currentProduct.name.split(" ")[0]}
                <br />
                <span className="font-bold text-[var(--primary)]">{currentProduct.name.split(" ")[1]}</span>
              </h3>
           
              <button 
                onClick={() => setQuickViewOpen(true)}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--muted)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] hover:rotate-45 shadow-sm"
              >
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </button>
            </div>

            {/* Product Image */}
            <div 
              onClick={() => setQuickViewOpen(true)}
              className="overflow-hidden rounded-[20px] bg-[var(--muted)] cursor-pointer relative group/img mb-4 border border-[var(--border)]"
            >
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="h-[160px] sm:h-[180px] w-full object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-90 group-hover/img:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-[var(--card)]/90 backdrop-blur-md text-[var(--foreground)] px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider flex items-center space-x-1.5 shadow-md border border-[var(--border)]">
                  <Eye size={13} className="text-[var(--primary)]" />
                  <span>Quick View</span>
                </span>
              </div>
            </div>

            {/* Price & Add to Bag */}
            <div className="flex items-center justify-between pt-1 border-t border-[var(--border)]">
              <div>
                <span className="text-[10px] text-[var(--muted-foreground)] line-through mr-1.5">{currentProduct.price}</span>
                <span className="text-base font-bold text-[var(--foreground)]">{currentProduct.salePrice}</span>
              </div>
              
              <button 
                onClick={() => showToast(`Added ${currentProduct.name} to shopping bag!`)}
                className="bg-[var(--primary)] text-[var(--primary-foreground)] py-2.5 px-4 rounded-full font-medium text-[10px] tracking-[0.18em] uppercase transition-all duration-300 hover:opacity-90 flex items-center space-x-1.5 shadow-sm"
              >
                <ShoppingBag size={13} />
                <span>Add</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[var(--card)] rounded-[28px] max-w-md w-full p-6 relative shadow-2xl border border-[var(--border)] text-[var(--foreground)]">
            <button 
              onClick={() => setQuickViewOpen(false)}
              className="absolute top-5 right-5 w-7 h-7 rounded-full bg-[var(--muted)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] text-xs border border-[var(--border)]"
            >
              ✕
            </button>
            <span className="bg-[var(--muted)] text-[var(--primary)] px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block mb-3 border border-[var(--border)]">
              {currentProduct.badge}
            </span>
            <h3 className="text-xl font-light text-[var(--foreground)] mb-1">{currentProduct.name}</h3>
            <p className="text-[var(--muted-foreground)] text-xs font-light mb-4 leading-relaxed">
              {currentProduct.description}
            </p>
            <div className="bg-[var(--muted)] p-3.5 rounded-2xl mb-4 space-y-2 text-xs border border-[var(--border)]">
              <div className="flex justify-between">
                <span className="text-[var(--muted-foreground)]">Price:</span>
                <span className="font-bold text-[var(--foreground)]">{currentProduct.salePrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--muted-foreground)]">Rating:</span>
                <span className="font-bold text-[var(--foreground)]">{currentProduct.rating} / 5.0</span>
              </div>
            </div>
            <button 
              onClick={() => {
                setQuickViewOpen(false);
                showToast(`Added ${currentProduct.name} to bag!`);
              }}
              className="w-full bg-[var(--primary)] text-[var(--primary-foreground)] py-3 rounded-full text-xs font-semibold tracking-wider uppercase hover:opacity-90 transition-all shadow-md"
            >
              Add to Bag ({currentProduct.salePrice})
            </button>
          </div>
        </div>
      )}

      {/* Category Marquee Component */}
      <CategoryMarquee />
    </>
  );
};

export default Hero;