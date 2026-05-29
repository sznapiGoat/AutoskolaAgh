"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT } from "../../lib/data";

/* Inline SVG — viewBox crops to AGH letters + gold bar only, no white bg */
function LogoMark({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="215 355 575 248"
      height="40"
      style={{ display: "block", ...style }}
      aria-label="AGH Autoškola"
    >
      {/* A */}
      <path fill="#071236" d="M283.827 361.184C285.296 361.124 286.767 361.087 288.238 361.072L332.649 361.042C341.243 361.03 350.447 361.134 358.903 361.005C375.032 360.758 384.567 363.985 396.24 375.195C412.261 390.581 411.031 408.507 411.023 428.84L411.001 460.454L410.946 569.962L366.491 569.944C365.439 547.303 366.233 518.107 366.234 494.873C345.151 494.208 320.268 494.748 299.063 494.884L299.071 453.245L344.25 453.172L366.017 453.215L366.033 407.509L283.96 407.483L283.947 569.749L238.294 569.692L238.182 456.499L238.197 426.254C238.213 418.699 237.965 409.571 239.29 402.245C240.756 393.77 244.448 385.836 249.987 379.256C258.431 368.992 270.6 362.493 283.827 361.184Z"/>
      {/* G */}
      <path fill="#071236" d="M480.58 361.236L481.087 361.228C494.108 361.026 508.08 361.328 520.648 361.071C550.575 360.459 577.299 358.218 592.274 389.782C599.377 404.753 598.072 414.612 598.201 430.72C583.577 431.111 567.479 430.793 552.736 430.81L552.819 408.428C526.057 408.195 499.294 408.165 472.531 408.34L472.497 524.609L552.021 524.81L552.046 494.998L503.419 494.889L503.466 459.25L503.531 453.166L596.952 453.395C596.701 469.159 597.145 485.167 597.003 500.946C596.918 510.512 597.703 523.333 595.616 532.458C593.831 540.559 589.991 548.064 584.466 554.251C576.928 562.568 563.241 569.805 551.837 569.821C530.466 569.85 509.08 569.79 487.706 569.865C480.163 569.892 471.141 570.275 463.863 568.622C456.176 566.859 449.1 563.074 443.367 557.658C433.068 548.044 427.506 534.74 427.416 520.665C427.228 491.234 427.059 461.794 426.975 432.363C426.947 422.843 426.386 411.489 428.367 402.297C430.382 392.739 435.036 383.937 441.801 376.89C453.105 365.053 464.768 361.586 480.58 361.236Z"/>
      {/* H left bar */}
      <path fill="#071236" d="M613.817 361.23C628.683 361.134 643.55 361.128 658.416 361.211L658.409 503.621L658.41 549.201C658.394 553.819 658.68 565.347 658.177 569.152L657.375 569.759C642.909 570.063 627.701 569.87 613.173 569.916L613.329 414.083C613.33 408.513 612.843 363.926 613.817 361.23Z"/>
      {/* H right bar + crossbar */}
      <path fill="#071236" d="M740.833 361.089L786.5 361.184L786.477 569.708C771.413 569.921 755.914 569.738 740.815 569.742C740.91 562.118 740.853 554.384 740.863 546.75L740.693 494.797C719.506 494.136 694.853 494.741 673.401 494.714C673.022 481.125 673.168 466.906 673.177 453.302C695.725 453.11 718.273 453.101 740.82 453.275L740.833 361.089Z"/>
      {/* Gold bar */}
      <path fill="#E4B039" d="M238.275 588.568L786.338 588.742L786.26 594.881C767.471 593.841 741.293 594.704 721.978 594.716L603.325 594.642L238.425 594.941C238.307 592.913 238.316 590.621 238.275 588.568Z"/>
    </svg>
  );
}

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

        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            transform: logoPulse ? "scale(0.93)" : "scale(1)",
            opacity:   logoPulse ? 0.65 : 1,
            transition: "transform 0.18s cubic-bezier(0.34,1.56,0.64,1), opacity 0.18s ease",
            userSelect: "none",
          }}
        >
          <LogoMark />
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
