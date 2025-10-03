import Link from 'next/link';
import { ArrowRight, DollarSign, Calendar, TrendingUp } from 'lucide-react';

export default function CallToAction() {
  const details = [
    {
      icon: DollarSign,
      label: 'Target Funding',
      value: '$1.5M USD',
    },
    {
      icon: Calendar,
      label: 'Funding Stage',
      value: 'Seed Round',
    },
    {
      icon: TrendingUp,
      label: 'Post-Money Valuation',
      value: '$15M USD',
    },
  ];

  return (
    <section className="section-padding gradient-bg text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join Our <span className="text-immer-orange">SEED Round</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-12 leading-relaxed">
            Help shape the future of AI-driven design and manufacturing.
            We sincerely invite you to be part of this revolution in the design and manufacturing industry.
          </p>

          {/* Investment Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {details.map((detail, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <detail.icon className="w-8 h-8 text-immer-orange mx-auto mb-3" />
                <div className="text-sm text-gray-300 mb-1">{detail.label}</div>
                <div className="text-2xl font-bold">{detail.value}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="group bg-immer-orange text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg inline-flex items-center justify-center"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/team"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-semibold text-lg border border-white/30 inline-flex items-center justify-center"
            >
              Meet Our Team
            </Link>
          </div>

          {/* Tagline */}
          <p className="text-blue-100 italic text-lg">
            "Empower design and manufacturing with AI, reshaping the global creative industry chain"
          </p>
        </div>
      </div>
    </section>
  );
}
