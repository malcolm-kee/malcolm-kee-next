import seoConfig from 'config/seo.json';
import 'focus-visible';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import 'styles/main.css';

export default function AppWrapper({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </>
  );
}
