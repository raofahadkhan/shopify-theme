import { PreLoader } from "@/components/assets";
import { AllCatogryData, AllCatogryDataType } from "@/components/typesandArrays/AllMensData";
import AllMens from "@/components/views/AllMens";
import Navbar from "@/components/views/Navbar";
import { GetStaticPaths } from "next"
import Image from "next/image";
import { maleApiFetchingQuery, maleBoardshotsApiFetchingQuery, maleJacketsApiFetchingQuery, maleSaleApiFetchingQuery, maleShirtsApiFetchingQuery } from "@/components/querys/MaleQuerys";
import { maleShortsApiFetchingQuery } from "@/components/querys/MaleQuerys";
import { femaleApiFetchingQuery, femaleDressesApiFetchingQuery, femaleJacketsApiFetchingQuery, femalePantsApiFetchingQuery, femaleShirtsApiFetchingQuery } from "@/components/querys/FemaleQuerys";

const apiUrl = "https://ecomshoptheme.myshopify.com/api/2023-01/graphql.json";

export default function page({ params, allCatogryDataofMensFromApi, allCatogryDataofWomensFromApi }: any) {
  if (params && allCatogryDataofMensFromApi && allCatogryDataofWomensFromApi) {

    let particularData = AllCatogryData.find(
      (item: AllCatogryDataType) => item.catogry === params.slug
    );
    if (params.slug === allCatogryDataofMensFromApi.data1.data.collection.handle) {
      let navigationData: [string, string, string, string, string, string] = ["All Men", "Shirts", "Shorts", "Boardshots", "Jackets", "Sale"];
      return (
        <main>
          <Navbar page="allmen" />
          {particularData && (
            <AllMens navigaitonData={navigationData} slug={params.slug} particularDatas={particularData} apiAllProductData={allCatogryDataofMensFromApi} />
          )}
        </main>
      );
    } else if (params.slug === allCatogryDataofWomensFromApi.data1.data.collection.handle) {
      let navigationData: [string, string, string, string, string] = ["All Women", "Dresses", "Jackets", "Shirts", "Pants"];
      return (
        <main>
          <Navbar page="allmen" />
          {particularData && (
            <AllMens navigaitonData={navigationData} slug={params.slug} particularDatas={particularData} apiAllProductData={allCatogryDataofWomensFromApi} />
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
      <div className="flex items-center justify-center">
        <Image width={250} height={250} src={PreLoader} alt="Pre-Loader" />
      </div>
    )
  }
}
export async function getStaticProps(context: any) {
  // console.log(context.params.slug) //slug

  // Men Api Fetching
  let manResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`
    },
    body: JSON.stringify({ query: maleApiFetchingQuery })
  });


  let manShortsResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`
    },
    body: JSON.stringify({ query: maleShortsApiFetchingQuery })
  });
  let manShirtsResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`
    },
    body: JSON.stringify({ query: maleShirtsApiFetchingQuery })
  });
  let manBoardshotsResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`
    },
    body: JSON.stringify({ query: maleBoardshotsApiFetchingQuery })
  });
  let manJacketsResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`
    },
    body: JSON.stringify({ query: maleJacketsApiFetchingQuery })
  });
  let manSalesResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`
    },
    body: JSON.stringify({ query: maleSaleApiFetchingQuery })
  });


  // Women Api Fetching
  let womenResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`
    },
    body: JSON.stringify({ query: femaleApiFetchingQuery })
  });
  let womenJacketsResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`
    },
    body: JSON.stringify({ query: femaleJacketsApiFetchingQuery })
  });
  let womenPantsResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`
    },
    body: JSON.stringify({ query: femalePantsApiFetchingQuery })
  });
  let womenShirtsResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`
    },
    body: JSON.stringify({ query: femaleShirtsApiFetchingQuery })
  });
  let womenDressesResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      "X-Shopify-Storefront-Access-Token": `${process.env.API_KEY}`
    },
    body: JSON.stringify({ query: femaleDressesApiFetchingQuery })
  });




  // Converting Mens data into json form
  let allMensProductData = await manResponse.json();
  let manShortsProductData = await manShortsResponse.json();
  let manShirtsProductData = await manShirtsResponse.json();
  let manBoardshotsProductData = await manBoardshotsResponse.json();
  let manJacketsProductData = await manJacketsResponse.json();
  let manSalesProductData = await manSalesResponse.json();
  let allCatogryDataofMensFromApi = {
    data1: await allMensProductData,
    data2: await manShortsProductData,
    data3: await manShirtsProductData,
    data4: await manBoardshotsProductData,
    data5: await manJacketsProductData,
    data6: await manSalesProductData,
  }

  // Converting Womens data into json form
  let allWomanProductData = await womenResponse.json();
  let WomanJacketsProductData = await womenJacketsResponse.json();
  let WomanPantsProductData = await womenPantsResponse.json();
  let WomanShirtsProductData = await womenShirtsResponse.json();
  let WomanDressesProductData = await womenDressesResponse.json();
  let allCatogryDataofWomensFromApi = await {
    data1: await allWomanProductData,
    data2: await WomanJacketsProductData,
    data3: await manBoardshotsProductData,
    data4: await WomanPantsProductData,
    data5: await WomanShirtsProductData,
    data6: await WomanDressesProductData,
  }
  return {
    props: {
      params: context.params,
      allCatogryDataofMensFromApi: allCatogryDataofMensFromApi,
      allCatogryDataofWomensFromApi: allCatogryDataofWomensFromApi,
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