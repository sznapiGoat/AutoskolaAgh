import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { STEPS, FAQ, CONTACT } from "../lib/data";

export const metadata: Metadata = { title: "Jak začít s výcvikem" };

const STEP_COLORS = ["#EBF2FE", "#FEF3C7", "#F0FDF4", "#FFF7ED", "#F3E8FF", "#FEE2E2", "#E0F2FE"];
const STEP_ACCENTS = ["#1A5FBF", "#D97706", "#16A34A", "#EA580C", "#9333EA", "#DC2626", "#0284C7"];

export default function JakZacit() {
  return (
    <>
      {/* Header */}
      <div style={{ paddingTop: 64, background: "linear-gradient(135deg, #1A5FBF 0%, #1240A0 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 1.5rem 4rem" }}>
          <Link href="/" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", marginBottom: "1rem", display: "inline-block" }}>← Zpět</Link>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", display: "block", marginBottom: "0.5rem" }}>Průvodce výcvikem</span>
          <h1 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#fff", marginBottom: "1rem" }}>
            Jak začít krok za krokem
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 560 }}>
            Vše, co potřebujete vědět – od prvního telefonátu až po moment, kdy dostanete řidičský průkaz do ruky.
          </p>
          {/* Quick stats */}
          <div style={{ display: "flex", gap: "2.5rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
            {[{ v: "2–4", l: "měsíce průměrná délka" }, { v: "7", l: "jednoduchých kroků" }, { v: "0 Kč", l: "příplatek za splátky" }].map((s) => (
              <div key={s.v}>
                <div style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#fff" }}>{s.v}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STEPS ─────────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {STEPS.map((step, i) => (
              <div key={step.n} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "0 2rem" }}>
                {/* Left: number + line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: STEP_COLORS[i], border: `2px solid ${STEP_ACCENTS[i]}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                    fontWeight: 800, fontSize: "1.1rem", color: STEP_ACCENTS[i],
                    flexShrink: 0, zIndex: 1,
                  }}>
                    {step.n}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: 32, background: "#E2E8F0", margin: "4px 0" }} />
                  )}
                </div>

                {/* Right: content */}
                <div style={{ paddingBottom: i < STEPS.length - 1 ? "3rem" : 0 }}>
                  <div style={{ paddingTop: "0.75rem", marginBottom: "0.375rem" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: STEP_ACCENTS[i] }}>{step.subtitle}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#0D1423", marginBottom: "0.75rem", letterSpacing: "-0.015em" }}>
                    {step.title}
                  </h3>
                  <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1rem" }}>{step.desc}</p>

                  {/* Detail chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {step.detail.map((d) => (
                      <span key={d} style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", background: STEP_COLORS[i], color: STEP_ACCENTS[i], fontSize: "0.8rem", fontWeight: 600, padding: "0.375rem 0.75rem", borderRadius: 100 }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                        {d}
                      </span>
                    ))}
                  </div>

                  {/* Step-specific callouts */}
                  {step.n === 1 && (
                    <div style={{ marginTop: "1.25rem", background: "#F0F4FB", border: "1px solid #BFDBFE", borderRadius: 10, padding: "1.25rem", display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                      <a href={`tel:${CONTACT.phoneRaw}`} style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#1A5FBF", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem" }}>
                        <span style={{ fontSize: "1.25rem" }}>📞</span>{CONTACT.phone}
                      </a>
                      <a href={`mailto:${CONTACT.email}`} style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#1A5FBF", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem" }}>
                        <span style={{ fontSize: "1.25rem" }}>✉️</span>{CONTACT.email}
                      </a>
                    </div>
                  )}
                  {step.n === 7 && (
                    <div style={{ marginTop: "1.25rem", background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 10, padding: "1.25rem" }}>
                      <div style={{ fontWeight: 700, color: "#16A34A", marginBottom: "0.25rem", fontSize: "0.95rem" }}>🎉 Gratulujeme – jste řidič/ka!</div>
                      <p style={{ fontSize: "0.875rem", color: "#475569", margin: 0, lineHeight: 1.65 }}>
                        Výcvik je za vámi. Pokud budete chtít v budoucnu rozšířit průkaz nebo absolvovat kondiční jízdy, jsme tu pro vás znovu.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU NEED ─────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "#F8FAFB", borderTop: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="grid-cols-1 md:grid-cols-2">
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A5FBF", display: "block", marginBottom: "0.5rem" }}>Příprava</span>
              <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.025em", color: "#0D1423", marginBottom: "1.5rem" }}>Co budete potřebovat</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: "🪪", title: "Průkaz totožnosti", desc: "Občanský průkaz nebo cestovní pas." },
                  { icon: "🏥", title: "Lékařský posudek", desc: "Vydá váš praktický lékař (objednejte se na prohlídku). Stačí sdělit, že potřebujete posudek pro autoškolu." },
                  { icon: "📸", title: "Fotografie", desc: "2 fotografie průkazového formátu (stejné jako na OP)." },
                  { icon: "💳", title: "Záloha na výcvik", desc: "Zálohu platíte při podpisu smlouvy. Zbytek lze rozložit do splátek – bez příplatku." },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#fff", borderRadius: 10, border: "1px solid #E2E8F0" }}>
                    <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0D1423", marginBottom: "0.25rem" }}>{item.title}</div>
                      <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo + timeline */}
            <div>
              <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", aspectRatio: "4/3", marginBottom: "1.5rem", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
                <Image src="/images/moto-action.jpg" alt="Výcvik motocyklů" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 500px" />
              </div>
              <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 10, padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0D1423", marginBottom: "1rem" }}>Orientační časový plán</h3>
                {[
                  { phase: "Přihlášení + lékař", time: "1–2 týdny" },
                  { phase: "Teorie (24+ hodin)", time: "3–6 týdnů" },
                  { phase: "Jízdní výcvik (28+ jízd)", time: "6–10 týdnů" },
                  { phase: "Zkouška + průkaz", time: "2–3 týdny" },
                ].map((p, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.625rem 0", borderBottom: i < 3 ? "1px solid #F1F5F9" : "none" }}>
                    <span style={{ fontSize: "0.875rem", color: "#475569" }}>{p.phase}</span>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#1A5FBF", background: "#EBF2FE", padding: "0.2rem 0.625rem", borderRadius: 100 }}>{p.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff", borderTop: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A5FBF", display: "block", marginBottom: "0.5rem" }}>Časté dotazy</span>
          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.025em", color: "#0D1423", marginBottom: "2.5rem" }}>Co lidé nejčastěji řeší</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#E2E8F0", borderRadius: 12, overflow: "hidden" }}>
            {FAQ.map((item, i) => (
              <div key={i} style={{ background: "#fff", padding: "1.5rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: "#0D1423", marginBottom: "0.625rem", display: "flex", gap: "0.75rem" }}>
                  <span style={{ color: "#1A5FBF", flexShrink: 0 }}>Q</span>
                  {item.q}
                </div>
                <p style={{ margin: 0, color: "#475569", fontSize: "0.925rem", lineHeight: 1.7, paddingLeft: "1.5rem" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 1.5rem", background: "#F0F4FB", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0D1423", marginBottom: "0.75rem" }}>Máte ještě otázky?</h2>
          <p style={{ color: "#475569", lineHeight: 1.7, marginBottom: "2rem", fontSize: "1rem" }}>Zavolejte nám – rádi vše vysvětlíme a domluvíme termín vstupní schůzky bez jakýchkoliv závazků.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${CONTACT.phoneRaw}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#1A5FBF", color: "#fff", padding: "0.875rem 1.75rem", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
              📞 {CONTACT.phone}
            </a>
            <Link href="/kontakt" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1.5px solid #1A5FBF", color: "#1A5FBF", padding: "0.875rem 1.75rem", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
              Kontaktní stránka →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
