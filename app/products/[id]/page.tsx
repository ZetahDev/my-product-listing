// app/products/[id]/page.tsx
"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Product } from "../../types/product";
import { useProductData } from "../../hooks/useProductData";
import ProductDetails from "../../components/Product/ProductDetails";
import { TTexts } from "../../utils/constants/textConstants";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const products = useProductData();

  // Encuentra el producto por ID
  const product = products.find((product: Product) => product.id === Number(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 px-4">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          {TTexts.productNotFound}
        </h1>
        <p className="text-white text-center mb-6">
          {TTexts.productNotAvailable}
        </p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
          onClick={() => router.back()}
        >
          {TTexts.backButton}
        </button>
      </div>
    );
  }

  return <ProductDetails product={product} onGoBack={() => router.back()} />;
};

export default ProductDetailPage;
