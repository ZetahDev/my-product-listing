"use client";

import Link from "next/link";
import Image from "next/image";
import { FaList, FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/app/hooks/useCart";
import { IMAGE_PATHS } from "../../utils/constants/imagesConstants";
import { TTexts } from "../../utils/constants/textConstants";

const Header: React.FC = () => {
  const { cart } = useCart();

  // Calculate the total number of items in the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="relative bg-slate-900 shadow-lg text-white p-4">
      <div className="container mx-auto relative h-9">
        {/* Logo */}
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center">
          <Link href="/">
            <Image
              src={IMAGE_PATHS.logo}
              alt="Logo"
              width={80}
              height={80}
              className="h-10 w-10"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="absolute inset-x-0 top-0 flex justify-between items-center px-4">
          <Link href="/" className="flex items-center space-x-1">
            <FaList className="text-xl" />
            <span>{TTexts.productList}</span>
          </Link>
          <Link href="/cart" className="flex items-center space-x-1 text-white hover:text-gray-300">
            <FaShoppingCart className="text-xl" />
            <span>Cart ({cartItemCount})</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
