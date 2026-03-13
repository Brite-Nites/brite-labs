import Image from "next/image";

export function BriteAbout() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black lg:-ml-[25%] lg:w-[125%] aspect-[1440/674]"
    >
      {/* Background image — full bleed */}
      <Image
        src="/images/about/about-bg.avif"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 125vw"
        className="object-cover pointer-events-none"
      />
      {/* Content overlay — text aligned to gallery left edge */}
      <div className="absolute inset-0 flex items-end px-7 pb-[60px] md:px-14 lg:pl-[calc(20%+10px)] lg:pr-0">
        <div className="flex w-full">
          {/* Content — lines up with gallery grid */}
          <div className="flex max-w-md flex-col gap-5">
            <p className="font-eyebrow text-[15px] text-brite-lavender-light">
              Who we are
            </p>
            <div className="font-sans text-[15px] leading-normal text-brite-lavender-light">
              <p>
                We are a super awesome cool company who make super awesome cool
                things. You should get to know us, we&apos;re very nice.
              </p>
              <br />
              <p>
                Spend your money here, you won&apos;t regret it. We&apos;ll make
                things for you, just for you.
              </p>
            </div>
          </div>

          {/* Right space — background image subject */}
          <div className="hidden flex-1 lg:block" />
        </div>
      </div>
    </section>
  );
}
