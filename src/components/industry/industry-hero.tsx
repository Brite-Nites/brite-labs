import Image from "next/image";
import { Button } from "@/components/ui/button";

interface IndustryHeroProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
  backgroundAlt: string;
}

export function IndustryHero({
  eyebrow,
  headline,
  subheadline,
  ctaText,
  ctaHref,
  backgroundImage,
  backgroundAlt,
}: IndustryHeroProps) {
  return (
    <section className="relative w-full">
      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-14 lg:p-28">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <span className="font-eyebrow text-xs tracking-wider text-white/80 md:text-sm">
              {eyebrow}
            </span>

            {/* Headline */}
            <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-5xl lg:text-6xl">
              {headline}
            </h1>

            {/* Subheadline */}
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              {subheadline}
            </p>

            {/* CTA Button */}
            <div className="mt-6 md:mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                <a href={ctaHref}>{ctaText}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
