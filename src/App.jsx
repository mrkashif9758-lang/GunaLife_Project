import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

// Components import
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from '../src/pages/AboutPage';
import ProductDetail from '../src/pages/ProductDetail';
import JournalPage from '../src/pages/JournalPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

// Landing page ke saare sections
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import HorizontalScroll from './components/HorizontalScroll';
import InstagramSection from './components/InstagramSection';
import NewsletterCTA from './components/NewsletterCTA';
import ParallaxHero from './components/ParallaxHero';
import ProductMarquee from './components/ProductMarquee';
import ServiceGrid from './components/ServiceGrid';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

const Home = () => {
  return (
    <>
      <div id="shop-section">
        <Hero />
      </div>
      <div id="best-sellers-section">
        <BestSellers />
      </div>
      <div id="collections-section">
        <ServiceGrid />
      </div>
      <HorizontalScroll />
      <ParallaxHero />
      <InstagramSection />
      <ProductMarquee />
      <NewsletterCTA />
    </>
  );
};

// Helper component to handle automatic scrolling when navigating via hashes
const ScrollToHash = () => {
  const { hash, pathname } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};

// Layout component jo check karega ki Navbar/Footer dikhana hai ya nahi
const Layout = () => {
  const location = useLocation();
  
  // 👈 Yahan `/checkout` bhi add kar diya taaki yahan bhi navbar/footer hide ho jayein
  const hideNavbarFooter = 
    location.pathname === '/login' || 
    location.pathname === '/signup' || 
    location.pathname === '/checkout';

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToHash />
      
      {!hideNavbarFooter && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>

      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  );
}

export default App;