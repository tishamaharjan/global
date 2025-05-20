import { Star } from "lucide-react";

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
    <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-6 hover:border-[#C6FF00]/30 transition-all">
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "text-[#C6FF00] fill-[#C6FF00]" : "text-white/20"
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-white/70 mb-6 text-sm leading-relaxed">
        "{testimonial}"
      </p>

      {/* Author Info */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-[#C6FF00]/80 to-[#C6FF00]/30 rounded-full flex items-center justify-center text-black font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-medium text-white">{name}</p>
          <p className="text-xs text-white/50">
            {position} at {company}
          </p>
        </div>
      </div>
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
    <section id="testimonials" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What our clients{" "}
            <span className="text-[#C6FF00]">say about us</span>
          </h2>
          <p className="text-white/60">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
};

export default Testimonials;
