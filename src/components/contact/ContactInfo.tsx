import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Primary Email',
      value: 'johnson@immer3d.com',
      href: 'mailto:johnson@immer3d.com',
      description: 'Best way to reach us for investment inquiries',
    },
    {
      icon: Mail,
      label: 'Alternative Email',
      value: 'johnsonye0303@gmail.com',
      href: 'mailto:johnsonye0303@gmail.com',
      description: 'Alternative contact for general inquiries',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 925 330 2206',
      href: 'tel:+19253302206',
      description: 'Available during business hours',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-immer-blue group"
              >
                <div className="bg-gradient-to-br from-immer-blue to-immer-purple p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{method.label}</h3>
                <p className="text-immer-orange font-bold text-lg mb-2">{method.value}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </a>
            ))}
          </div>

          {/* Investment Info */}
          <div className="bg-gradient-to-br from-immer-navy to-immer-blue text-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Interested in Our <span className="text-immer-orange">SEED Round</span>?
            </h3>
            <p className="text-lg text-center text-blue-100 mb-8 leading-relaxed">
              We invite you to be part of this revolution in the design and manufacturing industry.
              Deep dive into our technology and business model to explore investment and partnership opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                <div className="text-3xl font-bold text-immer-orange mb-2">$1.5M</div>
                <div className="text-sm text-gray-300">Target Funding</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                <div className="text-3xl font-bold text-immer-orange mb-2">$15M</div>
                <div className="text-sm text-gray-300">Post-Money Valuation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                <div className="text-3xl font-bold text-immer-orange mb-2">10%</div>
                <div className="text-sm text-gray-300">Equity Offer</div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="mailto:johnson@immer3d.com?subject=Investment%20Inquiry%20-%20Immer%20SEED%20Round"
                className="inline-block bg-immer-orange text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
              >
                Contact Us for Investment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
