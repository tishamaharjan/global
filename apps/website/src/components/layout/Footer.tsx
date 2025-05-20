import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 pb-8 text-white/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="h-8 w-8 bg-[#C6FF00] rounded-md flex items-center justify-center">
                <span className="font-bold text-black">G</span>
              </div>
              <span className="text-xl font-bold text-white">
                Global<span className="text-[#C6FF00]">Square</span>
              </span>
            </div>
            <p className="text-sm mb-6">
              Transforming visions into reality with innovative digital
              solutions that drive business growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/global-square-i-t-company-pvt-ltd/about/"
                target="_blank"
                className="hover:text-[#C6FF00] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a href="#" className="hover:text-[#C6FF00] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-[#C6FF00] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-[#C6FF00] transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-[#C6FF00] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-[#C6FF00] transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-[#C6FF00] transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-[#C6FF00] transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-[#C6FF00] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-[#C6FF00] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-[#C6FF00] transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-[#C6FF00] transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-[#C6FF00] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-[#C6FF00] transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="font-semibold text-white mb-4">Got any ideas?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#C6FF00] mt-1" />
                <span className="text-sm">info@globalsquareit.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#C6FF00] mt-1" />
                <a href="tel:+(977) 9763596355" className="text-sm">+(977)-9763596355</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C6FF00] mt-1" />
                <span className="text-sm">
                  Ekata Marga, New Baneshwor, Kathmandu
                </span>
              </div>
              <a
                href="#contact"
                className="cursor-pointer bg-transparent border border-[#C6FF00] text-[#C6FF00] px-6 py-2 rounded-md hover:bg-[#C6FF00] hover:text-black transition-all mt-2"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom: Copyright */}
        <div className="pt-8 border-t border-white/10 text-sm text-center">
          <p>© {currentYear} GlobalSquare. All rights reserved.</p>
          <p className="mt-1 text-xs text-white/50">Designed by GlobalSquare</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
