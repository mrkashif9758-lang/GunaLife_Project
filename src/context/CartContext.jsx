import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Local storage se initial state load kar rahe hain taaki page refresh par cart khali na ho
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('aura_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('aura_cart', JSON.stringify(cart));
  }, [cart]);

  // Product add karne ka function
// CartContext.jsx ke andar addToCart ko aise likh le:
const addToCart = (product, qty = 1) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find((item) => item.id === product.id);
    if (existingItem) {
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
      );
    }
    return [...prevCart, { ...product, quantity: qty }];
  });
};

  // Product remove karne ka function
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // 👈 Naya: Quantity update karne ka function (+ aur - buttons ke liye)
  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) // Agar quantity 0 ho jaye toh item remove kar do
    );
  };

  // 👈 Naya: Order place hone ke baad cart saaf karne ke liye
  const clearCart = () => {
    setCart([]);
  };

  // Total items count (jo navbar mein dikhega)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);