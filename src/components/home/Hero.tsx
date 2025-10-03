import Link from 'next/link';
import { Brain, Package, Globe } from 'lucide-react';

export default function Hero() {
  const features = [
    {
      icon: Brain,
      title: 'AI Structural Reasoning',
    },
    {
      icon: Package,
      title: 'Auto Disassembly & Assembly',
    },
    {
      icon: Globe,
      title: 'Global Supply Chain Ecosystem',
    },
  ];

  return (
    <section className="relative gradient-bg text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>

      <div className="relative container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            A bridge between creativity and manufacturing,
            <span className="block mt-2">enabling every creator to turn ideas into reality</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            An AI-powered platform for the industrial design and manufacturing sector,
            enabling designers to generate manufacturable 3D models with natural language
            and connect with global suppliers
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="bg-immer-orange text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Join Our SEED Round
            </Link>
            <Link
              href="#what-is-immer"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-semibold text-lg border border-white/30"
            >
              Learn More
            </Link>
          </div>

          {/* Funding Target */}
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-16">
            <p className="text-sm font-medium">
              <span className="text-immer-orange font-bold">Target Funding:</span> $1.5 Million USD
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all"
              >
                <feature.icon className="w-12 h-12 text-immer-orange mb-4" />
                <h3 className="text-lg font-semibold text-center">{feature.title}</h3>
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
