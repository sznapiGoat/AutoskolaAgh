"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "./lib/data";
import ReviewMarquee from "./components/ui/ReviewMarquee";

const GATEWAY = [
  { href: "/kurzy",     icon: "📋", title: "Kurzy a kategorie",    desc: "AM, A1, A2, A, B, B+E – vše o skupinách výcviku a požadavcích.", img: "/images/moto-action.jpg" },
  { href: "/jak-zacit", icon: "🗺️", title: "Jak začít krok za krokem", desc: "Detailní průvodce od prvního telefonátu až po převzetí průkazu.", img: "/images/car-instructor.jpg" },
  { href: "/cenik",     icon: "💰", title: "Ceník výcviku",        desc: "Přehled cen, možnosti splátek a co je zahrnuto v ceně.",         img: "/images/moto-track.jpg" },
  { href: "/kontakt",   icon: "📍", title: "Kde nás najdete",      desc: "Adresa, telefon, e-mail a mapa – domluvte schůzku dnes.",        img: "/images/moto-street.jpg" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section style={{ paddingTop: 64, minHeight: "100svh", display: "flex", alignItems: "center", background: "#fff", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", width: "100%" }}
          className="grid-cols-1 md:grid-cols-2">
          {/* Text */}
          <div>
            <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#EBF2FE", borderRadius: 100, padding: "0.375rem 0.875rem" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1A5FBF", display: "inline-block" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.07em", color: "#1A5FBF", textTransform: "uppercase" }}>Most · od roku 2008</span>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", background: "#FEF9C3", borderRadius: 100, padding: "0.375rem 0.875rem" }}>
                <span style={{ fontSize: "0.9rem" }}>🥇</span>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#92400E", letterSpacing: "0.04em" }}>Zlatá firma 2024–2026</span>
              </div>
            </div>

            <h1 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#0D1423", marginBottom: "1.25rem" }}>
              Vaše cesta k&nbsp;řidičskému průkazu začíná&nbsp;tady.
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#475569", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 480 }}>
              Autoškola AGH v Mostě – výcvik skupin AM, A1, A2, A, B a B+E. Individuální přístup, malé skupiny, splátky bez příplatku.
            </p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href={`tel:${CONTACT.phoneRaw}`}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#1A5FBF", color: "#fff", padding: "0.875rem 1.75rem", borderRadius: 8, fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                Zavolat
              </a>
              <Link href="/jak-zacit"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1.5px solid #1A5FBF", color: "#1A5FBF", padding: "0.875rem 1.75rem", borderRadius: 8, fontWeight: 700, fontSize: "1rem", textDecoration: "none", background: "transparent" }}>
                Jak začít →
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #E2E8F0" }}>
              {[{ v: "2008", l: "Rok vzniku" }, { v: "4.2 ★", l: "28 recenzí Google" }, { v: "6", l: "Skupin výcviku" }].map((s) => (
                <div key={s.v}>
                  <div style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#0D1423", letterSpacing: "-0.03em" }}>{s.v}</div>
                  <div style={{ fontSize: "0.8rem", color: "#94A3B8", marginTop: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 24px 64px rgba(26,95,191,0.15)" }}>
            <Image src="/images/car-top.jpg" alt="Výcvikové vozidlo autoškoly AGH Most – modrá Škoda Fabia" fill style={{ objectFit: "cover" }} priority sizes="(max-width: 768px) 100vw, 50vw" />
            {/* Overlay badge */}
            <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderRadius: 8, padding: "0.625rem 1rem", display: "flex", alignItems: "center", gap: "0.625rem" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E" }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0D1423" }}>Výcvikové vozidlo — Škoda Fabia</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ─────────────────────────────────────── */}
      <section style={{ background: "#F8FAFB", padding: "1rem 0", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "0.75rem", padding: "0 1.5rem" }}>
          {["/images/moto-action.jpg", "/images/car-instructor.jpg", "/images/moto-track.jpg", "/images/moto-road.jpg", "/images/car-instructor-2.jpg", "/images/moto-street.jpg"].map((src, i) => (
            <div key={i} style={{ position: "relative", flexShrink: 0, width: 200, height: 120, borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
              <Image src={src} alt="Výcvik autoškoly AGH" fill style={{ objectFit: "cover" }} sizes="200px" />
            </div>
          ))}
        </div>
      </section>

      {/* ── GATEWAY CARDS ───────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A5FBF" }}>Vše o autoškole</span>
            <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.025em", color: "#0D1423", marginTop: "0.5rem" }}>Co u nás najdete</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {GATEWAY.map((g) => (
              <Link key={g.href} href={g.href} style={{ textDecoration: "none", display: "block", border: "1px solid #E2E8F0", borderRadius: 12, overflow: "hidden", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "box-shadow 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 28px rgba(26,95,191,0.12)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
                  <Image src={g.img} alt={g.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 300px" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(13,20,35,0.6) 100%)" }} />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", color: "#1A5FBF", textTransform: "uppercase", marginBottom: "0.375rem" }}>
                    {g.icon} {g.title}
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.6 }}>{g.desc}</p>
                  <div style={{ marginTop: "1rem", fontSize: "0.875rem", fontWeight: 700, color: "#1A5FBF" }}>Zjistit více →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── VEHICLE HIGHLIGHT ───────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "#F0F4FB" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="grid-cols-1 md:grid-cols-2">
          {/* Images */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            {["/images/moto-action.jpg", "/images/car-instructor.jpg", "/images/moto-road.jpg", "/images/car-top.jpg"].map((src, i) => (
              <div key={i} style={{ position: "relative", borderRadius: 10, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
                <Image src={src} alt="Výcvik AGH" fill style={{ objectFit: "cover" }} sizes="200px" />
              </div>
            ))}
          </div>
          {/* Text */}
          <div>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A5FBF", display: "block", marginBottom: "0.75rem" }}>Naše vozidla</span>
            <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.025em", color: "#0D1423", marginBottom: "1rem", lineHeight: 1.2 }}>
              Moderní výcviková vozidla
            </h2>
            <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.75, marginBottom: "1rem" }}>
              Pro výcvik kategorie B používáme <strong>Škodu Fabia</strong> s výraznými autoškola označeními – bezpečně a spolehlivě. Pro motocyklisty máme připraven <strong>modrý motocykl Honda CB</strong> vhodný pro kategorie A1 až A.
            </p>
            <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Všechna vozidla jsou pravidelně servisována a pojištěna. Výcvik probíhá na cvičišti i v reálném silničním provozu.
            </p>
            <Link href="/kurzy" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#1A5FBF", color: "#fff", padding: "0.875rem 1.75rem", borderRadius: 8, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
              Zobrazit kurzy →
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────── */}
      <ReviewMarquee />

      {/* ── PŘIHLÁŠKA CTA ────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="grid-cols-1 md:grid-cols-2">
          <div>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A5FBF", display: "block", marginBottom: "0.5rem" }}>Bez čekání</span>
            <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.025em", color: "#0D1423", marginBottom: "1rem" }}>
              Přihlaste se online<br />za 2 minuty
            </h2>
            <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Vyplňte krátkou přihlášku a my se vám ozveme do 24 hodin. Žádné papíry, žádné čekání na telefonu.
            </p>
            <Link href="/prihlaska" style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem", background: "#1A5FBF", color: "#fff", padding: "1rem 2rem", borderRadius: 10, fontWeight: 800, fontSize: "1.05rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(26,95,191,0.3)" }}>
              Vyplnit přihlášku →
            </Link>
          </div>
          {/* Mini form preview */}
          <div style={{ background: "#F8FAFB", border: "1px solid #E2E8F0", borderRadius: 16, padding: "2rem", pointerEvents: "none" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Přihláška — náhled</div>
            {["Jméno a příjmení", "Telefonní číslo", "E-mailová adresa"].map((l) => (
              <div key={l} style={{ border: "1.5px solid #E2E8F0", borderRadius: 8, padding: "0.875rem 1rem", marginBottom: "0.625rem", background: "#fff" }}>
                <div style={{ fontSize: "0.7rem", color: "#94A3B8", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{l}</div>
                <div style={{ height: 12, background: "#F1F5F9", borderRadius: 4, marginTop: "0.375rem", width: "60%" }} />
              </div>
            ))}
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.875rem" }}>
              {["B", "A2", "A"].map((c) => (
                <div key={c} style={{ background: "#EBF2FE", color: "#1A5FBF", fontWeight: 800, fontSize: "0.85rem", padding: "0.375rem 0.75rem", borderRadius: 100 }}>{c}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "#0D1423", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#fff", letterSpacing: "-0.025em", marginBottom: "1rem" }}>
            Připraveni začít?
          </h2>
          <p style={{ color: "#64748B", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            Zavolejte nebo napište e-mail. Zodpovíme vše, co potřebujete vědět, a domluvíme první schůzku.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${CONTACT.phoneRaw}`} style={{ background: "#1A5FBF", color: "#fff", padding: "1rem 2rem", borderRadius: 8, fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} style={{ border: "1px solid #1E293B", color: "#94A3B8", padding: "1rem 2rem", borderRadius: 8, fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}>{CONTACT.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}
