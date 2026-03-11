import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  image?: string;
}

interface CaseStudy {
  headline: string;
  description: string;
  stats?: { value: string; label: string }[];
  image?: string;
  imageAlt?: string;
}

interface IndustrySocialProofProps {
  eyebrow?: string;
  headline?: string;
  testimonials?: Testimonial[];
  caseStudy?: CaseStudy;
}

export function IndustrySocialProof({
  eyebrow = "Success Stories",
  headline,
  testimonials = [],
  caseStudy,
}: IndustrySocialProofProps) {
  // If no content provided, don't render
  if (testimonials.length === 0 && !caseStudy) {
    return null;
  }

  return (
    <section className="w-full px-7 py-16 md:px-14 md:py-24 lg:px-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        {(eyebrow || headline) && (
          <div className="mb-12 max-w-2xl">
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

        {/* Case Study Format */}
        {caseStudy && (
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Image */}
            {caseStudy.image && (
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.imageAlt || "Case study"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                {caseStudy.headline}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {caseStudy.description}
              </p>

              {/* Stats */}
              {caseStudy.stats && caseStudy.stats.length > 0 && (
                <div className="mt-8 flex gap-8">
                  {caseStudy.stats.map((stat, index) => (
                    <div key={index}>
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
          </div>
        )}

        {/* Testimonials Grid */}
        {testimonials.length > 0 && (
          <div className={`grid gap-8 ${caseStudy ? "mt-16" : ""} md:grid-cols-2`}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border border-border bg-card p-6 md:p-8"
              >
                <blockquote className="text-base leading-relaxed text-foreground md:text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  {testimonial.image && (
                    <div className="relative h-12 w-12 overflow-hidden bg-muted">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-heading text-sm font-medium text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.organization}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
