import { Mail, Phone, MapPin } from "lucide-react";

import Newsletter from "../sections/Newsletter";
import Contact from "../sections/Contact";
import Ideas from "../sections/Ideas";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-black pt-10 pb-8 text-white/80 gap-4 ">
      <div className="container mx-auto px-4 md:px-12 lg:px-[156px]">
        <div className="grid grid-cols-1 md:w-full gap-4 mb-6">
          <div className="lg:mb-[24px]">
            {/* Column 1: Newsletter */}
            <Newsletter />
          </div>

          <div className="grid md:h-[390px] md:grid-cols-2 lg:grid-cols-1 lg:flex gap-4 ">
            {/* Column 2: How to contact */}
            <div className="lg:w-[40%] lg:h-full">
              <Contact />
            </div>

            {/* Column 3: Got Ideas?*/}
            <div className=" lg:w-[60%] lg:h-full">
              <Ideas />
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom: Copyright */}
      <div className="py-5 w-full md:px-[156px] border-t border-white/10 text-sm text-center lg:bg-gradient-to-br from-[#CFE93A] to-[#0000001a]">
        <p>© {currentYear} GlobalSquare. All rights reserved.</p>
        {/* <p className="mt-1 text-xs text-white/50">Designed by GlobalSquare</p> */}
      </div>
    </footer>
  );
};

export default Footer;
