import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/views/Navbar";
import TopLabel from "@/components/views/Toplabel";
import { Footer } from "@/components/Footer";
import Productgrid from "@/components/cardgrid";
import { ParallaxProvider } from "react-scroll-parallax";
import CartProvider from "@/globalState/context/CartContext";
import { CartProviderAB } from "@/components/shared/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <CartProvider>
        {/* <CartProviderAB> */}
        <TopLabel />
        <Component {...pageProps} />
        <Productgrid />
        <Footer />
        {/* </CartProviderAB> */}
      </CartProvider>
    </ParallaxProvider>
  );
}
