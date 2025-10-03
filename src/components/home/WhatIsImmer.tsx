import { Target, TrendingDown, Globe2 } from 'lucide-react';

export default function WhatIsImmer() {
  const benefits = [
    {
      icon: Target,
      title: 'Streamline Product Development',
      description: 'Accelerate your design-to-production workflow with AI automation',
    },
    {
      icon: TrendingDown,
      title: 'Reduce Costs',
      description: 'Cut design and manufacturing costs through intelligent optimization',
    },
    {
      icon: Globe2,
      title: 'Global Market Access',
      description: 'Remove traditional barriers to global market entry for creators',
    },
  ];

  return (
    <section id="what-is-immer" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What is <span className="gradient-text">Immer</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Immer simplifies and automates mechanical design-to-production workflows through AI.
            We create an integrated ecosystem connecting designers, manufacturers, and global vendors,
            enabling seamless collaboration and monetization.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="bg-gradient-to-br from-immer-blue to-immer-purple p-3 rounded-lg w-fit mb-4">
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
