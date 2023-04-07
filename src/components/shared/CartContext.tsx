import { createContext, useState } from "react";
import { ProductDataType } from "../typesandArrays/AllMensData";
import { contextType } from "../typesandArrays/creatContextType";
import { ReactNode } from "react";

export const CartContext = createContext<contextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart]: any = useState([]);
  const [navbarcolor, setNavbarcolors] = useState(false);
  const [price, setPrice] = useState(0);
  const addToCart = (item: ProductDataType) => {
    setCart([...cart, item]);
    setPrice(Number(item.price));
  };
  function setNavbarcolor(item: boolean) {
    setNavbarcolors(item)
  }
  function updatePrice(action: string, updatedPrice: string) {
    if (action === "addition") {
      setPrice(price + Number(updatedPrice));
    } else if (action == "substraction") {
      setPrice(price - Number(updatedPrice));
    }
  }

  const removeFromCart = (item: ProductDataType) => {
    let remaningData = cart.filter(
      (cartItem: ProductDataType) => cartItem.imageUrl !== item.imageUrl
    );
    setCart(remaningData);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, price, updatePrice, navbarcolor, setNavbarcolor }}
    >
      {children}
    </CartContext.Provider>
  );
};
