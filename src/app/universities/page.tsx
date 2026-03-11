import {
  IndustryHero,
  IndustryCredibilityBar,
  IndustryProblemFrame,
  IndustryServices,
  IndustryGallery,
  IndustryProcess,
  IndustrySocialProof,
  IndustryCTA,
} from "@/components/industry";

// Universities page content
const heroContent = {
  eyebrow: "Holiday Lighting for Universities",
  headline: "Inclusive Holiday Displays That Support Student Wellbeing",
  subheadline:
    "We create professionally designed displays that support student wellbeing, celebrate campus diversity, and build school spirit—without burdening your facilities team during the busiest time of year.",
  ctaText: "Book a Discovery Call",
  ctaHref: "/contact",
  backgroundImage: "/images/universities/_DSC5843-HDR.avif",
  backgroundAlt: "University campus decorated with holiday lighting",
};

const credibilityContent = {
  label: "Trusted by Leading Universities",
  stats: [
    { value: "10+", label: "Campus Projects" },
    { value: "100%", label: "On-Time Delivery" },
  ],
  // logos: [
  //   { src: "/images/logos/gwu.svg", alt: "George Washington University" },
  //   { src: "/images/logos/umd.svg", alt: "University of Maryland" },
  //   { src: "/images/logos/manhattan.svg", alt: "Manhattan College" },
  //   { src: "/images/logos/byu.svg", alt: "Brigham Young University" },
  // ],
};

const problemContent = {
  eyebrow: "The Challenge",
  headline: "Holiday Displays Shouldn't Add Stress to Your Campus",
  painPoints: [
    {
      headline: "DEI & Inclusion Concerns",
      description:
        "Navigating diverse religious and cultural expectations while creating displays that feel welcoming to all students, faculty, and visitors.",
    },
    {
      headline: "Student Wellbeing During Finals",
      description:
        "The holiday season coincides with finals stress. Your campus environment should support mental health, not add to the pressure.",
    },
    {
      headline: "Facilities Team Bandwidth",
      description:
        "Your maintenance team is already stretched thin. Adding holiday installation and removal to their plate creates unnecessary burden.",
    },
  ],
};

const servicesContent = {
  eyebrow: "What We Offer",
  headline: "Comprehensive Campus Holiday Solutions",
  description:
    "From inclusive winter displays to student wellness-focused lighting, we handle everything so your team can focus on what matters most.",
  services: [
    {
      title: "Unity Display Design",
      description:
        "Thoughtfully designed displays that celebrate the season while respecting diverse traditions and creating an inclusive campus atmosphere.",
    },
    {
      title: "Student Wellbeing Lighting",
      description:
        "Warm, calming lighting designed to reduce stress during finals period and support student mental health through the winter months.",
    },
    {
      title: "School Spirit Integration",
      description:
        "Custom displays incorporating school colors, mascots, and traditions to build community pride and campus identity.",
    },
    {
      title: "Common Area Transformation",
      description:
        "Transform student centers, libraries, and gathering spaces into welcoming environments that encourage connection.",
    },
    {
      title: "Outdoor Campus Displays",
      description:
        "Professional-grade exterior lighting for quads, walkways, and landmark buildings that welcome visitors and create photo opportunities.",
    },
    {
      title: "Full-Service Installation",
      description:
        "Complete turnkey service including design, installation, maintenance, and removal—zero burden on your facilities team.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "We work around your academic calendar, installing before students return from break and removing before spring semester begins.",
    },
    {
      title: "Safety & Compliance",
      description:
        "All installations meet campus safety standards with proper insurance, permits, and coordination with your risk management team.",
    },
  ],
};

const galleryContent = {
  eyebrow: "Our Work",
  headline: "Campus Transformations",
  images: [
    { src: "/images/universities/_DSC5660-HDR.avif", alt: "University holiday lighting display" },
    { src: "/images/universities/_DSC5669-HDR.avif", alt: "Campus building with festive lights" },
    { src: "/images/universities/_DSC5681-HDR.avif", alt: "Student center holiday decoration" },
    { src: "/images/universities/_DSC5723-HDR.avif", alt: "University quad lighting" },
    { src: "/images/universities/_DSC5825-HDR.avif", alt: "Campus walkway with holiday lights" },
    { src: "/images/universities/DSCF6460.avif", alt: "University entrance display" },
    { src: "/images/universities/DSCF6472.avif", alt: "Academic building holiday lighting" },
    { src: "/images/universities/DSCF6507.avif", alt: "Campus landmark with festive decoration" },
    { src: "/images/universities/_DSC5843-HDR.avif", alt: "University holiday showcase" },
  ],
};

const processContent = {
  eyebrow: "How It Works",
  headline: "A Simple 4-Step Process",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description:
        "We learn about your campus, traditions, and goals to create a tailored lighting plan.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Our team develops a custom design that reflects your campus identity and values.",
    },
    {
      number: "03",
      title: "Install",
      description:
        "Professional installation with zero disruption to campus operations or your facilities team.",
    },
    {
      number: "04",
      title: "Support",
      description:
        "Ongoing maintenance throughout the season plus complete removal when you're ready.",
    },
  ],
};

const socialProofContent = {
  eyebrow: "Success Stories",
  headline: "Trusted by Campus Leaders",
  caseStudy: {
    headline: "Creating an Inclusive Holiday Experience",
    description:
      "We partnered with university administration to design a winter display that celebrated the season while being mindful of the diverse campus community. The result was a warm, welcoming atmosphere that brought students together during a stressful time of year.",
    stats: [
      { value: "5,000+", label: "Students Served" },
      { value: "3", label: "Years Running" },
    ],
    image: "/images/universities/_DSC5723-HDR.avif",
    imageAlt: "University campus with inclusive holiday display",
  },
};

const ctaContent = {
  eyebrow: "Get Started",
  headline: "Ready to Light Up Your Campus?",
  description:
    "Let's discuss how we can create an inclusive, stress-reducing holiday experience for your university community.",
  primaryCtaText: "Book a Discovery Call",
  primaryCtaHref: "/contact",
  secondaryCtaText: "View Our Portfolio",
  secondaryCtaHref: "/work",
};

export default function UniversitiesPage() {
  return (
    <main>
      <IndustryHero {...heroContent} />
      <IndustryCredibilityBar {...credibilityContent} />
      <IndustryProblemFrame {...problemContent} />
      <IndustryServices {...servicesContent} />
      <IndustryGallery {...galleryContent} />
      <IndustryProcess {...processContent} />
      <IndustrySocialProof {...socialProofContent} />
      <IndustryCTA {...ctaContent} />
    </main>
  );
}
