import ProductDetails from "@/components/ProductDetails";
// import React, { useEffect } from "react";
// import { useRouter } from "next/router";
// import { AllCatogryData } from "@/components/typesandArrays/AllMensData";
import Navbar from "@/components/views/Navbar";
import { allProductQuery } from "@/components/querys/PreviewAllProductQuery";

type Props = { params: any };

const apiUrl = "https://ecomshoptheme.myshopify.com/api/2023-01/graphql.json";

const images = [
  "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock2_1800x1800.jpg?v=1584466287",
  "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock3_1800x1800.jpg?v=1584466287",
  "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock1_1800x1800.jpg?v=1584466287",
];

const video = "/video.mp4";

// function capitalize(slug: string) {
//   let arr = slug.split("-");

//   for (let i = 0; i < arr.length; i++) {
//     const u = arr[i].charAt(0).toUpperCase();
//     const l = arr[i].slice(1);
//     arr[i] = u + l;
//   }
//   return arr.join(" ");
// }
// function findProduct(slug: string) {
//   const name = capitalize(slug);
//   const product = AllCatogryData[0].productData?.find(
//     (product) => product.name === name
//   );
//   return product;
// }

// const [product, setProduct] = React.useState<any | null>(null);

// const router = useRouter();
// const slug = router.query.id;

// useEffect(() => {
//   if (typeof slug == "string") {
//     setProduct(findProduct(slug));
//   }
// }, [slug]);
// {/* <ProductDetails images={images} video={video} data={product} /> */ }


function findProductUsingLastIndexOfId(itemToMap: any, slug: any) {
  let DataToReturn = itemToMap.find((item: any) => slug === (item.node).handle);
  return DataToReturn
}

export default function Preview({ params, allProductData }: any) {
  if (params && allProductData) {
    let filteredDataForPreviewProduct = findProductUsingLastIndexOfId((allProductData.data.products.edges), params.id)
    console.log("Filetered Data" + filteredDataForPreviewProduct)
    return (
      <>
        <Navbar page="preview" />
        <div className="h-20" />
        <ProductDetails images={images} video={video} data={filteredDataForPreviewProduct.node} />
      </>
    );
  } else {
    return (
      <div>Loading...</div>
    )
  }
}








export async function getStaticProps(context: any) {
  let allProductResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`
    },
    body: JSON.stringify({ query: allProductQuery })
  });
  let allProductData = await allProductResponse.json();
  return {
    props: {
      params: context.params,
      allProductData: allProductData,
    }
  }
}




export async function getStaticPaths() {
  return {
    paths: [
      // { params: { slug: '1' } },
    ],
    fallback: true,
  }
}