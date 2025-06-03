import DotBackground from "@workspace/ui/components/dotbg";
import { Layers, Code, Palette, BarChart } from "lucide-react";

// type ServiceCardProps = {
//   title: string;
//   description: string;
//   number: string;
//   className?: string;
// };

// const ServiceCard: React.FC<ServiceCardProps> = ({
//   title,
//   description,
//   number,
//   className,
// }) => {
//   return (
//     <div className={`w-full`}>
//       <div className="absolute top-3 right-3 text-5xl font-bold text-white/5 group-hover:text-[#C6FF00]/10 transition-colors">
//         {number}
//       </div>

//       <h3 className="text-xl font-semibold mb-3">{title}</h3>
//       <p className="text-white/60 text-sm leading-relaxed">{description}</p>
//     </div>
//   );
// };

const Services = () => {
  const services = [
    {
      title: "Ideation & Planning",
      description:
        "We turn ideas into actionable strategy by understanding the essence of your business and creating a strategic blueprint for success.",

      number: "01",
      img: "service1.svg",
    },
    {
      title: "Design & Development",
      description:
        "Bringing designs to life with pixel-perfect UI, from concept to code. We create engaging designs and develop robust systems.",

      number: "02",
      img: "service2.svg",
    },
    {
      title: "Launch Execution",
      description:
        "Ensuring a smooth launch with thorough testing and quality assurance. We manage your audience efficiently during the launch.",
      number: "03",
      img: "service3.svg",
    },
    {
      title: "Performance Metrics & Optimization",
      description:
        "We measure and fine-tune your digital presence for optimal performance, analyzing user behavior to boost conversion rates.",
      number: "04",
      img: "service4.svg",
    },
  ];

  return (
    <div>
      <section
        id="services"
        className="py-20 md:px-[48px] lg:px-[156px] bg-black lg:hidden"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="pb-1 pt-1 pl-3 pr-3  rounded-full text-[color:var(--greenyellow)] bg-[color:var(--titlescolor)]">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-5 text-white flex flex-col">
              <span className="text-white/60">Your Thoughts, </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(278deg, rgba(0, 0, 0, 0.51) -14.35%, rgba(209, 232, 77, 0.70) 16.07%, #CFE93A 35.52%)",
                }}
              >
                Our Launch
              </span>
            </h2>
            <p className="text-white/50">
              We believe in breakthroughs where others see boundaries. If you're
              looking for sharper insights, streamlined processes, or a fresh
              perspective, let's connect—coffee's on us.
            </p>
          </div>

          {/* Mobile View */}
          <div className="flex flex-col md:grid-cols-2 gap-6 content-center w-[100%]">
            <div className="md:hidden flex flex-col gap-6">
              {services.map((service, index) => (
                <div className="w-full p-8 border border-gray-600 rounded-lg">
                  <div className="flex">
                    <span className="text-[color:var(--greenyellow)] mb-2 text-[20px] font-semibold">
                      {service.title}
                    </span>
                    <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                      {service.number}
                    </span>
                  </div>
                  <p className="text-white/50 mb-2 text-[16px]">
                    {service.description}
                  </p>
                  <div className="flex justify-center">
                    <img src={service.img} alt={service.title} />
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop and IPad View */}
            <div className="max-md:hidden">
              <div className="flex gap-4">
                <div className="w-[50%] p-8 border border-gray-600 rounded-lg bg-[#131A25]">
                  <div className="flex">
                    <span className="text-[color:var(--greenyellow)] mb-2 text-[20px] font-semibold">
                      Ideation & Planning
                    </span>
                    <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                      01
                    </span>
                  </div>
                  <p className="text-white/50 text-[16px]">
                    We turn ideas into actionable strategy by understanding the
                    essence of your business and creating a strategic blueprint
                    for success.
                  </p>

                  <div className="flex justify-center">
                    <img src="service1.svg" alt="01" />
                  </div>
                </div>

                <div className="w-[50%] p-8 border border-gray-600 rounded-lg ">
                  <div className="flex">
                    <span className="text-[color:var(--greenyellow)] mb-2 text-[20px] font-semibold">
                      Design & Development
                    </span>
                    <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                      02
                    </span>
                  </div>
                  <p className="text-white/50 text-[16px]">
                    Bringing designs to life with pixel-perfect UI, from concept
                    to code. We create engaging designs and develop robust
                    systems.
                  </p>

                  <div className="flex justify-center">
                    <img src="service2.svg" alt="01" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="w-[30%] p-8 border border-gray-600 rounded-lg ">
                  <div className="flex">
                    <span className="text-[color:var(--greenyellow)] mb-2 text-[20px] font-semibold">
                      Launch Execution
                    </span>
                    <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                      03
                    </span>
                  </div>
                  <p className="text-white/50 text-[16px]">
                    Ensuring a smooth launch with thorough testing and quality
                    assurance. We manage your audience efficiently during the
                    launch.
                  </p>

                  <div className="flex justify-center">
                    <img src="service3.svg" alt="01" />
                  </div>
                </div>

                <div className="w-[70%] p-8 border border-gray-600 rounded-lg bg-[#161616]">
                  <div className="flex">
                    <span className="text-[color:var(--greenyellow)] mb-2 text-[20px] font-semibold">
                      Performance Metrics & Optimization
                    </span>
                    <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                      04
                    </span>
                  </div>
                  <p className="text-white/50 text-[16px]">
                    We measure and fine-tune your digital presence for optimal
                    performance, analyzing user behavior to boost conversion
                    rates.
                  </p>
                  <div className="flex justify-center">
                    <img src="service4.svg" alt="01" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop view with dotted background */}
      <span className=" hidden lg:block">
        <DotBackground>
          <section
            id="services"
            className="py-20 md:px-[48px] lg:px-[156px] bg-black"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="pb-1 pt-1 pl-3 pr-3  rounded-full text-[color:var(--greenyellow)] bg-[color:var(--titlescolor)]">
                  Services
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-5 text-white flex flex-col">
                  <span className="text-white/60">Your Thoughts, </span>
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(278deg, rgba(0, 0, 0, 0.51) -14.35%, rgba(209, 232, 77, 0.70) 16.07%, #CFE93A 35.52%)",
                    }}
                  >
                    Our Launch
                  </span>
                </h2>
                <p className="text-white/50">
                  We believe in breakthroughs where others see boundaries. If
                  you're looking for sharper insights, streamlined processes, or
                  a fresh perspective, let's connect—coffee's on us.
                </p>
              </div>

              {/* Desktop and IPad View */}
              <div className="max-md:hidden">
                <div className="flex gap-4">
                  <div className="w-[50%] p-8 border border-gray-600 rounded-lg bg-[#131A25]">
                    <div className="flex">
                      <span className="text-[color:var(--greenyellow)] mb-2 text-[20px] font-semibold">
                        Ideation & Planning
                      </span>
                      <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                        01
                      </span>
                    </div>
                    <p className="text-white/50 text-[16px]">
                      We turn ideas into actionable strategy by understanding
                      the essence of your business and creating a strategic
                      blueprint for success.
                    </p>

                    <div className="flex justify-center">
                      <img src="service1.svg" alt="01" />
                    </div>
                  </div>

                  <div className="w-[50%] p-8 border border-gray-600 rounded-lg ">
                    <div className="flex">
                      <span className="text-[color:var(--greenyellow)] mb-2 text-[20px] font-semibold">
                        Design & Development
                      </span>
                      <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                        02
                      </span>
                    </div>
                    <p className="text-white/50 text-[16px]">
                      Bringing designs to life with pixel-perfect UI, from
                      concept to code. We create engaging designs and develop
                      robust systems.
                    </p>

                    <div className="flex justify-center">
                      <img src="service2.svg" alt="01" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <div className="w-[30%] p-8 border border-gray-600 rounded-lg ">
                    <div className="flex">
                      <span className="text-[color:var(--greenyellow)] mb-2 text-[20px] font-semibold">
                        Launch Execution
                      </span>
                      <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                        03
                      </span>
                    </div>
                    <p className="text-white/50 text-[16px]">
                      Ensuring a smooth launch with thorough testing and quality
                      assurance. We manage your audience efficiently during the
                      launch.
                    </p>

                    <div className="flex justify-center">
                      <img src="service3.svg" alt="01" />
                    </div>
                  </div>

                  <div className="w-[70%] p-8 border border-gray-600 rounded-lg bg-[#161616]">
                    <div className="flex">
                      <span className="text-[color:var(--greenyellow)] mb-2 text-[20px] font-semibold">
                        Performance Metrics & Optimization
                      </span>
                      <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                        04
                      </span>
                    </div>
                    <p className="text-white/50 text-[16px]">
                      We measure and fine-tune your digital presence for optimal
                      performance, analyzing user behavior to boost conversion
                      rates.
                    </p>
                    <div className="flex justify-center">
                      <img src="service4.svg" alt="01" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </DotBackground>
      </span>
    </div>
  );
};

export default Services;
