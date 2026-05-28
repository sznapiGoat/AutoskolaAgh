import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "../lib/data";

export const metadata: Metadata = { title: "Ceník výcviku" };

const PRICE_ITEMS = [
  { code: "AM",  name: "Moped",               note: "Výcvik skupiny AM – mopedy do 45 km/h" },
  { code: "A1",  name: "Malý motocykl",        note: "Motocykly do 125 cm³ a 11 kW" },
  { code: "A2",  name: "Střední motocykl",     note: "Motocykly do 35 kW" },
  { code: "A",   name: "Motocykl bez omezení", note: "Plné oprávnění pro všechny motocykly" },
  { code: "B",   name: "Osobní automobil",     note: "Výcvik ve Škodě Fabii, teorie + praxe" },
  { code: "B+E", name: "Automobil s přívěsem", note: "Rozšíření průkazu B o přívěs" },
];

const INCLUDED = [
  "Výuka teorie (pravidla, dopravní značky, první pomoc)",
  "Jízdní výcvik s instruktorem",
  "Přihlášení ke státním zkouškám",
  "Administrativní podpora a dokumentace",
  "Podpora při opravné zkoušce",
];

export default function Cenik() {
  return (
    <>
      {/* Header */}
      <div style={{ paddingTop: 64, background: "#F0F4FB", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem 3rem" }}>
          <Link href="/" style={{ fontSize: "0.85rem", color: "#94A3B8", textDecoration: "none", marginBottom: "1rem", display: "inline-block" }}>← Zpět</Link>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A5FBF", display: "block", marginBottom: "0.5rem" }}>Přehled cen</span>
          <h1 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#0D1423", marginBottom: "1rem" }}>Ceník výcviku</h1>
          <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 560 }}>Ceny jsou stanoveny individuálně v závislosti na skupině a vašich potřebách. Zavolejte nám pro aktuální nabídku.</p>
        </div>
      </div>

      {/* Price cards */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem", marginBottom: "3rem" }}>
            {PRICE_ITEMS.map((item) => (
              <div key={item.code} style={{ border: "1px solid #E2E8F0", borderRadius: 12, padding: "1.75rem", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#1A5FBF", letterSpacing: "-0.02em" }}>{item.code}</span>
                  <span style={{ background: "#EBF2FE", color: "#1A5FBF", fontSize: "0.7rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: 100, marginTop: "0.5rem" }}>Kategorie</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: "#0D1423", marginBottom: "0.375rem" }}>{item.name}</div>
                <p style={{ fontSize: "0.875rem", color: "#64748B", lineHeight: 1.6, marginBottom: "1.5rem" }}>{item.note}</p>
                <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: "1.25rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.375rem" }}>Cena výcviku</div>
                  <div style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#0D1423" }}>Na dotaz</div>
                  <a href={`tel:${CONTACT.phoneRaw}`} style={{ display: "inline-block", marginTop: "0.875rem", fontSize: "0.85rem", color: "#1A5FBF", fontWeight: 700, textDecoration: "none" }}>
                    Zavolat a zjistit cenu →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* What's included */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="grid-cols-1 md:grid-cols-2">
            <div>
              <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#0D1423", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>Co je zahrnuto v ceně</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {INCLUDED.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A5FBF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><path d="M20 6L9 17l-5-5"/></svg>
                    <span style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Splátky callout */}
              <div style={{ background: "#EBF2FE", border: "1px solid #BFDBFE", borderRadius: 12, padding: "1.75rem", marginBottom: "1.25rem" }}>
                <div style={{ fontWeight: 800, fontSize: "1rem", color: "#1A5FBF", marginBottom: "0.5rem" }}>💳 Splátky bez příplatku</div>
                <p style={{ fontSize: "0.9rem", color: "#1E40AF", lineHeight: 1.7, margin: 0 }}>
                  Cenu výcviku lze rozložit do splátek bez jakéhokoli navýšení. Podmínky domluvíme individuálně při vstupní schůzce – přizpůsobíme se vašim možnostem.
                </p>
              </div>

              {/* Contact CTA */}
              <div style={{ background: "#0D1423", borderRadius: 12, padding: "1.75rem" }}>
                <div style={{ fontWeight: 800, fontSize: "1rem", color: "#fff", marginBottom: "0.5rem" }}>Zavolajte pro aktuální ceny</div>
                <p style={{ fontSize: "0.875rem", color: "#64748B", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  Rádi zodpovíme vše telefonicky nebo na vstupní schůzce. Žádné skryté poplatky.
                </p>
                <a href={`tel:${CONTACT.phoneRaw}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#1A5FBF", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
                  📞 {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra info */}
      <section style={{ padding: "4rem 1.5rem", background: "#F8FAFB", borderTop: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
          {[
            { icon: "📋", title: "Opravná zkouška", desc: "V případě neúspěchu u zkoušky domluvíme opravný termín. Přezkoušení je možné." },
            { icon: "⏸️", title: "Přerušení výcviku", desc: "Z vážných důvodů lze výcvik přerušit a pokračovat v pozdějším termínu." },
            { icon: "🔄", title: "Kondiční jízdy", desc: "Po získání průkazu nabízíme kondiční jízdy pro zdokonalení dovedností." },
            { icon: "🏅", title: "Obnova průkazu", desc: "Pomáháme také s obnovením oprávnění po ztrátě bodů nebo zákazu řízení." },
          ].map((item) => (
            <div key={item.title} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 10, padding: "1.5rem" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{item.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0D1423", marginBottom: "0.375rem" }}>{item.title}</div>
              <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
