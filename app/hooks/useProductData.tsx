import { useEffect } from "react";
import { useProductContext } from "../contexts/ProductContext";
import productsData from "../data/products.json";
import { Product } from "../types/product";

export const useProductData = () => {
  const { products, setProducts } = useProductContext();

  useEffect(() => {
    // Simulating API request
    setProducts(productsData as Product[]);
  }, [setProducts]);

  return products;
};
