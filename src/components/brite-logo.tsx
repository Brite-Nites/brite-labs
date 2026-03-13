import Link from "next/link";

export function BriteLogo({ showTrademark = false }: { showTrademark?: boolean }) {
  return (
    <div className="flex items-baseline">
      <span className="font-heading text-2xl font-semibold tracking-[-0.04em] text-brite-lavender md:text-[32px]">
        Brite
      </span>
      <span className="font-pixel text-3xl tracking-[-0.04em] text-brite-lavender md:text-[47px]">
        Labs
      </span>
      {showTrademark && (
        <span className="ml-0.5 self-start font-heading text-[10px] font-medium text-brite-lavender md:text-xs">
          &reg;
        </span>
      )}
    </div>
  );
}

export function BriteLogoBar() {
  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="shrink-0">
        <BriteLogo />
      </Link>
      <span className="font-eyebrow text-sm tracking-[-0.04em] text-brite-lavender md:text-lg">
        LIGHT THE WORLD
      </span>
      <Link href="/" className="shrink-0" aria-hidden="true" tabIndex={-1}>
        <BriteLogo />
      </Link>
    </div>
  );
}
