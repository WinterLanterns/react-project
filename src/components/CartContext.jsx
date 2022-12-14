import { createContext, useContext, useState, useEffect } from "react";
export const CartContext = createContext({});
export function useCartData() {
  return useContext(CartContext);
}
export function CartItem({ children }) {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const apiPull = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    return json;
  };
  const [cart, setCart] = useState([]);
  useEffect(() => {
    apiPull().then((data) => {
      return setProducts(data);
    });
  }, []);
  return (
    <CartContext.Provider
      value={{ products, quantity, setQuantity, cart, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
