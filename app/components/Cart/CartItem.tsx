"use client";

import React from "react";
import Image from "next/image";
import { CartItem as CartItemType } from "../../types/cartItem";
import { useCart } from "@/app/hooks/useCart";

interface CartItemProps {
  item: CartItemType;
  className?: string;
}

const CartItem: React.FC<CartItemProps> = ({ item, className }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className={`bg-slate-800 p-4 rounded shadow ${className}`}>
      <div className="relative w-full h-32 mb-4">
        <Image src={item.imageURL} alt={item.name} layout="fill" objectFit="contain" />
      </div>
      <h3 className="text-lg font-bold text-white">{item.name}</h3>
      <p className="text-gray-400 truncate">{item.description}</p>
      <p className="text-gray-200 font-semibold">${item.price.toFixed(2)}</p>
      <div className="flex items-center mt-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity === 1}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          -
        </button>
        <span className="mx-2 text-white">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="px-2 py-1 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
      <div className="flex justify-center items-center">
      <button
        onClick={() => removeFromCart(item.id)}
        className="flex mt-2 px-4 py-2 bg-red-500 text-white rounded  hover:bg-red-600 transition"
      >
        Remove
      </button>
      </div>
    </div>
  );
};

export default CartItem;
