import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/views/Navbar'
import TopLabel from '@/components/views/Toplabel'

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <TopLabel />
    <Navbar />
    <Component {...pageProps} />
  </div>
}
