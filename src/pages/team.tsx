import Head from 'next/head';
import TeamGrid from '@/components/team/TeamGrid';

export default function Team() {
  return (
    <>
      <Head>
        <title>Leadership Team - Immer</title>
        <meta
          name="description"
          content="Meet the leadership team behind Immer - world-class experts from Tesla, Amazon, and Bytedance driving innovation in AI-powered design and manufacturing."
        />
        <meta property="og:title" content="Leadership Team - Immer" />
        <meta
          property="og:description"
          content="World-class expertise from Tesla, Amazon, and Bytedance in AI, supply chain automation, and platform development."
        />
      </Head>

      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Leadership Team</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Bringing together world-class talent from leading tech companies to transform
            the future of design and manufacturing
          </p>
        </div>
      </section>

      <TeamGrid />
    </>
  );
}
