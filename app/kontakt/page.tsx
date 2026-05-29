import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "../lib/data";

export const metadata: Metadata = { title: "Kontakt" };

const ICON_PHONE = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>;
const ICON_MAIL = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>;
const ICON_PIN  = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7z"/><circle cx="12" cy="9" r="2.5"/></svg>;
const ICON_ID   = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>;

const CARDS = [
  { icon: ICON_PHONE, label: "Telefon",  value: CONTACT.phone,                                            href: `tel:${CONTACT.phoneRaw}`,    note: "Pracovní dny" },
  { icon: ICON_MAIL,  label: "E-mail",   value: CONTACT.email,                                            href: `mailto:${CONTACT.email}`,    note: "Odpovíme do 24 hodin" },
  { icon: ICON_PIN,   label: "Adresa",   value: `${CONTACT.address}, ${CONTACT.zip} ${CONTACT.city}`,    href: CONTACT.mapUrl,               note: "Ústecký kraj" },
  { icon: ICON_ID,    label: "IČO",      value: CONTACT.ico,                                              href: undefined,                    note: "Alexandr Agh" },
];

export default function Kontakt() {
  return (
    <>
      <div style={{ paddingTop: 64, background: "#F0F4FB", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem 3rem" }}>
          <Link href="/" style={{ fontSize: "0.85rem", color: "#94A3B8", textDecoration: "none", marginBottom: "1rem", display: "inline-block" }}>← Zpět</Link>
          <h1 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#0D1423", marginBottom: "0.75rem" }}>Kontakt</h1>
          <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 480, margin: 0 }}>Zavolejte nebo napište. Domluvíme termín a zodpovíme vaše dotazy.</p>
        </div>
      </div>

      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
              {CARDS.map((c) => {
                const inner = (
                  <div style={{ display: "flex", gap: "1rem", padding: "1.125rem 1.375rem", background: "#fff", border: "1px solid #E2E8F0", borderRadius: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#1A5FBF", flexShrink: 0, marginTop: 2 }}>{c.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94A3B8", marginBottom: "0.2rem" }}>{c.label}</div>
                      <div style={{ fontWeight: 700, color: c.href ? "#1A5FBF" : "#0D1423", fontSize: "0.95rem", wordBreak: "break-word" }}>{c.value}</div>
                      {c.note && <div style={{ fontSize: "0.78rem", color: "#94A3B8", marginTop: "0.15rem" }}>{c.note}</div>}
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ textDecoration: "none", display: "block" }}>{inner}</a>
                ) : <div key={c.label}>{inner}</div>;
              })}
            </div>

            <a href={`tel:${CONTACT.phoneRaw}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#F59E0B", color: "#0D1423", padding: "1rem 2rem", borderRadius: 8, fontWeight: 800, fontSize: "1rem", textDecoration: "none", boxShadow: "0 4px 16px rgba(245,158,11,0.3)", marginBottom: "0.75rem" }}>
              Zavolat
            </a>
            <a href={`mailto:${CONTACT.email}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #E2E8F0", color: "#475569", padding: "1rem 2rem", borderRadius: 8, fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
              Napsat e-mail
            </a>
          </div>

          <div>
            <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.1)", marginBottom: "1rem", border: "1px solid #E2E8F0" }}>
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.address + ", " + CONTACT.zip + " " + CONTACT.city)}&output=embed&z=15`}
                width="100%" height="340" style={{ border: 0, display: "block" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Autoškola AGH Most"
              />
            </div>
            <a href={CONTACT.mapUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#1A5FBF", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>
              Otevřít v Google Mapách →
            </a>
            <div style={{ marginTop: "1.5rem", background: "#F8FAFB", border: "1px solid #E2E8F0", borderRadius: 10, padding: "1.25rem" }}>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.7, margin: 0 }}>
                Nacházíme se na adrese <strong>Albrechtická 414/1, Most</strong>. Nejbližší zastávka MHD je v docházkové vzdálenosti. Parkování v okolí je k dispozici.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem", background: "#F8FAFB", borderTop: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <div style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0D1423", marginBottom: "0.25rem" }}>Nevíte, jak výcvik probíhá?</div>
            <p style={{ color: "#94A3B8", fontSize: "0.875rem", margin: 0 }}>Průvodce výcvikem krok za krokem.</p>
          </div>
          <Link href="/jak-zacit" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#1A5FBF", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: 8, fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", whiteSpace: "nowrap" }}>
            Jak začít →
          </Link>
        </div>
      </section>
    </>
  );
}
