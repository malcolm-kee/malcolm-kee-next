import formatDate from 'date-fns/format';
import formatIso from 'date-fns/formatISO';
import { promises as fs } from 'fs';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import * as React from 'react';
import { Header } from 'src/components/header';
import { Seo } from 'src/components/seo';
import { FileMetadata, FILE_DATA_CACHE } from 'src/constants';

type BlogsProps = {
  blogs: Array<
    FileMetadata & {
      dateTime: string | null;
      date: string | null;
    }
  >;
};

export default function Blogs(props: BlogsProps) {
  return (
    <>
      <Seo title="Blogs" />
      <Header />
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Blogs
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            My thoughts on technologies, books, or just any random stuffs.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {props.blogs.map((blog) => (
            <li
              className="rounded-lg shadow-lg overflow-hidden"
              key={blog.slug}
            >
              <div className="bg-white p-6">
                <p className="text-sm leading-5 font-medium text-primary-600">
                  {blog.data.tags &&
                    blog.data.tags.map((tag) => (
                      <a href="#" className="hover:underline" key={tag}>
                        {tag}
                      </a>
                    ))}
                </p>
                <Link href={`/blog/${blog.slug}`}>
                  <a className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      {blog.data.title}
                    </h3>
                    <div className="text-sm leading-5 text-gray-500">
                      {blog.dateTime && (
                        <time dateTime={blog.dateTime}>{blog.date}</time>
                      )}
                    </div>
                  </a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<BlogsProps> = async () => {
  const fileData: Record<string, FileMetadata> = JSON.parse(
    await fs.readFile(FILE_DATA_CACHE, { encoding: 'utf-8' })
  );

  return {
    props: {
      blogs: Object.values(fileData).map((file) => ({
        ...file,
        date: file.data.date
          ? formatDate(new Date(file.data.date), 'MMM dd, yyyy')
          : null,
        dateTime: file.data.date ? formatIso(new Date(file.data.date)) : null,
      })),
    },
  };
};
