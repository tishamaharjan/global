"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-muted-foreground mb-6">
              TechNova is a leading IT solutions provider based in Japan, with a
              global reach and a reputation for excellence. Since our founding
              in 2015, we've been at the forefront of digital innovation,
              helping businesses across various industries transform their
              operations and achieve their goals.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team of expert engineers, designers, and strategists work
              collaboratively to deliver tailored solutions that address complex
              business challenges. We combine technical expertise with creative
              thinking to create digital experiences that delight users and
              drive results.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#BDFF00]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="TechNova Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <blockquote className="text-white italic">
                "Our mission is to empower businesses through innovative
                technology solutions."
              </blockquote>
              <div className="mt-2 text-[#BDFF00] font-medium">
                — Hiroshi Yamamoto, CEO
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
