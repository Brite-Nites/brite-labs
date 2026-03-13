import Image from "next/image";
import { BriteLogoBar } from "@/components/brite-logo";

export function BriteHero() {
  return (
    <section className="w-full bg-black px-7 pb-7 pt-24 md:px-14 lg:px-28">
      <BriteLogoBar />

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src="/images/hero/hero-placeholder.avif"
          alt="Brite Labs Hero"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-start text-white">
            <span className="font-pixel text-5xl leading-none tracking-tight md:text-7xl lg:text-[120px]">
              Light
            </span>
            <span className="font-pixel text-4xl leading-none tracking-tight md:text-6xl lg:text-[100px]">
              the
            </span>
            <span className="font-pixel text-4xl leading-none tracking-tight md:text-6xl lg:text-[100px]">
              world
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <BriteLogoBar />
      </div>
    </section>
  );
}
