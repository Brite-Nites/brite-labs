"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";

const galleryImages = [
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

function GalleryItem({ image, priority }: { image: typeof galleryImages[number]; priority: boolean }) {
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

export function BriteGallery() {
  return (
    <section className="w-full bg-black px-2.5 py-[30px]">
      <div className="grid grid-cols-3 gap-2.5">
        {galleryImages.map((image, index) => (
          <GalleryItem key={index} image={image} priority={index < 3} />
        ))}
      </div>
    </section>
  );
}
