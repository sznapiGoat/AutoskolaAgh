"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CONTACT } from "./lib/data";
import ReviewMarquee from "./components/ui/ReviewMarquee";

/* ── Animated counter ──────────────────────────────────────── */
function AnimatedStat({ end, label, suffix = "", decimals = 0 }: { end: number; label: string; suffix?: string; decimals?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      const t0 = performance.now();
      const dur = 1600;
      const tick = (t: number) => {
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const current = parseFloat((eased * end).toFixed(decimals));
        setVal(current);
        if (p < 1) requestAnimationFrame(tick);
        else setVal(end);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, decimals]);

  return (
    <div ref={ref} style={{ animation: "fade-up 0.6s ease 1s both" }}>
      <div style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "2.5rem", color: "#fff", letterSpacing: "-0.025em", lineHeight: 1 }}>
        {decimals > 0 ? val.toFixed(decimals) : val}{suffix}
      </div>
      <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginTop: "0.375rem", letterSpacing: "0.02em" }}>{label}</div>
    </div>
  );
}

/* ── Reveal-on-scroll card wrapper ─────────────────────────── */
function RevealCard({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ ...style, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

const GATEWAY = [
  { href: "/kurzy",     title: "Kurzy a kategorie",     desc: "AM, A1, A2, A, B, B+E – vše o skupinách a požadavcích.",   img: "/images/moto-action.jpg" },
  { href: "/jak-zacit", title: "Jak začít krok za krokem", desc: "Detailní průvodce od prvního telefonátu po převzetí průkazu.", img: "/images/car-instructor.jpg" },
  { href: "/cenik",     title: "Ceník výcviku",          desc: "Přehled cen, možnosti splátek a co je zahrnuto.",           img: "/images/moto-track.jpg" },
  { href: "/kontakt",   title: "Kde nás najdete",        desc: "Adresa, telefon, e-mail a mapa – domluvte schůzku dnes.",   img: "/images/moto-street.jpg" },
];

const HEADLINE_LINES = [
  { text: "Vaše cesta k",      delay: 180 },
  { text: "řidičskému",        delay: 310 },
  { text: "průkazu začíná",    delay: 430 },
  { text: "tady.",             delay: 540, amber: true },
];

export default function Home() {
  return (
    <>
      {/* ── HERO — full-bleed ──────────────────────────────── */}
      <section style={{ position: "relative", height: "100svh", minHeight: 640, display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Background photo */}
        <Image src="/images/car-top.jpg" alt="Výcvikové vozidlo Autoškoly AGH" fill style={{ objectFit: "cover", objectPosition: "55% 50%" }} priority />

        {/* Dark gradient left→right */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(108deg, rgba(11,28,64,0.97) 0%, rgba(11,28,64,0.88) 42%, rgba(11,28,64,0.52) 65%, rgba(11,28,64,0.08) 100%)" }} />

        {/* Bottom fade for stats */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "38%", background: "linear-gradient(to top, rgba(11,28,64,0.9) 0%, transparent 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", width: "100%" }}>
          {/* Headline — each line wipes up through overflow:hidden mask */}
          <h1 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2.75rem, 6vw, 5.5rem)", color: "#fff", lineHeight: 1.06, letterSpacing: "-0.035em", maxWidth: 740, marginBottom: "1.75rem" }}>
            {HEADLINE_LINES.map((l, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <span style={{ display: "block", animation: `word-reveal 0.75s cubic-bezier(0.16,1,0.3,1) ${l.delay}ms both` }}>
                  {l.amber ? <span style={{ color: "#F59E0B" }}>{l.text}</span> : l.text}
                </span>
              </div>
            ))}
          </h1>

          {/* Sub */}
          <p style={{ color: "rgba(255,255,255,0.68)", fontSize: "1.1rem", lineHeight: 1.72, maxWidth: 500, marginBottom: "2.5rem", animation: "fade-up 0.6s ease 720ms both" }}>
            Autoškola AGH v Mostě – výcvik skupin AM, A1, A2, A, B a&nbsp;B+E. Individuální přístup, malé skupiny, splátky bez příplatku.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", animation: "fade-up 0.6s ease 840ms both" }}>
            <a href={`tel:${CONTACT.phoneRaw}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#F59E0B", color: "#0D1423", padding: "1rem 1.875rem", borderRadius: 8, fontWeight: 800, fontSize: "1.05rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(245,158,11,0.4)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
              Zavolat
            </a>
            <Link href="/prihlaska" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1.5px solid rgba(255,255,255,0.35)", color: "#fff", padding: "1rem 1.875rem", borderRadius: 8, fontWeight: 700, fontSize: "1.05rem", textDecoration: "none" }}>
              Přihlásit se →
            </Link>
          </div>

          {/* Animated stats */}
          <div style={{ display: "flex", gap: "3.5rem", marginTop: "5rem", paddingTop: "1.75rem", borderTop: "1px solid rgba(255,255,255,0.12)", flexWrap: "wrap" }}>
            <AnimatedStat end={28}  label="Recenzí na Google" suffix="" />
            <AnimatedStat end={4.2} label="Hodnocení"         suffix=" / 5" decimals={1} />
            <AnimatedStat end={17}  label="Let zkušeností"    suffix="+" />
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: "2rem", right: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.35)", animation: "fade-up 0.5s ease 1.4s both" }}>
          <span style={{ fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)" }} />
        </div>
      </section>

      {/* ── PHOTO STRIP ──────────────────────────────────────── */}
      <section style={{ background: "#F8FAFB", padding: "1rem 0", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "0.75rem", padding: "0 1.5rem" }}>
          {["/images/moto-action.jpg","/images/car-instructor.jpg","/images/moto-track.jpg","/images/moto-road.jpg","/images/car-instructor-2.jpg","/images/moto-street.jpg"].map((src, i) => (
            <div key={i} style={{ position: "relative", flexShrink: 0, width: 200, height: 120, borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
              <Image src={src} alt="Výcvik autoškoly AGH" fill style={{ objectFit: "cover" }} sizes="200px" />
            </div>
          ))}
        </div>
      </section>

      {/* ── GATEWAY CARDS ─────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealCard style={{ marginBottom: "2.5rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A5FBF" }}>Vše o autoškole</span>
            <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.025em", color: "#0D1423", marginTop: "0.5rem" }}>Co u nás najdete</h2>
          </RevealCard>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {GATEWAY.map((g, i) => (
              <RevealCard key={g.href} delay={i * 80}>
                <Link href={g.href} style={{ textDecoration: "none", display: "block", border: "1px solid #E2E8F0", borderRadius: 12, overflow: "hidden", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "box-shadow 0.22s, transform 0.22s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 10px 32px rgba(26,95,191,0.14)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
                    <Image src={g.img} alt={g.title} fill style={{ objectFit: "cover", transition: "transform 0.4s ease" }} sizes="300px"
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, rgba(13,20,35,0.55) 100%)" }} />
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", color: "#1A5FBF", textTransform: "uppercase", marginBottom: "0.375rem" }}>{g.title}</div>
                    <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.6, margin: "0 0 1rem" }}>{g.desc}</p>
                    <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1A5FBF" }}>Zjistit více →</div>
                  </div>
                </Link>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── VEHICLE HIGHLIGHT ─────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "#F0F4FB" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="grid-cols-1 md:grid-cols-2">
          <RevealCard style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            {["/images/moto-action.jpg","/images/car-instructor.jpg","/images/moto-road.jpg","/images/car-top.jpg"].map((src, i) => (
              <div key={i} style={{ position: "relative", borderRadius: 10, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
                <Image src={src} alt="Výcvik AGH" fill style={{ objectFit: "cover" }} sizes="200px" />
              </div>
            ))}
          </RevealCard>
          <RevealCard delay={120}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A5FBF", display: "block", marginBottom: "0.75rem" }}>Naše vozidla</span>
            <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.025em", color: "#0D1423", marginBottom: "1rem", lineHeight: 1.2 }}>Moderní výcviková vozidla</h2>
            <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.75, marginBottom: "1rem" }}>
              Pro výcvik kategorie B používáme <strong>Škodu Fabia</strong> s výraznými autoškola označeními. Pro motocyklisty máme připraven <strong>modrý motocykl Honda CB</strong> pro kategorie A1 až A.
            </p>
            <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>Všechna vozidla jsou pravidelně servisována a pojištěna. Výcvik probíhá na cvičišti i v reálném silničním provozu.</p>
            <Link href="/kurzy" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#F59E0B", color: "#0D1423", padding: "0.875rem 1.75rem", borderRadius: 8, fontWeight: 800, fontSize: "0.95rem", textDecoration: "none", boxShadow: "0 4px 16px rgba(245,158,11,0.35)" }}>
              Zobrazit kurzy →
            </Link>
          </RevealCard>
        </div>
      </section>

      {/* ── REVIEWS ────────────────────────────────────────────── */}
      <ReviewMarquee />

      {/* ── PŘIHLÁŠKA CTA ─────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="grid-cols-1 md:grid-cols-2">
          <RevealCard>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A5FBF", display: "block", marginBottom: "0.5rem" }}>Bez čekání</span>
            <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.025em", color: "#0D1423", marginBottom: "1rem" }}>
              Přihlaste se online<br />za 2 minuty
            </h2>
            <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Vyplňte krátkou přihlášku a my se vám ozveme do 24 hodin. Žádné papíry, žádné čekání.
            </p>
            <Link href="/prihlaska" style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem", background: "#F59E0B", color: "#0D1423", padding: "1rem 2rem", borderRadius: 10, fontWeight: 800, fontSize: "1.05rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(245,158,11,0.35)" }}>
              Přihlásit se online
            </Link>
          </RevealCard>
          <RevealCard delay={100} style={{ background: "#F8FAFB", border: "1px solid #E2E8F0", borderRadius: 16, padding: "2rem", pointerEvents: "none" }}>
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
          </RevealCard>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "#0D1B3E", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <RevealCard>
            <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "#fff", letterSpacing: "-0.025em", marginBottom: "1rem" }}>Připraveni začít?</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Zavolejte nebo napište. Zodpovíme vše a domluvíme první schůzku.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`tel:${CONTACT.phoneRaw}`} style={{ background: "#F59E0B", color: "#0D1423", padding: "1rem 2rem", borderRadius: 8, fontWeight: 800, fontSize: "1rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(245,158,11,0.3)" }}>{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`} style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", padding: "1rem 2rem", borderRadius: 8, fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}>{CONTACT.email}</a>
            </div>
          </RevealCard>
        </div>
      </section>
    </>
  );
}
