import { BriteHero } from "@/components/brite-hero";
import { BriteAbout } from "@/components/brite-about";
import { BriteGallery } from "@/components/brite-gallery";
import { CaseStudies2 } from "@/components/case-studies2";
import { Footer31 } from "@/components/footer31";
import { SideNav } from "@/components/side-nav";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero — full width, no sidebar */}
      <BriteHero />

      {/* Sidebar-visible region */}
      <div className="relative flex">
        {/* Sticky sidebar — scoped to this container */}
        <aside className="sticky top-0 z-50 hidden h-screen w-1/5 shrink-0 lg:flex lg:items-center">
          <SideNav />
        </aside>

        {/* Main content alongside sidebar */}
        <div className="min-w-0 flex-1">
          <BriteAbout />
          <section id="portfolio">
            <BriteGallery className="bg-black" />
          </section>
          <section id="solutions">
            <CaseStudies2 />
          </section>
          <section id="results">
            {/* Placeholder for results section */}
          </section>
        </div>
      </div>

      {/* Footer — full width, no sidebar */}
      <section id="contact">
        <Footer31 />
      </section>
    </main>
  );
}
