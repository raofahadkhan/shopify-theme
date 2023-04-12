import { useContext } from "react";
import { CartContext } from "@/components/shared/CartContext";
import { useState } from "react";
import { ProductDataType } from "@/components/typesandArrays/AllMensData";
import { log } from "console";

export async function incrementLineItem(
  item: any,
  shopifyCart: any,
  numberOfItems: number
) {
  // console.log("from createShopifyCart", item.node.id);
  const lineItem = !shopifyCart.data?.cartCreate
    ? shopifyCart?.data?.cartLinesAdd?.cart?.lines?.edges?.filter(
        (ele: any) => ele.node.merchandise.id === item.node.id
      )
    : shopifyCart?.data?.cartCreate?.cart?.lines?.edges?.filter(
        (ele: any) => ele.node.merchandise.id === item.node.id
      );

  const lineItemId = lineItem?.map((ele: any) => ele.node.id);
  // const lineItemId = lineItem.node.id;
  console.log("lineItem=======>", lineItem);
  console.log("lineItem=======>", lineItemId);

  const cartId = !shopifyCart.data?.cartCreate
    ? shopifyCart?.data?.cartLinesAdd?.cart?.id
    : shopifyCart?.data?.cartCreate?.cart?.id;

  // console.log("LINE ITEMS CONSOLE=============>", lineItem);
  const queryForLineItemsUpdate = `mutation {
    cartLinesUpdate(
      cartId: ${cartId}
      lines: {
         id: ${lineItemId[0]}
          quantity: 4
      }
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
    body: JSON.stringify({ query: queryForLineItemsUpdate }),
  });
  return res.json();
}

export default function IncrementButtons({ item }: { item: any }) {
  // console.log("INCREMENT BUTTON =======>", item);
  const { updatePrice, removeFromCart, shopifyCart, setShopifyCart }: any =
    useContext(CartContext);
  const [numberOfItems, setNumberOfItems] = useState(1);

  // const lineItem = !shopifyCart.data?.cartCreate
  //   ? shopifyCart?.data?.cartLinesAdd?.cart.lines.edges.find(
  //       (ele: any) => ele.node.merchandise.id === item.node.id
  //     )
  //   : shopifyCart?.data?.cartCreate?.cart.lines.edges.find(
  //       (ele: any) => ele.node.merchandise.id === item.node.id
  //     );
  // const lineItemId = lineItem?.map((ele: any) => ele.node.id);
  // console.log("id of line item", lineItemId);
  console.log("item", item);
  console.log("console of shopifyCart", shopifyCart);
  // console.log("console of lineItems", lineItem);
  console.log("console of cart", shopifyCart);
  console.log("console of cart data", shopifyCart);
  // console.log("final response", shopifyCart);

  console.log(
    "RETURNING SHOPIFY CART",
    JSON.stringify(
      shopifyCart.data?.cartCreate?.cart?.lines?.edges[0]?.node?.merchandise.id
    )
  );

  console.log("RETURNING variant id", JSON.stringify(item.node.id));

  // console.log(
  //   "///////////////////////",
  //   String(
  //     shopifyCart?.data?.cartLinesAdd?.cart?.lines?.edges[0]?.node?.merchandise
  //       ?.id
  //   ) == String(item?.node?.id)
  // );
  // const lineItem = shopifyCart.data?.cartLinesAdd?.cart?.lines?.edges?.find(
  //   (ele: any) => ele.node?.merchandise?.id === item.node?.id
  // );
  // console.log("RETURNING LINE ITEM", lineItem);

  // const cartId = !shopifyCart.data?.cartCreate
  //   ? JSON.stringify(shopifyCart?.data?.cartLinesAdd?.cart?.id)
  //   : JSON.stringify(shopifyCart?.data?.cartCreate?.cart?.id);

  // console.log(cartId);
  // =====================================

  function decrementPerform() {
    if (numberOfItems > 1) {
      setNumberOfItems(numberOfItems - 1);
    } else {
      removeFromCart(item);
    }
    updatePrice("substraction", item.node.price.amount);
  }
  async function incrementPerform(item: any, shopifyCart: any) {
    setNumberOfItems(numberOfItems + 1);
    updatePrice("addition", item.node.price.amount);
    const shopifyCartRes = await incrementLineItem(
      item,
      shopifyCart,
      numberOfItems
    );
    await setShopifyCart(shopifyCartRes);
    console.log("INCREMENTED RESPONSE +++++++++", shopifyCartRes);
  }
  return (
    <div className="border-2 flex justify-center">
      <button
        className="py-1 px-3 hover:bg-gray-200 text-center"
        onClick={decrementPerform}
      >
        -
      </button>
      <div className="py-1 px-3 text-center">{numberOfItems}</div>
      <button
        onClick={() => incrementPerform(item, shopifyCart)}
        className="py-1 px-3 hover:bg-gray-200 text-center"
      >
        +
      </button>
    </div>
  );
}
