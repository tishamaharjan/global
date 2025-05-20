import { Layers, Code, Palette, BarChart } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  number: string;
  className?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  number,
  className,
}) => {
  return (
    <div
      className={`bg-[#1A1A1A] rounded-xl p-6 border border-white/5 hover:border-[#C6FF00]/30 transition-all group relative overflow-hidden ${className}`}
    >
      <div className="absolute top-3 right-3 text-5xl font-bold text-white/5 group-hover:text-[#C6FF00]/10 transition-colors">
        {number}
      </div>
      <div className="p-3 bg-[#232323] rounded-lg inline-flex mb-4 text-[#C6FF00] group-hover:bg-[#C6FF00] group-hover:text-black transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Ideation & Planning",
      description:
        "We turn ideas into actionable strategy by understanding the essence of your business and creating a strategic blueprint for success.",
      icon: <Layers className="h-6 w-6" />,
      number: "01",
    },
    {
      title: "Design & Development",
      description:
        "Bringing designs to life with pixel-perfect UI, from concept to code. We create engaging designs and develop robust systems.",
      icon: <Code className="h-6 w-6" />,
      number: "02",
    },
    {
      title: "Launch Execution",
      description:
        "Ensuring a smooth launch with thorough testing and quality assurance. We manage your audience efficiently during the launch.",
      icon: <Palette className="h-6 w-6" />,
      number: "03",
    },
    {
      title: "Performance Metrics & Optimization",
      description:
        "We measure and fine-tune your digital presence for optimal performance, analyzing user behavior to boost conversion rates.",
      icon: <BarChart className="h-6 w-6" />,
      number: "04",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Your Thoughts, <span className="text-[#C6FF00]">Our Launch</span>
          </h2>
          <p className="text-white/60">
            Our mission is to blend technology with a vision into a powerful
            partnership. We transform abstract ideas into tangible, innovative
            digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              number={service.number}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
