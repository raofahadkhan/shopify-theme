import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from '@/components/views/Navbar'
import TopLabel from '@/components/views/Toplabel'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ParallaxProvider>
        <TopLabel />
        <Navbar />
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  )
}

