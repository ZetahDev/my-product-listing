import { useCartContext } from "../contexts/CartContext";

// Hook to provide cart actions and state
export const useCart = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
    error,
    clearError,
  } = useCartContext();

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
    error,
    clearError,
  };
};
