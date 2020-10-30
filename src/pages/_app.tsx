import type { AppProps } from 'next/app';
import 'styles/main.css';

export default function AppWrapper({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
