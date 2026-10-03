import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div 
      style={{ background: 'linear-gradient(to bottom, #efe0c4, #f2e3cb, #fffbf4)' }}
      className="min-h-screen pt-28 sm:pt-32 pb-24 px-4 sm:px-6 text-gray-950 relative overflow-x-hidden"
    >
      {/* Luxurious Gilt Ambient Background Glows */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#dfa568]/15 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-light mb-8 flex items-center gap-3 text-gray-900">
          <ShoppingBag size={28} className="text-[#a87038]" /> Your Shopping Bag
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-[2.5rem] border border-[#dfa568]/40 p-12 text-center space-y-4 shadow-[0_15px_40px_rgba(223,165,104,0.12)]">
            <p className="text-gray-600 font-light">Your bag is currently empty.</p>
            <Link 
              to="/" 
              className="inline-block bg-gray-900 text-white px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#a87038] hover:shadow-lg transition-all"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Items List */}
            <div className="lg:col-span-8 space-y-4">
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#dfa568]/40 p-4 sm:p-5 flex items-center justify-between shadow-[0_10px_30px_rgba(223,165,104,0.08)]"
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover bg-gray-100 border border-[#dfa568]/30 flex-shrink-0" 
                    />
                    <div>
                      <h3 className="font-serif text-sm sm:text-base text-gray-900 font-light line-clamp-1">{item.title}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">Qty: {item.quantity}</p>
                      <span className="text-xs sm:text-sm font-bold text-gray-900 mt-1 block">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2.5 text-red-500 hover:bg-red-50 rounded-full transition-colors cursor-pointer flex-shrink-0"
                    title="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary Box */}
            <div className="lg:col-span-4">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#dfa568]/40 p-6 shadow-[0_15px_40px_rgba(223,165,104,0.12)] space-y-4 sticky top-28">
                <h3 className="font-serif text-xl font-light text-gray-900 border-b border-[#dfa568]/30 pb-3">Order Summary</h3>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-900">₹{subtotal}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-emerald-700 font-medium">Free</span>
                </div>
                
                <div className="border-t border-[#dfa568]/30 pt-3 flex justify-between text-base font-semibold text-gray-900">
                  <span>Total</span>
                  <span>₹{subtotal}</span>
                </div>

                <Link to='/checkout' className="block w-full pt-2">
                  <button className="w-full bg-gray-900 text-white py-3.5 rounded-full font-bold text-xs uppercase tracking-[0.15em] hover:bg-[#a87038] hover:shadow-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer">
                    Proceed to Checkout <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;