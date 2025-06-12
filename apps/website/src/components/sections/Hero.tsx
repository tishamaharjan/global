import { useEffect, useState } from "react";
import { Button } from "@workspace/ui/components/Button";

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
      className="text-[var(--herotext)] relative inline-block min-w-[120px] transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {words[currentIndex]}
    </span>
  );
};

const floatingIcons = [
  {
    icon: <img src="Arrowleft.svg" alt="Icon" />,
    title: "Innovation",
    delay: 0,
    position: "left-[25%] top-[30%]",
    side: "left",
  },
  {
    icon: <img src="Arrowleft.svg" alt="Icon" />,
    title: "Quality Assurance",
    delay: 0,
    position: "left-[14%] top-[48%]",
    side: "left",
  },
  {
    icon: <img src="Arrowleft.svg" alt="Icon" />,
    title: "AI Powered Assistant",
    delay: 0,
    position: "left-[20%] bottom-[21%]",
    side: "left",
  },
  {
    icon: <img src="Arrowright.svg" alt="Icon" />,
    title: "Software Development",
    delay: 1,
    position: "right-[20%] top-[30%]",
    side: "right",
  },
  {
    icon: <img src="Arrowright.svg" alt="Icon" />,
    title: "UI/UX Design",
    delay: 1,
    position: "right-[18%] top-[57%]",
    side: "right",
  },
  {
    icon: <img src="Arrowright.svg" alt="Icon" />,
    title: "System Architecture",
    delay: 2,
    position: "right-[22%] bottom-[18%]",
    side: "right",
  },
];

const Hero: React.FC = () => {
  return (
    <>
      <section className="relative bg-black mt-[90px] md:pb-32 object-fit content-center lg:mt-0 lg:min-h-[898px]">
        <span className="w-full">
          <img
            src="Earth.gif"
            alt=""
            className="absolute w-full h-full z-0 object-cover"
          />
        </span>

        <div className="max-lg:hidden">
          {floatingIcons.map((item, index) => {
            if (item.side == "left")
              return (
                <div
                  key={index}
                  className={`absolute ${item.position} left-5 md:flex flex-col items-center justify-center h-12 p-2  text-[var(--stattext)] animate-float `}
                  style={{ animationDelay: `${item.delay}s` }}
                >
                  <span className="ml-auto">{item.icon}</span>
                  <span className="bg-[var(--floatbg)] rounded-[10px] p-1 ">
                    {item.title}
                  </span>
                </div>
              );
            else
              return (
                <div
                  key={index}
                  className={`absolute ${item.position} md:flex flex-col items-center justify-center h-12 p-2 text-[var(--stattext)] animate-float`}
                  style={{ animationDelay: `${item.delay}s` }}
                >
                  <span className="mr-auto">{item.icon}</span>
                  <span className="bg-[var(--floatbg)] rounded-[10px] p-1">
                    {item.title}
                  </span>
                </div>
              );
          })}
        </div>

        <div className="container mt-22 mx-auto px-4 md:px-6 relative z-10 pt-45">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-[58px] lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Bringing Your{" "}
              <span className="text-[var(--herotext)]">
                <HeroTextLoop />
              </span>{" "}
              to Life with{" "}
              <span className="text-[var(--herotextgray)]">Innovation</span> &{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(278deg, rgba(0, 0, 0, 0.51) -14.35%, rgba(209, 232, 77, 0.70) 16.07%, var(--lightgreen) 35.52%)",
                }}
              >
                Precision
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto animate-slide-up font-medium">
              We turn ideas into impactful digital experiences. From strategy to
              execution, our Japan-based team delivers tech solutions that drive
              growth and inspire success.
            </p>

            <div className="hidden md:flex sm:flex-row justify-center items-center gap-4">
              <a href="#services">
                <Button
                  className="cursor-pointer bg-[var(--greenyellow)] hover:bg-[var(--darkergreen)] text-black px-4 py-6 h-[52px] text-[18px] font-medium rounded-[25px] animate-fade-in"
                  style={{
                    animationDelay: "0.3s",
                    borderRight:
                      "2px solid var(--color-yellow-60, var(--greenbackground))",
                    borderBottom:
                      "4px solid var(--color-yellow-60, var(--greenbackground)",
                  }}
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
                  className="cursor-pointer bg-black text-[var(--greenyellow)] hover:bg-gray/90 hover:text-[var(--green)] px-4 py-6 h-[52px] text-[18px] font-medium rounded-[25px] animate-fade-in"
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
          </div>
        </div>
      </section>
      <div
        className="flex md:hidden justify-center bg-black h-[150px] gap-4"
        style={{
          backgroundImage: "url('VectorBg.svg')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
        }}
      >
        <a href="#services">
          <Button
            className="cursor-pointer bg-[var(--greenyellow)] hover:bg-[var(--darkergreen)] text-black px-4 py-6 h-[52px] text-[18px] font-medium rounded-[25px] animate-fade-in"
            style={{
              animationDelay: "0.3s",
              borderRight:
                "2px solid var(--color-yellow-60, var(--greenbackground))",
              borderBottom:
                "4px solid var(--color-yellow-60, var(--greenbackground))",
            }}
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
            className="cursor-pointer bg-black text-[var(--greenyellow)] hover:bg-gray/90 hover:text-[var(--green)] px-4 py-6 h-[52px] text-[18px] font-medium rounded-[25px] animate-fade-in"
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
    </>
  );
};

export default Hero;
