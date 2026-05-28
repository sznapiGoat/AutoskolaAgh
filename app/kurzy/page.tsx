import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, CONTACT } from "../lib/data";

export const metadata: Metadata = { title: "Kurzy a kategorie" };

const MOTO_PHOTOS = ["/images/moto-action.jpg", "/images/moto-track.jpg", "/images/moto-road.jpg", "/images/moto-park.jpg"];
const CAR_PHOTOS  = ["/images/car-top.jpg", "/images/car-instructor.jpg", "/images/car-instructor-2.jpg"];

const REQ: Record<string, { doc: string; health: string; notes?: string }> = {
  AM:  { doc: "Průkaz totožnosti", health: "Lékařský posudek od PL", notes: "Od 15 let" },
  A1:  { doc: "Průkaz totožnosti", health: "Lékařský posudek od PL", notes: "Od 16 let" },
  A2:  { doc: "Průkaz totožnosti", health: "Lékařský posudek od PL", notes: "Od 18 let" },
  A:   { doc: "Průkaz totožnosti", health: "Lékařský posudek od PL", notes: "Od 24 let, nebo od 20 let s minimálně 2 roky A2" },
  B:   { doc: "Průkaz totožnosti", health: "Lékařský posudek od PL", notes: "Od 18 let" },
  "B+E": { doc: "Platný průkaz skupiny B", health: "Lékařský posudek od PL", notes: "Podmínkou je platné oprávnění B" },
};

export default function Kurzy() {
  const moto = CATEGORIES.filter((c) => ["AM", "A1", "A2", "A"].includes(c.code));
  const auto = CATEGORIES.filter((c) => ["B", "B+E"].includes(c.code));

  return (
    <>
      {/* Header */}
      <div style={{ paddingTop: 64, background: "#F0F4FB", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem 3rem" }}>
          <Link href="/" style={{ fontSize: "0.85rem", color: "#94A3B8", textDecoration: "none", marginBottom: "1rem", display: "inline-block" }}>← Zpět</Link>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A5FBF", display: "block", marginBottom: "0.5rem" }}>Co vyučujeme</span>
          <h1 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#0D1423", marginBottom: "1rem" }}>Kurzy a kategorie</h1>
          <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 560 }}>Od malých mopedů přes motocykly až po osobní automobily. Nabízíme výcvik pro všechny běžné kategorie.</p>
        </div>
      </div>

      {/* ── MOTOCYKLY ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", marginBottom: "3rem" }} className="grid-cols-1 md:grid-cols-2">
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A5FBF", display: "block", marginBottom: "0.5rem" }}>Skupina A</span>
              <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.025em", color: "#0D1423", marginBottom: "1rem" }}>Motocykly</h2>
              <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.75 }}>
                Výcvik pro všechny motocyklové skupiny – od malých motocyklů pro začátečníky až po plný průkaz bez omezení. Výuka probíhá na bezpečném cvičišti i v reálném silničním provozu.
              </p>
            </div>
            {/* Photo grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {MOTO_PHOTOS.map((src, i) => (
                <div key={i} style={{ position: "relative", borderRadius: 10, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
                  <Image src={src} alt="Výcvik motocyklů AGH" fill style={{ objectFit: "cover" }} sizes="200px" />
                </div>
              ))}
            </div>
          </div>

          {/* Category cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
            {moto.map((cat) => (
              <div key={cat.code} style={{ border: "1px solid #E2E8F0", borderRadius: 12, padding: "1.5rem", background: "#fff" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#1A5FBF", letterSpacing: "-0.02em" }}>{cat.code}</span>
                  <span style={{ background: "#EBF2FE", color: "#1A5FBF", fontSize: "0.7rem", fontWeight: 700, padding: "0.25rem 0.625rem", borderRadius: 100 }}>od {cat.min_age} let</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0D1423", marginBottom: "0.5rem" }}>{cat.name}</div>
                <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.6, marginBottom: "1rem" }}>{cat.desc}</p>
                <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: "0.875rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.375rem" }}>Požadavky</div>
                  {Object.values(REQ[cat.code] || {}).map((v, i) => (
                    <div key={i} style={{ fontSize: "0.8rem", color: "#475569", marginBottom: "0.2rem" }}>· {v}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTOMOBILY ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#F8FAFB", borderTop: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", marginBottom: "3rem" }} className="grid-cols-1 md:grid-cols-2">
            {/* Photos */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {CAR_PHOTOS.map((src, i) => (
                <div key={i} style={{ position: "relative", borderRadius: 10, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
                  <Image src={src} alt="Výcvik automobilu AGH" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 500px" />
                </div>
              ))}
            </div>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A5FBF", display: "block", marginBottom: "0.5rem" }}>Skupina B</span>
              <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.025em", color: "#0D1423", marginBottom: "1rem" }}>Osobní automobil</h2>
              <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Výuka v moderní <strong>Škodě Fabii</strong> s výraznými autoškola označeními. Výcvik zahrnuje jízdu na cvičišti, v obci i mimo obec – vše, co potřebujete pro bezpečnou jízdu v reálném provozu.
              </p>
              <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                Součástí výcviku je také nácvik technické obsluhy vozidla – kontrola oleje, pneumatik, výměna kola.
              </p>

              {/* Car category cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {auto.map((cat) => (
                  <div key={cat.code} style={{ border: "1px solid #E2E8F0", borderRadius: 12, padding: "1.25rem", background: "#fff" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <span style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#1A5FBF" }}>{cat.code}</span>
                      <span style={{ background: "#EBF2FE", color: "#1A5FBF", fontSize: "0.7rem", fontWeight: 700, padding: "0.25rem 0.625rem", borderRadius: 100 }}>od {cat.min_age} let</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0D1423", marginBottom: "0.375rem" }}>{cat.name}</div>
                    <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.6 }}>{cat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 1.5rem", background: "#1A5FBF", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#fff", marginBottom: "0.75rem" }}>Máte otázky ke kurzům?</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1.75rem", lineHeight: 1.7 }}>Zavolejte – odpovíme na vše a domluvíme termín vstupní schůzky.</p>
          <a href={`tel:${CONTACT.phoneRaw}`} style={{ display: "inline-block", background: "#fff", color: "#1A5FBF", padding: "0.875rem 2rem", borderRadius: 8, fontWeight: 800, textDecoration: "none", fontSize: "1rem" }}>{CONTACT.phone}</a>
        </div>
      </section>
    </>
  );
}
