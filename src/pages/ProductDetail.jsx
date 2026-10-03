import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Sparkles, ShoppingBag, Heart, CheckCircle, 
  Leaf, ShieldCheck, RefreshCw, Star, Minus, Plus 
} from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'ingredients' | 'benefits' | 'usage'
  const [toastMessage, setToastMessage] = useState(null);

  if (!product) {
    return (
      <div 
        style={{ background: 'linear-gradient(to bottom, #efe0c4, #f2e3cb, #fffbf4)' }}
        className="min-h-screen flex flex-col items-center justify-center pt-28 gap-6 px-6 text-center text-gray-900"
      >
        <p className="font-serif text-3xl sm:text-4xl">Product not found.</p>
        <Link to="/" className="text-xs uppercase tracking-widest text-[#7d5225] underline underline-offset-4 hover:text-black transition-colors font-bold">
          ← Back to Collection
        </Link>
      </div>
    );
  }

  // Multi-images array (fallback to main product image if additional images don't exist)
  const images = product.images || [product.image, product.image, product.image];
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  const handleAdd = () => {
    addToCart(product, quantity);
    setToastMessage(`${quantity}x ${product.title} added to bag successfully!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div 
      // Top is deeper gilt tone (#efe0c4), bottom fades to light cream (#fffbf4)
      style={{ background: 'linear-gradient(to bottom, #efe0c4, #f2e3cb, #fffbf4)' }}
      className="mt-10 sm:mt-14 lg:mt-20 min-h-screen pt-20 sm:pt-24 lg:pt-28 overflow-x-hidden text-gray-900 relative"
    >
      {/* Luxurious Gilt Ambient Background Glows */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#dfa568]/15 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-[#d49452]/15 blur-[120px] pointer-events-none" />

      {/* Toast Notification Popup */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        toastMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}>
        <div className="bg-gray-900 text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-[#dfa568]/30 text-xs sm:text-sm font-medium">
          <div className="w-7 h-7 rounded-full bg-[#dfa568]/20 text-[#efe0c4] flex items-center justify-center flex-shrink-0">
            <ShoppingBag size={15} />
          </div>
          <span>{toastMessage}</span>
        </div>
      </div>

      {/* Back Navigation & Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 flex items-center justify-between relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#7d5225] font-bold hover:gap-3 transition-all duration-300"
        >
          <ArrowLeft size={14} /> Back to Collection
        </Link>
        <div className="text-xs text-gray-600 hidden md:block">
          <Link to="/" className="hover:underline">Home</Link> / <Link to="/" className="hover:underline">{product.category}</Link> / <span className="text-[#7d5225] font-semibold">{product.title}</span>
        </div>
      </div>

      {/* Main Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pb-12 sm:pb-16 relative z-10">

        {/* Left: Interactive Image Gallery */}
        <div className="lg:col-span-5 flex flex-col gap-4 relative lg:sticky lg:top-32">
          {/* Main Display Image */}
          <div className="relative aspect-[1/1] sm:aspect-[4/5] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(223,165,104,0.12)] border border-[#dfa568]/40 bg-white/90 backdrop-blur-md">
            <img
              src={images[activeImage]}
              alt={product.title}
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/10 via-transparent to-transparent" />
            
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#7d5225] font-bold shadow-sm border border-[#dfa568]/30">
              {product.category}
            </div>
          </div>

          {/* Thumbnail Selectors */}
          <div className="flex gap-3 justify-center overflow-x-auto pb-2 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                  activeImage === idx ? 'border-[#7d5225] shadow-md scale-105' : 'border-[#dfa568]/40 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Rich Product Info & Controls */}
        <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
          <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1 rounded-full bg-white/75 backdrop-blur-md text-[#7d5225] text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold border border-[#dfa568]/40 shadow-sm">
            <Sparkles size={12} className="text-[#a87038]" /> Dermatologist Approved
          </div>

          <div>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight tracking-tight font-light">
              {product.title}
            </h1>
            
            {/* Rating summary */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs text-gray-600 font-medium">(4.8 / 42 Reviews)</span>
            </div>

            <p className="mt-3 text-sm sm:text-base text-gray-700 font-light leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Pricing & Stock Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-y border-[#dfa568]/30 py-4 gap-2 sm:gap-0">
            <span className="font-serif text-2xl sm:text-4xl text-gray-900 font-light">
              ₹{product.price} <span className="text-xs text-gray-500 font-sans line-through ml-2">₹{Math.round(product.price * 1.3)}</span>
            </span>
            <div className="text-xs text-emerald-700 bg-emerald-500/10 px-3 py-1 rounded-full font-medium flex items-center gap-1.5 border border-emerald-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> In Stock & Ready to Ship
            </div>
          </div>

          {/* Attributes / Meta Info (Size & Skin Type) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#dfa568]/30 shadow-sm">
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-[#7d5225] font-bold">Size</span>
              <span className="text-xs sm:text-sm text-gray-800 font-medium">{product.size || "200 ml / 6.7 fl. oz."}</span>
            </div>
            <div className="bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#dfa568]/30 shadow-sm">
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-[#7d5225] font-bold">Ideal For</span>
              <span className="text-xs sm:text-sm text-gray-800 font-medium">{product.skinType || "All Hair/Skin Types"}</span>
            </div>
          </div>

          {/* Quantity and Actions Bar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            {/* Quantity Selector */}
            <div className="flex items-center justify-between bg-white/80 backdrop-blur-md border border-[#dfa568]/30 rounded-full px-4 py-2.5 w-full sm:w-36 shadow-sm">
              <span className="text-xs uppercase text-gray-600 font-bold tracking-wider">Qty</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-full bg-white border border-[#dfa568]/30 flex items-center justify-center text-gray-800 hover:bg-[#dfa568]/20 transition-colors shadow-sm cursor-pointer"
                >
                  <Minus size={12} />
                </button>
                <span className="text-sm font-semibold text-gray-900">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-full bg-white border border-[#dfa568]/30 flex items-center justify-center text-gray-800 hover:bg-[#dfa568]/20 transition-colors shadow-sm cursor-pointer"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Fully Functional Add to Bag Button */}
            <div className="flex gap-3 w-full sm:flex-1">
              <button
                onClick={handleAdd}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-[0.15em] uppercase hover:bg-[#a87038] hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <ShoppingBag size={15} className="group-hover:scale-110 transition-transform flex-shrink-0" /> 
                Add to Bag - ₹{product.price * quantity}
              </button>
              
              <button className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-[#dfa568]/40 flex items-center justify-center hover:bg-white transition-colors shadow-sm flex-shrink-0 cursor-pointer">
                <Heart size={18} className="text-[#7d5225]" />
              </button>
            </div>
          </div>

          {/* Trust badges footer */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4 border-t border-[#dfa568]/30 mt-2">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-gray-700 font-medium">
              <Leaf size={13} className="text-[#a87038] flex-shrink-0" /> 100% Vegan
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-gray-700 font-medium">
              <ShieldCheck size={13} className="text-[#a87038] flex-shrink-0" /> Cruelty-Free
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-gray-700 font-medium">
              <RefreshCw size={13} className="text-[#a87038] flex-shrink-0" /> Clean Formula
            </div>
          </div>

        </div>
      </section>

      {/* Detailed Tabs Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 relative z-10">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-[2rem] border border-[#dfa568]/40 p-5 sm:p-8 shadow-[0_15px_40px_rgba(223,165,104,0.1)]">
          {/* Tab Headers */}
          <div className="flex flex-row overflow-x-auto gap-4 sm:gap-8 border-b border-[#dfa568]/30 pb-3 sm:pb-4 mb-6 text-xs sm:text-sm uppercase tracking-wider font-semibold whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {['overview', 'ingredients', 'benefits', 'usage'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 capitalize transition-colors relative cursor-pointer flex-shrink-0 ${activeTab === tab ? 'text-[#7d5225] font-bold' : 'text-gray-400 hover:text-gray-700'}`}
              >
                {tab === 'overview' ? 'Product Overview' : tab === 'ingredients' ? 'Key Ingredients' : tab === 'benefits' ? "Why You'll Love It" : 'How to Use'}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#a87038] rounded-full" />}
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          <div className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed min-h-[100px]">
            {activeTab === 'overview' && (
              <div className="space-y-3 sm:space-y-4">
                <p>{product.longDescription || product.description}</p>
                <p>Carefully crafted to balance your natural routine without harsh chemicals, parabens, or synthetic additives. Experience sustained results from the first few applications.</p>
              </div>
            )}
            {activeTab === 'ingredients' && (
              <div className="space-y-3">
                <p className="font-medium text-gray-900">Infused with certified organic extracts:</p>
                <ul className="list-disc pl-4 sm:pl-5 space-y-1">
                  <li><strong>Botanical Hyaluronic Acid:</strong> Deeply locks in essential moisture layers.</li>
                  <li><strong>Natural Plant Extracts:</strong> Restores natural shine and repairs daily damage.</li>
                  <li><strong>Antioxidant Complex:</strong> Protects against environmental stressors.</li>
                </ul>
                <p className="text-xs text-[#7d5225] italic mt-2 font-medium">Free from Parabens, Sulfates, Silicones, and Mineral Oils.</p>
              </div>
            )}
            {activeTab === 'benefits' && (
              <ul className="space-y-2">
                {product.benefits?.map((b, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle size={15} className="text-[#a87038] flex-shrink-0" /> {b}
                  </li>
                )) || (
                  <>
                    <li className="flex items-center gap-2.5"><CheckCircle size={15} className="text-[#a87038] flex-shrink-0" /> Deep moisture nourishment & lasting protection</li>
                    <li className="flex items-center gap-2.5"><CheckCircle size={15} className="text-[#a87038] flex-shrink-0" /> Dermatologically tested for sensitive skin & daily usage</li>
                  </>
                )}
              </ul>
            )}
            {activeTab === 'usage' && (
              <div className="space-y-2">
                <p>1. Take an adequate amount on your palms depending on application needs.</p>
                <p>2. Gently massage in smooth, circular motions onto clean skin or hair roots.</p>
                <p>3. Allow it to absorb fully or rinse off if specified. Use regularly for optimal results.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 relative z-10">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h3 className="font-serif text-xl sm:text-2xl text-gray-900 font-light">Customer Reviews</h3>
          <button className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-[#7d5225] hover:underline cursor-pointer">Write a Review</button>
        </div>
        <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-[1.5rem] border border-[#dfa568]/40 p-6 sm:p-8 text-center shadow-[0_10px_30px_rgba(223,165,104,0.1)]">
          <div className="flex justify-center text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-xs sm:text-sm font-medium text-gray-800">No reviews yet for this product item yet.</p>
          <p className="text-[11px] sm:text-xs text-gray-500 mt-1">Be the first to share your experience and thoughts!</p>
        </div>
      </section>

      {/* Related Products Section */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24 border-t border-[#dfa568]/30 pt-12 sm:pt-16 relative z-10">
          <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-6 sm:mb-8 font-light">Complete Your Ritual</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-[1.5rem] overflow-hidden border border-[#dfa568]/40 shadow-[0_10px_30px_rgba(223,165,104,0.1)] hover:shadow-[0_20px_45px_rgba(223,165,104,0.2)] hover:border-[#a87038] transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="h-36 sm:h-48 overflow-hidden bg-gray-100 relative">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#7d5225] font-bold mb-1">{p.category}</p>
                    <h3 className="font-serif text-sm sm:text-base text-gray-900 font-light line-clamp-1">{p.title}</h3>
                    <p className="text-xs text-gray-800 mt-1 font-bold">₹{p.price}</p>
                  </div>
                </div>
                <div className="p-3 sm:p-4 pt-0">
                  <span className="w-full block text-center bg-white/90 hover:bg-gray-900 hover:text-white text-[11px] sm:text-xs uppercase tracking-wider font-bold py-2 rounded-xl transition-all border border-[#dfa568]/40 shadow-sm">
                    View Product
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default ProductDetail;