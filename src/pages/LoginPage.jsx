import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Lock, ArrowRight, CheckCircle, ArrowLeft, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Yahan aap apna backend/auth logic add kar sakte hain
  };

  return (
    <div 
      style={{ background: 'linear-gradient(to bottom, #efe0c4, #f2e3cb, #fffbf4)' }}
      className="min-h-screen py-6 px-4 sm:px-6 flex items-center justify-center text-gray-900 relative overflow-x-hidden"
    >
      {/* Luxurious Gilt Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#dfa568]/15 blur-[100px] pointer-events-none" />

      {/* Back to Home Button */}
      <div className="absolute top-4 left-4 z-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#7d5225] font-bold bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#dfa568]/40 hover:bg-white transition-all shadow-sm"
        >
          <ArrowLeft size={13} /> Back to Home
        </Link>
      </div>

      <div className="w-full max-w-md relative z-10 mt-10 sm:mt-6">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#dfa568]/40 p-6 sm:p-8 shadow-[0_15px_40px_rgba(223,165,104,0.12)] relative overflow-hidden">
          
          <div className="text-center mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#efe0c4]/60 backdrop-blur-sm text-[#7d5225] text-[9px] uppercase tracking-[0.3em] font-bold border border-[#dfa568]/40 shadow-2xs mb-2">
              <Sparkles size={11} /> Welcome Back
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl text-gray-900 font-light tracking-tight">
              Sign In to Luxury
            </h1>
            <p className="mt-1 text-[11px] sm:text-xs text-gray-600 font-light">
              Enter your credentials to manage your rituals & saved orders.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 text-center space-y-2">
              <CheckCircle size={32} className="text-emerald-700 mx-auto animate-bounce" />
              <h3 className="font-serif text-base text-gray-900">Signed In Successfully!</h3>
              <p className="text-[11px] text-gray-600 font-light">Redirecting you to your dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[9px] uppercase tracking-[0.2em] text-[#7d5225] font-bold mb-1">Email Address *</label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="email" 
                    required
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#dfa568]/40 rounded-xl pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#7d5225] transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-[9px] uppercase tracking-[0.2em] text-[#7d5225] font-bold">Password *</label>
                  <a href="#forgot" className="text-[10px] text-[#7d5225] hover:underline font-bold">Forgot?</a>
                </div>
                <div className="relative">
                  <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white border border-[#dfa568]/40 rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#7d5225] transition-all shadow-2xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-1 inline-flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl font-bold text-xs tracking-[0.15em] uppercase hover:bg-[#a87038] hover:shadow-lg transition-all duration-300 shadow-md group cursor-pointer"
              >
                Sign In <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          <div className="text-center mt-5 pt-4 border-t border-[#dfa568]/30">
            <p className="text-[11px] text-gray-600 font-light">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#7d5225] font-bold hover:underline">
                Create Account
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;