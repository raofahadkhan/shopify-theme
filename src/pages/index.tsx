import Carousel from "@/components/Carousel";
import Svggrid from "@/components/home/Svggrid";
import Product1 from "@/components/home/journalcard";
import { Subscribe } from "@/components/home/signupcomponent";
import HeroSection from "@/components/views/HeroSection";
import ImageHoverEffect from "@/components/views/ImageHoverEffect";
import Navbar from "@/components/views/Navbar";
import SecondaryTextAfterHero from "@/components/views/SecondaryTextHero";
import Head from "next/head";
import { useEffect } from "react";
import Gift from "../components/Gift";
import Hero from "../components/Hero";
import Parallex from "../components/Parallex";
import Shop from "../components/Shop";
import Swiper from "../components/Swiper";

const images = [
	"https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock2_1800x1800.jpg?v=1584466287",
	"https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock3_1800x1800.jpg?v=1584466287",
	"https://cdn.shopify.com/s/files/1/2091/0251/products/m-wenlock1_1800x1800.jpg?v=1584466287",
];
const video = "video.mp4";

export default function Home() {
	useEffect(() => {
		const elements = document.querySelectorAll(
			".animation_triggering_class"
		);
		// Create an intersection observer
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Add the "animate" class when the element is in the viewport
					entry.target.classList.add("animate");
				} else {
					entry.target.classList.remove("animate");
				}
			});
		});
		// Observe each element
		elements.forEach((element) => {
			observer.observe(element);
		});
		const elements2 = document.querySelectorAll(".scale_triggering_class");
		// Create an intersection observer
		const observer2 = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Add the "animate" class when the element is in the viewport
					entry.target.classList.add("scale");
				} else {
					entry.target.classList.remove("scale");
				}
			});
		});
		elements2.forEach((element) => {
			observer2.observe(element);
		});
	}, []);

	return (
		<>
			<Head>
				<title>Shopify</title>
				<meta
					name='Motion'
					content='E-commrece solution'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Navbar page="index" />
				<HeroSection />
				{/* <SecondaryTextAfterHero />
				<div className="overflow-hidden">
					<Carousel />
				</div>
				<Shop />
				<Hero />
				<Gift />
				<Product1 />
				<ImageHoverEffect />
				<div className="overflow-hidden max-w-7xl mx-auto">
					<Swiper />
				</div>
				<Svggrid />
				<Parallex />
				<Subscribe /> */}

			</main>
		</>
	);
}
