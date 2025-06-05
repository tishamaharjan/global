import { Button } from "@workspace/ui/components/button";
import IconLoop from "@workspace/ui/components/iconloop";
import ShuffleUI from "../ShuffleCard";
import SerialShifting from "../ShuffleCard";

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
    <section id="about" className="py-20 md:px-12 lg:px-[156px] bg-black">
      <div className="container mx-auto px-4 md:px-6 min-h-[400px] gap-12">
        <div className="md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex gap-[48px]">
              <div className="w-[49%] h-[368px] relative mt-6 mb-6 max-md:hidden">
                <video
                  className="w-full h-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="aboutusvid.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="w-full md:w-[49%]">
                <span className="pb-1 pt-1 pl-3 pr-3 rounded-full text-[color:var(--greenbackground)] bg-[color:var(--titlescolor)]">
                  About Us
                </span>
                <h2 className="text-3xl md:text-[48px] font-bold mb-5 mt-5">
                  <span className="text-white/50">Discover Our </span>
                  <span className="md:hidden lg:flex text-[var(--greenbackground)]">
                    Identity
                  </span>
                  <span className="hidden md:flex lg:hidden bg-gradient-to-t from-[#118E45] to-[#CFE93A] bg-clip-text text-transparent">
                    Identity
                  </span>
                </h2>
                <p className="text-white/40 mb-8 leading-relaxed">
                  At GS, we are more than just a team—we are innovators,
                  creators, and problem solvers dedicated to crafting
                  cutting-edge web solutions. Our mission is to transform ideas
                  into reality, empowering businesses with seamless digital
                  experiences.
                </p>
                <div className="flex sm:flex-row max-lg:hidden gap-4 lg:my-8">
                  <a href="#footer">
                    <Button
                      className="cursor-pointer bg-[color:var(--greenyellow)] hover:bg-[color:var(--darkergreen)] text-black px-6 py-6 h-10 text-base rounded-[25px] animate-fade-in"
                      style={{
                        animationDelay: "0.3s",
                        borderRight:
                          "2px solid var(--color-yellow-60, #DBFB36)",
                        borderBottom:
                          "4px solid var(--color-yellow-60, #DBFB36)",
                      }}
                    >
                      Contact Us
                      <div className="bg-black rounded-full p-2 ml-3 w-[32px] h-[32px]">
                        <img src="Component1.svg" alt="component" />
                      </div>
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="cursor-pointer bg-black text-[color:var(--greenyellow)] hover:bg-gray/90 hover:text-[color:var(--green)] px-6 py-6 h-10 text-base rounded-[25px] animate-fade-in"
                    style={{
                      animationDelay: "0.5s",
                      borderRight: "2px solid rgba(234, 234, 234, 0.50)",
                      borderBottom: "4px solid rgba(234, 234, 234, 0.50)",
                    }}
                  >
                    View Projects
                    <div className="bg-black rounded-full p-2 ml-3 w-[32px] h-[32px]">
                      <img src="Component1.svg" alt="component" />
                    </div>
                  </Button>
                </div>

                <div className="flex md:hidden lg:flex gap-4 my-8">
                  <IconLoop />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-6 mb-6 md:hidden">
          <video className="w-full h-full" autoPlay loop muted playsInline>
            <source src="aboutusvid.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Stats */}
        <div className="w-full flex flex-wrap gap-2 justify-between">
          {stats.map((stat, index) => (
            <div className="bg-[#191919] font-medium text-[18px] text-center p-3 flex flex-col justify-center h-[108px] w-[48%] md:w-[160px] lg:w-[260px] rounded-[15px]">
              <p className="text-2xl font-bold text-[#E6E6E6]">{stat.stats}</p>
              <p className="text-[18px] font-medium text-[#999]">
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
