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
      question:
        "How involved will I be in the project development process?How do you ensure my product security ?",
      answer: "asd",
    },
    {
      question: "Can you assist with cloud migration?",
      answer: "asd",
    },
    {
      question: "How do you ensure my product security ?",
      answer: "asd",
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

  const mid = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, mid);
  const col2 = faqs.slice(mid);

  return (
    <section
      id="faq"
      className="py-20 md:px-12 lg:px-[156px] bg-[#FBFFE7] text-black md:bg-black md:text-[#E6E6E6]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="py-[6px] px-[12px] rounded-full text-black bg-[color:var(--greenbackground)] md:text-[color:var(--greenyellow)] md:bg-[color:var(--titlescolor)]">
              FAQs
            </span>
            <h2 className="text-3xl md:text-5xl font-bold my-4">
              Got Questions? <br />
              <span
                className="max-md:hidden bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(18deg, #118E45 -2.03%, rgba(209, 232, 77, 0.70) 46.84%, #CFE93A 101.07%)",
                }}
              >
                We've Got Answers!
              </span>
              <span className="md:hidden text-3xl md:text-4xl font-bold my-4">
                We've Got Answers!
              </span>
            </h2>
            <p className="max-md:text-[#141414] text-[#B3B3B3]">
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
                  className="border-b-[1px] border-[#F0F5DA] md:border-[#141414] rounded-lg md:bg-[#050505] px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left py-5 md:text-white hover:text-[#C6FF00] md:group-data-[state=open]:text-[#C6FF00] md:text-[#CCC] transition-colors justify-normal items-start">
                    <div className="flex">
                      <span className="mr-[15px] h-full">0{index + 1}</span>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="md:text-white/70 pb-5 ml-[32px] md:w-[605px] w-[295px] lg:w-[340px]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>

            <div className="max-lg:hidden lg:grid lg:grid-cols-2 gap-4">
              <div>
                {col1.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b-[1px] border-[#F0F5DA] md:border-[#141414] rounded-lg md:bg-[#050505] px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left py-5 md:text-white hover:text-[#C6FF00] md:group-data-[state=open]:text-[#C6FF00] md:text-[#CCC] transition-colors justify-normal items-start">
                      <div className="flex">
                        <span className="mr-[15px] h-full">0{index + 1}</span>
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="md:text-white/70 pb-5 ml-[32px] md:w-[605px] w-[295px] lg:w-[340px]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>

              <div>
                {col2.map((faq, index) => (
                  <AccordionItem
                    key={index + mid}
                    value={`item-${index + mid}`}
                    className="border-b-[1px] border-[#F0F5DA] md:border-[#141414] rounded-lg md:bg-[#050505] px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left py-5 md:text-white hover:text-[#C6FF00] md:group-data-[state=open]:text-[#C6FF00] md:text-[#CCC] transition-colors justify-normal items-start">
                      <div className="flex">
                        <span className="mr-[15px]">0{index + mid + 1}</span>
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="md:text-white/70 pb-5 ml-[32px] md:w-[605px] w-[295px] lg:w-[340px]">
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
