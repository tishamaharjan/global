import Overlay from "../Overlay";

const Services = () => {
  const services = [
    {
      title: "Ideation & Planning",
      description:
        "We turn ideas into actionable plans, collaborating to explore concepts and develop strategies for a successful launch",

      number: "01",
      img: "Service1.png",
    },
    {
      title: "Design & Development",
      description:
        "Turning visions into action. We collaborate to uncover insights and build strategies for lasting success.",

      number: "02",
      img: "Service2.png",
    },
    {
      title: "Launch Execution",
      description:
        "We implement targeted marketing strategies to create buzz and engage your audience effectively during the launch.",
      number: "03",
      img: "Service3.png",
    },
    {
      title: "Performance Metrics & Optimization",
      description:
        "We measure success through key performance indicators (KPIs), analyzing user engagement and feedback to assess impact. This data-driven approach helps us identify improvement areas and continuously optimize your product and marketing strategies for sustained growth.",
      number: "04",
      img: "Service4.png",
    },
  ];

  return (
    <section id="services" className="py-20 bg-black flex justify-center">
      <div className="container px-4 md:px-[48px] lg:hidden relative">
        <div className="max-w-3xl text-center mb-16">
          <span className="py-1 px-3  rounded-full text-[var(--greenyellow)] bg-[var(--titlescolor)]">
            Services
          </span>

          <h2 className="hidden md:flex lg:hidden text-3xl md:text-4xl font-bold mb-4 mt-5 text-white justify-center">
            <span className="text-white/60">Your Thoughts, </span>{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(278deg, rgba(0, 0, 0, 0.51) -14.35%, rgba(209, 232, 77, 0.70) 16.07%, var(--lightgreen) 35.52%)",
              }}
            >
              Our Launch
            </span>
          </h2>

          <h2 className="flex md:hidden max-lg:flex flex-col text-3xl md:text-4xl font-bold mb-4 mt-5 text-white">
            <span className="text-white/60">Your Thoughts, </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(278deg, rgba(0, 0, 0, 0.51) -14.35%, rgba(209, 232, 77, 0.70) 16.07%, var(--lightgreen) 35.52%)",
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

        <div className="flex flex-col md:grid-cols-2 gap-6 content-center w-[100%]">
          <div className="md:hidden flex flex-col gap-6">
            {services.map((service) => (
              <div
                className="p-8 border border-gray-600 rounded-lg"
                {...(service.title === "Ideation & Planning" && {
                  className:
                    "bg-[var(--servicetitlebg1)] p-8 border border-gray-600 rounded-lg",
                })}
                {...(service.title === "Performance Metrics & Optimization" && {
                  className:
                    "bg-[var(--servicetitlebg2)] p-8 border border-gray-600 rounded-lg",
                })}
              >
                <div className="flex">
                  <span className="text-[var(--greenyellow)] mb-2 text-[20px] font-semibold">
                    {service.title}
                  </span>
                  <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                    {service.number}
                  </span>
                </div>
                {service.title === "Launch Execution" ? (
                  <p className="text-[var(--semititletext)] text-[16px] mb-3">
                    Journey to Success !
                  </p>
                ) : null}

                <p className="text-white/50 mb-2 text-[16px]">
                  {service.description}
                </p>
                <div className="flex justify-center">
                  <img src={service.img} alt={service.title} />
                </div>
              </div>
            ))}
          </div>

          <div className="max-md:hidden lg:px-[156px]">
            <div className="flex gap-4">
              <div className="w-[50%] p-8 border border-gray-600 rounded-lg bg-[var(--servicetitlebg1)]">
                <div className="flex">
                  <span className="text-[var(--greenyellow)] mb-2 text-[20px] font-semibold">
                    Ideation & Planning
                  </span>
                  <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                    01
                  </span>
                </div>
                <p className="text-white/50 text-[16px]">
                  We turn ideas into actionable plans, collaborating to explore
                  concepts and develop strategies for a successful launch
                </p>

                <div className="flex justify-center">
                  <img src="Service1.png" alt="01" />
                </div>
              </div>

              <div className="w-[50%] p-8 border border-gray-600 rounded-lg ">
                <div className="flex">
                  <span className="text-[var(--greenyellow)] mb-2 text-[20px] font-semibold">
                    Design & Development
                  </span>
                  <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                    02
                  </span>
                </div>
                <p className="text-white/50 text-[16px]">
                  Turning visions into action. We collaborate to uncover
                  insights and build strategies for lasting success.
                </p>

                <div className="flex justify-center">
                  <img src="Service2.png" alt="01" />
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="w-[45%] p-8 border border-gray-600 rounded-lg ">
                <div className="flex">
                  <span className="text-[var(--greenyellow)] mb-2 text-[20px] font-semibold">
                    Launch Execution
                  </span>
                  <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                    03
                  </span>
                </div>
                <p className="text-[var(--semititletext)] text-[16px]  mb-3">
                  Journey to Success !
                </p>
                <p className="text-white/50 text-[16px]">
                  We implement targeted marketing strategies to create buzz and
                  engage your audience effectively during the launch.
                </p>

                <div className="flex justify-center">
                  <img src="Service3.png" alt="01" />
                </div>
              </div>

              <div className="w-[55%] p-8 border border-gray-600 rounded-lg bg-[var(--servicetitlebg2)]">
                <div className="flex">
                  <span className="text-[var(--greenyellow)] mb-2 text-[20px] font-semibold">
                    Performance Metrics & Optimization
                  </span>
                  <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                    04
                  </span>
                </div>
                <p className="text-white/50 text-[16px]">
                  We measure success through key performance indicators (KPIs),
                  analyzing user engagement and feedback to assess impact. This
                  data-driven approach helps us identify improvement areas and
                  continuously optimize your product and marketing strategies
                  for sustained growth.
                </p>
                <div className="flex justify-center">
                  <img src="Service4.png" alt="01" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="bg-black hidden lg:block">
        <Overlay />

        <section id="services" className="py-20 md:px-[48px] lg:px-[156px]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="py-1 px-3  rounded-full text-[var(--greenyellow)] bg-[var(--titlescolor)]">
                Services
              </span>
              <h2 className="flex flex-col text-3xl md:text-4xl font-bold mb-4 mt-5 text-white">
                <span className="text-white/60">Your Thoughts, </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(278deg, rgba(0, 0, 0, 0.51) -14.35%, rgba(209, 232, 77, 0.70) 16.07%, var(--lightgreen) 35.52%)",
                  }}
                >
                  Our Launch
                </span>
              </h2>

              <p className="text-white/50">
                We believe in breakthroughs where others see boundaries. If
                you're looking for sharper insights, streamlined processes, or a
                fresh perspective, let's connect—coffee's on us.
              </p>
            </div>

            <div className="max-md:hidden">
              <div className="flex gap-4 ">
                <div className="w-[50%] p-8 border  border-gray-600 rounded-lg bg-[var(--servicetitlebg1)]">
                  <div className="flex">
                    <span className="text-[var(--greenyellow)] mb-2 text-[20px] font-semibold">
                      Ideation & Planning
                    </span>
                    <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                      01
                    </span>
                  </div>
                  <p className="text-white/50 text-[16px]">
                    We turn ideas into actionable plans, collaborating to
                    explore concepts and develop strategies for a successful
                    launch
                  </p>

                  <div className="flex justify-center">
                    <img src="Service1.png" alt="01" />
                  </div>
                </div>

                <div className="w-[50%] p-8 border border-gray-600 rounded-lg ">
                  <div className="flex">
                    <span className="text-[var(--greenyellow)] mb-2 text-[20px] font-semibold">
                      Design & Development
                    </span>
                    <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                      02
                    </span>
                  </div>
                  <p className="text-white/50 text-[16px]">
                    Turning visions into action. We collaborate to uncover
                    insights and build strategies for lasting success.
                  </p>

                  <div className="flex justify-center">
                    <img src="Service2.png" alt="01" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="w-[30%] p-8 border border-gray-600 rounded-lg ">
                  <div className="flex">
                    <span className="text-[var(--greenyellow)] mb-2 text-[20px] font-semibold">
                      Launch Execution
                    </span>
                    <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                      03
                    </span>
                  </div>
                  <p className="text-[var(--semititletext)] text-[16px]  mb-3">
                    Journey to Success !
                  </p>
                  <p className="text-white/50 text-[16px]">
                    We implement targeted marketing strategies to create buzz
                    and engage your audience effectively during the launch.
                  </p>

                  <div className="flex justify-center">
                    <img src="Service3.png" alt="01" />
                  </div>
                </div>

                <div className="w-[70%] p-8 border border-gray-600 rounded-lg bg-[var(--servicetitlebg2)]">
                  <div className="flex">
                    <span className="text-[var(--greenyellow)] mb-2 text-[20px] font-semibold">
                      Performance Metrics & Optimization
                    </span>
                    <span className="ml-auto text-gray-200 text-[20px] font-semibold">
                      04
                    </span>
                  </div>
                  <p className="text-white/50 text-[16px]">
                    We measure success through key performance indicators
                    (KPIs), analyzing user engagement and feedback to assess
                    impact. This data-driven approach helps us identify
                    improvement areas and continuously optimize your product and
                    marketing strategies for sustained growth.
                  </p>
                  <div className="flex justify-center">
                    <img src="Service4.png" alt="01" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </span>
    </section>
  );
};

export default Services;
