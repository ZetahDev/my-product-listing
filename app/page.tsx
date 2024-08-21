// app/page.tsx
import productsData from "./data/products.json";
import { Product } from "./types/product";
import { FilterProvider } from "./contexts/FilterContext";

import ProductList from "./components/Product/ProductList";

import { TTexts } from "./utils/constants/textConstants";
import ProductCarousel from "./components/Carousel/ProductCarousel";

const HomePage: React.FC = () => {
  const products = productsData as Product[];

  return (
    <FilterProvider>
      <div className="flex flex-col flex-grow">
        <h1 className="text-2xl text-center text-white font-bold mb-4">{TTexts.productList}</h1>
        <ProductCarousel/>
        <ProductList products={products} />
      </div>
    </FilterProvider>
  );
};

export default HomePage;
