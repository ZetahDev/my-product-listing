import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProductProvider } from "./contexts/ProductContext";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { CartProvider } from "./contexts/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "E-Commerce: Online Fashion and Accessories Store",
  icons: {
    icon: "/assets/images/logo.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <CartProvider>
          <ProductProvider>
            <Header />
            <main className="flex-grow bg-slate-900">{children}</main>
            <Footer />
          </ProductProvider>
        </CartProvider>
      </body>
    </html>
  );
}
