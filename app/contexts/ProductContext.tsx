// app/contexts/ProductContext.tsx
"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { Product } from "../types/product";

interface ProductContextType {
  products: Product[];
  setProducts: (products: Product[]) => void;
  filters: any;
  setFilters: (filters: any) => void;
  sort: any;
  setSort: (sort: any) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({});

  return (
    <ProductContext.Provider
      value={{ products, setProducts, filters, setFilters, sort, setSort }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
