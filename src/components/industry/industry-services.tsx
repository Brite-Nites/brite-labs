interface Service {
  title: string;
  description: string;
  href?: string;
}

interface IndustryServicesProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  services: Service[];
}

export function IndustryServices({
  eyebrow = "What We Offer",
  headline,
  description,
  services,
}: IndustryServicesProps) {
  return (
    <section className="w-full bg-card px-7 py-16 md:px-14 md:py-24 lg:px-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <span className="font-eyebrow text-xs text-muted-foreground">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] text-foreground md:text-3xl lg:text-4xl">
            {headline}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-border bg-background p-6 transition-colors hover:border-foreground/20"
            >
              <h3 className="font-heading text-lg font-medium text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              {service.href && (
                <a
                  href={service.href}
                  className="mt-4 inline-block font-eyebrow text-xs text-foreground underline-offset-4 hover:underline"
                >
                  Learn More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
