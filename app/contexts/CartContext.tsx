"use client";

import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types/product';

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
  error: string | null;
  clearError: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const addToCart = (product: Product) => {
    try {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);

        if (existingItem) {
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    } catch (err) {
      setError('Failed to add item to cart.');
    }
  };

  const removeFromCart = (id: number) => {
    try {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    } catch (err) {
      setError('Failed to remove item from cart.');
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    try {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    } catch (err) {
      setError('Failed to update item quantity.');
    }
  };

  const clearCart = () => {
    try {
      setCart([]);
    } catch (err) {
      setError('Failed to clear the cart.');
    }
  };

  const clearError = () => {
    setError(null);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total, error, clearError }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
