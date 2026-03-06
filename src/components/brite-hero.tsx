export function BriteHero() {
  return (
    <section className="w-full bg-black px-7 pb-7 pt-24 md:px-14 lg:px-28">
      {/* Top Bar */}
      <HeroBar />

      {/* Hero Image with Text Overlay */}
      <div className="relative mt-8 overflow-hidden rounded-lg">
        <img
          src="/images/hero/hero-placeholder.avif"
          alt="Brite Labs Hero"
          className="h-auto w-full object-cover"
        />

        {/* "Light the world" Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-start text-white">
            <span className="font-pixel text-5xl leading-none tracking-tight md:text-7xl lg:text-[120px]">
              Light
            </span>
            <span className="font-pixel text-4xl leading-none tracking-tight md:text-6xl lg:text-[100px]">
              the
            </span>
            <span className="font-pixel text-4xl leading-none tracking-tight md:text-6xl lg:text-[100px]">
              world
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8">
        <HeroBar />
      </div>
    </section>
  );
}

function HeroBar() {
  return (
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
    </div>
  );
}
