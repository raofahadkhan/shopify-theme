import { createContext, useEffect, useReducer, useState } from "react";
import { ProductDataType } from "../typesandArrays/AllMensData";
import { contextType } from "../typesandArrays/creatContextType";
import { ReactNode } from "react";

export const CartContext = createContext<contextType | null>(null);

const queryForGettingAllProducts = `{
  products(first:25) {
    edges {
      node {
          variants(first:250){
              edges{
                  node{
                      id,
                      title,
                      price{
                          amount,
                          currencyCode
                      },
                      sku


                  }
              }
          }
          handle
          images(first:3){
              edges{
                  node{
                      url
                  }
              }
          },
        id,
        title,
        description
      }
    }
  }
}
`;

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

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart]: any = useState([]);
  const [shopifyCart, setShopifyCart] = useState([]);

  // const cartReducer = (state: any, action: any) => {
  //   switch (action.type) {
  //     default:
  //       return state;
  //   }
  // };
  // const [state, dispatch] = useReducer(cartReducer, cart);

  const [navbarcolor, setNavbarcolors] = useState(false);
  const [price, setPrice] = useState(0);
  const [allProductData, setAllProductData] = useState();
  const data = async () => {
    const dataa = await getAllProductsDataFromAPI();
    // console.log(dataa);
    setAllProductData(dataa);
  };

  const addToCart = (item: any) => {
    // let handleDuplicates = cart.find(
    //   (cartItem: any) => cartItem.node.id === item.node.id
    // );

    // if (handleDuplicates) {
    //   // setCart((item.count += 1));
    //   alert("already added");
    // } else {
    setCart([...cart, item]);
    setPrice(price + Number(item?.node?.price?.amount));
    // }
    // console.log("raofahadkhan", handleDuplicates);
    // console.log("ITEM===========", item.node.id);
    // console.log(
    //   "CART============",
    //   cart.find((cartItem: any) => cartItem.node.id)
    // );
  };
  useEffect(() => {
    data();
  }, []);

  function setNavbarcolor(item: boolean) {
    setNavbarcolors(item);
  }
  function updatePrice(action: string, updatedPrice: string) {
    // console.log("safsdfaf", updatedPrice);
    if (action === "addition") {
      setPrice(price + Number(updatedPrice));
    } else if (action == "substraction") {
      setPrice(price - Number(updatedPrice));
    }
  }

  const removeFromCart = (item: any) => {
    let remaningData = cart.filter(
      (cartItem: any) => cartItem.node.id !== item.node.id
    );
    setCart(remaningData);
    // console.log(cart);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        price,
        updatePrice,
        navbarcolor,
        setNavbarcolor,
        allProductData,
        shopifyCart,
        setShopifyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
