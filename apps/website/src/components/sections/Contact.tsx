import LinkedIn from "@/assets/icons/LinkedIn";
import Twiter from "@/assets/icons/Twitter";
import Faceboook from "@/assets/icons/Facebook";
import MailIcon from "@/assets/icons/MailIcon";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import DotBackground from "../Dotbg";

const Contact = () => {
  const socials = [
    {
      icon: <LinkedIn />,
      href: "https://www.linkedin.com/company/global-square-i-t-company-pvt-ltd/about/",
    },
    { icon: <Twiter />, href: "#" },
    { icon: <Faceboook />, href: "#" },
  ];

  return (
    <section
      id="contact"
      className="bg-contactbg border border-statbg rounded-2xl h-full"
    >
      <DotBackground>
        <div className="border-contactborder py-[36px] px-[32px] rounded-[24px]">
          <div>
            <h3 className="font-bold text-whitetext mb-4 text-2xl">
              How to contact?
            </h3>
            <div className="space-y-4 flex flex-col my-[24px] font-medium text-lg">
              <div className="flex items-start gap-4">
                <span className="border border-iconborder rounded-[10px] p-[10px]">
                  <MailIcon />
                </span>
                <span className="text-lg flex py-[10px]">
                  info@globalsquareit.com
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="border border-iconborder rounded-[10px] p-[10px]">
                  <PhoneIcon />
                </span>
                <a href="tel:+(977) 9763596355" className="text-lg py-[10px]">
                  +977 9763596355
                </a>
              </div>
              <div className="flex items-start gap-4">
                <span className="border border-iconborder rounded-[10px] p-[10px]">
                  <LocationIcon />
                </span>
                <span className="text-lg py-[10px]">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6 ">
            <span className="text-whitetext text-[16px] font-semibold">
              Our Socials
            </span>
            <div className="flex mt-3">
              <span className="flex gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="hover:text-globalgreen transition-colors border border-iconborder rounded-[10px]"
                  >
                    {social.icon}
                  </a>
                ))}
              </span>
            </div>
          </div>
        </div>
      </DotBackground>
    </section>
  );
};

export default Contact;
