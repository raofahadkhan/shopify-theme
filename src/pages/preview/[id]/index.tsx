import ProductDetails from "@/components/ProductDetails";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { AllCatogryData } from "@/components/typesandArrays/AllMensData";
import { CartContext } from "@/components/shared/CartContext";
import { useContext } from "react";

type Props = { params: any };

const images = [
  "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock2_1800x1800.jpg?v=1584466287",
  "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock3_1800x1800.jpg?v=1584466287",
  "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock1_1800x1800.jpg?v=1584466287",
];

const video = "/video.mp4";

function capitalize(slug: string) {
  let arr = slug.split("-");

  for (let i = 0; i < arr.length; i++) {
    const u = arr[i].charAt(0).toUpperCase();
    const l = arr[i].slice(1);
    arr[i] = u + l;
  }
  return arr.join(" ");
}
function findProduct(slug: string) {
  const name = capitalize(slug);
  const product = AllCatogryData[0].productData?.find(
    (product) => product.name === name
  );
  return product;
}

export default function Preview({ }: Props) {
  const { setNavbarcolor }: any = useContext(CartContext);
  setTimeout(() => {
    setNavbarcolor(true);
  }, 100);
  const [product, setProduct] = React.useState<any | null>(null);

  const router = useRouter();
  const slug = router.query.id;

  useEffect(() => {
    if (typeof slug == "string") {
      setProduct(findProduct(slug));
    }
  }, [slug]);
  if (product == null) {
    return <h1>Loading..</h1>;
  }
  return (
    <>
      <div className="h-[50vh]" />
      <ProductDetails images={images} video={video} data={product} />
      <div className="h-[50vh]" />
    </>
  );
}
