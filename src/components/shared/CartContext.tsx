import { createContext, useEffect, useState } from "react";
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
  const [navbarcolor, setNavbarcolors] = useState(false);
  const [price, setPrice] = useState(0);
  const [allProductData, setAllProductData] = useState();
  const data = async () => {
    const dataa = await getAllProductsDataFromAPI();
    console.log(dataa);
    setAllProductData(dataa);
  };
  useEffect(() => {
    data();
  }, []);

  const addToCart = (item: any) => {
    setCart([...cart, item]);
    setPrice(price+Number(item?.node?.price?.amount));
  };
  function setNavbarcolor(item: boolean) {
    setNavbarcolors(item);
  }
  function updatePrice(action: string, updatedPrice: string) {
    console.log("safsdfaf", updatedPrice);
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
      value={{
        cart,
        addToCart,
        removeFromCart,
        price,
        updatePrice,
        navbarcolor,
        setNavbarcolor,
        allProductData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
