import Link from "next/link";

// Arrow icon for CTA button
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.33337 12.6667L12.6667 3.33334M12.6667 3.33334H3.33337M12.6667 3.33334V12.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface BookCallButtonProps {
  text?: string;
  href?: string;
  className?: string;
  variant?: "default" | "inverted" | "outline";
}

const variantStyles = {
  // Dark button with light text (for light backgrounds)
  default: "bg-[#1c1c1c] text-[#fdfdfd] hover:bg-black",
  // Light button with dark text (for dark backgrounds)
  inverted: "bg-[#fdfdfd] text-black hover:bg-white",
  // Outline button with light border/text (for dark backgrounds)
  outline: "bg-transparent text-[#fdfdfd] border-2 border-[#fdfdfd] hover:bg-white/10",
};

export function BookCallButton({
  text = "Book a call",
  href = "/contact",
  className = "",
  variant = "default",
}: BookCallButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex gap-[6px] items-center justify-center pl-[27px] pr-[19px] py-[10px] transition-colors ${variantStyles[variant]} ${className}`}
    >
      <span className="font-body text-[12px] tracking-[-0.48px] uppercase">
        {text}
      </span>
      <ArrowIcon className="w-4 h-4" />
    </Link>
  );
}
