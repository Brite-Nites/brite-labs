import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface Stat {
  value: string;
  label: string;
}

interface IndustryCredibilityBarProps {
  logos?: Logo[];
  stats?: Stat[];
  label?: string;
}

export function IndustryCredibilityBar({
  logos = [],
  stats = [],
  label = "Trusted by",
}: IndustryCredibilityBarProps) {
  return (
    <section className="w-full border-y border-border bg-card px-7 py-8 md:px-14 md:py-10 lg:px-28">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
        {/* Logos Section */}
        {logos.length > 0 && (
          <div className="flex flex-col items-center gap-4 md:items-start">
            <span className="font-eyebrow text-xs text-muted-foreground">
              {label}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 md:justify-start">
              {logos.map((logo, index) => (
                <div key={index} className="relative h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width || 120}
                    height={logo.height || 32}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats Section */}
        {stats.length > 0 && (
          <div className="flex items-center gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-right">
                <div className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {stat.value}
                </div>
                <div className="font-eyebrow text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
