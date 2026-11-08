"use client";

import { useEffect, useState } from "react";

const items = [
  { href: "#about", label: "About" },
  { href: "#major", label: "Major" },
  { href: "#interests", label: "Interests" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${solid ? " nav--solid" : ""}`}>
      <div className="wrap nav__inner">
        <a className="brand" href="#top">
          <span className="brand__dot" />
          HDU · AUTO / 2026
        </a>
        <nav className="nav__links" aria-label="主导航">
          {items.map((it) => (
            <a key={it.href} href={it.href}>
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
