import { Star } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

type TestimonialProps = {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  rating: number;
};

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  position,
  company,
  testimonial,
  rating,
}) => {
  return (
    <div className="bg-[#1A1A1A] flex-shrink-0 overflow-y-hidden border border-white/5 rounded-xl p-6 hover:border-[#C6FF00]/30 transition-all w-[300px] font-[Space_Grotesk]">
      {/* Rating */}
      {/* <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "text-[#C6FF00] fill-[#C6FF00]" : "text-white/20"
            }`}
          />
        ))}
      </div> */}

      {/* Author Info */}
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 bg-gradient-to-br from-[color:var(--green)]/80 to-[#C6FF00]/30 rounded-full flex items-center justify-center text-black font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-medium text-white text-lg">{name}</p>
          <p className="text-xs text-white/50">
            {position} at {company}
          </p>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-white/60 mb-6 text-base leading-relaxed">
        "{testimonial}"
      </p>

      <div className="text-white/40">03 Jan 2025</div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      position: "CEO",
      company: "TechCorp",
      testimonial:
        "I cannot speak highly enough of the Global Square team. Their technical expertise and attention to detail was exceptional. They transformed our vision into a solution that exceeded our expectations, and it was delivered ahead of schedule and within budget.",
      rating: 5,
    },
    {
      name: "Michael Anderson",
      position: "Director of Design",
      company: "Innovate Inc",
      testimonial:
        "Working with Global Square was an incredibly smooth experience from start to finish. Their team was responsive, creative, and technically proficient. They brought fresh ideas to the table and executed them flawlessly.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "NextGen Solutions",
      testimonial:
        "Global Square provided us with innovative solutions that have significantly improved our operations. Their team was professional, communicative, and truly invested in our success. I highly recommend their services to anyone looking for top-notch IT solutions.",
      rating: 4,
    },
    {
      name: "David Williams",
      position: "Product Manager",
      company: "FutureTech",
      testimonial:
        "The team at Global Square went above and beyond our expectations. They not only delivered a fantastic product but also provided valuable insights that helped us improve our overall strategy. Their expertise and dedication make them an ideal partner.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 md:px-[48px] lg:px-[156px] bg-black"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 md:text-center">
          <span className="pb-1 pt-1 pl-3 pr-3 rounded-full text-[color:var(--greenyellow)] bg-[color:var(--titlescolor)]">
            Testimonials
          </span>
          <div>
            <h2 className="md:hidden text-5xl md:text-4xl mb-4 mt-2 text-white/60 font-[Space_Grotesk]">
              What our{" "}
              <span className="text-[color:var(--greenbackground)]">
                clients say <br /> about us
              </span>
            </h2>

            <h2 className="hidden md:block text-5xl md:text-4xl mb-4 mt-2 text-white/60 font-[Space_Grotesk]">
              What our{" "}
              <span className="bg-gradient-to-r from-[#62B904] to-[#EDFE8C] bg-clip-text text-transparent">
                clients say <br />
              </span>
              <span className="bg-gradient-to-r from-[#62B904] to-[#EDFE8C] bg-clip-text text-transparent">
                about us
              </span>
            </h2>
          </div>
          <p className="text-white/30">Hear from those who know us best.</p>
        </div>

        <div className="flex md:grid-cols-2 gap-6 overflow-x-auto scrollbar-none">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#footer">
            <Button
              className="cursor-pointer bg-[#191919] hover:bg-[color:var(--darkergreen)] text-[color:var(--greenbackground)] px-6 py-6 h-10 text-base rounded-[25px] animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Join Us
              <div className="bg-black rounded-full p-2 ml-3 w-[32px] h-[32px]">
                <img src="Component1.svg" alt="component" />
              </div>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
