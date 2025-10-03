import { Rocket, Zap, Users } from 'lucide-react';

export default function WhatIsImmer() {
  const benefits = [
    {
      icon: Rocket,
      title: 'Accelerate Development',
      description: 'Transform design concepts into production-ready models in a fraction of the time with AI-powered automation.',
    },
    {
      icon: Zap,
      title: 'Intelligent Optimization',
      description: 'Leverage industrial-grade AI trained on thousands of real-world mechanical designs for precise, manufacturable outputs.',
    },
    {
      icon: Users,
      title: 'Unified Ecosystem',
      description: 'Connect designers, manufacturers, and suppliers in one integrated platform for seamless collaboration.',
    },
  ];

  return (
    <section id="what-is-immer" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Reimagining Mechanical Design
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-4">
            Immer is an AI-powered platform that simplifies and automates the entire
            design-to-production workflow for mechanical and industrial designers.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We bridge the gap between creative vision and manufacturing execution,
            creating an integrated ecosystem where designers, manufacturers, and global
            vendors collaborate seamlessly to bring products to life.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-8 rounded-2xl border-2 border-gray-200 hover:border-immer-blue transition-all hover:shadow-lg"
            >
              <div className="bg-gradient-to-br from-immer-blue to-immer-purple p-4 rounded-xl w-fit mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
