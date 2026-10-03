import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ShieldCheck, Truck, Store, Tag, 
  Lock, CheckCircle, AlertCircle, ShoppingBag 
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { cart } = useCart();
  
  // Shipping Method State: 'delivery' | 'pickup'
  const [shippingMethod, setShippingMethod] = useState('delivery');
  
  // Form Inputs State
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    coupon: ''
  });

  const [couponApplied, setCouponApplied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const shippingFee = shippingMethod === 'delivery' ? (subtotal > 500 ? 0 : 50) : 0;
  const discount = couponApplied ? subtotal * 0.1 : 0; // 10% discount if coupon applied
  const grandTotal = Math.max(0, subtotal + shippingFee - discount);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (formData.coupon.trim() !== '') {
      setCouponApplied(true);
    }
  };

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div 
        style={{ background: 'linear-gradient(to bottom, #efe0c4, #f2e3cb, #fffbf4)' }}
        className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 relative overflow-x-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#dfa568]/15 blur-[130px] pointer-events-none" />

        <div className="max-w-md w-full bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-8 border border-[#dfa568]/40 shadow-[0_15px_40px_rgba(223,165,104,0.15)] text-center relative z-10">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-emerald-200">
            <CheckCircle size={32} />
          </div>
          <h2 className="font-serif text-3xl text-gray-900 font-light">Order Placed Successfully!</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 font-light">
            Thank you for your purchase. We have sent the order confirmation details to <span className="font-bold text-[#7d5225]">{formData.email}</span>.
          </p>
          <div className="mt-8">
            <Link 
              to="/" 
              className="inline-block w-full bg-gray-900 text-white py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-[0.15em] uppercase hover:bg-[#a87038] hover:shadow-lg transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      style={{ background: 'linear-gradient(to bottom, #efe0c4, #f2e3cb, #fffbf4)' }}
      className="min-h-screen pt-24 sm:pt-16 pb-20 text-gray-900 relative overflow-x-hidden"
    >
      {/* Luxurious Gilt Ambient Background Glows */}
      <div className="absolute top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[#dfa568]/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full bg-[#d49452]/15 blur-[120px] pointer-events-none" />

      {/* Top Bar / Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#7d5225] font-bold hover:gap-3 transition-all duration-300"
        >
          <ArrowLeft size={14} /> Back to Bag
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mt-4">
        <h1 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-8 font-light">Secure Checkout</h1>

        <form onSubmit={handleCompleteOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Form Steps */}
          <div className="lg:col-span-7 space-y-6">

            {/* 01. Contact Information */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#dfa568]/40 shadow-[0_10px_30px_rgba(223,165,104,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#7d5225] text-white flex items-center justify-center text-xs font-bold shadow-sm">1</span>
                <h2 className="font-serif text-lg sm:text-xl text-gray-900 font-light">Contact Information</h2>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-600 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="name@example.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#dfa568]/40 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#7d5225] transition-colors shadow-2xs text-gray-900"
                />
              </div>
            </div>

            {/* 02. Shipping Method & Address */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#dfa568]/40 shadow-[0_10px_30px_rgba(223,165,104,0.08)]">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#7d5225] text-white flex items-center justify-center text-xs font-bold shadow-sm">2</span>
                <h2 className="font-serif text-lg sm:text-xl text-gray-900 font-light">Shipping Method & Details</h2>
              </div>

              {/* Delivery Toggle Tabs */}
              <div className="grid grid-cols-2 gap-3 p-1.5 bg-white/70 rounded-2xl border border-[#dfa568]/30 mb-6">
                <button
                  type="button"
                  onClick={() => setShippingMethod('delivery')}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    shippingMethod === 'delivery' 
                      ? 'bg-gray-900 text-white shadow-md' 
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  <Truck size={16} /> Home Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setShippingMethod('pickup')}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    shippingMethod === 'pickup' 
                      ? 'bg-gray-900 text-white shadow-md' 
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  <Store size={16} /> Store Pickup
                </button>
              </div>

              {shippingMethod === 'delivery' ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-600 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      placeholder="John Doe" 
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#dfa568]/40 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#7d5225] shadow-2xs text-gray-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-600 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="+91 98765 43210" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-[#dfa568]/40 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#7d5225] shadow-2xs text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-600 mb-1">City *</label>
                      <input 
                        type="text" 
                        name="city"
                        required
                        placeholder="New Delhi" 
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-[#dfa568]/40 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#7d5225] shadow-2xs text-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-600 mb-1">Street Address *</label>
                    <input 
                      type="text" 
                      name="address"
                      required
                      placeholder="House/Flat number, Street name" 
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#dfa568]/40 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#7d5225] shadow-2xs text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-600 mb-1">Postcode / Zip *</label>
                    <input 
                      type="text" 
                      name="postcode"
                      required
                      placeholder="110001" 
                      value={formData.postcode}
                      onChange={handleInputChange}
                      className="w-full sm:w-1/2 bg-white border border-[#dfa568]/40 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#7d5225] shadow-2xs text-gray-900"
                    />
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-[#efe0c4]/40 border border-[#dfa568]/40 text-xs sm:text-sm text-gray-900">
                  <p className="font-bold mb-1 text-[#7d5225]">Store Pickup Location:</p>
                  <p className="text-gray-700 font-light">Organic Wellness Flagship Store, MG Road, Central Plaza, New Delhi - 110001.</p>
                  <p className="text-[11px] text-emerald-700 mt-2 font-semibold">✓ Ready for pickup within 2 hours of order confirmation.</p>
                </div>
              )}
            </div>

            {/* 03. Coupon Code */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#dfa568]/40 shadow-[0_10px_30px_rgba(223,165,104,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#7d5225] text-white flex items-center justify-center text-xs font-bold shadow-sm">3</span>
                <h2 className="font-serif text-lg sm:text-xl text-gray-900 font-light">Discount Coupon</h2>
              </div>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Tag size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    name="coupon"
                    placeholder="Enter coupon code (e.g. SAVE10)" 
                    value={formData.coupon}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-[#dfa568]/40 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#7d5225] shadow-2xs uppercase text-gray-900"
                  />
                </div>
                <button 
                  type="button"
                  onClick={handleApplyCoupon}
                  className="bg-[#7d5225] text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold hover:bg-[#a87038] transition-colors shadow-sm cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {couponApplied && (
                <p className="text-xs text-emerald-700 mt-2 font-semibold flex items-center gap-1">
                  <CheckCircle size={14} /> Coupon applied successfully (10% OFF)!
                </p>
              )}
            </div>

            {/* 04. Payment Details */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#dfa568]/40 shadow-[0_10px_30px_rgba(223,165,104,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#7d5225] text-white flex items-center justify-center text-xs font-bold shadow-sm">4</span>
                <h2 className="font-serif text-lg sm:text-xl text-gray-900 font-light">Payment Details</h2>
              </div>
              
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-2.5 mb-6">
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5 text-amber-700" />
                <span>All transactions are encrypted and secured. You can pay securely via Credit Card, UPI, or Net Banking on the next gateway step.</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-700 mb-6 font-medium">
                <ShieldCheck size={16} className="text-[#7d5225]" /> 256-bit SSL Secure Checkout Protection
              </div>

              <button 
                type="submit"
                className="w-full bg-gray-900 text-white py-4 rounded-full font-bold text-xs sm:text-sm tracking-[0.15em] uppercase hover:bg-[#a87038] hover:shadow-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Lock size={16} /> Complete Order • ₹{grandTotal.toFixed(2)}
              </button>
            </div>

          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#dfa568]/40 shadow-[0_15px_40px_rgba(223,165,104,0.12)]">
              <h2 className="font-serif text-xl sm:text-2xl text-gray-900 mb-6 pb-4 border-b border-[#dfa568]/30 font-light">Order Summary</h2>

              {/* Items List */}
              <div className="space-y-4 max-h-72 overflow-y-auto pr-1 mb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {cart.length === 0 ? (
                  <p className="text-xs text-gray-500 text-center py-4">Your bag is empty.</p>
                ) : (
                  cart.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-4 py-2 border-b border-[#dfa568]/20 last:border-none">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0 border border-[#dfa568]/30">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-xs sm:text-sm font-light text-gray-900 line-clamp-1">{item.title}</h3>
                          <p className="text-[10px] text-gray-500">Qty: {item.quantity || 1} × ₹{item.price}</p>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-900">₹{(item.price * (item.quantity || 1)).toFixed(2)}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Subtotals & Fees */}
              <div className="space-y-2.5 pt-4 border-t border-[#dfa568]/30 text-xs sm:text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">₹{subtotal.toFixed(2)}</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount (10%)</span>
                    <span>-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span className="font-semibold text-emerald-700">
                    {shippingFee === 0 ? 'Free' : `₹${shippingFee}`}
                  </span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="flex justify-between items-center pt-6 mt-6 border-t border-[#dfa568]/40">
                <span className="font-serif text-lg sm:text-xl text-gray-900 font-light">Grand Total</span>
                <span className="font-serif text-2xl sm:text-3xl text-[#7d5225] font-bold">₹{grandTotal.toFixed(2)}</span>
              </div>

            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;