import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface IndustryClientsProps {
  label: string;
  logos: Logo[];
}

export function IndustryClients({ label, logos }: IndustryClientsProps) {
  return (
    <section className="flex flex-col gap-[25px] items-start justify-center px-[120px] py-[30px] w-full">
      {/* Label */}
      <p className="font-body text-[16px] text-[#8a8a8a] tracking-[-0.64px] leading-none">
        {label}
      </p>

      {/* Logo Grid - Full width, 5 equal columns */}
      <div className="flex w-full">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex flex-1 items-center justify-center h-[69px] border border-[#d5d5d5] overflow-clip"
            style={{ marginLeft: index > 0 ? "-1px" : 0 }} // Collapse borders
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain grayscale opacity-70"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
