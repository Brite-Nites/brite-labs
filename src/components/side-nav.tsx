"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Custom Solutions", id: "solutions" },
  { label: "Results", id: "results" },
  { label: "Contact", id: "contact" },
];

export function SideNav() {
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one closest to the top
          const top = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
          );
          setActiveId(top.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1.5 py-8 pl-7 md:pl-14 lg:pl-28">
      {navItems.map(({ label, id }) => {
        const isActive = activeId === id;
        return (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className="group relative flex items-center gap-2 text-left transition-all duration-300 ease-out"
          >
            {/* Dot indicator */}
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full bg-brite-lavender-light transition-all duration-300 ${
                isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            />
            {/* Label */}
            <span
              className={`font-eyebrow text-[15px] text-brite-lavender-light transition-all duration-300 ${
                isActive ? "translate-x-1 opacity-100" : "translate-x-0 opacity-50"
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
