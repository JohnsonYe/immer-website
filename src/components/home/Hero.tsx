import Link from 'next/link';
import { Cpu, Layers, Network } from 'lucide-react';

export default function Hero() {
  const features = [
    {
      icon: Cpu,
      title: 'AI-Powered Design',
      description: 'Industrial-grade AI for mechanical design automation',
    },
    {
      icon: Layers,
      title: 'Seamless Integration',
      description: 'Works with your existing CAD tools and workflows',
    },
    {
      icon: Network,
      title: 'Global Network',
      description: 'Connect with manufacturers and suppliers worldwide',
    },
  ];

  return (
    <section className="relative gradient-bg text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>

      <div className="relative container-custom py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transforming Ideas Into
            <span className="block mt-2 text-immer-orange">Manufacturing Reality</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            The AI-powered platform that bridges creativity and manufacturing,
            empowering designers to create production-ready 3D models and connect
            seamlessly with global suppliers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link
              href="#what-is-immer"
              className="bg-immer-orange text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Explore Our Platform
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-semibold text-lg border border-white/30"
            >
              Get in Touch
            </Link>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all"
              >
                <feature.icon className="w-14 h-14 text-immer-orange mb-4" />
                <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
                <p className="text-sm text-blue-100 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
