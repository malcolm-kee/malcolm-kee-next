declare module 'heroicons/react/*' {
  import * as React from 'react';
  function Icon(props: React.ComponentPropsWithoutRef<'svg'>): JSX.Element;
  export default Icon;
}

declare module 'next-mdx-remote/render-to-string' {
  export default function renderToString(
    source: any,
    options: {
      components?: Record<string, any>;
      mdxOptions?: {
        remarkPlugins?: any[];
        rehypePlugins?: any[];
        hastPlugins?: any[];
        compilers?: any[];
      };
    }
  ): Promise<string>;
}

declare module 'next-mdx-remote/hydrate' {
  export default function hydate(
    source: any,
    options: {
      components?: Record<string, any>;
      mdxOptions?: {
        remarkPlugins?: any[];
        rehypePlugins?: any[];
        hastPlugins?: any[];
        compilers?: any[];
      };
    }
  ): JSX.Element;
}
