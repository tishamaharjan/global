import Icon1 from "@/assets/icons/Icon1";
import Icon2 from "@/assets/icons/Icon2";
import Icon3 from "@/assets/icons/Icon3";
import Icon4 from "@/assets/icons/Icon4";
import Icon5 from "@/assets/icons/Icon5";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col bg-red/500">
      <div className="flex-shrink-0 w-[50px] h-[50px] mb-3 rounded-[12px] bg-greenbackgroundtext-black flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2 text-darkinput">{title}</h3>
        <p className="text-black text-lg font-medium text-desc leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Icon1 />,
      title: "Innovative Solutions",
      description:
        "We specialize in delivering cutting-edge IT solutions tailored to address your unique challenges and drive measurable results.",
    },
    {
      icon: <Icon2 />,
      title: "Customer-First Approach",
      description:
        "Your success is our priority. We collaborate closely to understand your needs and  create solutions that exceed expectations.",
    },
    {
      icon: <Icon3 />,
      title: "Proven Expertise",
      description:
        "With years of industry experience, we bring the knowledge and skills needed to deliver impactful and reliable results.",
    },

    {
      icon: <Icon5 />,
      title: "Cost-Effective Services",
      description:
        "We deliver premium-quality solutions at competitive prices, making innovation accessible for businesses of all sizes.",
    },
    {
      icon: <Icon4 />,
      title: "Global Reach, Local Touch",
      description:
        "While we cater to a global audience, we offer personalized attention to every client, making you feel valued every step of the way.",
    },
  ];

  return (
    <section
      id="features"
      className="py-10 md:px-12 lg:px-[156px] bg-lightbg text-black"
    >
      <div className="container mx-auto max-sm:px-4">
        <div className="max-w-3xl max-lg:mx-auto mb-9">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Why choose us?
          </h1>
          <p className="text-aboutdesc) ] text-[20px]">
            Discover the array of benefits that come with selecting GS,
            empowering your business with unparalleled web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {features.map((feature) => (
            <div className="bg-featurebg py-9 px-6 rounded-[12px]">
              <Feature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
