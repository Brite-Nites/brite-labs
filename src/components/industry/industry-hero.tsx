"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { BookCallButton } from "@/components/ui/book-call-button";
import { AnimatedStats } from "@/components/ui/animated-stats";

interface Breadcrumb {
  label: string;
  href: string;
}

interface Stat {
  value: string;
  label: string;
}

interface IndustryHeroProps {
  breadcrumbs: Breadcrumb[];
  currentPage: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  stats: Stat[];
  backgroundImage?: string;
  backgroundImageAlt?: string;
}

export function IndustryHero({
  breadcrumbs,
  currentPage,
  headline,
  subheadline,
  ctaText,
  stats,
  backgroundImage,
  backgroundImageAlt = "Hero background",
}: IndustryHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <section ref={heroRef} className="flex flex-col gap-[30px] items-start pt-[40px] px-[120px] w-full">
      {/* Text Container */}
      <div className="flex flex-col gap-[30px] items-start">
        {/* Breadcrumbs */}
        <nav className="flex items-center font-eyebrow text-[13px]">
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              <Link
                href={crumb.href}
                className="text-[#a2a2a2] hover:text-[#363636] transition-colors"
              >
                {crumb.label}
              </Link>
              <span className="text-[#a2a2a2]">{" "}/ </span>
            </span>
          ))}
          <span className="text-[#363636]">{currentPage}</span>
        </nav>

        {/* Headline Group */}
        <div className="relative h-[130px] w-[589px]">
          <h1 className="absolute left-0 top-0 font-heading text-[48px] font-semibold text-black whitespace-nowrap">
            {headline}
          </h1>
          <p className="absolute left-0 top-[67px] font-body text-[16px] text-[#969696] w-[589px] overflow-hidden text-ellipsis">
            {subheadline}
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <BookCallButton text={ctaText} />

      {/* Hero Image Frame with Stats */}
      <div className="relative flex items-end gap-[20px] h-[595px] w-full p-[20px] overflow-clip">
        {/* Background Image */}
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-[#e5e5e5]" />
        )}

        {/* Stats Overlay */}
        <AnimatedStats
          stats={stats}
          duration={2.0}
          delay={0.5}
          variant="light"
          isInView={isInView}
          className="relative z-10"
        />
      </div>
    </section>
  );
}
