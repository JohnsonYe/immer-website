import Head from 'next/head';
import ContactInfo from '@/components/contact/ContactInfo';
import { MessagesSquare } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Immer</title>
        <meta
          name="description"
          content="Get in touch with Immer. Contact us for platform inquiries, partnerships, or questions about transforming your design workflow with AI."
        />
        <meta property="og:title" content="Contact Us - Immer" />
        <meta
          property="og:description"
          content="Connect with the Immer team to learn how AI can transform your design and manufacturing process."
        />
      </Head>

      {/* Hero Section */}
      <section className="gradient-bg text-white py-24 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>

        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-8 border-4 border-white/20">
            <MessagesSquare className="w-12 h-12 text-immer-orange" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We're here to answer your questions and explore how Immer can
            transform your design and manufacturing process
          </p>
        </div>
      </section>

      <ContactInfo />
    </>
  );
}
