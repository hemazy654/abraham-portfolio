"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { contact } from "@/lib/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Ocenstar — back to top">
          <Image
            src="/work/logo.png"
            alt="Ocenstar"
            width={680}
            height={396}
            className="h-10 w-auto"
            priority
          />
        </a>
        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link text-sm text-dim transition-colors hover:text-bone"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-line px-4 py-2 text-xs uppercase tracking-[0.18em] text-bone transition-colors hover:border-bone"
        >
          Hire me
        </a>
      </nav>
      <ul className="flex items-center justify-center gap-6 pb-3 sm:hidden">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-xs uppercase tracking-[0.14em] text-dim transition-colors hover:text-bone"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
