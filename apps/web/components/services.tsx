"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { ChevronRight } from "lucide-react";

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]?.id ?? "");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide end-to-end solutions tailored to your unique business
            needs, combining cutting-edge technology with strategic thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div
            className="lg:col-span-4 space-y-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                onClick={() => setActiveService(service.id)}
                className={`cursor-pointer p-4 rounded-lg transition-all duration-300 flex items-center ${
                  activeService === service.id
                    ? "bg-[#BDFF00]/10 border border-[#BDFF00]/30"
                    : "hover:bg-secondary"
                }`}
              >
                <div className="mr-4">{service.icon}</div>
                <div className="flex-1">
                  <h3
                    className={`font-medium ${
                      activeService === service.id ? "text-[#BDFF00]" : ""
                    }`}
                  >
                    {service.name}
                  </h3>
                </div>
                {activeService === service.id && (
                  <ChevronRight className="h-4 w-4 text-[#BDFF00]" />
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="lg:col-span-8 bg-card rounded-xl p-8 shadow-lg border border-border"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {services.map(
              (service) =>
                activeService === service.id && (
                  <div key={service.id} className="space-y-4">
                    <div className="inline-flex items-center space-x-2 bg-background p-2 rounded-lg">
                      {service.icon}
                      <h3 className="text-xl font-semibold">{service.name}</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="pt-4">
                      <h4 className="text-sm font-medium mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {[1, 2, 3].map((item) => (
                          <li key={item} className="flex items-start">
                            <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-[#BDFF00]"></div>
                            <span className="text-sm text-muted-foreground">
                              Feature {item} for {service.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
