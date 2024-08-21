// app/components/Layout/ProductDetails.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Product } from "../../types/product";
import { TTexts } from "../../utils/constants/textConstants";

interface ProductDetailsProps {
  product: Product;
  onGoBack: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onGoBack }) => {
  return (
    <div className="flex flex-col items-center max-h-screen bg-slate-900 px-4">
      <div className="flex flex-col md:flex-row md:justify-center flex-grow mb-4">
        <div className="md:w-1/2">
          <Image
            src={product.imageURL}
            alt={product.name}
            width={400}
            height={600}
            className="w-full max-w-md mx-auto mb-4"
          />
        </div>
        <div className="md:w-1/2 md:ml-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>
          <p className="text-lg text-white mb-4">{product.description}</p>
          <p className="text-lg font-semibold text-white mb-4">
            Precio: ${product.price}
          </p>
          {product.inStock ? (
            <button
              className="mt-4 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              onClick={() => alert(`Producto ${product.name} añadido al carrito!`)}
            >
              {TTexts.addToCart}
            </button>
          ) : (
            <span className="text-red-500 pt-4">{TTexts.outOfStock}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
