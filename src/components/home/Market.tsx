import { TrendingUp, CheckCircle2, BarChart3 } from 'lucide-react';

export default function Market() {
  const impact = [
    {
      icon: TrendingUp,
      value: '70%',
      label: 'Faster Design Cycles',
      description: 'Reduce time from concept to production',
    },
    {
      icon: BarChart3,
      value: '40%',
      label: 'Cost Reduction',
      description: 'Lower manufacturing and logistics costs',
    },
    {
      icon: CheckCircle2,
      value: '50+',
      label: 'Active Partners',
      description: 'Design studios and manufacturers',
    },
  ];

  const industries = [
    'Industrial Equipment & Manufacturing',
    'Consumer Product Design',
    'Furniture & Modular Systems',
    'Entertainment & Experience Design',
    'Robotics & Automation',
    'Educational Tools & Equipment',
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Real-World <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our platform delivers measurable results for designers and manufacturers
            across multiple industries.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impact.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-8 rounded-2xl border-2 border-gray-200 hover:border-immer-blue transition-all text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-immer-blue to-immer-purple rounded-full mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-immer-blue to-immer-purple bg-clip-text text-transparent mb-2">
                {item.value}
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2">{item.label}</div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Industries Served */}
        <div className="bg-gradient-to-br from-immer-navy to-immer-blue text-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
              >
                <CheckCircle2 className="w-5 h-5 text-immer-orange flex-shrink-0" />
                <span className="text-blue-100">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
