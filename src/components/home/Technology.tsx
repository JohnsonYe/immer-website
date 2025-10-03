import { Zap, Users, Network, Brain } from 'lucide-react';

export default function Technology() {
  const advantages = [
    {
      icon: Brain,
      title: 'Industrial-Level AI Precision',
      description:
        "Immer's AI is trained using industrial-grade datasets validated by the escape room industry, including over 500 tested game designs, 10,000+ mechanical components, and 100,000+ individual industrial standard hardware pieces, ensuring realistic, production-ready outputs.",
    },
    {
      icon: Users,
      title: 'Focused Go-to-Market & Industry Partnerships',
      description:
        'Immer is partnering with over 50 escape room design studios as an initial proof of concept, enabling rapid testing, refinement, and validation of our AI-driven design tools in real-world production scenarios.',
    },
    {
      icon: Network,
      title: 'Unified Global Ecosystem',
      description:
        'A marketplace ecosystem that directly connects designers to verified global vendors, streamlining procurement for small businesses and significantly expanding sales opportunities for vendors.',
    },
  ];

  const techFeatures = [
    {
      label: 'Inference Accuracy',
      value: '≥90%',
    },
    {
      label: 'Labeled Samples',
      value: '1M+',
    },
    {
      label: 'Partner Studios',
      value: '50+',
    },
    {
      label: 'Mechanical Components',
      value: '10K+',
    },
  ];

  return (
    <section className="section-padding bg-immer-dark text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Core Technology & <span className="text-immer-orange">Competitive Advantages</span>
          </h2>
          <p className="text-lg text-gray-300">
            Immer's business moat is its specialized industrial-grade generative AI, designed
            specifically for highly accurate, physically realistic, and production-ready
            mechanical and manufacturing designs.
          </p>
        </div>

        {/* Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="bg-gradient-to-br from-immer-orange to-orange-600 p-3 rounded-lg w-fit mb-4">
                <advantage.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
              <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stats */}
        <div className="bg-gradient-to-br from-immer-blue/20 to-immer-purple/20 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-immer-orange mb-2">
                  {feature.value}
                </div>
                <div className="text-sm text-gray-300">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Tech Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <Zap className="w-6 h-6 text-immer-orange flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Multimodal Capability</h4>
              <p className="text-gray-300 text-sm">
                Part recognition, connection reasoning, and assembly simulation from text, image, or 3D model input
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Zap className="w-6 h-6 text-immer-orange flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Auto Disassembly & Structural Reasoning</h4>
              <p className="text-gray-300 text-sm">
                AI automatically identifies parts relationship, assembly sequence, and disassembly path
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
