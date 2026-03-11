"use client";

import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface IndustryGalleryProps {
  eyebrow?: string;
  headline?: string;
  images: GalleryImage[];
}

export function IndustryGallery({
  eyebrow = "Our Work",
  headline,
  images,
}: IndustryGalleryProps) {
  return (
    <section className="w-full px-7 py-16 md:px-14 md:py-24 lg:px-28">
      {/* Section Header */}
      {(eyebrow || headline) && (
        <div className="mx-auto mb-12 max-w-6xl">
          {eyebrow && (
            <span className="font-eyebrow text-xs text-muted-foreground">
              {eyebrow}
            </span>
          )}
          {headline && (
            <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] text-foreground md:text-3xl lg:text-4xl">
              {headline}
            </h2>
          )}
        </div>
      )}

      {/* Gallery Grid */}
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden bg-muted"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
