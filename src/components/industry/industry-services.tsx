"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface Service {
  title: string;
  description: string;
}

interface IndustryServicesProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  services: Service[];
  intervalMs?: number;
}

export function IndustryServices({
  eyebrow = "WHAT WE OFFER",
  headline,
  description,
  services,
  intervalMs = 4000,
}: IndustryServicesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [services.length, intervalMs]);

  return (
    <motion.section
      ref={sectionRef}
      className="flex gap-[120px] items-center justify-center px-[240px] h-screen w-full"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Left Column - Text Content */}
      <motion.div className="flex flex-col gap-[13px] items-start w-[482px] shrink-0" variants={itemVariants}>
        <motion.span className="font-eyebrow text-[13px] text-[#8a8a8a] tracking-[-0.52px]" variants={itemVariants}>
          {eyebrow}
        </motion.span>
        <motion.h2 className="font-heading text-[40px] font-semibold text-black tracking-[-1.6px] leading-tight" variants={itemVariants}>
          {headline}
        </motion.h2>
        {description && (
          <motion.p className="font-body text-[20px] text-[#8a8a8a] tracking-[-0.8px] leading-relaxed" variants={itemVariants}>
            {description}
          </motion.p>
        )}
      </motion.div>

      {/* Right Column - Animated Cards */}
      <motion.div className="relative flex-1 h-[428px] overflow-hidden" variants={itemVariants}>
        {/* Cards Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <ServiceCard service={services[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-[#f5f5f5] flex gap-[11px] items-start p-[30px] w-full">
      <div className="flex flex-col gap-[30px] flex-1">
        <h3 className="font-heading text-[24px] font-semibold text-[#2c2c2c] tracking-[-0.96px] leading-none">
          {service.title}
        </h3>
        <p className="font-body text-[16px] text-[#969696] tracking-[-0.64px] leading-relaxed">
          {service.description}
        </p>
      </div>
      {/* Bracket Icon */}
      <div className="shrink-0">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#bbbbbb]"
        >
          <path
            d="M12.1769 2.46613L15 2.46613L15 15L12.1769 15L12.1769 2.46613ZM-8.11438e-07 2.46424L-5.96007e-07 -3.57667e-07L12.1641 7.05756e-07L12.1641 2.46424L-8.11438e-07 2.46424Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
