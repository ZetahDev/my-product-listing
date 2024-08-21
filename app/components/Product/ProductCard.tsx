"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Product } from "../../types/product";
import { TTexts } from "../../utils/constants/textConstants";
import { useCart } from "@/app/hooks/useCart";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const router = useRouter();
  const { addToCart, error, clearError } = useCart();

  const handleOpenDetail = (id: number) => {
    setIsOpenDetail(true);
    router.push(`/products/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    try {
      addToCart(product);
    } catch (err) {
      console.error('Error adding to cart:', err);
    }
  };

  return (
    <div
      className="bg-slate-800 border-gray-300 border-2 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 h-[90%] cursor-pointer"
      onClick={() => handleOpenDetail(product.id)}
    >
      <div className="w-[150px] h-[220px] relative mb-4">
        <Image
          src={product.imageURL}
          alt={product.name}
          objectFit="contain"
          fill
          className="shadow-md rounded-md"
        />
      </div>
      <h3 className="text-lg font-bold text-slate-200 mt-2 text-center">{product.name}</h3>
      <p className="text-gray-400 text-sm mt-1 text-center line-clamp-3 overflow-x-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
        {product.description}
      </p>
      <p className="text-gray-200 font-semibold mt-2 text-center">
        ${product.price}
      </p>
      <p className="text-blue-500 text-sm mt-1 text-center italic">
        Categoría: {product.category}
      </p>
      {product.inStock ? (
        <button
          onClick={handleAddToCart}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          {TTexts.addToCart}
        </button>
      ) : (
        <span className="text-red-500 pt-4">{TTexts.outOfStock}</span>
      )}
      {error && (
        <div className="mt-2 p-2 text-red-500 bg-red-100 rounded" onClick={clearError}>
          {error}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
