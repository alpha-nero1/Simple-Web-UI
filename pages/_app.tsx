import '../styles/globals.css'
import type { AppProps } from 'next/app'

// Root component...
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// Log metrics, or can store them on our side...
export function reportWebVitals(metric: any) {
  console.log('site metrics are: ');
  console.log(metric)
}
