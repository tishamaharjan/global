"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/button-link";
import ParticleGlobe from "@/components/particle-globe";
import ServicesTag from "@/components/service-tag";
import { services } from "@/lib/data";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticleGlobe />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Bringing Your <span className="text-[#BDFF00]">Vision</span> to Life
            with <span className="text-foreground">Innovation</span> &{" "}
            <span className="text-[#BDFF00]">Precision</span>
          </h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We turn ideas into impactful digital experiences. From strategy to
            execution, our Japan-based team delivers tech solutions that drive
            growth and inspire success.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <ButtonLink
              href="#services"
              showArrow
              className="bg-[#BDFF00] hover:bg-[#D6FF66] text-black font-medium px-8 py-6 rounded-full"
            >
              Explore More
            </ButtonLink>

            <ButtonLink
              href="#contact"
              variant="outline"
              showArrow
              className="border-[#BDFF00] text-[#BDFF00] hover:bg-[#BDFF00]/10 font-medium px-8 py-6 rounded-full"
            >
              Contact Us
            </ButtonLink>
          </motion.div>
        </motion.div>

        {/* Service tags positioned around the globe */}
        {/* {services.map((service, index) => (
          <ServicesTag
            key={service.id}
            service={service}
            index={index}
            total={services.length}
          />
        ))} */}
      </div>
    </section>
  );
}
