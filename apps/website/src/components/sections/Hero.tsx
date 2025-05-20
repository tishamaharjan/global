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
      className="text-[#C6FF00] relative inline-block min-w-[120px] transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {words[currentIndex]}
    </span>
  );
};

const floatingIcons = [
  {
    icon: <Code className="h-5 w-5" />,
    delay: 0,
    position: "left-[10%] top-[20%]",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    delay: 1,
    position: "right-[15%] top-[30%]",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    delay: 2,
    position: "left-[20%] bottom-[25%]",
  },
];

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#121212] to-[#121212] pointer-events-none"></div>

      {/* Glow Effect */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#C6FF00]/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} hidden md:flex items-center justify-center w-12 h-12 bg-[#1d1d1d] rounded-full text-[#C6FF00] animate-float`}
          style={{ animationDelay: `${item.delay}s` }}
        >
          {item.icon}
        </div>
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small Subtitle */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C6FF00] mr-2"></span>
            <span>
              Quality Results • Professional Services • Digital Design
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Bringing Your <HeroTextLoop /> to Life
            <br />
            with <span className="text-[#C6FF00]">Innovation</span> &{" "}
            <span className="text-[#C6FF00]">Precision</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto animate-slide-up">
            We turn ideas into innovative digital experiences with cutting-edge
            development, design, and strategy to help businesses grow and
            succeed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              onClick={scrollToContact}
              className="bg-[#C6FF00] hover:bg-[#a8d900] text-black px-6 py-6 h-auto text-base rounded-md animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Schedule a Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={scrollToServices}
              variant="outline"
              className="bg-white text-black hover:bg-white/90 px-6 py-6 h-auto text-base rounded-md animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              Explore Services
            </Button>
          </div>

          {/* Brands or Trust Indicators */}
          <div
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
