import { Navbar10 } from "@/components/navbar10";
import { BriteHero } from "@/components/brite-hero";
import { BriteGallery } from "@/components/brite-gallery";
import { CaseStudies2 } from "@/components/case-studies2";
import { Footer31 } from "@/components/footer31";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar10 />
      <BriteHero />
      <BriteGallery />
      <CaseStudies2 />
      <Footer31 />
    </main>
  );
}
