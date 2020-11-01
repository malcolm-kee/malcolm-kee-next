import * as React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';

export const Seo = (
  props: { title: string } & Pick<NextSeoProps, 'openGraph'>
) => {
  return <NextSeo {...props} titleTemplate="%s | Malcolm Kee" />;
};
