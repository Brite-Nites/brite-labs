export function BriteHeader() {
  return (
    <header className="w-full bg-black px-7 py-7 md:px-14 lg:px-28">
      <div className="flex items-center justify-between">
        {/* Left Logo */}
        <a href="/" className="shrink-0">
          <BriteLogo />
        </a>

        {/* Center Tagline */}
        <span className="font-eyebrow text-sm tracking-[-0.04em] text-[#e3d7ff] md:text-lg">
          LIGHT THE WORLD
        </span>

        {/* Right Logo */}
        <a href="/" className="shrink-0">
          <BriteLogo />
        </a>
      </div>
    </header>
  );
}

function BriteLogo() {
  return (
    <div className="flex items-baseline">
      {/* "Brite" in Roobert SemiBold */}
      <span className="font-heading text-2xl font-semibold tracking-[-0.04em] text-[#e3d7ff] md:text-[32px]">
        Brite
      </span>
      {/* "Labs" in PP NeueBit pixel font */}
      <span className="font-pixel text-3xl tracking-[-0.04em] text-[#e3d7ff] md:text-[47px]">
        Labs
      </span>
      {/* Registered trademark */}
      <span className="ml-0.5 self-start font-heading text-[10px] font-medium text-[#e3d7ff] md:text-xs">
        ®
      </span>
    </div>
  );
}
