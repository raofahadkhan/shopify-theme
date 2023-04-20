import React, { createContext, useContext, useReducer, useState } from "react";
import { queryForGettingAllProducts } from "@/components/querys/QueryForGettingAllProducts";
import { CartReducer } from "@/globalState/reducer/CartReducer";

const CartContext = createContext<any | null>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [navbarcolor, setNavbarcolor] = useState(false);
  const initialState = {
    cart: [],
    shopifyCart: { test: 123 },
    products: {},
    // navbarcolor: false,
  };

  const data = async () => {
    const productData = await getAllProductsDataFromAPI();
    initialState.products = productData;
  };
  data();
  // console.log("init", initialState.products);
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider
      value={{ state, dispatch, setNavbarcolor, navbarcolor }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const CartState = () => {
  return useContext(CartContext);
};

const getAllProductsDataFromAPI = async () => {
  const url = "https://ecomshoptheme.myshopify.com/api/2023-01/graphql.json";
  let response = await fetch(url, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`,
    },
    body: JSON.stringify({ query: queryForGettingAllProducts }),
  });
  return response.json();
};
