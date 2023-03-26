import Head from "next/head";
import TopLabel from "@/components/views/Toplabel";
import SecondaryTextAfterHero from "@/components/views/SecondaryTextHero";
import ImageHoverEffect from "@/components/views/ImageHoverEffect";
import HeroSection from "@/components/views/HeroSection";
import Carousel from "@/components/Carousel";
import ProductDetails from "@/components/ProductDetails";

const images = [
  "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock2_1800x1800.jpg?v=1584466287",
  "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock3_1800x1800.jpg?v=1584466287",
  "https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock1_1800x1800.jpg?v=1584466287",
];
const video = "video.mp4";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shopify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen">
        <HeroSection />
        <SecondaryTextAfterHero />
        <div className="overflow-hidden">
          <Carousel />
        </div>
        <ImageHoverEffect />
        <div className="h-[15vh]" />
        {/* <ProductDetails images={images} video={video} /> */}
      </main>
    </>
  );
}
