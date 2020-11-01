import formatDate from 'date-fns/format';
import formatDateIso from 'date-fns/formatISO';
import { promises as fs } from 'fs';
import grayMatter from 'gray-matter';
import type { GetStaticPaths, GetStaticProps } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Header } from 'src/components/header';
import { Seo } from 'src/components/seo';
import { FileMetadata, FILE_DATA_CACHE } from 'src/constants';
import styles from './blog.module.css';

type BlogpostMetadata = {
  title: string;
  date: string | null;
  dateTime: string | null;
  published?: boolean;
  tags?: string[];
};

type BlogpostProps = {
  source: string;
  data: BlogpostMetadata;
};

export default function Blogpost(props: BlogpostProps) {
  const router = useRouter();

  const content = router.isFallback ? (
    <div>Loading...</div>
  ) : (
    <article className="my-12 px-4 sm:px-8">
      <div className={styles.article}>
        {props.data && (
          <div className="mb-12 text-center">
            <h1 className="text-3xl xs:text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-10">
              {props.data.title}
            </h1>
            {props.data.title && (
              <Seo
                title={props.data.title}
                openGraph={{
                  type: 'article',
                  article: {
                    authors: ['Malcolm Kee'],
                    publishedTime: props.data.dateTime || undefined,
                    tags: props.data.tags,
                  },
                }}
              />
            )}
            {props.data.date && props.data.dateTime && (
              <p className="my-4">
                Published on{' '}
                <time dateTime={props.data.dateTime}>{props.data.date}</time>
              </p>
            )}
          </div>
        )}
      </div>
      <div className={`prose prose-lg max-w-none ${styles.article}`}>
        {hydrate(props.source, {})}
      </div>
    </article>
  );

  return (
    <>
      <Header />
      {content}
    </>
  );
}

type PathData = {
  slug: string;
};

export const getStaticProps: GetStaticProps<BlogpostProps, PathData> = async (
  context
) => {
  const fileData: Record<string, FileMetadata> = JSON.parse(
    await fs.readFile(FILE_DATA_CACHE, { encoding: 'utf-8' })
  );

  const slug = context.params!.slug;

  const content = fileData[slug];

  const mdContent = grayMatter(
    await fs.readFile(content.path, { encoding: 'utf-8' })
  );

  return {
    props: {
      data: {
        ...content.data,
        date: content.data.date
          ? formatDate(new Date(content.data.date), 'MMM dd, yyyy')
          : null,
        dateTime: content.data.date
          ? formatDateIso(new Date(content.data.date))
          : null,
      },
      source: await renderToString(mdContent.content, {}),
    },
  };
};

export const getStaticPaths: GetStaticPaths<PathData> = async () => {
  const fileData: Record<string, FileMetadata> = JSON.parse(
    await fs.readFile(FILE_DATA_CACHE, { encoding: 'utf-8' })
  );

  return {
    paths: Object.keys(fileData).map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};
