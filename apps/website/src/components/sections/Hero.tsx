import { useEffect, useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight, Code, Zap, BarChart3 } from "lucide-react";

const HeroTextLoop = () => {
  const words = ["Vision", "Ideas", "Solutions", "Dreams"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="text-[#DCFC36] relative inline-block min-w-[120px] transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {words[currentIndex]}
    </span>
  );
};

const floatingIcons = [
  {
    icon: <img src="arrowleft.svg" alt="Icon" />,
    title: "Innovation",
    delay: 0,
    position: "left-[15%] top-[43%]",
    side: "left",
  },
  {
    icon: <img src="arrowleft.svg" alt="Icon" />,
    title: "Quality Assurance",
    delay: 0,
    position: "left-[8%] top-[59%]",
    side: "left",
  },
  {
    icon: <img src="arrowleft.svg" alt="Icon" />,
    title: "AI Powered Assistant",
    delay: 0,
    position: "left-[12%] bottom-[20%]",
    side: "left",
  },
  {
    icon: <img src="arrowright.svg" alt="Icon" />,
    title: "Software Development",
    delay: 1,
    position: "right-[10%] top-[43%]",
    side: "right",
  },
  {
    icon: <img src="arrowright.svg" alt="Icon" />,
    title: "UI/UX Design",
    delay: 1,
    position: "right-[8%] top-[59%]",
    side: "right",
  },
  {
    icon: <img src="arrowright.svg" alt="Icon" />,
    title: "System Architecture",
    delay: 2,
    position: "right-[12%] bottom-[20%]",
    side: "right",
  },
];

declare global {
  interface Window {
    Calendly?: any;
  }
}

const Hero: React.FC = () => {
  // const scrollToContact = () => {
  //   window.Calendly?.initPopupWidget({
  //     url: "https://calendly.com/gs-developer01/30min",
  //   });
  //   return false;
  // };

  return (
    <section className="relative  pb-20 md:pt-40 md:pb-32 object-fit content-center overflow-hidden">
      {/* Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-[#121212] to-[#121212] pointer-events-none"></div> */}

      {/* Glow Effect */}
      {/* <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[color:var(--green)]/20 rounded-full blur-[100px] pointer-events-none"></div> */}

      <video
        className="absolute w-full h-[100%] object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="background.mp4" type="video/mp4" />
      </video>

      {/* Floating Icons */}
      <div className="max-lg:hidden">
        {floatingIcons.map((item, index) => {
          if (item.side == "left")
            return (
              <div
                key={index}
                className={`absolute ${item.position} left-5 md:flex flex-col items-center justify-center h-12 p-2  text-[#E6E6E6] animate-float `}
                style={{ animationDelay: `${item.delay}s` }}
              >
                <span className="ml-auto">{item.icon}</span>
                <span className="bg-[#1d1d1d] rounded-[10px] p-1 ">
                  {item.title}
                </span>
              </div>
            );
          else
            return (
              <div
                key={index}
                className={`absolute ${item.position} md:flex flex-col items-center justify-center h-12 p-2 text-[#E6E6E6] animate-float`}
                style={{ animationDelay: `${item.delay}s` }}
              >
                <span className="mr-auto">{item.icon}</span>
                <span className="bg-[#1d1d1d] rounded-[10px] p-1">
                  {item.title}
                </span>
              </div>
            );
        })}
      </div>

      <div className="container mt-22 mx-auto px-4 md:px-6 relative z-10 pt-45">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small Subtitle */}
          <div className="inline-flex md:hidden items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-6 max-sm:hidden">
            <span className="inline-block w-2 h-2 rounded-full bg-[color:var(--green)] mr-2"></span>
            <span>
              Quality Results • Professional Services • Digital Design
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-[58px] lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Bringing Your{" "}
            <span className="text-[#DCFC36]">
              <HeroTextLoop />
            </span>{" "}
            to Life with <span className="text-[#7F7F7F]">Innovation</span> &{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(278deg, rgba(0, 0, 0, 0.51) -14.35%, rgba(209, 232, 77, 0.70) 16.07%, #CFE93A 35.52%)",
              }}
            >
              Precision
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto animate-slide-up">
            We turn ideas into impactful digital experiences. From strategy to
            execution, our Japan-based team delivers tech solutions that drive
            growth and inspire success.
          </p>

          {/* CTA Buttons */}
          <div className="flex sm:flex-row justify-center items-center gap-4">
            <a href="#services">
              <Button
                className="cursor-pointer bg-[color:var(--greenyellow)] hover:bg-[color:var(--darkergreen)] text-black  px-6 py-6 h-10 text-base rounded-[25px] animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <span>
                  Explore <span className="max-sm:hidden">More</span>
                </span>
                <div className="bg-black rounded-full p-2 ml-3 w-[32px] h-[32px]">
                  <img src="Component1.svg" alt="component" />
                </div>
              </Button>
            </a>
            <a href="#footer">
              <Button
                variant="outline"
                className="cursor-pointer bg-black text-[color:var(--greenyellow)] hover:bg-gray/90 hover:text-[color:var(--green)] px-6 py-6 h-10 text-base rounded-[25px] animate-fade-in"
                style={{
                  animationDelay: "0.5s",
                  borderRight: "2px solid rgba(234, 234, 234, 0.50)",
                  borderBottom: "4px solid rgba(234, 234, 234, 0.50)",
                }}
              >
                Contact Us
                <div className="bg-black rounded-full p-2 ml-3 w-[32px] h-[32px]">
                  <img src="Component1.svg" alt="component" />
                </div>
              </Button>
            </a>
          </div>

          {/* Brands or Trust Indicators */}
          {/* <div
            className="mt-16 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <p className="text-sm uppercase text-white/50 mb-4">
              Trusted by innovative brands
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {["Microsoft", "Google", "Amazon", "Adobe", "IBM"].map(
                (brand, index) => (
                  <div
                    key={index}
                    className="text-white/30 font-semibold text-lg"
                  >
                    {brand}
                  </div>
                )
              )}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
