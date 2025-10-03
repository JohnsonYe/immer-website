import Link from 'next/link';
import { ArrowRight, MessageCircle, Users } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="section-padding gradient-bg text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-immer-orange">Design Process</span>?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            Join leading designers and manufacturers who are revolutionizing
            the way products go from concept to production.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="group bg-immer-orange text-white px-10 py-5 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-3 w-6 h-6" />
              Get in Touch
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/team"
              className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-lg hover:bg-white/20 transition-all font-semibold text-lg border border-white/30 inline-flex items-center justify-center"
            >
              <Users className="mr-3 w-6 h-6" />
              Meet Our Team
            </Link>
          </div>

          {/* Tagline */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-xl md:text-2xl font-semibold mb-2">
              Empowering Creativity Through Technology
            </p>
            <p className="text-blue-100 text-lg">
              Transforming the future of design and manufacturing with AI-driven innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
