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
        <title>Immer - Transform Ideas Into Manufacturing Reality with AI</title>
        <meta
          name="description"
          content="AI-powered platform bridging creativity and manufacturing. Create production-ready 3D models, automate design workflows, and connect with global suppliers seamlessly."
        />
        <meta property="og:title" content="Immer - AI-Powered Design & Manufacturing Platform" />
        <meta
          property="og:description"
          content="Transform ideas into manufacturing reality. AI-powered platform for mechanical design automation and global manufacturing connections."
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
