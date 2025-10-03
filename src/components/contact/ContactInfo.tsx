import { Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Intro Text */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Let's Start a Conversation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're interested in our platform, exploring partnership opportunities,
              or have questions about how Immer can transform your design workflow, we'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Email Card */}
            <a
              href="mailto:johnson@immer3d.com"
              className="group bg-gradient-to-br from-gray-50 to-blue-50/30 p-10 rounded-2xl border-2 border-gray-200 hover:border-immer-blue transition-all hover:shadow-xl"
            >
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-immer-blue to-immer-purple p-5 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-immer-orange font-bold text-2xl mb-3">johnson@immer3d.com</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Send us an email and we'll get back to you within 24 hours.
                  </p>
                  <div className="flex items-center text-immer-blue font-semibold group-hover:translate-x-2 transition-transform">
                    Send Email
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+19253302206"
              className="group bg-gradient-to-br from-gray-50 to-purple-50/30 p-10 rounded-2xl border-2 border-gray-200 hover:border-immer-purple transition-all hover:shadow-xl"
            >
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-immer-purple to-immer-orange p-5 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-immer-purple font-bold text-2xl mb-3">+1 925 330 2206</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Available during business hours (PST).
                  </p>
                  <div className="flex items-center text-immer-purple font-semibold group-hover:translate-x-2 transition-transform">
                    Make a Call
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* What to Expect Section */}
          <div className="bg-gradient-to-br from-immer-navy to-immer-blue text-white rounded-2xl p-10 md:p-12 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-immer-orange p-4 rounded-full">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
              What to Expect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-immer-orange mb-3">24h</div>
                <p className="text-blue-100 font-medium">Response Time</p>
                <p className="text-sm text-blue-200 mt-2">We aim to respond to all inquiries within one business day</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-immer-orange mb-3">1:1</div>
                <p className="text-blue-100 font-medium">Personal Attention</p>
                <p className="text-sm text-blue-200 mt-2">Direct communication with our leadership team</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-immer-orange mb-3">100%</div>
                <p className="text-blue-100 font-medium">Confidential</p>
                <p className="text-sm text-blue-200 mt-2">Your information is always kept secure and private</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
