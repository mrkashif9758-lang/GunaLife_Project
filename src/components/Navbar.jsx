import { Search, User, ShoppingBag, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const Navbar = () => {
    const { totalItems } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Search state variables
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `/#${sectionId}`;
        }
    };

    const navLinksLeft = [
        { name: 'Shop', target: 'shop-section' },
        { name: 'Best Sellers', target: 'best-sellers-section' },
        { name: 'Collections', target: 'collections-section' }
    ];

    const navLinksRight = [
        { name: 'About', path: '/about' },
        { name: 'Journal', path: '/journal' },
        { name: 'Contact', path: '/contact' }
    ];

    // Filter products based on search input
    const filteredProducts = searchQuery.trim() === '' ? [] : products.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelectProduct = (productId) => {
        setSearchOpen(false);
        setSearchQuery('');
        navigate(`/product/${productId}`);
    };

    return (
        <>
            {/* Slim Floating Rounded Navbar Container */}
            <div className="fixed top-0 left-0 w-full z-50 px-4 pt-3 transition-all duration-500">
                <nav className={`max-w-[1250px] mx-auto rounded-full transition-all duration-500 border ${
                    isScrolled 
                        ? 'bg-white/85 backdrop-blur-md border-black/10 shadow-lg py-1' 
                        : 'bg-[#FBFAF7]/90 backdrop-blur-md border-black/10 shadow-md py-1.5'
                }`}>
                    <div className="px-6 md:px-8 h-12 md:h-14 flex items-center justify-between relative">

                        {/* Mobile Hamburger Button */}
                        <div className="flex items-center md:hidden z-10">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle Menu"
                                className="p-1.5 text-gray-800 hover:text-[var(--primary)] transition-colors"
                            >
                                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>

                        {/* Left Tabs - Desktop */}
                        <div className="hidden md:flex items-center gap-1 z-10">
                            {navLinksLeft.map((tab) => (
                                <button
                                    key={tab.name}
                                    onClick={() => scrollToSection(tab.target)}
                                    className="px-3 py-1.5 rounded-full text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-gray-700 hover:text-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all cursor-pointer"
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>

                        {/* Center 3D Enhanced Logo - Larger & Floating Pop-out */}
                        <Link
                            to="/"
                            className="flex items-center justify-center group absolute left-1/2 -translate-x-1/2 z-20"
                        >
                            <img
                                src="/logo.png"
                                alt="Aura Skincare"
                                className="h-16 md:h-20 w-auto object-contain transition-all duration-300 transform group-hover:scale-110 drop-shadow-[0_8px_12px_rgba(0,0,0,0.18)]"
                            />
                        </Link>

                        {/* Right Tabs & Icons */}
                        <div className="flex items-center gap-2 md:gap-3 z-10">
                            <div className="hidden md:flex items-center gap-1">
                                {navLinksRight.map((tab) => (
                                    <Link
                                        key={tab.name}
                                        to={tab.path}
                                        className="px-3 py-1.5 rounded-full text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-gray-700 hover:text-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all"
                                    >
                                        {tab.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Action Icons */}
                            <div className="flex items-center gap-1 md:gap-2 border-l border-black/10 pl-2 md:pl-3">
                                <button
                                    onClick={() => setSearchOpen(true)}
                                    aria-label="Search"
                                    className="p-2 rounded-full hover:bg-[var(--primary)]/5 text-gray-800 hover:text-[var(--primary)] transition-all cursor-pointer"
                                >
                                    <Search size={20} />
                                </button>
                                <Link 
                                    to="/login" 
                                    aria-label="Account" 
                                    className="hidden sm:flex p-2 rounded-full hover:bg-[var(--primary)]/5 text-gray-800 hover:text-[var(--primary)] transition-all"
                                >
                                    <User size={20} />
                                </Link>
                                <Link 
                                    to="/cart" 
                                    aria-label="Shopping Bag" 
                                    className="relative p-2 rounded-full hover:bg-[var(--primary)]/5 text-gray-800 hover:text-[var(--primary)] transition-all"
                                >
                                    <ShoppingBag size={20} />
                                    {totalItems > 0 && (
                                        <span className="absolute top-0.5 right-0.5 bg-[var(--primary)] text-[var(--primary-foreground)] text-[14px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold shadow-sm animate-pulse">
                                            {totalItems}
                                        </span>
                                    )}
                                </Link>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>

            {/* Interactive Search Modal / Overlay */}
            {searchOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex flex-col items-center justify-start pt-24 md:pt-32 px-4 animate-in fade-in duration-300">
                    <div className="bg-white w-full max-w-2xl rounded-3xl border border-gray-100 p-6 md:p-8 shadow-2xl relative">

                        {/* Close Modal Button */}
                        <button
                            onClick={() => setSearchOpen(false)}
                            className="absolute top-6 right-6 p-2.5 rounded-full bg-gray-100 hover:bg-[var(--primary)]/10 text-gray-700 hover:text-[var(--primary)] transition-colors"
                        >
                            <X size={18} />
                        </button>

                        <div className="flex items-center gap-2 mb-2 text-[var(--primary)] font-semibold tracking-wider text-xs uppercase">
                            <Sparkles size={14} /> Quick Discovery
                        </div>
                        <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6">Find Your Ritual</h3>

                        {/* Search Input Bar */}
                        <div className="relative mb-6">
                            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                autoFocus
                                placeholder="Search by name or category (e.g., Cleanser, Serum)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all"
                            />
                        </div>

                        {/* Search Results Display Area */}
                        <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
                            {searchQuery.trim() !== '' && filteredProducts.length === 0 && (
                                <p className="text-center text-xs text-gray-500 py-8">No products found matching "{searchQuery}".</p>
                            )}

                            {searchQuery.trim() === '' && (
                                <p className="text-center text-xs text-gray-400 py-8">Type something to explore our formulation library...</p>
                            )}

                            {filteredProducts.map((p) => (
                                <div
                                    key={p.id}
                                    onClick={() => handleSelectProduct(p.id)}
                                    className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50/60 hover:bg-[var(--primary)]/5 transition-all cursor-pointer group border border-transparent hover:border-[var(--primary)]/30"
                                >
                                    <div className="flex items-center gap-4">
                                        <img src={p.image} alt={p.title} className="w-12 h-12 rounded-xl object-cover bg-purple-100 shadow-inner" />
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest text-[var(--primary)] font-bold">{p.category}</span>
                                            <h4 className="font-serif text-sm text-gray-900 font-medium group-hover:text-[var(--primary)] transition-colors">{p.title}</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-semibold text-gray-800">₹{p.price}</span>
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] group-hover:border-[var(--primary)] transition-all shadow-sm">
                                            <ArrowUpRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Navigation Drawer Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)}>
                    <div
                        className="absolute top-20 left-4 right-4 bg-[#FBFAF7] rounded-3xl border border-black/10 shadow-2xl py-8 px-8 flex flex-col gap-4 animate-in slide-in-from-top duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--primary)] font-bold mb-2">Navigation Menu</p>

                        {navLinksLeft.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => scrollToSection(tab.target)}
                                className="text-left text-lg font-serif text-gray-800 tracking-wide py-2.5 border-b border-black/5 hover:text-[var(--primary)] transition-colors"
                            >
                                {tab.name}
                            </button>
                        ))}

                        {navLinksRight.map((tab) => (
                            <Link
                                key={tab.name}
                                to={tab.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-left text-lg font-serif text-gray-800 tracking-wide py-2.5 border-b border-black/5 hover:text-[var(--primary)] transition-colors"
                            >
                                {tab.name}
                            </Link>
                        ))}

                        <div className="flex items-center justify-between pt-4 mt-2 border-t border-black/10">
                            <Link
                                to="/login"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-800 hover:text-[var(--primary)]"
                            >
                                <User size={16} /> My Account
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;