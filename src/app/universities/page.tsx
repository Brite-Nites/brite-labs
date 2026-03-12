import {
  IndustryHero,
  IndustryClients,
  IndustryServices,
  IndustryProcess,
  IndustrySocialProof,
  IndustryCTA,
  IndustryFAQ,
} from "@/components/industry";
import { BriteGallery } from "@/components/brite-gallery";
import { BriteHeader } from "@/components/brite-header";
import { Footer31 } from "@/components/footer31";

// Universities page content
const heroContent = {
  breadcrumbs: [{ label: "home", href: "/" }],
  currentPage: "Universities",
  headline: "Holiday Lighting for Universities",
  subheadline:
    "We create professionally designed displays that support student wellbeing, celebrate campus diversity, and build school spirit—without burdening your facilities team during the busiest time of year.",
  ctaText: "Book a call",
  stats: [
    { value: "10+", label: "Campus Projects" },
    { value: "100%", label: "on time delivery" },
    { value: "5000+", label: "Students served" },
  ],
  backgroundImage: "/images/universities/hero-background.jpg",
  backgroundImageAlt: "Restaurant with stunning blue holiday lighting display",
};

const clientsContent = {
  label: "Trusted by 5000+ companies nation wide",
  logos: [
    { src: "/images/universities/logos/asu.svg", alt: "Arizona State University", width: 114, height: 34 },
    { src: "/images/universities/logos/manhattan.svg", alt: "Manhattan College", width: 144, height: 144 },
    { src: "/images/universities/logos/gwu.svg", alt: "George Washington University", width: 56, height: 40 },
    { src: "/images/universities/logos/byu.svg", alt: "Brigham Young University", width: 94, height: 68 },
    { src: "/images/universities/logos/umd.svg", alt: "University of Maryland", width: 78, height: 78 },
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
    { src: "/images/universities/_DSC5660-HDR.avif", alt: "University holiday lighting display" },
  ],
};

const processContent = {
  headline: "Our\nProcess",
  description:
    "From initial consultation to final installation, we handle every detail so your campus can focus on what matters most.",
  ctaText: "Book a call",
  ctaHref: "/contact",
  steps: [
    {
      number: "01",
      title: "Discover & Research",
      description:
        "We immerse ourselves in your campus culture, learning about your traditions, architectural landmarks, and community values. Our team conducts site visits to understand the unique character of your university.",
    },
    {
      number: "02",
      title: "Iterate & Design",
      description:
        "Our design team creates detailed renderings tailored to your campus identity, incorporating school colors, mascot imagery, and meaningful symbols. We refine every element until the design perfectly captures your vision.",
    },
    {
      number: "03",
      title: "Install",
      description:
        "Our professional crews work around your academic calendar, ensuring zero disruption to daily operations. We handle all logistics including equipment, safety protocols, and permits.",
    },
    {
      number: "04",
      title: "Maintain & Support",
      description:
        "Our support team monitors your displays and responds promptly to any maintenance needs throughout the season. When complete, we carefully remove all equipment and restore your campus.",
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
      { value: "10+", label: "Campus Projects" },
      { value: "100%", label: "on time delivery" },
      { value: "5000+", label: "Students served" },
    ],
    image: "/images/universities/_DSC5723-HDR.avif",
    imageAlt: "University campus with inclusive holiday display",
  },
};

const faqContent = {
  eyebrow: "FAQ",
  headline: "We've got answers",
  description:
    "Find answers to common questions about our university lighting services.",
  categories: [
    {
      name: "Support",
      questions: [
        {
          question: "What happens if a light goes out during the season?",
          answer:
            "Our support team monitors your displays and responds within 24 hours to any maintenance needs. We include complimentary bulb replacements and repairs throughout the season as part of our service agreement.",
        },
        {
          question: "Do you provide on-site support during installation?",
          answer:
            "Yes, our project managers are on-site throughout the entire installation process. They coordinate with your facilities team and handle any adjustments needed in real-time.",
        },
        {
          question: "How do I contact support for urgent issues?",
          answer:
            "We provide a dedicated support line for all university clients that's available 7 days a week during the holiday season. Response time for urgent issues is typically under 4 hours.",
        },
        {
          question: "What's included in your maintenance service?",
          answer:
            "Our maintenance includes regular inspections, bulb replacements, weather-related adjustments, timer resets, and any necessary repairs. We proactively check displays after storms or extreme weather.",
        },
      ],
    },
    {
      name: "Pricing",
      questions: [
        {
          question: "How is pricing determined for university projects?",
          answer:
            "Pricing is based on the scope of your project, including square footage covered, complexity of designs, number of buildings, and duration of the display season. We provide detailed quotes after our initial campus assessment.",
        },
        {
          question: "Do you offer multi-year contracts?",
          answer:
            "Yes, we offer discounted multi-year agreements that lock in pricing and guarantee availability during peak booking seasons. Many universities save 15-20% with three-year commitments.",
        },
        {
          question: "What payment options are available?",
          answer:
            "We offer flexible payment plans including monthly billing, semester billing, or single annual payments. We also work with university procurement departments on purchase orders and invoicing requirements.",
        },
        {
          question: "Are there any hidden fees?",
          answer:
            "No hidden fees. Our quotes include design, installation, maintenance, removal, and storage. The only additional costs would be for scope changes you request after the project begins.",
        },
      ],
    },
    {
      name: "Installation",
      questions: [
        {
          question: "How long does installation take?",
          answer:
            "Installation time varies based on project scope. Typical campus installations take 3-7 days. We work around your academic calendar and can complete installation over a weekend if needed.",
        },
        {
          question: "Will installation disrupt campus activities?",
          answer:
            "We coordinate with your events team to minimize disruption. Most work is done during off-peak hours, and we use equipment that doesn't block walkways or parking areas.",
        },
        {
          question: "What about installation on historic buildings?",
          answer:
            "We have extensive experience with historic structures. We use non-invasive mounting techniques, avoid drilling into masonry, and coordinate with your preservation office on any special requirements.",
        },
        {
          question: "Do you handle permits and approvals?",
          answer:
            "Yes, we manage all permitting and work with your risk management team. We carry comprehensive liability insurance and provide certificates of insurance as required.",
        },
      ],
    },
    {
      name: "Design",
      questions: [
        {
          question: "Can we incorporate our school colors and mascot?",
          answer:
            "Absolutely! Custom school spirit integration is one of our specialties. We create designs featuring your colors, mascot imagery, and campus traditions that build community pride.",
        },
        {
          question: "How do you ensure displays are inclusive?",
          answer:
            "We design with diversity in mind, creating winter wonderland themes that celebrate the season without focusing on specific religious imagery. We're happy to discuss your community's specific needs.",
        },
        {
          question: "Can we see designs before installation?",
          answer:
            "Yes, we provide detailed renderings and 3D visualizations during the design phase. You'll approve all designs before we begin installation, with revision rounds included.",
        },
        {
          question: "Do you work with our existing decorations?",
          answer:
            "We can incorporate existing decorations into our designs or work around them. During our assessment, we'll inventory any existing elements you want to include.",
        },
      ],
    },
    {
      name: "Other",
      questions: [
        {
          question: "How far in advance should we book?",
          answer:
            "We recommend booking 4-6 months in advance for the best availability, especially for large campus projects. However, we sometimes have availability for last-minute requests.",
        },
        {
          question: "Do you work with other educational institutions?",
          answer:
            "Yes, we work with K-12 schools, community colleges, and private institutions in addition to universities. Our process adapts to fit different campus sizes and budgets.",
        },
        {
          question: "What happens to the lights after the season?",
          answer:
            "We handle complete removal and store your custom elements for next year. Stored items are inspected and repaired as needed before the following season at no additional charge.",
        },
        {
          question: "Can we extend our display past the original end date?",
          answer:
            "Extensions are often possible depending on our schedule. We typically charge a pro-rated weekly fee for extensions. Let us know as early as possible if you'd like to extend.",
        },
      ],
    },
  ],
};

const ctaContent = {
  eyebrow: "Get Started",
  headline: "Ready to Light Up Your Campus?",
  description:
    "Let's discuss how we can create an inclusive, stress-reducing holiday experience for your university community.",
  primaryCtaText: "Book a call",
  primaryCtaHref: "/contact",
  secondaryCtaText: "View our portfolio",
  secondaryCtaHref: "/work",
  backgroundImage: "/images/universities/cta-background.jpg",
  backgroundImageAlt: "Restaurant with festive holiday lighting",
  offers: [
    {
      title: "Free Consultation",
      description:
        "Schedule a complimentary call to discuss your campus lighting vision and receive a custom proposal tailored to your university's needs.",
    },
    {
      title: "Campus Assessment",
      description:
        "Our team will conduct a thorough site visit to identify the best opportunities for stunning holiday displays across your campus.",
    },
  ],
};

export default function UniversitiesPage() {
  return (
    <main className="pt-[60px]">
      <BriteHeader variant="light" fixed />
      <IndustryHero {...heroContent} />
      <IndustryClients {...clientsContent} />
      <IndustryServices {...servicesContent} />
      <BriteGallery images={galleryContent.images} className="px-[120px]" />
      <IndustrySocialProof {...socialProofContent} />
      <IndustryProcess {...processContent} />
      <IndustryCTA {...ctaContent} />
      <IndustryFAQ {...faqContent} />
      <Footer31 variant="light" />
    </main>
  );
}
