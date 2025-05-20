"use client";

import { motion } from "framer-motion";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Reach out to us
            using the form below or through our contact information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            className="lg:col-span-7 bg-card rounded-xl shadow-lg p-8 border border-border"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="border-border focus:border-[#BDFF00] focus:ring-[#BDFF00]/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="border-border focus:border-[#BDFF00] focus:ring-[#BDFF00]/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  className="border-border focus:border-[#BDFF00] focus:ring-[#BDFF00]/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  rows={6}
                  className="border-border focus:border-[#BDFF00] focus:ring-[#BDFF00]/20 resize-none"
                />
              </div>

              <Button className="w-full bg-[#BDFF00] hover:bg-[#D6FF66] text-black font-medium">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <h3 className="text-xl font-semibold">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#BDFF00] mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="text-muted-foreground mt-1">
                      1-1-1 Shibuya, Shibuya-ku
                      <br />
                      Tokyo, Japan 150-0002
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-[#BDFF00] mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-muted-foreground mt-1">
                      info@technova.com
                      <br />
                      support@technova.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#BDFF00] mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-muted-foreground mt-1">
                      +81 3-1234-5678
                      <br />
                      +81 3-8765-4321
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-card rounded-xl border border-border shadow-sm">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#BDFF00] mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Fast Response</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Our team typically responds within 24 hours. For urgent
                    inquiries, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
