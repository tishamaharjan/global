import { Sparkles, Users, Scale, DollarSign } from "lucide-react";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C6FF00]/10 text-[#C6FF00] flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Innovative Solutions",
      description:
        "We combine cutting-edge technologies with creative solutions to address your critical business challenges and drive innovation.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Customer-First Approach",
      description:
        "Our entire process is built around understanding your needs and creating tailor-made solutions that exceed expectations.",
    },
    {
      icon: <Scale className="h-5 w-5" />,
      title: "Proven Expertise",
      description:
        "With our specialized knowledge in a wide range of digital technologies, we bring invaluable insights to deliver exceptional results.",
    },
    {
      icon: <DollarSign className="h-5 w-5" />,
      title: "Scalability and Flexibility",
      description:
        "Our solutions are designed to grow with your business, adapting seamlessly to changing requirements and evolving needs.",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Cost-Effective Services",
      description:
        "We provide high-quality solutions at competitive rates, ensuring excellent value without compromising on quality or scope.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Global Reach, Local Touch",
      description:
        "With clients across different industries and regions, we bring a global perspective while maintaining personalized service.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why choose <span className="text-[#C6FF00]">us?</span>
          </h2>
          <p className="text-white/60">
            We bring your ideas to life through technology, transforming your
            vision into a reality with exceptional technical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
