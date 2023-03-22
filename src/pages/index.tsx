import Head from 'next/head'
import Gift from '../components/Gift';
import Hero from '../components/Hero';
import Parallex from '../components/Parallex';
import Shop from '../components/Shop';
import Swiper from '../components/Swiper';

import TopLabel from '@/components/views/Toplabel'
import SecondaryTextAfterHero from '@/components/views/SecondaryTextHero';
import ImageHoverEffect from '@/components/views/ImageHoverEffect';
import HeroSection from '@/components/views/HeroSection';


export default function Home() {

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
        <SecondaryTextAfterHero />
        <Shop />
        <Hero />
        <Gift />
        <ImageHoverEffect />
        <Swiper />
        <Parallex />
      </main>
    </>
  )
}
