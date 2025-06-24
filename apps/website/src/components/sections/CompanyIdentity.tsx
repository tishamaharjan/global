import Component1 from "@/assets/icons/Component1";
import { Button } from "../Button";

const CompanyIdentity = () => {
  const stats = [
    {
      stats: "2023",
      title: "Year Founded",
    },
    {
      stats: "5+",
      title: "Completed Projects",
    },
    {
      stats: "20+",
      title: "Team Members",
    },
    {
      stats: "20+",
      title: "Clients",
    },
  ];

  return (
    <section
      id="about"
      className="max-sm:pb-20 md:py-20 lg:py-[116px] md:px-12 lg:px-[156px] bg-black"
    >
      <div className="container mx-auto max-sm:px-4 min-h-[400px] gap-12">
        <div className="md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex gap-[48px]">
              <div className="w-[49%] h-[368px] relative mt-6 mb-6 max-md:hidden">
                <div className="absolute top-0 left-0 h-full rounded-2xl">
                  <img
                    src="Aboutusvid.gif"
                    alt=""
                    className="h-full rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-[49%]">
                <span className="py-[6px] px-3 border border-statbg rounded-full text-greenbackground bg-titlescolor">
                  About Us
                </span>
                <h2 className="text-3xl md:text-[48px] font-bold mb-5 mt-5">
                  <span className="text-white/50">Discover Our </span>
                  <span className="md:hidden lg:flex text-greenbackground">
                    Identity
                  </span>
                  <span className="hidden md:flex lg:hidden bg-gradient-to-t from-darkgreen to-yellowgreen bg-clip-text text-transparent">
                    Identity
                  </span>
                </h2>
                <p className="text-servicedesc mb-8 text-[16px] font-medium leading-relaxed">
                  At GS, we are more than just a team—we are innovators,
                  creators, and problem solvers dedicated to crafting
                  cutting-edge web solutions. Our mission is to transform ideas
                  into reality, empowering businesses with seamless digital
                  experiences.
                </p>
                <div className="flex sm:flex-row max-lg:hidden gap-4 lg:my-8">
                  <a href="#contact">
                    <Button
                      className="cursor-pointer border-r-[2px] border-b-[4px] border-greenbackground bg-yellowgreen hover:bg-darkergreen text-black px-6 py-6 h-10 text-base rounded-[25px] animate-fade-in"
                      style={{
                        animationDelay: "0.3s",
                      }}
                    >
                      Contact Us
                      <div className="ml-3 w-[32px] h-[32px]">
                        <Component1 />
                      </div>
                    </Button>
                  </a>
                  {/* <Button
                    variant="outline"
                    className="cursor-pointer bg-black text-yellowgreen hover:bg-gray/90 hover:text-globalgreen px-6 py-6 h-10 text-base rounded-[25px] animate-fade-in"
                    style={{
                      animationDelay: "0.5s",
                      borderRight: "2px solid rgba(234, 234, 234, 0.50)",
                      borderBottom: "4px solid rgba(234, 234, 234, 0.50)",
                    }}
                  >
                    View Projects
                    <div className="ml-3 w-[32px] h-[32px]">
                      <Component1 />
                    </div>
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-6 mb-6 md:hidden">
          <img
            src="Aboutusvid.gif"
            alt=""
            className="w-full h-full rounded-2xl"
          />
        </div>

        <div className="w-full mt-12 md:mt-6 lg:mt-12 flex flex-wrap gap-2 md:gap-5 lg:gap-5 justify-between">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-statbg font-medium text-[18px] text-center p-3 flex flex-col justify-center h-[108px] w-[48%] md:w-[160px] lg:w-[265px] rounded-[15px]"
            >
              <p className="text-2xl font-bold text-stattext">{stat.stats}</p>
              <p className="text-[18px] font-medium text-stattextgray">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyIdentity;
