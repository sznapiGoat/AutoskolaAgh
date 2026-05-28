"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT } from "../../lib/data";

const LINKS = [
  { href: "/kurzy",     label: "Kurzy" },
  { href: "/cenik",    label: "Ceník" },
  { href: "/jak-zacit", label: "Jak začít" },
  { href: "/kontakt",  label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    background: "#fff",
    borderBottom: scrolled ? "1px solid #E2E8F0" : "1px solid transparent",
    boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
    transition: "border-color 0.25s, box-shadow 0.25s",
  };

  return (
    <header style={navStyle}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.125rem", letterSpacing: "-0.02em", color: "#0D1423" }}>
          <span style={{ color: "#1A5FBF" }}>AGH</span>
          <span style={{ color: "#CBD5E1", fontWeight: 300 }}>|</span>
          <span>Autoškola</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  padding: "0.5rem 0.875rem",
                  borderRadius: 6,
                  fontWeight: active ? 600 : 500,
                  fontSize: "0.9rem",
                  color: active ? "#1A5FBF" : "#475569",
                  textDecoration: "none",
                  background: active ? "#EBF2FE" : "transparent",
                  transition: "color 0.15s, background 0.15s",
                }}
                onMouseEnter={(e) => { if (!active) { e.currentTarget.style.color = "#1A5FBF"; e.currentTarget.style.background = "#F0F4FB"; } }}
                onMouseLeave={(e) => { if (!active) { e.currentTarget.style.color = "#475569"; e.currentTarget.style.background = "transparent"; } }}
              >
                {l.label}
              </Link>
            );
          })}
          <Link href="/prihlaska" style={{ marginLeft: "0.5rem", border: "1.5px solid #1A5FBF", color: "#1A5FBF", padding: "0.5rem 1rem", borderRadius: 6, fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}>
            Přihláška
          </Link>
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            style={{ marginLeft: "0.5rem", background: "#1A5FBF", color: "#fff", padding: "0.5rem 1.25rem", borderRadius: 6, fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", transition: "background 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#144EA3")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#1A5FBF")}
          >
            {CONTACT.phone}
          </a>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden" style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", display: "flex", flexDirection: "column", gap: 5 }} aria-label="Menu">
          {[0,1,2].map((i) => (
            <span key={i} style={{ display: "block", width: 22, height: 2, background: "#0D1423", borderRadius: 2, transformOrigin: "center", transform: open ? (i === 0 ? "rotate(45deg) translate(5px, 5px)" : i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "scaleX(0)") : "none", transition: "transform 0.2s, opacity 0.2s" }} />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden" style={{ background: "#fff", borderTop: "1px solid #E2E8F0", padding: "1rem 1.5rem 1.5rem" }}>
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href} style={{ display: "block", padding: "0.75rem 0", fontSize: "1rem", fontWeight: active ? 600 : 500, color: active ? "#1A5FBF" : "#0D1423", textDecoration: "none", borderBottom: "1px solid #F1F5F9" }}>
                {l.label}
              </Link>
            );
          })}
          <a href={`tel:${CONTACT.phoneRaw}`} style={{ display: "block", marginTop: "1.25rem", background: "#1A5FBF", color: "#fff", padding: "0.875rem", borderRadius: 6, fontWeight: 700, textAlign: "center", textDecoration: "none" }}>
            {CONTACT.phone}
          </a>
        </div>
      )}
    </header>
  );
}
