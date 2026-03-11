interface PainPoint {
  headline: string;
  description: string;
}

interface IndustryProblemFrameProps {
  eyebrow?: string;
  headline: string;
  painPoints: PainPoint[];
}

export function IndustryProblemFrame({
  eyebrow = "The Challenge",
  headline,
  painPoints,
}: IndustryProblemFrameProps) {
  return (
    <section className="w-full px-7 py-16 md:px-14 md:py-24 lg:px-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <span className="font-eyebrow text-xs text-muted-foreground">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] text-foreground md:text-3xl lg:text-4xl">
            {headline}
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {painPoints.map((point, index) => (
            <div key={index} className="border-t border-border pt-6">
              <h3 className="font-heading text-lg font-medium text-foreground">
                {point.headline}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
