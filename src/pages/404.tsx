import Head from 'next/head';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Immer</title>
        <meta name="description" content="Page not found" />
      </Head>

      <section className="min-h-[70vh] flex items-center justify-center gradient-bg text-white">
        <div className="container-custom text-center">
          <h1 className="text-8xl md:text-9xl font-bold mb-4 text-immer-orange">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-immer-orange text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all font-semibold"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all font-semibold border border-white/30"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
