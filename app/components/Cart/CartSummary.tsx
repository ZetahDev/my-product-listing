"use client";

import React, { useState } from 'react';
import { useCart } from '@/app/hooks/useCart';
import { TTexts } from '@/app/utils/constants/textConstants';

interface CartSummaryProps {
  className?: string;
  cart: { id: number; price: number; quantity: number }[];
  onClearCart: () => void;
  onPurchase: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ className, cart, onClearCart, onPurchase }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');
  const { total } = useCart();

  const handlePurchase = () => {
    setMessage(`Purchase Successful! Total: $${(cart.reduce((acc, item) => acc + item.price * item.quantity, 0)).toFixed(2)}`);
    setShowPopup(true);
    onPurchase();
  };

  const handleCancel = () => {
    setMessage('Are you sure you want to clear the cart?');
    setShowPopup(true);
  };

  const handleClearCart = () => {
    onClearCart();
    setMessage('Cart has been cleared.');
    setShowPopup(true);
  };

  return (
    <div className={`mt-8 text-right ${className}`}>
      <p className="text-xl font-bold text-center text-white">Total: ${total.toFixed(2)}</p>
      <div className="flex justify-between mt-6">
        <button 
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800" 
          onClick={handleCancel}
        >
          {TTexts.clearCart}
        </button>
        <button 
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 hover:shadow-white" 
          onClick={handlePurchase}
        >
          Shop
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-xl font-bold">Confirmation</h2>
            <p className="mt-2">{message}</p>
            <button 
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
