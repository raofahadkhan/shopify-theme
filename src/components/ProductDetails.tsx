"use client";
import { CartContext } from "@/components/shared/CartContext";
import { useContext, useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import AskQuestionForm from "./AskQuestionForm";
import MoreDetails from "./MoreDetails";
import SizeChart from "./SizeChart";

type Props = {
  images: string[];
  video?: string;
  videoStatus: boolean;
  data: any;
};

export async function createShopifyCart(variant: any) {
  const variantId = JSON.stringify(variant.node.id);
  const queryForCartCreation = `mutation {
    cartCreate(
      input: {
        lines: [
          {
            quantity: 1
            merchandiseId:${variantId}
          }
        ],
      }
    ) {
      cart {
        id
        createdAt
        updatedAt
        lines(first: 10) {
          edges {
            node {
              id
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
        buyerIdentity {
          deliveryAddressPreferences {
            __typename
          }
        }
        attributes {
          key
          value
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
  `;

  const url = "https://ecomshoptheme.myshopify.com/api/2023-01/graphql.json";
  let res = await fetch(url, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`,
    },
    body: JSON.stringify({ query: queryForCartCreation }),
  });
  return res.json();
}

export async function updateShopifyCart(variant: any, shopifyCart: any) {
  const variantId = JSON.stringify(variant.node.id);
  const cartId = JSON.stringify(shopifyCart?.cart?.id);

  const queryForUpdateShopifyCart = `mutation {  
    cartLinesAdd(
      cartId: ${cartId}
        lines: [
       {
            quantity: 1
            merchandiseId: ${variantId}
          }
    ]
    ) {
      cart {
        id
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
  `;

  const url = "https://ecomshoptheme.myshopify.com/api/2023-01/graphql.json";
  let res = await fetch(url, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`,
    },
    body: JSON.stringify({ query: queryForUpdateShopifyCart }),
  });
  return res.json();
}

export async function checkout(shopifyCart: any) {
  const cartId = JSON.stringify(shopifyCart?.cart?.id);
  const queryForCheckout = `query checkoutURL {
    cart(id: ${cartId}) {
      checkoutUrl
    }
  }
  
  `;

  const url = "https://ecomshoptheme.myshopify.com/api/2023-01/graphql.json";
  let res = await fetch(url, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`,
    },
    body: JSON.stringify({ query: queryForCheckout }),
  });
  return res.json();
}

function ProductDetails({ data, videoStatus, video }: Props) {
  const [price, setPrice] = useState<number>(
    data?.node?.variants?.edges[0]?.node?.price?.amount
  );
  const [title, setTitle] = useState();
  const [variant, setVariant] = useState();
  const [size, setSize] = useState(data.node?.variants?.edges[0]?.node?.title);
  const { addToCart, cart, shopifyCart, setShopifyCart }: any =
    useContext(CartContext);
  const [selected, setSelected] = useState({
    type: "video",
    src: "video.mp4",
  });

  const images = [
    data?.node?.images.edges[0]?.node.url,
    data?.node?.images.edges[1]?.node.url,
    data?.node?.images.edges[2]?.node.url,
  ];

  useEffect(() => {
    const variantt = data?.node?.variants.edges?.find(
      (ele: any) => ele.node.title === size
    );
    setTitle(data?.node?.title);
    setVariant(variantt);
    setPrice(variantt?.node?.price?.amount);
    if (videoStatus === false) {
      setSelected({ type: "image", src: images[0] });
    }
  }, [size]);
  useEffect(() => {
    console.log("all rounder : ", shopifyCart);
    let myPromise = new Promise((resolve, reject) => {
      let shopifyCheckoutRes = checkout(shopifyCart);
      if (shopifyCheckoutRes) {
        resolve(shopifyCheckoutRes);
      } else if (!shopifyCheckoutRes) {
        reject("error");
      }
    });
    myPromise.then((item: any) => {
      const checkoutLink = item?.data?.cart?.checkoutUrl;
      window.open(checkoutLink);
    });
  }, [shopifyCart]);

  async function handleBuyItNow(variant: any, shopifyCart: any) {
    if (cart.length == 0 && Object.entries(shopifyCart).length === 0) {
      addToCart({ ...variant, size, title, images });
      const shopifyCartRes = await createShopifyCart(variant);
      await setShopifyCart(shopifyCartRes.data?.cartCreate);
    } else {
      addToCart({ ...variant, size, title, images });
      const cartUpdateRes = await updateShopifyCart(variant, shopifyCart);
      await setShopifyCart(cartUpdateRes.data?.cartLinesAdd);
      console.log("2nd turn : ", shopifyCart);
    }
  }

  async function handleAddToCart(variant: any, shopifyCart: any) {
    let handleDuplicates = cart.find(
      (cartItem: any) => cartItem.node.id === variant.node.id
    );
    if (handleDuplicates) {
      alert("already added");
    } else {
      if (cart.length === 0 && !shopifyCart) {
        addToCart({ ...variant, size, title, images });
        const shopifyCartRes = await createShopifyCart(variant);
        await setShopifyCart(shopifyCartRes.data?.cartCreate);
      } else {
        addToCart({ ...variant, size, title, images });
        const cartUpdateRes = await updateShopifyCart(variant, shopifyCart);
        await setShopifyCart(cartUpdateRes.data?.cartLinesAdd);
        console.log("shopifyCartState =====>", shopifyCart);

        console.log("from updateshopifycart", cartUpdateRes);
      }
    }
  }
  return (
    <section className="flex flex-col lg:flex-row lg:space-x-8 lg:px-12 ">
      <div className="basis-1/2 flex flex-row-reverse lg:flex-row lg:px-2 space-x-4 self-start static lg:sticky top-0 md:w-full ">
        <div className="flex flex-col lg:items-end items-start md:items-center px-4 lg:pl-0 space-y-4 basis-1/4 ">
          {videoStatus && (
            <div className="relative cursor-pointer">
              {video && (
                <img
                  src={images[2]}
                  alt=""
                  onClick={() => setSelected({ type: "video", src: video })}
                  className={`w-[100px] ${
                    selected.type == "video" ? "ring-2 ring-black" : ""
                  }`}
                />
              )}
              <img
                className="absolute top-1 right-1 w-[25px] h-[25px] "
                src="https://img.icons8.com/ios-filled/256/play-button-circled.png"
              />
            </div>
          )}
          {images.map((image, i) => {
            return (
              <img
                key={i}
                src={image}
                alt=""
                onClick={() => setSelected({ type: "image", src: image })}
                className={`w-[100px] cursor-pointer ${
                  selected.src == image ? "ring-2 ring-black" : ""
                }`}
              />
            );
          })}
        </div>

        <div className="basis-3/4">
          {selected.type == "image" && (
            <img className="w-full" src={selected.src} />
          )}
          {selected.type == "video" && (
            <video loop autoPlay muted className="w-full">
              <source src={video} type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      <div className="basis-1/2 flex flex-col space-y-4 mt-6 lg:mt-0 px-4 lg:px-0">
        <h3 className="text-3xl font-bold">{data ? data?.node?.title : ""}</h3>
        <p className="text-xl tracking-[2px]">{`$${price}`}</p>
        <hr className="bg-gray-300" />
        <p className="text-lg uppercase font-semibold w-full">Size</p>
        <div className="flex space-x-4 flex-wrap">
          {data?.node?.variants?.edges.map((elem: any, index: number) => (
            <button
              className={`w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] transition duration-300 flex-grow-0 flex-shrink-0
               ${
                 size == `${elem.node.title}`
                   ? "ring-black ring-2"
                   : "ring-1 ring-gray-300"
               }`}
              onClick={() => {
                setSize(`${elem.node.title}`);
              }}
              key={index}
            >
              {elem.node.title}
            </button>
          ))}
        </div>

        <button
          className="w-full overflow-hidden group text-center ring-black ring-1 py-3 text-lg font-bold flex items-center"
          onClick={() => handleAddToCart(variant, shopifyCart)}
        >
          <p className="flex-grow group-hover:-translate-x-8 transition duration-200">
            Add to Cart
          </p>
          <div className="w-[20px] translate-x-8 group-hover:-translate-x-20 duration-300 invisible group-hover:inline-flex group-hover:visible">
            <FaLongArrowAltRight />
          </div>
        </button>

        <button
          className="w-full text-center text-white bg-black py-3 text-lg font-bold"
          onClick={() => handleBuyItNow(variant, shopifyCart)}
        >
          Buy it now
        </button>
        <p className="italic tracking-[1px]">
          This is a demonstration store. You can purchase products like this
          from United By Blue
        </p>
        <p className="">
          Like your well-worn pair of jeans in short-sleeve button down form.
          Features an understated plus-sign pattern.
        </p>
        <ul className="list-disc ml-8">
          <li>All-over print </li>
          <li>Full button down placket and collar </li>
          <li>Front left patch pocket </li>
          <li>Natural corozo buttons throughout</li>
          <li>Curved hemline</li>
        </ul>
        <MoreDetails title="Size Chart">
          <SizeChart />
        </MoreDetails>
        <MoreDetails title="Ask a question">
          <AskQuestionForm />
        </MoreDetails>
      </div>
    </section>
  );
}

export default ProductDetails;
