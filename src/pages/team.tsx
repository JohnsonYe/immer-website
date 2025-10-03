import Head from 'next/head';
import TeamGrid from '@/components/team/TeamGrid';

export default function Team() {
  return (
    <>
      <Head>
        <title>Team - Immer</title>
        <meta
          name="description"
          content="Meet the leadership team behind Immer - industry experts from Tesla and Amazon specializing in AI, software engineering, and supply chain management."
        />
        <meta property="og:title" content="Team - Immer" />
        <meta
          property="og:description"
          content="Led by industry experts from Tesla and Amazon, specializing in AI, software engineering, supply chain management, and 3D Gen-AI"
        />
      </Head>

      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Building the future of AI-driven design and manufacturing
          </p>
        </div>
      </section>

      <TeamGrid />
    </>
  );
}
