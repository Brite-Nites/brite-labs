"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
}

interface IndustryGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export function IndustryGallery({ images, className }: IndustryGalleryProps) {
  // Layout pattern: [2,3], [5], [2,3], [3,2], [5], [2,3]
  // This requires 11 images minimum, we'll cycle if fewer
  const getImage = (index: number) => images[index % images.length];

  return (
    <section className={cn("py-[30px] px-[120px]", className)}>
      <div className="grid grid-cols-5 gap-4">
        {/* Row 1: 2 + 3 */}
        <BlurVignette className="col-span-2 h-82 rounded-[2.5rem]">
          <Image
            src={getImage(0).src}
            alt={getImage(0).alt}
            fill
            sizes="(max-width: 1440px) 40vw, 400px"
            className="size-full rounded-[2.5rem] object-cover"
          />
        </BlurVignette>
        <BlurVignette className="col-span-3 h-82 rounded-[2.5rem]">
          <Image
            src={getImage(1).src}
            alt={getImage(1).alt}
            fill
            sizes="(max-width: 1440px) 60vw, 600px"
            className="size-full rounded-[2.5rem] object-cover"
          />
        </BlurVignette>

        {/* Row 2: Full width */}
        <BlurVignette className="col-span-5 h-100 rounded-[2.5rem]">
          <Image
            src={getImage(2).src}
            alt={getImage(2).alt}
            fill
            sizes="(max-width: 1440px) 100vw, 1200px"
            className="size-full rounded-[2.5rem] object-cover"
          />
        </BlurVignette>

        {/* Row 3: 2 + 3 */}
        <BlurVignette className="col-span-2 h-82 rounded-[2.5rem]">
          <Image
            src={getImage(3).src}
            alt={getImage(3).alt}
            fill
            sizes="(max-width: 1440px) 40vw, 400px"
            className="size-full rounded-[2.5rem] object-cover"
          />
        </BlurVignette>
        <BlurVignette className="col-span-3 h-82 rounded-[2.5rem]">
          <Image
            src={getImage(4).src}
            alt={getImage(4).alt}
            fill
            sizes="(max-width: 1440px) 60vw, 600px"
            className="size-full rounded-[2.5rem] object-cover"
          />
        </BlurVignette>

        {/* Row 4: 3 + 2 */}
        <BlurVignette className="col-span-3 h-82 rounded-[2.5rem]">
          <Image
            src={getImage(5).src}
            alt={getImage(5).alt}
            fill
            sizes="(max-width: 1440px) 60vw, 600px"
            className="size-full rounded-[2.5rem] object-cover"
          />
        </BlurVignette>
        <BlurVignette className="col-span-2 h-82 rounded-[2.5rem]">
          <Image
            src={getImage(6).src}
            alt={getImage(6).alt}
            fill
            sizes="(max-width: 1440px) 40vw, 400px"
            className="size-full rounded-[2.5rem] object-cover"
          />
        </BlurVignette>

        {/* Row 5: Full width */}
        <BlurVignette className="col-span-5 h-100 rounded-[2.5rem]">
          <Image
            src={getImage(7).src}
            alt={getImage(7).alt}
            fill
            sizes="(max-width: 1440px) 100vw, 1200px"
            className="size-full rounded-[2.5rem] object-cover"
          />
        </BlurVignette>

        {/* Row 6: 2 + 3 */}
        <BlurVignette className="col-span-2 h-82 rounded-[2.5rem]">
          <Image
            src={getImage(8).src}
            alt={getImage(8).alt}
            fill
            sizes="(max-width: 1440px) 40vw, 400px"
            className="size-full rounded-[2.5rem] object-cover"
          />
        </BlurVignette>
        <BlurVignette className="col-span-3 h-82 rounded-[2.5rem]">
          <Image
            src={getImage(9).src}
            alt={getImage(9).alt}
            fill
            sizes="(max-width: 1440px) 60vw, 600px"
            className="size-full rounded-[2.5rem] object-cover"
          />
        </BlurVignette>
      </div>
    </section>
  );
}

interface BlurVignetteProps {
  children: React.ReactNode;
  className?: string;
  radius?: string;
  inset?: string;
  transitionLength?: string;
  blur?: string;
}

const BlurVignette = ({
  children,
  className = "",
  radius = "24px",
  inset = "10px",
  transitionLength = "100px",
  blur = "15px",
}: BlurVignetteProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: -50,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative cursor-pointer overflow-hidden ${className}`}
    >
      <style>
        {`
          .blur-vignette {
            --radius: ${radius};
            --inset: ${inset};
            --transition-length: ${transitionLength};
            --blur: ${blur};
            position: absolute;
            inset: 0;
            -webkit-backdrop-filter: blur(var(--blur));
            backdrop-filter: blur(var(--blur));
            --r: max(var(--transition-length), calc(var(--radius) - var(--inset)));
            --corner-size: calc(var(--r) + var(--inset)) calc(var(--r) + var(--inset));
            --corner-gradient: transparent 0px,
              transparent calc(var(--r) - var(--transition-length)),
              black var(--r);
            --fill-gradient: black,
              black var(--inset),
              transparent calc(var(--inset) + var(--transition-length)),
              transparent calc(100% - var(--transition-length) - var(--inset)),
              black calc(100% - var(--inset));
            --fill-narrow-size: calc(100% - (var(--inset) + var(--r)) * 2);
            --fill-farther-position: calc(var(--inset) + var(--r));
            -webkit-mask-image: linear-gradient(to right, var(--fill-gradient)),
              linear-gradient(to bottom, var(--fill-gradient)),
              radial-gradient(at bottom right, var(--corner-gradient)),
              radial-gradient(at bottom left, var(--corner-gradient)),
              radial-gradient(at top left, var(--corner-gradient)),
              radial-gradient(at top right, var(--corner-gradient));
            -webkit-mask-size: 100% var(--fill-narrow-size),
              var(--fill-narrow-size) 100%,
              var(--corner-size),
              var(--corner-size),
              var(--corner-size),
              var(--corner-size);
            -webkit-mask-position: 0 var(--fill-farther-position),
              var(--fill-farther-position) 0,
              0 0,
              100% 0,
              100% 100%,
              0 100%;
            -webkit-mask-repeat: no-repeat;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .blur-vignette.active {
        opacity: 1;
        }

        .group:hover .blur-vignette {
        opacity: 0;
        }
        `}
      </style>
      <div className="blur-vignette active" />
      {children}
    </motion.div>
  );
};
