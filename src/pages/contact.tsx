import Head from 'next/head';
import ContactInfo from '@/components/contact/ContactInfo';
import { Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Immer</title>
        <meta
          name="description"
          content="Get in touch with Immer. Contact us for investment inquiries, partnerships, or general questions about our AI-powered design and manufacturing platform."
        />
        <meta property="og:title" content="Contact Us - Immer" />
        <meta
          property="og:description"
          content="Join Immer in co-creating the future of AI-driven design and manufacturing"
        />
      </Head>

      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>

        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-immer-orange rounded-full mb-6">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join Immer in co-creating the future of AI-driven design and manufacturing
          </p>
          <p className="text-lg text-blue-200 mt-4 italic">
            "Empower design and manufacturing with AI, reshaping the global creative industry chain"
          </p>
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
