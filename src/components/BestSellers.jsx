import React, { useState } from 'react';
import { Check, ShoppingBag, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductCard = ({ id, category, title, description, price, image, onAddToCart }) => {
  const [justAdded, setJustAdded] = useState(false);

  const handleAddClick = (e) => {
    e.preventDefault(); 
    onAddToCart({ id, category, title, description, price, image });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <Link to={`/product/${id}`} className="block group h-full">
      {/* Compact & Sleek Card Layout with refined proportions */}
      <div className="bg-white/95 backdrop-blur-md border border-[#dfa568]/40 rounded-[1.75rem] overflow-hidden flex flex-col h-full shadow-[0_10px_30px_rgba(223,165,104,0.15)] hover:shadow-[0_20px_45px_rgba(223,165,104,0.3)] hover:border-[#d49452] hover:-translate-y-1.5 transition-all duration-500 relative">
        
        {/* Floating Top Tag / Badge */}
        <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#a87038] shadow-sm border border-[#dfa568]/30">
          <Sparkles size={9} className="text-[#dfa568] animate-spin" /> Bestseller
        </div>

        {/* Compact Image Container to reduce overall card height */}
        <div className="relative overflow-hidden h-[180px] sm:h-[200px] bg-[#f9f2e7]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[#dfa568]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Streamlined Body Content */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em] font-extrabold uppercase text-[#a87038]">{category}</span>
              <div className="flex items-center text-amber-500 text-xs gap-0.5">
                <Star size={11} fill="currentColor" />
                <span className="text-gray-600 font-semibold text-[10px]">4.9</span>
              </div>
            </div>
            <h3 className="font-serif text-base text-gray-900 mb-1 line-clamp-1 group-hover:text-[#a87038] transition-colors">{title}</h3>
            <p className="text-[0.7rem] sm:text-[0.75rem] text-gray-500 mb-3 line-clamp-1 leading-relaxed">{description}</p>
          </div>
          
          <div className="flex items-center justify-between pt-3 border-t border-[#dfa568]/20">
            <div>
              <span className="text-[9px] text-gray-400 block uppercase tracking-wider">Price</span>
              <span className="font-serif font-bold text-sm sm:text-base text-gray-900">₹{price}</span>
            </div>
            
            {/* Compact Interactive Add Button */}
            <button
              onClick={handleAddClick}
              className={`px-3.5 py-2 rounded-full border flex items-center gap-1.5 transition-all duration-300 cursor-pointer shadow-sm ${
                justAdded 
                  ? 'bg-emerald-600 border-emerald-600 text-white scale-105' 
                  : 'bg-white border-[#dfa568]/60 text-gray-900 hover:bg-[#d49452] hover:text-white hover:border-[#d49452] group-hover:shadow-[0_4px_15px_rgba(223,165,104,0.35)]'
              }`}
              title="Add to Bag"
            >
              {justAdded ? (
                <>
                  <Check size={12} />
                  <span className="text-[11px] font-semibold tracking-wider">Added</span>
                </>
              ) : (
                <>
                  <span className="text-[11px] font-semibold tracking-wider">+ Add</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

const BestSellers = () => {
  const { addToCart } = useCart();
  const [toastMessage, setToastMessage] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setToastMessage(`${product.title} added to bag successfully!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <section id="best-sellers-section" className="py-16 sm:py-24 bg-gradient-to-b from-[#fffbf4] via-[#f7ecd9] to-[#efe0c4] relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#dfa568]/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d49452]/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Toast Notification Popup */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        toastMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-md text-gray-900 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#dfa568]/50 text-xs sm:text-sm font-medium">
          <div className="w-6 h-6 rounded-full bg-[#dfa568]/20 text-[#a87038] flex items-center justify-center flex-shrink-0">
            <ShoppingBag size={14} />
          </div>
          <span>{toastMessage}</span>
        </div>
      </div>

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-0">
          <div>
            <div className="flex items-center gap-2 text-[#a87038] font-bold tracking-[0.3em] text-xs uppercase mb-2">
              <Sparkles size={14} className="text-[#dfa568]" /> Curated Favorites
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">BEST SELLERS</h2>
          </div>
          <Link to="/" className="text-[0.75rem] uppercase tracking-[0.2em] font-bold text-gray-800 hover:text-[#a87038] transition-colors flex items-center gap-2 border-b-2 border-[#dfa568]/70 pb-1 w-fit group">
            Explore All Collection <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;