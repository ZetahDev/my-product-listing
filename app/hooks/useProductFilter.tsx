// hooks/useProductFilter.ts
"use client";
import { useState } from 'react';
import { Product } from '../types/product';

interface Filters {
  price?: string;
  category?: string;
  inStock?: string;
}

interface Sort {
  sortBy: string;
}

export function useProductFilter(products: Product[]) {
  const [filters, setFilters] = useState<Filters>({});
  const [sort, setSort] = useState<Sort>({ sortBy: 'price-asc' });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort({ sortBy: e.target.value });
  };

  const filteredProducts = products.filter(product => {
    // Filter by price
    const priceFilter = filters.price ? product.price <= Number(filters.price) : true;

    // Filter by category
    const categoryFilter = filters.category ? product.category === filters.category : true;

    // Filter by stock
    const stockFilter = filters.inStock === undefined
      ? true
      : filters.inStock === 'true'
      ? product.inStock === true
      : filters.inStock === 'false'
      ? product.inStock === false
      : true;

    return priceFilter && categoryFilter && stockFilter;
  });

  // Sort products
  const sortedProducts = filteredProducts.toSorted((a, b) => {
    switch (sort.sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return {
    filteredProducts: sortedProducts,
    filters,
    sort,
    handleFilterChange,
    handleSortChange,
  };
}
