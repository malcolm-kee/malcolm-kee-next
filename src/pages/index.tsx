import BriefcaseIcon from 'heroicons/react/outline/Briefcase';
import CodeIcon from 'heroicons/react/outline/Code';
import LightbulbIcon from 'heroicons/react/outline/LightBulb';
import PencilIcon from 'heroicons/react/outline/Pencil';
import UsergroupIcon from 'heroicons/react/outline/UserGroup';
import VideocameraIcon from 'heroicons/react/outline/VideoCamera';
import Link from 'next/link';
import * as React from 'react';
import Img from 'react-optimized-image';
import { Button } from 'src/components/button';
import { TextField } from 'src/components/text-field';
import { TextareaField } from 'src/components/textarea-field';

export default function Home() {
  return (
    <>
      <div>
        <main className="flex relative">
          <div className="relative mx-auto max-w-7xl w-full pt-48 xs:pt-36 sm:pt-16 sm:flex items-center pb-20 text-left md:text-center lg:flex-1 lg:text-left">
            <div className="px-4 sm:px-8 max-w-md md:max-w-3xl sm:mx-auto relative z-20">
              <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Malcolm Kee
              </h1>
              <p className="mt-3 text-lg text-gray-500 sm:text-xl md:mt-5">
                Software engineer making web applications functional and{' '}
                <span className="text-primary-600">accessible</span>.
              </p>
              {/* Disable anchor link because it cause weird content hidden bug */}
              {/* <div className="mt-5 sm:mt-8 flex justify-start md:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <LinkButton
                    href="#writings"
                    variant="primary"
                    className="w-full"
                  >
                    Writings
                  </LinkButton>
                </div>
                <div className="mt-0 ml-3">
                  <LinkButton href="#works" variant="secondary">
                    Works
                  </LinkButton>
                </div>
              </div> */}
            </div>
            <svg
              className="hidden sm:block absolute right-0 inset-y-0 h-full z-20 w-24 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
          <div className="absolute z-10 sm:hidden top-0 pt-2 right-0 pr-2">
            <Img
              src={require('images/malcolm-avatar.jpg')}
              width={200}
              height={200}
              alt="Malcolm"
              className="rounded-full shadow-lg object-cover"
              webp
              sizes={[200]}
              inline
            />
          </div>
          <div className="hidden relative sm:block w-1/2 lg:w-1/3">
            <Img
              src={require('images/malcolm-in-cpg.jpg?lqip')}
              width={720}
              height={836}
              alt="Malcolm"
              webp
              sizes={[310, 520]}
              inline
            />
            <Img
              src={require('images/malcolm-in-cpg.jpg')}
              width={720}
              height={836}
              alt="Malcolm"
              webp
              sizes={[310, 520]}
              className="absolute inset-0"
            />
          </div>
        </main>
      </div>
      <div className="bg-gray-50 py-2 relative overflow-hidden">
        <div className="relative py-1">
          <svg
            className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
            />
          </svg>
        </div>
        <div className="py-4">
          <Writings />
        </div>
        <div className="py-4">
          <Works />
        </div>
        <div className="py-4">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

const Writings = () => {
  return (
    <div className="relative">
      <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2
              className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
              id="writings"
            >
              Writings
            </h2>
          </div>
          <div className="mt-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:col-span-2 lg:mt-0">
            <Link href="/blog">
              <a className="block group">
                <IconContainer>
                  <PencilIcon className="h-6 w-6" />
                </IconContainer>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 group-hover:underline">
                    <span className="focus:outline-none focus-visible:shadow-outline-teal">
                      Blog
                    </span>
                  </h3>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    My thoughts on technologies, books, or just any random
                    stuffs.
                  </p>
                </div>
              </a>
            </Link>
            <div className="mt-10 sm:mt-0">
              <IconContainer>
                <LightbulbIcon className="h-6 w-6" />
              </IconContainer>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Today I Learn
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Random stuffs I learnt, mostly regarding technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <div className="relative">
      <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2
              className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
              id="works"
            >
              Works
            </h2>
          </div>
          <div className="mt-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:col-span-2 lg:mt-0">
            <div>
              <IconContainer>
                <BriefcaseIcon className="h-6 w-6" />
              </IconContainer>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Projects
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Past projects that I've worked on.
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <IconContainer>
                <UsergroupIcon className="h-6 w-6" />
              </IconContainer>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Workshops
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Workshop materials that I've conducted.
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <IconContainer>
                <VideocameraIcon className="h-6 w-6" />
              </IconContainer>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Recordings
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Recordings for my talks/workshops.
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <IconContainer>
                <CodeIcon className="h-6 w-6" />
              </IconContainer>
              <div className="mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Libraries
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Open-source libraries that I maintained. Nothing popular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const IconContainer = (props: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
    {props.children}
  </div>
);

const ContactForm = () => {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-12">
      <h2 className="text-3xl text-center leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-12">
        Get in Touch
      </h2>
      <form
        name="contact-form"
        method="POST"
        action="/message-received"
        netlify-honeypot="trap"
        data-netlify="true"
        className="grid grid-cols-1 gap-y-6"
      >
        <TextField
          label="Name"
          name="name"
          id="contact-name"
          placeholder="Your Name"
          autoComplete="name"
          required
        />
        <TextField
          label="Email"
          name="email"
          id="contact-email"
          placeholder="you@email.com"
          type="email"
          autoComplete="email"
          required
        />
        <TextareaField
          label="Message"
          name="message"
          id="contact-message"
          required
        />
        <input type="hidden" name="form-name" value="contact-form" />
        <div>
          <Button type="submit" variant="primary" className="w-full">
            Let's talk
          </Button>
        </div>
      </form>
    </div>
  );
};
