import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { actions } from "astro:actions";
import { useTransition } from "react";


const Contact = () => {

  const [isPending, setIsPending] = useTransition()
  return (
    <section id="contact" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Start Your <span className="text-[#C6FF00]">Project</span>
            </h2>
            <p className="text-white/60">
              Ready to transform your ideas into reality? Get in touch with us
              today and let's create something amazing together.
            </p>
          </div>

          <form
            action={async (formData) => {
              setIsPending(async () => {
                await actions.send(formData);
              })
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-white"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-white"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-white"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-white"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                required
                className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#C6FF00] text-black hover:bg-[#a8d900] h-12"
              disabled={isPending}
            >
              {isPending ? 'Sending...' : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


