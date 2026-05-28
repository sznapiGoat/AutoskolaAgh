"use client";

import Link from "next/link";
import { CONTACT } from "../../lib/data";

export default function Footer() {
  return (
    <footer style={{ background: "#0D1423", color: "#94A3B8", padding: "4rem 1.5rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#fff", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
              <span style={{ color: "#60A5FA" }}>AGH</span> Autoškola
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#64748B" }}>Výuka řidičů v Mostě od roku 2008.<br />Individuální přístup, malé skupiny.</p>
          </div>

          {/* Pages */}
          <div>
            <h3 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569", marginBottom: "1rem" }}>Stránky</h3>
            {[{ href: "/kurzy", l: "Kurzy" }, { href: "/cenik", l: "Ceník" }, { href: "/jak-zacit", l: "Jak začít" }, { href: "/kontakt", l: "Kontakt" }].map((x) => (
              <Link key={x.href} href={x.href} style={{ display: "block", marginBottom: "0.5rem", color: "#64748B", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#CBD5E1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
              >{x.l}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569", marginBottom: "1rem" }}>Kontakt</h3>
            {[
              { href: `tel:${CONTACT.phoneRaw}`, label: CONTACT.phone },
              { href: `mailto:${CONTACT.email}`, label: CONTACT.email },
              { href: CONTACT.mapUrl, label: `${CONTACT.address}, ${CONTACT.city}` },
            ].map((c) => (
              <a key={c.href} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{ display: "block", marginBottom: "0.5rem", color: "#64748B", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#CBD5E1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
              >{c.label}</a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1E293B", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ fontSize: "0.8rem", color: "#334155" }}>© {new Date().getFullYear()} Alexandr Agh | IČO: {CONTACT.ico}</p>
          <p style={{ fontSize: "0.8rem", color: "#334155" }}>Most, Ústecký kraj</p>
        </div>
      </div>
    </footer>
  );
}
