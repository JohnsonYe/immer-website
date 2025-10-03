import { TrendingUp, Award, CheckCircle } from 'lucide-react';

export default function Market() {
  const markets = [
    {
      name: 'Traditional 3D CAD Software',
      size: '$12.55B',
      year: '2024',
    },
    {
      name: 'AI-Driven 3D Modeling Tools',
      size: '$35.81B → $91.32B',
      year: '2024-2033',
    },
    {
      name: 'Manufacturing Operations Management',
      size: '$21.43B',
      year: '2023',
    },
  ];

  const validation = [
    {
      icon: TrendingUp,
      value: '70%',
      label: 'Design Efficiency Improvement',
    },
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Logistics Cost Reduction',
    },
    {
      icon: Award,
      value: '50+',
      label: 'Escape Room Collaborations',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Market <span className="gradient-text">Opportunity</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Immer is strategically positioned at the intersection of several rapidly growing markets,
            each contributing to a combined opportunity exceeding{' '}
            <span className="font-bold text-immer-orange">$300 billion globally</span>.
          </p>
        </div>

        {/* Market Size Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {markets.map((market, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-immer-blue transition-all shadow-lg"
            >
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">{market.name}</h3>
              <div className="text-3xl font-bold text-immer-orange mb-2">{market.size}</div>
              <div className="text-sm text-gray-500">{market.year}</div>
            </div>
          ))}
        </div>

        {/* Early Validation */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Early <span className="gradient-text">Validation</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {validation.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-immer-blue to-immer-purple rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-immer-navy mb-2">{item.value}</div>
                <div className="text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Key Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm">Subscription-based AI tools</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm">Modular shipping like IKEA</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm">Global supplier matching</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
