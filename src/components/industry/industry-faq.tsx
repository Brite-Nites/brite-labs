"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Chevron icon
function ChevronIcon({ className, isOpen }: { className?: string; isOpen: boolean }) {
  return (
    <motion.svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <path
        d="M4.25 6.375L8.5 10.625L12.75 6.375"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

interface Question {
  question: string;
  answer: string;
}

interface FAQCategory {
  name: string;
  questions: Question[];
}

interface IndustryFAQProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
  categories: FAQCategory[];
}

export function IndustryFAQ({
  eyebrow = "FAQ",
  headline = "We've got answers",
  description = "Find answers to common questions about our services.",
  categories,
}: IndustryFAQProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Toggle question open/closed
  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Handle scroll to update active category based on middle of viewport
  useEffect(() => {
    const handleScroll = () => {
      const viewportMiddle = window.scrollY + window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      for (let i = 0; i < sectionRefs.current.length; i++) {
        const section = sectionRefs.current[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          const sectionMiddle = (sectionTop + sectionBottom) / 2;
          const distance = Math.abs(viewportMiddle - sectionMiddle);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        }
      }

      setActiveCategory(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click on side nav to scroll to section and set active
  const scrollToSection = (index: number) => {
    setActiveCategory(index);
    const section = sectionRefs.current[index];
    if (section) {
      // Calculate offset to center the section in viewport
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const offsetTop = section.offsetTop - (viewportHeight - sectionHeight) / 2;
      window.scrollTo({ top: Math.max(0, offsetTop), behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col gap-[60px] items-center pt-[80px] pb-[120px] px-[240px] w-full">
      {/* Header */}
      <div className="flex flex-col gap-[6px] items-center text-center max-w-[535px]">
        <span className="font-eyebrow text-[12px] text-[#8a8a8a] tracking-[-0.48px] uppercase">
          {eyebrow}
        </span>
        <div className="flex flex-col gap-[20px] items-center w-full">
          <h2 className="font-heading text-[36px] font-semibold text-black tracking-[-1.44px]">
            {headline}
          </h2>
          <p className="font-body text-[16px] text-[#7e7e7e] tracking-[-0.64px] max-w-[371px]">
            {description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex items-start w-full">
        {/* Side Nav - Sticky */}
        <nav className="sticky top-[60px] flex flex-col items-start w-[297.5px] shrink-0">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`h-[28px] text-left font-body text-[16px] tracking-[-0.64px] transition-colors ${
                activeCategory === index ? "text-black" : "text-[#aeaeae] hover:text-[#666]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </nav>

        {/* Questions */}
        <div className="flex flex-col flex-1 gap-[30px] items-start min-w-0">
          {categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={(el) => { sectionRefs.current[categoryIndex] = el; }}
              className={`flex flex-col gap-[15px] items-start p-[15px] w-full transition-colors ${
                activeCategory === categoryIndex
                  ? "bg-[#f8f8f8] border border-[#e6e6e6]"
                  : ""
              }`}
            >
              {category.questions.map((item, questionIndex) => {
                const isOpen = openQuestions[`${categoryIndex}-${questionIndex}`];
                const isLastQuestion = questionIndex === category.questions.length - 1;

                return (
                  <div
                    key={questionIndex}
                    className={`flex flex-col gap-[10px] w-full ${
                      !isLastQuestion ? "border-b border-[#cfcfcf] pb-[15px]" : ""
                    }`}
                  >
                    {/* Question Header */}
                    <button
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      className="flex gap-[10px] items-start justify-between w-full text-left"
                    >
                      <span className="flex-1 font-body text-[16px] text-[#666] tracking-[-0.64px] leading-none">
                        {item.question}
                      </span>
                      <ChevronIcon className="text-[#666] shrink-0" isOpen={isOpen} />
                    </button>

                    {/* Answer */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="font-body text-[16px] text-[#c7c7c7] tracking-[-0.64px] leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
