import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/views/Navbar'
import TopLabel from '@/components/views/Toplabel'
import { CartProvider } from '@/components/shared/CartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <div>
        <TopLabel />
        <Navbar />
        <Component {...pageProps} />
      </div>
    </CartProvider>
  )
}
