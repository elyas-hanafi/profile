import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article>
      <Link href={link} target="_blank">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div>
        <span>{type}</span>
        <Link href={link} target="_blank">
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
      </div>
      <div>
        <Link href={link} target="_blank">
          <GithubIcon />
        </Link>
        <Link href={link} target="_blank">
          visit project
        </Link>
      </div>
    </article>
  );
};
export default function project() {
  return (
    <>
      <Head>
        <title>| about page |</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center">
        <Layout>
          <AnimatedText text={'Imagination Trumps Knowledge!'} />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject title="Crypto Screener Application" />
            </div>
            <div className="col-span-6">Project_1</div>
            <div className="col-span-6">Project_2</div>
            <div className="col-span-12">Featured Project</div>
            <div className="col-span-6">Project_1</div>
            <div className="col-span-6">Project_2</div>
          </div>
        </Layout>
      </main>
    </>
  );
}
