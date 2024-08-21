"use client";

import React from 'react';
import { useCart } from '@/app/hooks/useCart';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { TTexts } from '../../utils/constants/textConstants';

const Cart: React.FC = () => {
  const { cart, error, clearCart } = useCart();

  const handleClearCart = () => {
    clearCart();
  };

  const handlePurchase = () => {
    clearCart();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">{TTexts.shoppingCart}</h1>
      {error && (
        <div className="mb-4 p-2 text-red-500 bg-red-100 rounded">
          {error}
        </div>
      )}
      {cart.length === 0 ? (
        <p className="text-center text-gray-200">{TTexts.cartEmpty}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} className="max-w-xs flex-1" />
          ))}
        </div>
      )}
      <CartSummary
        className="mt-6 bg-slate-950 p-4 rounded"
        cart={cart}
        onClearCart={handleClearCart}
        onPurchase={handlePurchase}
      />
    </div>
  );
};

export default Cart;
