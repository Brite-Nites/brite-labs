import { cn } from "@/lib/utils";
import { BookCallButton } from "@/components/ui/book-call-button";
import Image from "next/image";

interface BriteHeaderProps {
  variant?: "dark" | "light";
  fixed?: boolean;
  className?: string;
}

export function BriteHeader({ variant = "dark", fixed = false, className }: BriteHeaderProps) {
  const isDark = variant === "dark";

  return (
    <header
      className={cn(
        "w-full h-[60px] px-[120px] z-50 flex items-center",
        isDark ? "bg-black" : "bg-white border-b border-[#E4E4E4]",
        fixed && "fixed top-0 left-0 right-0",
        className
      )}
    >
      <div className="flex items-center justify-between w-full">
        {/* Left Logo */}
        <a href="/" className="shrink-0">
          <Image
            src="/images/logos/Brite Labs Primary.svg"
            alt="Brite Labs"
            width={111}
            height={20}
            className={cn(
              isDark ? "brightness-150" : "brightness-0"
            )}
          />
        </a>

        {/* Center Tagline */}
        <span
          className={cn(
            "font-eyebrow text-sm tracking-[-0.04em] md:text-lg",
            isDark ? "text-[#e3d7ff]" : "text-black"
          )}
        >
          CREATE THE MOMENT
        </span>

        {/* Right CTA */}
        <BookCallButton
          text="Book a call"
          variant={isDark ? "inverted" : "default"}
        />
      </div>
    </header>
  );
}
