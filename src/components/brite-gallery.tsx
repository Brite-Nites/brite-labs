"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
}

const defaultImages: GalleryImage[] = [
  { src: '/images/gallery/01-bighorn-sheep.avif', alt: 'Big Horned Sheep Light Sculpture' },
  { src: '/images/gallery/02-prohibition.avif', alt: 'Prohibition Bar Lights' },
  { src: '/images/gallery/03-tops-diner.avif', alt: 'Tops Diner Holiday Lights' },
  { src: '/images/gallery/04-dealership-lobby.avif', alt: 'Auto Dealership Lobby' },
  { src: '/images/gallery/05-ceiling-lights.avif', alt: 'Ceiling Light Installation' },
  { src: '/images/gallery/06-stairway.avif', alt: 'Stairway Light Design' },
  { src: '/images/gallery/07-barca.avif', alt: 'Barca Restaurant Holiday Decor' },
  { src: '/images/gallery/08-light-trees.avif', alt: 'Illuminated Trees Festival' },
  { src: '/images/gallery/09-park-city-snowflake.avif', alt: 'Park City Snowflake Sculpture' },
  { src: '/images/gallery/10-moose.avif', alt: 'Moose Light Sculptures' },
  { src: '/images/gallery/11-hotel-lobby.avif', alt: 'Hotel Lobby Christmas Decor' },
  { src: '/images/gallery/12-purple-snowflakes.avif', alt: 'Purple Snowflake Ceiling' },
];

function GalleryItem({ image, priority }: { image: GalleryImage; priority: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[4/3] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Color layer (revealed by spotlight) */}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
        priority={priority}
      />
      {/* Grayscale layer with radial mask cutout */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          maskImage: isHovered
            ? `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, transparent 25%, black 80%)`
            : 'none',
          WebkitMaskImage: isHovered
            ? `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, transparent 25%, black 80%)`
            : 'none',
        }}
      >
        <Image
          src={image.src}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover grayscale"
          priority={priority}
          aria-hidden
        />
      </div>
    </div>
  );
}

interface BriteGalleryProps {
  images?: GalleryImage[];
  className?: string;
  maxImages?: number;
}

export function BriteGallery({
  images = defaultImages,
  className,
  maxImages = 9
}: BriteGalleryProps) {
  // Cap at maxImages, ensuring it's a multiple of 3 for clean grid
  const cappedMax = Math.floor(maxImages / 3) * 3;
  const displayImages = images.slice(0, cappedMax);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className={`w-full px-2.5 py-[30px] ${className ?? ''}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="grid grid-cols-3 gap-2.5" variants={containerVariants}>
        {displayImages.map((image, index) => (
          <motion.div key={index} variants={itemVariants}>
            <GalleryItem image={image} priority={index < 3} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
