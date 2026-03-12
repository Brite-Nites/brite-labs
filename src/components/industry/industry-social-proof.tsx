"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedStats } from "@/components/ui/animated-stats";

interface Stat {
  value: string;
  label: string;
}

interface CaseStudy {
  headline: string;
  description: string;
  stats?: Stat[];
  image?: string;
  imageAlt?: string;
}

interface IndustrySocialProofProps {
  eyebrow?: string;
  headline: string;
  caseStudy: CaseStudy;
}

export function IndustrySocialProof({
  eyebrow = "Success Stories",
  headline,
  caseStudy,
}: IndustrySocialProofProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Animation variants for staggered fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="flex flex-col gap-[30px] items-center justify-center h-screen w-full"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Section Header */}
      <div className="flex flex-col gap-[15px] items-start px-[240px] w-full">
        <motion.span
          className="font-eyebrow text-[13px] text-[#8a8a8a] tracking-[-0.52px] uppercase"
          variants={itemVariants}
        >
          {eyebrow}
        </motion.span>
        <motion.h2
          className="font-heading text-[36px] font-semibold text-black tracking-[-1.44px]"
          variants={itemVariants}
        >
          {headline}
        </motion.h2>
      </div>

      {/* Case Study - Two Column Layout (50/50 split) */}
      <motion.div
        className="flex gap-[20px] h-[330px] items-start px-[240px] w-full"
        variants={itemVariants}
      >
        {/* Left: Image (flex-1 for 50/50) */}
        {caseStudy.image && (
          <motion.div
            className="flex-1 h-full relative overflow-hidden min-w-0"
            variants={itemVariants}
          >
            <Image
              src={caseStudy.image}
              alt={caseStudy.imageAlt || "Case study"}
              fill
              sizes="(max-width: 1440px) 50vw, 480px"
              className="object-cover"
            />
          </motion.div>
        )}

        {/* Right: Content Card (flex-1 for 50/50) */}
        <motion.div
          className="flex flex-col flex-1 h-full items-start overflow-clip p-[30px] min-w-0"
          variants={itemVariants}
        >
          <div className="flex flex-col flex-1 gap-[23px] items-start justify-center min-h-px w-full">
            <motion.h3
              className="font-heading text-[24px] font-semibold text-black tracking-[-0.96px] leading-none"
              variants={itemVariants}
            >
              {caseStudy.headline}
            </motion.h3>
            <motion.p
              className="font-body text-[16px] text-[#a2a2a2] tracking-[-0.64px] leading-[1.38] text-justify"
              variants={itemVariants}
            >
              {caseStudy.description}
            </motion.p>

            {/* Stats Row */}
            {caseStudy.stats && caseStudy.stats.length > 0 && (
              <motion.div variants={itemVariants}>
                <AnimatedStats
                  stats={caseStudy.stats}
                  duration={2.0}
                  delay={0.6}
                  variant="dark"
                  isInView={isInView}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
