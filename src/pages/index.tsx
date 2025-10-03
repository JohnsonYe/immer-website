import Head from 'next/head';
import Hero from '@/components/home/Hero';
import WhatIsImmer from '@/components/home/WhatIsImmer';
import Products from '@/components/home/Products';
import Technology from '@/components/home/Technology';
import Market from '@/components/home/Market';
import CallToAction from '@/components/home/CallToAction';

export default function Home() {
  return (
    <>
      <Head>
        <title>Immer - AI-Powered Design & Manufacturing Platform</title>
        <meta
          name="description"
          content="Immer simplifies and automates mechanical design-to-production workflows through AI. Connect designers, manufacturers, and global vendors in one integrated ecosystem."
        />
        <meta property="og:title" content="Immer - AI-Powered Design & Manufacturing Platform" />
        <meta
          property="og:description"
          content="A bridge between creativity and manufacturing, enabling every creator to turn ideas into reality"
        />
      </Head>

      <Hero />
      <WhatIsImmer />
      <Products />
      <Technology />
      <Market />
      <CallToAction />
    </>
  );
}
