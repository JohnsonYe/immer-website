import { Shield, Cpu, Database, CheckCircle2 } from 'lucide-react';

export default function Technology() {
  const advantages = [
    {
      icon: Cpu,
      title: 'Industrial-Grade AI',
      description:
        'Our AI engine is trained on real-world industrial datasets including 5,000+ validated designs, 100,000+ mechanical components, and 1,000,000+ hardware specifications, ensuring production-ready outputs every time.',
    },
    {
      icon: Shield,
      title: 'Proven Performance',
      description:
        'Validated through partnerships with 50+ design studios, our platform has demonstrated measurable improvements in design efficiency and cost reduction across real-world manufacturing scenarios.',
    },
    {
      icon: Database,
      title: 'Comprehensive Integration',
      description:
        'Seamlessly connects designers with verified global manufacturers and suppliers, creating a complete ecosystem from concept to production.',
    },
  ];

  const techFeatures = [
    {
      label: 'AI Accuracy',
      value: '≥90%',
    },
    {
      label: 'Training Data',
      value: '1M+',
    },
    {
      label: 'Design Partners',
      value: '50+',
    },
    {
      label: 'Component Library',
      value: '10K+',
    },
  ];

  const capabilities = [
    'Multimodal input processing (text, image, 3D models)',
    'Automated structural analysis and assembly sequencing',
    'Physics-based validation for manufacturability',
    'Real-time collaboration and version control',
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Built on <span className="gradient-text">Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our specialized AI platform is purpose-built for mechanical design,
            delivering precision, reliability, and production-ready results.
          </p>
        </div>

        {/* Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-immer-blue transition-all hover:shadow-xl"
            >
              <div className="bg-gradient-to-br from-immer-blue to-immer-purple p-4 rounded-xl w-fit mb-6">
                <advantage.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{advantage.title}</h3>
              <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stats */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Platform Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-immer-blue to-immer-purple bg-clip-text text-transparent mb-2">
                  {feature.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="bg-gradient-to-br from-immer-navy to-immer-blue text-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Core Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-immer-orange flex-shrink-0 mt-1" />
                <p className="text-blue-100">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
