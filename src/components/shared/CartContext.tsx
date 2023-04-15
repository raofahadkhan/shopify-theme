import { ReactNode, createContext, useEffect, useState } from "react";
import { contextType } from "../typesandArrays/creatContextType";

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
  const [shopifyCart, setShopifyCart] = useState({});
  const [navbarcolor, setNavbarcolors] = useState(false);
  const [price, setPrice] = useState(0);
  const [allProductData, setAllProductData] = useState();
  const data = async () => {
    const dataa = await getAllProductsDataFromAPI();
    setAllProductData(dataa);
  };

  const addToCart = (item: any) => {
    setCart([...cart, item]);
    setPrice(price + Number(item?.node?.price?.amount));
  };
  useEffect(() => {
    data();
  }, []);

  function setNavbarcolor(item: boolean) {
    setNavbarcolors(item);
  }
  function updatePrice(action: string, updatedPrice: string) {
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
