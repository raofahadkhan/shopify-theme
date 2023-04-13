import { CartContext } from "@/components/shared/CartContext";
import { useContext, useState } from "react";

export async function incrementLineItem(
  item: any,
  shopifyCart: any,
  numberOfItems: number
) {
  const lineItem =
    !shopifyCart?.data?.cartLinesUpdate && !shopifyCart?.data?.cartLinesAdd
      ? shopifyCart?.data?.cartCreate?.cart.lines.edges.find(
          (ele: any) => ele.node.merchandise.id === item.node.id
        )
      : !shopifyCart?.data?.cartCreate && !shopifyCart?.data?.cartLinesUpdate
      ? shopifyCart?.data?.cartLinesAdd?.cart.lines.edges.find(
          (ele: any) => ele.node.merchandise.id === item.node.id
        )
      : // : !shopifyCart?.data?.cartCreate && !shopifyCart?.data?.cartLinesAdd
        shopifyCart?.data?.cartUpdate?.cart.lines.edges.find(
          (ele: any) => ele.node.merchandise.id === item.node.id
        );

  const lineItemId = lineItem?.node.id;
  console.log("lineItem======= For basiit>", lineItem);
  console.log("lineItemIDDDD======= For fahad>", lineItemId);

  const cartId = !shopifyCart?.data?.cartCreate
    ? shopifyCart?.data?.cartLinesAdd?.cart?.id
    : shopifyCart?.data?.cartCreate?.cart?.id;

  const queryForLineItemsUpdate = `mutation {
    cartLinesUpdate(
      cartId: ${JSON.stringify(cartId)}
      lines: {
        id: ${JSON.stringify(lineItemId)}
        quantity: 10
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
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`,
    },
    body: JSON.stringify({ query: queryForLineItemsUpdate }),
  });
  let parsedCartData = await res.json();
  console.log("Api data", parsedCartData);
  return parsedCartData;
}

export default function IncrementButtons({ item }: { item: any }) {
  const { updatePrice, removeFromCart, shopifyCart, setShopifyCart }: any =
    useContext(CartContext);
  console.log("This is shopify cart:", shopifyCart);
  const [numberOfItems, setNumberOfItems] = useState(1);

  const lineItem = !shopifyCart?.data?.cartCreate
    ? shopifyCart?.data?.cartLinesAdd?.cart.lines.edges.find(
        (ele: any) => ele.node.merchandise.id === item.node.id
      )
    : shopifyCart?.data?.cartCreate?.cart.lines.edges.find(
        (ele: any) => ele.node.merchandise.id === item.node.id
      );

  const lineItemId = lineItem?.node?.id;

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
        onClick={() => {
          incrementPerform(item, shopifyCart);
        }}
        className="py-1 px-3 hover:bg-gray-200 text-center"
      >
        +
      </button>
    </div>
  );
}
