import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "../lib/data";

export const metadata: Metadata = { title: "Kontakt" };

export default function Kontakt() {
  return (
    <>
      {/* Header */}
      <div style={{ paddingTop: 64, background: "#F0F4FB", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem 3rem" }}>
          <Link href="/" style={{ fontSize: "0.85rem", color: "#94A3B8", textDecoration: "none", marginBottom: "1rem", display: "inline-block" }}>← Zpět</Link>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A5FBF", display: "block", marginBottom: "0.5rem" }}>Kde nás najdete</span>
          <h1 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#0D1423", marginBottom: "1rem" }}>Kontakt</h1>
          <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 480 }}>Zavolejte nebo napište – domluvíme vstupní schůzku nebo zodpovíme vaše dotazy.</p>
        </div>
      </div>

      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="grid-cols-1 md:grid-cols-2">
          {/* Contact cards */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
              {[
                { icon: "📞", label: "Telefon", value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}`, note: "Pracovní dny" },
                { icon: "✉️", label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}`, note: "Odpovíme do 24 hodin" },
                { icon: "📍", label: "Adresa", value: `${CONTACT.address}, ${CONTACT.zip} ${CONTACT.city}`, href: CONTACT.mapUrl, note: "Ústecký kraj" },
                { icon: "🏢", label: "IČO", value: CONTACT.ico, href: undefined, note: "Alexandr Agh" },
              ].map((c) => {
                const inner = (
                  <div style={{ display: "flex", gap: "1rem", padding: "1.25rem 1.5rem", background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{c.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#94A3B8", marginBottom: "0.25rem" }}>{c.label}</div>
                      <div style={{ fontWeight: 700, color: c.href ? "#1A5FBF" : "#0D1423", fontSize: "0.95rem", wordBreak: "break-word" }}>{c.value}</div>
                      {c.note && <div style={{ fontSize: "0.8rem", color: "#94A3B8", marginTop: "0.2rem" }}>{c.note}</div>}
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ textDecoration: "none", display: "block" }}>{inner}</a>
                ) : <div key={c.label}>{inner}</div>;
              })}
            </div>

            {/* Primary CTA */}
            <a href={`tel:${CONTACT.phoneRaw}`}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", background: "#1A5FBF", color: "#fff", padding: "1.125rem 2rem", borderRadius: 10, fontWeight: 800, fontSize: "1.1rem", textDecoration: "none", boxShadow: "0 4px 16px rgba(26,95,191,0.3)" }}>
              📞 Zavolat nyní
            </a>
            <a href={`mailto:${CONTACT.email}`}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", border: "1.5px solid #1A5FBF", color: "#1A5FBF", padding: "1.125rem 2rem", borderRadius: 10, fontWeight: 700, fontSize: "1rem", textDecoration: "none", marginTop: "0.75rem" }}>
              ✉️ Napsat e-mail
            </a>
          </div>

          {/* Map + info */}
          <div>
            {/* Map embed */}
            <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.1)", marginBottom: "1.5rem", border: "1px solid #E2E8F0" }}>
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.address + ", " + CONTACT.zip + " " + CONTACT.city)}&output=embed&z=15`}
                width="100%"
                height="340"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Autoškola AGH Most"
              />
            </div>
            <a href={CONTACT.mapUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#1A5FBF", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
              📍 Otevřít v Google Mapách →
            </a>

            <div style={{ marginTop: "1.5rem", background: "#F8FAFB", border: "1px solid #E2E8F0", borderRadius: 10, padding: "1.25rem" }}>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0D1423", marginBottom: "0.75rem" }}>Jak nás najít</div>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.7, margin: 0 }}>
                Nacházíme se na adrese <strong>Albrechtická 414/1, Most</strong>. Nejbližší zastávka MHD je v docházkové vzdálenosti. Parkování v okolí je k dispozici.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jak začít link */}
      <section style={{ padding: "3rem 1.5rem", background: "#EBF2FE", borderTop: "1px solid #BFDBFE" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <div style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#0D1423", marginBottom: "0.25rem" }}>Nevíte, jak začít?</div>
            <p style={{ color: "#475569", fontSize: "0.9rem", margin: 0 }}>Přečtěte si náš podrobný průvodce výcvikem krok za krokem.</p>
          </div>
          <Link href="/jak-zacit" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#1A5FBF", color: "#fff", padding: "0.875rem 1.75rem", borderRadius: 8, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", whiteSpace: "nowrap" }}>
            Jak začít →
          </Link>
        </div>
      </section>
    </>
  );
}
