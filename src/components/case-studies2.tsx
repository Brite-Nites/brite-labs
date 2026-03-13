import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface Stat {
  value: string;
  label: string;
  sublabel: string;
}

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  bgFill: string;
  fgFill: string;
  stats: Stat[];
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Michael Rivera",
    title: "Product Director",
    quote:
      "This productivity tool transformed how we collaborate. Our team's workflow improved dramatically, and we've cut meeting time by half while increasing output.",
    bgFill: "#e5e7eb",
    fgFill: "#9ca3af",
    stats: [
      { value: "98%", label: "Customer Satisfaction", sublabel: "From verified reviews" },
      { value: "3.8x", label: "ROI Improvement", sublabel: "Within first quarter" },
    ],
  },
  {
    name: "Sarah Chen",
    title: "Operations Lead",
    quote:
      "The interface is intuitive and customizable to our needs. We implemented it across departments with minimal training and saw immediate results.",
    bgFill: "#d1d5db",
    fgFill: "#6b7280",
    stats: [
      { value: "4.2x", label: "Team Efficiency", sublabel: "Proven productivity gains" },
      { value: "72%", label: "Reduced Task Time", sublabel: "Across all projects" },
    ],
  },
];

function PortraitPlaceholder({ bgFill, fgFill }: { bgFill: string; fgFill: string }) {
  return (
    <svg
      viewBox="0 0 290 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Portrait placeholder"
      className="aspect-[29/35] h-full w-full max-w-60 shrink-0 rounded-2xl"
    >
      <rect width="290" height="350" rx="16" fill={bgFill} />
      <circle cx="145" cy="120" r="50" fill={fgFill} />
      <ellipse cx="145" cy="280" rx="80" ry="60" fill={fgFill} />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
      <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
        <PortraitPlaceholder bgFill={testimonial.bgFill} fgFill={testimonial.fgFill} />
        <div className="flex h-full flex-col justify-between gap-10">
          <q className="sm:text-xl">{testimonial.quote}</q>
          <div className="flex items-end gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold text-primary">{testimonial.name}</p>
              <p className="text-muted-foreground">{testimonial.title}</p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logos/Labs Mark.svg" alt="Brite Labs logo" width={40} height={40} />
          </div>
        </div>
      </div>
      <div className="flex gap-10 self-center lg:flex-col">
        {testimonial.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <p className="text-4xl font-medium text-primary sm:text-5xl">{stat.value}</p>
            <p className="font-semibold text-primary">{stat.label}</p>
            <p className="text-muted-foreground">{stat.sublabel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CaseStudies2({ className }: { className?: string }) {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col gap-6 text-center">
          <p className="font-eyebrow text-sm text-primary">4500+ Satisfied Customers</p>
          <h2 className="text-4xl font-medium md:text-5xl">
            Real results from real users
          </h2>
        </div>
        <div className="mt-20">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={testimonial.name}>
              {i > 0 && <Separator className="my-20" />}
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
