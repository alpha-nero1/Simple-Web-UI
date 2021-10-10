import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store, StoreContext } from '../stores/store';

// Root component...
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // How we setup mobx in react application...
    <StoreContext.Provider value={store}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}

// Log metrics, or can store them on our side...
export function reportWebVitals(metric: any) {
  console.log('site metrics are: ');
  console.log(metric)
}
