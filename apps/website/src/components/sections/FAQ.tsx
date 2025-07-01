import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Global Square IT offer?",
      answer:
        "We offer a full range of tech solutions to help your business grow — from web and mobile app development to UI/UX design, cloud services, digital consulting, and custom software. Whatever your goals, we’ll help you get there with the right tools and strategy.",
    },
    {
      question: "Who will be working on my project?",
      answer:
        "Your project will be handled by a dedicated team of experienced developers, designers, and project managers. You’ll have a clear point of contact and full visibility throughout the process.",
    },
    {
      question: "How involved will I be in the project development process?",
      answer:
        "As involved as you want to be. We keep you in the loop at every stage — from planning and design to development and launch. Your feedback is essential, and we make sure you always know what’s going on and where the project stands.",
    },
    {
      question: "Can you assist with cloud migration?",
      answer:
        "Definitely. We’ll help you move your systems to the cloud smoothly and securely. From choosing the right platform to handling the migration itself, we make sure there’s minimal disruption and everything runs better once you're there.",
    },
    {
      question: "How do you ensure my product security ?",
      answer:
        "We take security seriously. From day one, we build your product with secure code, run regular checks for vulnerabilities, and follow best practices to protect your data and users. If your industry has specific compliance needs, we’ve got that covered too.",
    },
    {
      question: "How can Global Square help my business?",
      answer:
        "We help businesses use technology to work smarter, not harder. Whether it’s improving how your team works, creating a better experience for your customers, or building something totally new — we’re here to help you make the most of digital tools.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We work with businesses across all kinds of industries — entertainment, finance, education, and more. Every business is different, so we tailor our approach based on what matters most in your space.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "It really depends on the size and complexity of the project. Once we talk through your goals, we’ll give you a clear timeline and keep you updated along the way. Our goal is to deliver high-quality work, right on schedule.",
    },
    {
      question: "Can you help with existing projects or only new ones?",
      answer:
        "We do both. If you’ve already started a project and need help finishing or improving it, we can jump in. Or if you’re starting from scratch, we’ll help you build something great from the ground up.",
    },
    {
      question: "How can I get started with Global Square IT?",
      answer:
        "Just reach out! Send us a message through our website, email us, or give us a call. We’ll set up a free consultation to learn more about what you need and how we can help.",
    },
  ];

  const mid = Math.ceil(faqs.length / 2);
  const leftCol = faqs.slice(0, mid);
  const RightCol = faqs.slice(mid);

  return (
    <section
      id="faq"
      className="py-[69px] lg:py-20 md:px-12 lg:px-[156px]  bg-black text-stattext"
    >
      <div className="container mx-auto max-sm:px-4">
        <div className="lg:w-full max-lg:mx-auto">
          <div className="text-center mb-12">
            <span className="py-[6px] px-[12px] border border-statbg rounded-full text-[16px] font-medium bg-titlescolor text-yellowgreen md:bg-titlescolor">
              FAQs
            </span>
            <h2 className="text-3xl md:text-5xl font-bold my-4">
              Got Questions?
              <br />
              <div
                className="mt-3 bg-clip-text text-transparent font-bold"
                style={{
                  backgroundImage:
                    "linear-gradient(18deg, darkgreen -2.03%, rgba(209, 232, 77, 0.70) 46.84%, yellowgreen 101.07%)",
                }}
              >
                We've Got Answers!
              </div>
            </h2>
            <p className="text-[15px] font-normal text-graytext">
              If you have any additional questions or need further
              clarification, don't hesitate to get in touch with our team
              directly.
            </p>
          </div>

          <Accordion type="single" collapsible>
            <div className="lg:hidden">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className=" border-b-[1px] border-iconborder px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left py-5 text-whitegraytext group-data-[state=open]:text-globalgreen  transition-colors justify-normal items-start cursor-pointer">
                    <div className="flex">
                      <span className="mr-[15px] h-full ">
                        {index + 1 < 10 ? "0" : ""}
                        {index + 1}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-whitegraytext pb-5 ml-[36px]  max-w-[245px] md:max-w-[600px]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>

            <div className="max-lg:hidden lg:grid lg:grid-cols-2 gap-[30px]">
              <div className="border-[1px] border-iconborder rounded-xl">
                {leftCol.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="px-6"
                  >
                    <AccordionTrigger className="text-left py-5 text-whitegraytext group-data-[state=open]:text-globalgreen  transition-colors justify-normal items-start cursor-pointer">
                      <div className="flex">
                        <span className="mr-[15px] h-full">0{index + 1}</span>
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="md:text-whitegraytext pb-5 ml-[32px] lg:max-w-[410px]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>

              <div className="border-[1px] border-iconborder rounded-xl">
                {RightCol.map((faq, index) => (
                  <AccordionItem
                    key={index + mid}
                    value={`item-${index + mid}`}
                    className=" px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left py-5 text-whitegraytext group-data-[state=open]:text-globalgreen transition-colors justify-normal items-start">
                      <div className="flex">
                        <span className="mr-[15px]">
                          {index + mid + 1 < 10 ? "0" : ""}
                          {index + mid + 1}
                        </span>
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="md:text-whitegraytext pb-5 ml-[32px] lg:max-w-[410px]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
