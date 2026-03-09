"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NAVIGATION = [
  { label: "Home", href: "#" },
  { label: "Collection", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Login", href: "#" },
];

const SOCIAL_LINKS = [
  { label: "Linkedin", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Facebook", href: "#" },
];

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

interface Footer31Props {
  className?: string;
}

const Footer31 = ({ className }: Footer31Props) => {
  return (
    <section
      className={cn("dark bg-background py-32 text-foreground", className)}
    >
      <div className="w-full px-7 md:px-14 lg:px-28">
        <div className="flex flex-col justify-between gap-15 lg:flex-row">
          <div className="flex flex-col gap-10">
            <p className="font-eyebrow text-sm text-primary">Join the future</p>
            <p className="relative text-4xl font-medium tracking-tight lg:text-5xl">
              Let&apos;s build something amazing
            </p>
            <div className="space-y-1 text-sm font-light tracking-tight lg:text-base">
              <p>Get in touch: </p>
              <a href="mailto:hello@britelabs.io" className="hover:text-primary transition-colors">hello@britelabs.io</a>
            </div>
          </div>
          <div className="grid w-full max-w-xs grid-cols-2 gap-10 text-sm font-light lg:text-base">
            <ul className="space-y-1">
              {NAVIGATION.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="tracking-tight text-foreground hover:text-foreground/30"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-1">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-1 tracking-tight text-foreground hover:text-foreground/30"
                  >
                    {item.label}{" "}
                    <ArrowUpRight className="size-3.5 text-foreground group-hover:text-muted-foreground/50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-15 lg:flex-row">
          <div className="flex w-full max-w-md flex-col gap-10">
            <div className="space-y-1 text-sm font-light tracking-tight lg:text-base">
              <p>Sign up for newsletter : </p>
              <form className="flex w-full items-end border-b border-b-foreground/10">
                <Input
                  type="text"
                  placeholder="Name*"
                  className="mt-10 rounded-none border-0 !bg-transparent p-0 uppercase shadow-none placeholder:text-foreground/20 focus-visible:ring-0 lg:text-base"
                />
                <Button type="submit" variant="ghost">
                  <ArrowRight />
                </Button>
              </form>
            </div>
          </div>
          <div className="grid w-full max-w-xs grid-cols-2 gap-10 text-sm font-light lg:text-base">
            <div className="w-32">Punjab, 141421 India, Asia</div>
            <ul className="space-y-1">
              {FOOTER_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-1 tracking-tight text-foreground hover:text-foreground/30"
                  >
                    {item.label}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-20 w-full lg:mt-32">
          <BriteLabsLogoAnimated />
        </div>
      </div>
    </section>
  );
};

export { Footer31 };

const LOGO_GLYPHS = [
  // B
  { d: "M9.19538 23.6593H0V0.752686H8.86814C13.0568 0.752686 16.0347 2.84701 16.0347 6.64297C16.0347 8.80274 14.6603 10.4389 13.2531 11.1588C15.4129 11.9769 17.18 13.8095 17.18 16.8855C17.18 21.1396 14.0058 23.6593 9.19538 23.6593ZM4.25409 4.22141V9.719H8.57363C10.8643 9.719 12.0096 8.73729 12.0096 6.9702C12.0096 5.20312 10.8643 4.22141 8.50818 4.22141H4.25409ZM4.25409 13.3841V19.8961H8.73725C11.6497 19.8961 13.0241 18.7835 13.0241 16.6564C13.0241 14.5621 11.6497 13.3841 8.73725 13.3841H4.25409Z" },
  // r
  { d: "M28.9915 7.1665V10.5371H26.4064C23.8539 10.5371 22.8395 12.7295 22.8395 15.871V23.6593H18.8145V7.1665H22.8395V10.0789C23.6576 7.9846 24.9338 7.1665 27.0608 7.1665H28.9915Z" },
  // i
  { d: "M29.8042 4.58133V0H34.2546V4.58133H29.8042ZM34.0256 23.6593H30.0005V7.16651H34.0256V23.6593Z" },
  // t
  { d: "M38.3583 7.16652V2.1925H42.3833V7.16652H46.9647V10.5371H42.3833V17.5072C42.3833 19.1761 43.2669 20.027 44.7722 20.027H46.9647V23.6593H44.314C40.7144 23.6593 38.3583 21.565 38.3583 17.8999V10.5371H35.1187V7.16652H38.3583Z" },
  // e
  { d: "M59.2543 18.1618H63.1812C62.5594 21.6632 59.4834 23.9212 55.4256 23.9212C50.0262 23.9212 47.0156 19.6671 47.0156 15.3475C47.0156 10.9953 49.699 6.90479 55.0984 6.90479C60.6287 6.90479 63.1157 10.9298 63.1157 14.8567C63.1157 15.413 63.083 15.9038 63.0503 16.2311H50.877C51.1715 18.8817 52.8732 20.5833 55.4256 20.5833C57.4872 20.5833 58.8289 19.7325 59.2543 18.1618ZM55.0984 9.91537C52.8405 9.91537 51.4006 11.0934 50.9752 13.5804H59.0907C58.9271 11.4861 57.4872 9.91537 55.0984 9.91537Z" },
  // L (pixel)
  { d: "M72.8315 20.6041H68.479V1.4635H72.8315V20.6041ZM83.5317 20.6071V24.3698H72.8511V20.6071H83.5317Z" },
  // a (pixel)
  { d: "M95.1898 24.6381H88.4885V22.9656H86.816V21.2931H85.1436V17.9368H86.816V16.2643H90.161V14.5918H96.8737V12.9079H95.1898V11.2354H90.161V12.9079H85.1436V11.2354H86.816V9.56297H88.4885V7.8905H96.8737V9.56297H98.5462V11.2354H100.219V24.6381H96.8737V22.9656H95.1898V24.6381ZM89.3247 21.2931H95.1898V19.6207H96.8737V16.2643H95.1898V17.9368H89.3247V21.2931Z" },
  // b (pixel)
  { d: "M105.09 24.6381H101.745V1.17773H105.09V9.56297H106.762V7.89051H113.475V9.56297H115.147V11.2354H116.82V21.2931H115.147V22.9656H113.475V24.6381H106.762V22.9656H105.09V24.6381ZM106.762 21.2931H111.791V19.6207H113.475V12.9079H111.791V11.2354H106.762V12.9079H105.09V19.6207H106.762V21.2931Z" },
  // s (pixel)
  { d: "M130.186 24.6381H121.801V22.9656H120.129V21.2931H118.456V19.6207H123.473V21.2931H129.339V17.9368H123.473V16.2643H120.129V14.5918H118.456V11.2354H120.129V9.56297H121.801V7.8905H130.186V9.56297H131.859V11.2354H133.531V12.9079H128.502V11.2354H122.637V14.5918H128.502V16.2643H131.859V17.9368H133.531V21.2931H131.859V22.9656H130.186V24.6381Z" },
  // ®
  { d: "M138.19 24.4461C136.732 24.4461 135.666 23.3442 135.666 21.9461C135.666 20.5598 136.732 19.446 138.166 19.446C139.671 19.446 140.725 20.548 140.725 21.9342C140.725 23.2968 139.683 24.4461 138.19 24.4461ZM136.282 21.9461C136.282 23.0362 137.076 23.8774 138.19 23.8774C139.339 23.8774 140.109 23.0599 140.109 21.9342C140.109 20.8086 139.327 20.0266 138.166 20.0266C137.076 20.0266 136.282 20.8323 136.282 21.9461ZM137.218 23.2139V20.6546H138.391C138.924 20.6546 139.232 20.9508 139.232 21.3181C139.232 21.6617 138.972 21.8395 138.711 21.8513V22.0527C139.007 22.0527 139.221 22.2778 139.221 22.5622V23.2139H138.64V22.7044C138.64 22.4793 138.498 22.3608 138.237 22.3608H137.799V23.2139H137.218ZM137.799 21.8631H138.237C138.498 21.8631 138.628 21.6736 138.628 21.4958C138.628 21.3063 138.498 21.1404 138.237 21.1404H137.799V21.8631Z" },
];

function BriteLabsLogoAnimated() {
  return (
    <motion.svg
      viewBox="0 0 141 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-4xl opacity-20 hover:opacity-40 transition-opacity"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {LOGO_GLYPHS.map((glyph, i) => (
        <motion.path
          key={i}
          d={glyph.d}
          fill="currentColor"
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                delay: i * 0.08,
                ease: "easeOut",
              },
            },
          }}
        />
      ))}
    </motion.svg>
  );
}
