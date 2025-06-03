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
import DotBackground from "@workspace/ui/components/dotbg";

const Contact = () => {
  const [isPending, setIsPending] = useTransition();
  return (
    // <DotBackground>
    <section id="contact" className="bg-[#0A0A0A] rounded-2xl h-[391px] p-1">
      <DotBackground>
        {/* <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Start Your{" "}
              <span className="text-[color:var(--green)]">Project</span>
            </h2>
            <p className="text-white/60">
              Ready to transform your ideas into reality? Get in touch with us
              today and let's create something amazing together.
            </p>
          </div>

          <form
            action={async (formData) => {
              setIsPending(async () => {
                await actions.send(formData);
              });
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-white"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-white"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-white"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-white"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                required
                className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
            </div>

            <Button
              type="submit"
              className="cursor-pointer w-full bg-[color:var(--green)] text-black hover:bg-[color:var(--darkergreen)] h-12"
              disabled={isPending}
            >
              {isPending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div> */}
        <div className="bg-[#0A0A0A] border-[#222] py-[36px] px-[32px] rounded-[24px]">
          <div>
            <h3 className="font-semibold text-white mb-4 text-2xl">
              How to contact?
            </h3>
            <div className="space-y-4 pl-2 flex flex-col gap-4 my-[24px] font-medium text-lg">
              <div className="flex items-start gap-4 ">
                <MainIcon />
                <span className="text-lg flex">info@globalsquareit.com</span>
              </div>
              <div className="flex items-start gap-4">
                <PhoneIcon />{" "}
                <a href="tel:+(977) 9763596355" className="text-lg">
                  +(977)-9763596355
                </a>
              </div>
              <div className="flex items-start gap-4">
                <LocationIcon />{" "}
                <span className="text-lg">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6 ">
            <span className="text-[#ccc] text-[16px]">Our Socials</span>
            <div className="flex mt-3">
              <a
                href="https://www.linkedin.com/company/global-square-i-t-company-pvt-ltd/about/"
                target="_blank"
                className="hover:text-[color:var(--green)]  transition-colors rounded-full px-2"
              >
                <LinkedIn />
              </a>
              <a
                href="#"
                className="hover:text-[color:var(--green)] transition-colors rounded-full px-2"
              >
                <Twiter />
              </a>
              <a
                href="#"
                className="hover:text-[color:var(--green)]  transition-colors rounded-full px-2"
              >
                <Faceboook />
              </a>
            </div>
          </div>
        </div>
      </DotBackground>
    </section>
    // </DotBackground>
  );
};

export default Contact;
