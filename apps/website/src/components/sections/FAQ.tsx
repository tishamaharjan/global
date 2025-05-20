import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Global Square IT offer?",
      answer:
        "We offer a comprehensive range of IT services including web development, mobile app development, UI/UX design, digital transformation consulting, cloud solutions, and custom software development tailored to your business needs.",
    },
    {
      question: "How can Global Square help my business?",
      answer:
        "We help businesses leverage technology to solve problems, improve efficiency, enhance customer experiences, and drive growth. Our team works closely with you to understand your specific challenges and goals to deliver customized solutions.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a diverse range of industries including healthcare, finance, education, retail, manufacturing, and more. Our expertise allows us to adapt our solutions to meet the unique requirements of various sectors.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on complexity, scope, and specific requirements. During our initial consultation, we'll assess your project needs and provide a detailed timeline. We're committed to delivering on schedule without compromising quality.",
    },
    {
      question: "Can you help with existing projects or only new ones?",
      answer:
        "We can absolutely help with existing projects. Whether you need to modernize legacy systems, debug issues, add new features, or complete an unfinished project, our team can step in at any stage and provide the expertise needed.",
    },
    {
      question: "How can I get started with Global Square IT?",
      answer:
        "Getting started is easy! Simply contact us through our website, email, or phone. We'll schedule an initial consultation to discuss your project, understand your requirements, and outline how we can help you achieve your goals.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Got Questions?{" "}
              <span className="text-[#C6FF00]">We've Got Answers!</span>
            </h2>
            <p className="text-white/60">
              If you have any additional questions or need further
              clarification, don't hesitate to get in touch with our team
              directly.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-lg bg-[#1A1A1A] px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left py-5 text-white hover:text-[#C6FF00] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
