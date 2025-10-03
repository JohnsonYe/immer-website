import { Bot, Boxes, ShoppingCart } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: Bot,
      title: 'Immer AI',
      subtitle: 'Core Product',
      description:
        'An AI model that automates part breakdown, 3D modeling, and assembly instructions into physically feasible and manufacturing-ready blueprints, significantly reducing the time from concept to production.',
    },
    {
      icon: Boxes,
      title: 'Design Platform',
      subtitle: '3D Productivity Environment',
      description:
        'A 3D productivity environment powered by industrial-grade AI, built to accelerate virtual prototyping and mechanical design. It enables teams to collaborate with an AI agent to generate, test, and validate production-ready blueprints for real-world manufacturing.',
    },
    {
      icon: ShoppingCart,
      title: 'Immer Marketplace',
      subtitle: 'Global Vendor Network',
      description:
        'Connects designers with global vendors by automating part sourcing through AI. As designs are created, the platform identifies required components and matches them with vendors, streamlining procurement for designers and expanding sales opportunities for suppliers.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-lg text-gray-600">
            Three integrated solutions powering the future of AI-driven design and manufacturing
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-blue-50/30 p-8 rounded-2xl border-2 border-gray-200 hover:border-immer-blue transition-all hover:shadow-xl"
            >
              {/* Icon */}
              <div className="bg-gradient-to-br from-immer-blue to-immer-purple p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <product.icon className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{product.title}</h3>
              <p className="text-sm font-semibold text-immer-orange mb-4">{product.subtitle}</p>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
