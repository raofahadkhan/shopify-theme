import { AllCatogryData, AllCatogryDataType } from "@/components/typesandArrays/AllMensData";
import AllMens from "@/components/views/AllMens";
import Navbar from "@/components/views/Navbar";
import { GetStaticPaths } from "next"

const apiUrl = "https://ecomshoptheme.myshopify.com/api/2023-01/graphql.json";

const femaleApiFetchingQuery = `query AllProducts {
  collection(handle: "female"){
    handle
    products(first: 10) {
       edges {
         node {
          images(first: 3){
             edges{
               node{
                url
              }
            }
          },
          handle,
            id,
            title,
            description,
            variants(first: 250){
                       edges{
                         node{
                id,
                  title,
                  price{ amount, currencyCode },
                sku
              }

            }
          }
        }
      }
    }
  }
}`;
const maleApiFetchingQuery = `query AllProducts {
  collection(handle: "male"){
    handle
    products(first: 10) {
       edges {
         node {
          images(first: 3){
             edges{
               node{
                url
              }
            }
          },
          handle,
            id,
            title,
            description,
            variants(first: 250){
                       edges{
                         node{
                id,
                  title,
                  price{ amount, currencyCode },
                sku
              }

            }
          }
        }
      }
    }
  }
}`;

export default function page({ params, allMensProductDatas, allWomanProductData }: any) {
  if (params && allMensProductDatas && allWomanProductData) {

    let particularData = AllCatogryData.find(
      (item: AllCatogryDataType) => item.catogry === params.slug
    );

    if (params.slug === allMensProductDatas.data.collection.handle) {
      return (
        <main>
          <Navbar page="allmen" />
          {particularData && (
            <AllMens slug={params.slug} particularDatas={particularData} apiAllProductData={allMensProductDatas.data.collection.products.edges} />
          )}
        </main>
      );
    } else if (params.slug === allWomanProductData.data.collection.handle) {
      return (
        <main>
          <Navbar page="allmen" />
          {particularData && (
            <AllMens slug={params.slug} particularDatas={particularData} apiAllProductData={allWomanProductData.data.collection.products.edges} />
          )}
        </main>
      );
    } else {
      return (
        <main>
          <Navbar page="preview" />
        </main>
      );
    }

  } else {
    return (
      <p>Loading...</p>
    )
  }
}
export async function getStaticProps(context: any) {
  // console.log(context.params.slug) //slug
  let manResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`
    },
    body: JSON.stringify({ query: maleApiFetchingQuery })
  });
  let womenResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`
    },
    body: JSON.stringify({ query: femaleApiFetchingQuery })
  });
  let allMensProductData = await manResponse.json();
  let allWomanProductData = await womenResponse.json();
  return {
    props: {
      params: context.params,
      allMensProductDatas: allMensProductData,
      allWomanProductData: allWomanProductData,
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