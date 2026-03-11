import { Button } from "@/components/ui/button";

interface IndustryCTAProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function IndustryCTA({
  eyebrow,
  headline,
  description,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: IndustryCTAProps) {
  return (
    <section className="w-full bg-foreground px-7 py-16 md:px-14 md:py-24 lg:px-28">
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow && (
          <span className="font-eyebrow text-xs text-background/70">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] text-background md:text-3xl lg:text-4xl">
          {headline}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-background/80 md:text-lg">
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            <a href={primaryCtaHref}>{primaryCtaText}</a>
          </Button>

          {secondaryCtaText && secondaryCtaHref && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
            >
              <a href={secondaryCtaHref}>{secondaryCtaText}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
