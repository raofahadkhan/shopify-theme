import Head from 'next/head'
import Gift from '../components/Gift';
import Hero from '../components/Hero';
import Parallex from '../components/Parallex';
import Shop from '../components/Shop';
import Swiper from '../components/Swiper';

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Product1 from "@/components/journalcard";
import Svggrid from "@/components/Svggrid";
import { Subscribe } from "@/components/signupcomponent";
import Productgrid from "@/components/cardgrid";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import TopLabel from '@/components/views/Toplabel'
import SecondaryTextAfterHero from '@/components/views/SecondaryTextHero';
import ImageHoverEffect from '@/components/views/ImageHoverEffect';
import HeroSection from '@/components/views/HeroSection';


export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animation_triggering_class");
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
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-screen'>
        <HeroSection />
        <Product1 />
        <SecondaryTextAfterHero />
        <Shop />
        <Hero />
        <Gift />
        <ImageHoverEffect />
        <Swiper />
        <Parallex />
        <Svggrid />
        <Subscribe />
        <Productgrid />
        <Footer />

      </main>
    </>
  )
}
