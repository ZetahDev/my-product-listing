"use client";
import React, { useEffect } from 'react';
import { useCart } from '@/app/hooks/useCart';
import Cart from '@/app/components/Cart/Cart';

const CartPage: React.FC = () => {
  const { error, clearError } = useCart();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  return <Cart />;
};

export default CartPage;
