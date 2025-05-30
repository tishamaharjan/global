import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { actions } from "astro:actions";
import { useTransition } from "react";
import LinkedIn from "@/assets/icons/LinkedIn";
import Twiter from "@/assets/icons/Twitter";
import Faceboook from "@/assets/icons/Facebook";
import MainIcon from "@/assets/icons/MainIcon";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import LocationIcon from "@/assets/icons/LocationIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [isPending, setIsPending] = useTransition();

  return (
    <footer
      id="footer"
      className="bg-black pt-10 pb-8 text-white/80 gap-4 md:px-12 lg:px-[156px]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md: gap-4 mb-6">
          <div>
            {/* Column 1: Newsletter */}
            <div className=" text-center bg-[#0A0A0A] border-[#222] py-[80px] px-[36px] rounded-[24px]">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:hidden">
                Join Our <br />
                Newsletter
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 hidden md:block">
                Join Our Newsletter
              </h2>
              <p className="text-white/60 mb-8 text-[18px]">
                Join our newsletter community for exclusive updates, industry
                insights, special offers, and valuable tips.
              </p>

              <div className="flex sm:flex-row max-w-xl mx-auto border-white/10 rounded-[25px] justify-center">
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="example@gs.com"
                    className="pl-6 pr-2 py-1 bg-white/5 max-md:w-[160px] md:w-[436px] text-white placeholder:text-white/40 h-10 rounded-[100px]"
                  />
                  <Button
                    className="cursor-pointer bg-gradient-to-r from-[#62B904] to-[#EDFE8C] hover:bg-[#a8d900] text-black px-2 py-1 h-10 text-base rounded-[25px] animate-fade-in"
                    style={{ animationDelay: "0.3s" }}
                  >
                    Join
                    <div className="bg-black rounded-full p-2 ml-1 w-[32px] h-[32px]">
                      <img src="Component1.svg" alt="component" />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-1 lg:flex gap-4 ">
            {/* Column 2: How to contact */}
            <div className="bg-[#0A0A0A] border-[#222] py-[36px] px-[32px] rounded-[24px] lg:w-[40%]">
              <div>
                <h3 className="font-semibold text-white mb-4 text-2xl">
                  How to contact?
                </h3>
                <div className="space-y-4 pl-2">
                  <div className="flex items-start gap-3">
                    <MainIcon />
                    <span className="text-sm">info@globalsquareit.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <PhoneIcon />{" "}
                    <a href="tel:+(977) 9763596355" className="text-sm">
                      +(977)-9763596355
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <LocationIcon />{" "}
                    <span className="text-sm">
                      Ekata Marga, New Baneshwor, Kathmandu, Nepal
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-6">
                <span className="text-[#ccc] text-[16px]">Our Socials</span>
                <div className="flex mt-2">
                  <a
                    href="https://www.linkedin.com/company/global-square-i-t-company-pvt-ltd/about/"
                    target="_blank"
                    className="hover:text-[color:var(--green)]  transition-colors rounded-full p-2"
                  >
                    <LinkedIn />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[color:var(--green)] transition-colors rounded-full p-2"
                  >
                    <Twiter />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[color:var(--green)]  transition-colors rounded-full p-2"
                  >
                    <Faceboook />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Got Ideas?*/}
            <div className="bg-[#0A0A0A] border max-md:border-gray-500 rounded-[24px] py-[36px] px-[32px] lg:w-[60%]">
              <span className="font-semibold text-white text-xl">
                Got Ideas?
              </span>
              <form
                action={async (formData) => {
                  setIsPending(async () => {
                    await actions.send(formData);
                  });
                }}
                className="space-y-6 mt-5"
              >
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex gap-3">
                    <Input
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                      className="py-[16px] px-[24px] content-between bg-white/5 bg-[color:var(--darkinput)] border-white/10 text-white placeholder:text-white/40"
                    />

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                      className="py-[16px] px-[24px] bg-white/5 bg-[color:var(--darkinput)] border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required
                    className="h-[104px] py-[16px] px-[24px] bg-[color:var(--darkinput)] border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                <Button
                  type="submit"
                  className="cursor-pointer w-full text-[color:var(--darkergreen)] hover:bg-[color:var(--darkergreen)] px-[16px] py-[12px] gap-[10px]"
                  style={{
                    background: "rgba(25, 25, 25, 0.80)",
                    borderRight:
                      "2px solid var(--color-grey-9250, rgba(234, 234, 234, 0.50))",
                    borderBottom:
                      "2px solid var(--color-grey-9250, rgba(234, 234, 234, 0.50))",
                  }}
                  disabled={isPending}
                >
                  {isPending ? "Sending..." : "Send"}
                </Button>
              </form>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          {/* <div className="grid grid-cols-2 gap-8">
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
          </div> */}
        </div>

        {/* Footer bottom: Copyright */}
        <div className="py-5 md:px-[156px] border-t border-white/10 text-sm text-center lg:bg-gradient-to-br from-[#CFE93A] to-[#0000001a]">
          <p>© {currentYear} GlobalSquare. All rights reserved.</p>
          <p className="mt-1 text-xs text-white/50">Designed by GlobalSquare</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
