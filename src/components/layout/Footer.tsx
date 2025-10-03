import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-immer-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-immer-orange mb-4">Immer</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A bridge between creativity and manufacturing, enabling every creator to turn ideas into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-immer-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-immer-orange transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-immer-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4 text-immer-orange" />
                <a href="mailto:johnson@immer3d.com" className="hover:text-immer-orange transition-colors">
                  johnson@immer3d.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4 text-immer-orange" />
                <a href="tel:+19253302206" className="hover:text-immer-orange transition-colors">
                  +1 925 330 2206
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Immer. All rights reserved.</p>
          <p className="mt-2">Empowering design and manufacturing with AI</p>
        </div>
      </div>
    </footer>
  );
}
