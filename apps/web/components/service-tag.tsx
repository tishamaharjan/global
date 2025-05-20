"use client";

import { motion } from "framer-motion";
import { cn } from "@workspace/ui/lib/utils";
import { Service } from "@/lib/types";

interface ServicesTagProps {
  service: Service;
  index: number;
  total: number;
}

export default function ServicesTag({
  service,
  index,
  total,
}: ServicesTagProps) {
  // Calculate position around a circle
  const angle = (index / total) * 2 * Math.PI;
  const radius = 42; // % of container

  // Transform to x,y coordinates (in percentage of container)
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);

  // Adjust based on viewport size
  const positionClass = cn(
    "absolute",
    "transform -translate-x-1/2 -translate-y-1/2",
    service.class
  );

  const tagVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8 + index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={positionClass}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        zIndex: 20,
      }}
      variants={tagVariants}
      initial="initial"
      animate="animate"
    >
      <div className="bg-black/80 backdrop-blur-lg px-3 py-2 rounded-md border border-[#BDFF00]/20 shadow-[0_0_15px_rgba(189,255,0,0.15)] flex items-center">
        {service.icon}
        <span className="ml-2 text-sm font-medium">{service.name}</span>
      </div>
    </motion.div>
  );
}
