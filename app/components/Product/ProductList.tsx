// components/Product/ProductList.tsx
"use client";
import React from "react";
import { Product } from "../../types/product";
import ProductCard from "./ProductCard";
import CategoryFilters from "../Filters/CategoryFilters";
import PriceFilters from "../Filters/PriceFilters";
import StockFilters from "../Filters/StockFilters";
import SortFilters from "../Filters/SortFilters";
import { TTexts } from '../../utils/constants/textConstants';
import { useProductFilter } from "../../hooks/useProductFilter";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const {
    filteredProducts,
    filters,
    sort,
    handleFilterChange,
    handleSortChange,
  } = useProductFilter(products);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-between mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <CategoryFilters
          selectedCategory={filters.category ?? ""}
          onChange={handleFilterChange}
        />
        <PriceFilters
          selectedPrice={String(filters.price ?? "")}
          onChange={handleFilterChange}
        />
        <StockFilters
          inStock={filters.inStock ?? ""}
          onChange={handleFilterChange}
        />
        <SortFilters
          sortBy={sort.sortBy}
          onChange={handleSortChange}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-1 h-auto">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
