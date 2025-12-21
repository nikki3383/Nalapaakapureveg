import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-[#d4af37] mb-4">Nalapaaka</h3>
            <p className="text-sm text-gray-400">
              Experience the finest pure vegetarian cuisine with
              authentic flavors and traditional recipes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#d4af37]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#d4af37]"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#d4af37]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#d4af37]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin
                  size={18}
                  className="text-[#d4af37] mt-0.5 flex-shrink-0"
                />
                <span>
                  #30/6, 150A Highway, Heggere, Sanikere Post
                  Chitradurga-577522
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone
                  size={18}
                  className="text-[#d4af37] flex-shrink-0"
                />
                <span>+91 9353243874</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail
                  size={18}
                  className="text-[#d4af37] flex-shrink-0"
                />
                <span>nalapaakapureveg@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Clock
                  size={18}
                  className="text-[#d4af37] mt-0.5 flex-shrink-0"
                />
                <span>Mon-Sun: 11:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2a2a2a] mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 Nalapaaka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}