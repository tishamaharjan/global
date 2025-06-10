import { Mail, Phone, MapPin } from "lucide-react";

import Newsletter from "../sections/Newsletter";
import Contact from "../sections/Contact";
import Ideas from "../sections/Ideas";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer
        id="footer"
        className="bg-black md:px-12 lg:px-[156px] pt-10 pb-8 text-white/80 gap-4 box-border"
      >
        <div className="container mx-auto px-6 ">
          <div className="grid grid-cols-1 md:w-full gap-4 mb-6">
            <div className="lg:mb-[24px]">
              <Newsletter />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-1 lg:flex gap-4 overflow-hidden">
              <div className="lg:w-[40%] overflow-hidden rounded-2xl">
                <Contact />
              </div>

              <div className="lg:w-[60%]">
                <Ideas />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-5 w-full md:px-[156px] border-t border-white/10 text-sm text-center lg:bg-gradient-to-br from-[#CFE93A] to-[#0000001a]">
        <p>© 2023 GlobalSquare. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
