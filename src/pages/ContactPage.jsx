import React, { useState } from 'react';
import { Sparkles, Mail, MapPin, Phone, Clock, CheckCircle, Send } from 'lucide-react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 4000);
  };

  return (
    <div 
      // Top is deeper gilt tone (#efe0c4), bottom fades to light cream (#fffbf4)
      style={{ background: 'linear-gradient(to bottom, #efe0c4, #f2e3cb, #fffbf4)' }}
      className="min-h-screen pt-32 pb-28 text-gray-900 relative overflow-hidden"
    >
      {/* Luxurious Gilt Ambient Background Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#dfa568]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#d49452]/15 blur-[120px] pointer-events-none" />

      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#dfa568]/40 text-[#7d5225] text-[10px] uppercase tracking-[0.3em] font-bold shadow-sm mb-4">
          <Sparkles size={12} className="text-[#a87038]" /> Get in Touch
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-gray-900 tracking-tight font-light">
          We’d Love to Hear From You
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-700 font-light max-w-lg mx-auto leading-relaxed">
          Whether you have a question about our clean formulations, personalized rituals, or order support, our concierge team is always here to assist.
        </p>
      </div>

      <div className="max-w-[1250px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">

        {/* Left Side: Contact Information & Cards (Optimized for Mobile Touch Targets) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] border border-[#dfa568]/40 p-6 sm:p-8 shadow-[0_15px_40px_rgba(223,165,104,0.12)] relative overflow-hidden">
            
            <h2 className="font-serif text-2xl text-gray-900 font-light mb-6">Concierge Support</h2>
            
            <div className="space-y-6">
              {/* Email Card (Clickable) */}
              <a href="mailto:support@auraskincare.com" className="flex items-start gap-4 group p-2 rounded-2xl hover:bg-[#dfa568]/10 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#dfa568]/30 flex items-center justify-center text-[#a87038] shadow-sm flex-shrink-0 group-hover:border-[#a87038] transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-[#7d5225] font-bold mb-1">Email Us</span>
                  <span className="text-sm text-gray-900 font-medium group-hover:text-[#a87038] transition-colors">
                    support@auraskincare.com
                  </span>
                </div>
              </a>

              {/* Phone Card (Clickable for Mobile Dialing) */}
              <a href="tel:+18005550199" className="flex items-start gap-4 group p-2 rounded-2xl hover:bg-[#dfa568]/10 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#dfa568]/30 flex items-center justify-center text-[#a87038] shadow-sm flex-shrink-0 group-hover:border-[#a87038] transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-[#7d5225] font-bold mb-1">Call Us (Toll-Free US)</span>
                  <span className="text-sm text-gray-900 font-medium group-hover:text-[#a87038] transition-colors">
                    +1 (800) 555-0199
                  </span>
                </div>
              </a>

              {/* Headquarters */}
              <div className="flex items-start gap-4 p-2">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#dfa568]/30 flex items-center justify-center text-[#a87038] shadow-sm flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-[#7d5225] font-bold mb-1">Headquarters</span>
                  <p className="text-sm text-gray-700 font-light leading-relaxed">
                    742 Evergreen Terrace, Suite 400<br />New York, NY 10012
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 p-2">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#dfa568]/30 flex items-center justify-center text-[#a87038] shadow-sm flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-[#7d5225] font-bold mb-1">Working Hours (EST)</span>
                  <p className="text-sm text-gray-700 font-light leading-relaxed">
                    Monday – Friday: 9:00 AM – 6:00 PM EST<br />Saturday: 10:00 AM – 4:00 PM EST
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] border border-[#dfa568]/40 p-8 sm:p-12 shadow-[0_15px_40px_rgba(223,165,104,0.12)]">
            <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 font-light mb-2">Send a Message</h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light mb-8">
              Fill out the form below and our concierge team will get back to you within 24 business hours.
            </p>

            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center space-y-3">
                <CheckCircle size={40} className="text-emerald-600 mx-auto animate-bounce" />
                <h3 className="font-serif text-xl text-gray-900">Message Sent Successfully!</h3>
                <p className="text-xs text-gray-600 font-light">
                  Thank you for reaching out. We have received your query and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#7d5225] font-bold mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white border border-[#dfa568]/30 rounded-2xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a87038]/30 transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#7d5225] font-bold mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white border border-[#dfa568]/30 rounded-2xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a87038]/30 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#7d5225] font-bold mb-2">Subject</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-white border border-[#dfa568]/30 rounded-2xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#a87038]/30 transition-all shadow-sm cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Order Support">Order Support & Tracking</option>
                    <option value="Skin Consultation">Personalized Skin Consultation</option>
                    <option value="Press & Partnerships">Press & Partnerships</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-[#7d5225] font-bold mb-2">Your Message</label>
                  <textarea 
                    rows={5}
                    required
                    placeholder="How can we help you with your routine today?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white border border-[#dfa568]/30 rounded-2xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a87038]/30 transition-all shadow-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-gray-900 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#a87038] hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <Send size={15} className="group-hover:translate-x-1 transition-transform" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;