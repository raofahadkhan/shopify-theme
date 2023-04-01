import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/views/Navbar";
import TopLabel from "@/components/views/Toplabel";
import { CartProvider } from "@/components/shared/CartContext";
import { Footer } from "@/components/Footer";
import Productgrid from "@/components/cardgrid";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ParallaxProvider>
			<CartProvider>
				<TopLabel />
				<Component {...pageProps} />
				<Productgrid />
				<Footer />
			</CartProvider>
		</ParallaxProvider>
	);

}
