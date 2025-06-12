import Component1 from "@/assets/icons/Component1";
import { Button } from "@workspace/ui/components/Button";

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
    <section id="about" className="py-[116px] md:px-12 lg:px-[156px] bg-black">
      <div className="container mx-auto px-4 md:px-6 min-h-[400px] gap-12">
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
                <span className="pb-1 pt-1 pl-3 pr-3 rounded-full text-[var(--greenbackground)] bg-[var(--titlescolor)]">
                  About Us
                </span>
                <h2 className="text-3xl md:text-[48px] font-bold mb-5 mt-5">
                  <span className="text-white/50">Discover Our </span>
                  <span className="md:hidden lg:flex text-[var(--greenbackground)]">
                    Identity
                  </span>
                  <span className="hidden md:flex lg:hidden bg-gradient-to-t from-[var(--darkgreen)] to-[var(--lightgreen)] bg-clip-text text-transparent">
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
                  <a href="#contact">
                    <Button
                      className="cursor-pointer bg-[var(--greenyellow)] hover:bg-[var(--darkergreen)] text-black px-6 py-6 h-10 text-base rounded-[25px] animate-fade-in"
                      style={{
                        animationDelay: "0.3s",
                        borderRight:
                          "2px solid var(--color-yellow-60, var(--greenbackground))",
                        borderBottom:
                          "4px solid var(--color-yellow-60, var(--greenbackground))",
                      }}
                    >
                      Contact Us
                      <div className="bg-black rounded-full p-2 ml-3 w-[32px] h-[32px]">
                        <Component1 />
                      </div>
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="cursor-pointer bg-black text-[var(--greenyellow)] hover:bg-gray/90 hover:text-[var(--green)] px-6 py-6 h-10 text-base rounded-[25px] animate-fade-in"
                    style={{
                      animationDelay: "0.5s",
                      borderRight: "2px solid rgba(234, 234, 234, 0.50)",
                      borderBottom: "4px solid rgba(234, 234, 234, 0.50)",
                    }}
                  >
                    View Projects
                    <div className="bg-black rounded-full p-2 ml-3 w-[32px] h-[32px]">
                      <Component1 />
                    </div>
                  </Button>
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

        <div className="w-full flex flex-wrap gap-2 justify-between">
          {stats.map((stat) => (
            <div className="bg-[var(--statbg)] font-medium text-[18px] text-center p-3 flex flex-col justify-center h-[108px] w-[48%] md:w-[160px] lg:w-[265px] rounded-[15px]">
              <p className="text-2xl font-bold text-[var(--stattext)]">
                {stat.stats}
              </p>
              <p className="text-[18px] font-medium text-[var(--stattextgray)]">
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
