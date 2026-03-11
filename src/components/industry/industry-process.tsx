interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface IndustryProcessProps {
  eyebrow?: string;
  headline?: string;
  steps: ProcessStep[];
}

export function IndustryProcess({
  eyebrow = "How It Works",
  headline = "A Simple Process",
  steps,
}: IndustryProcessProps) {
  return (
    <section className="w-full bg-card px-7 py-16 md:px-14 md:py-24 lg:px-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-eyebrow text-xs text-muted-foreground">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] text-foreground md:text-3xl lg:text-4xl">
            {headline}
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step Number */}
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-foreground">
                <span className="font-heading text-xl font-semibold text-foreground">
                  {step.number}
                </span>
              </div>

              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+24px)] top-6 hidden h-px w-[calc(100%-48px)] bg-border md:block" />
              )}

              {/* Step Content */}
              <h3 className="font-heading text-base font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
