"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CONTACT } from "../../lib/data";

const LINKS = [
  { href: "/kurzy",     label: "Kurzy" },
  { href: "/cenik",     label: "Ceník" },
  { href: "/jak-zacit", label: "Jak začít" },
  { href: "/kontakt",   label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [isMobile, setIsMobile]   = useState(false);
  const [logoPulse, setLogoPulse] = useState(false);
  const pathname = usePathname();
  const router   = useRouter();

  // Scroll state
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Responsive: JS-based so inline styles don't conflict with Tailwind
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close drawer on route change
  useEffect(() => setOpen(false), [pathname]);

  // Logo click: if already on homepage, smooth scroll to top with a pulse
  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setLogoPulse(true);
      setTimeout(() => setLogoPulse(false), 600);
    }
  }, [pathname]);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: "#fff",
      borderBottom: scrolled ? "1px solid #E2E8F0" : "1px solid transparent",
      boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
      transition: "border-color 0.25s, box-shadow 0.25s",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo — pulses on click when already on homepage */}
        <Link
          href="/"
          onClick={handleLogoClick}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "var(--font-jakarta), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "1.125rem",
            letterSpacing: "-0.02em",
            color: "#0D1423",
            transform: logoPulse ? "scale(0.94)" : "scale(1)",
            opacity:   logoPulse ? 0.7 : 1,
            transition: "transform 0.15s ease, opacity 0.15s ease",
            userSelect: "none",
          }}
        >
          <span style={{ color: "#1A5FBF" }}>AGH</span>
          <span style={{ color: "#CBD5E1", fontWeight: 300 }}>|</span>
          <span>Autoškola</span>
        </Link>

        {/* Desktop nav — visibility via JS, not Tailwind, so inline styles don't conflict */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
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
            <Link
              href="/prihlaska"
              style={{ marginLeft: "0.5rem", border: "1.5px solid #1A5FBF", color: "#1A5FBF", padding: "0.5rem 1rem", borderRadius: 6, fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}
            >
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
        )}

        {/* Mobile hamburger — only rendered when actually mobile */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: 5 }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "#0D1423",
                  borderRadius: 2,
                  transformOrigin: "center",
                  transition: "transform 0.22s ease, opacity 0.22s ease",
                  transform: open
                    ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                    : i === 2 ? "rotate(-45deg) translate(5px, -5px)"
                    : "none"
                    : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        )}
      </div>

      {/* Mobile drawer */}
      {isMobile && open && (
        <div style={{
          background: "#fff",
          borderTop: "1px solid #E2E8F0",
          padding: "1rem 1.5rem 1.5rem",
          animation: "fade-up 0.2s ease both",
        }}>
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{ display: "block", padding: "0.75rem 0", fontSize: "1rem", fontWeight: active ? 600 : 500, color: active ? "#1A5FBF" : "#0D1423", textDecoration: "none", borderBottom: "1px solid #F1F5F9" }}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/prihlaska"
            style={{ display: "block", marginTop: "1rem", border: "1.5px solid #1A5FBF", color: "#1A5FBF", padding: "0.75rem", borderRadius: 6, fontWeight: 700, textAlign: "center", textDecoration: "none" }}
          >
            Přihláška
          </Link>
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            style={{ display: "block", marginTop: "0.625rem", background: "#F59E0B", color: "#0D1423", padding: "0.875rem", borderRadius: 6, fontWeight: 800, textAlign: "center", textDecoration: "none" }}
          >
            {CONTACT.phone}
          </a>
        </div>
      )}
    </header>
  );
}
