"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CATS = [
  { code: "AM",  name: "Moped",                minAge: 15, img: "/images/moto-park.jpg",    desc: "do 45 km/h" },
  { code: "A1",  name: "Malý motocykl",         minAge: 16, img: "/images/moto-track.jpg",   desc: "do 125 cm³" },
  { code: "A2",  name: "Střední motocykl",      minAge: 18, img: "/images/moto-action.jpg",  desc: "do 35 kW" },
  { code: "A",   name: "Motocykl",              minAge: 24, img: "/images/moto-road.jpg",    desc: "bez omezení" },
  { code: "B",   name: "Osobní automobil",      minAge: 18, img: "/images/car-top.jpg",      desc: "nejoblíbenější" },
  { code: "B+E", name: "Automobil s přívěsem", minAge: 18, img: "/images/car-instructor.jpg", desc: "vyžaduje B" },
];

const STEPS = ["Kategorie", "Vaše údaje", "Potvrzení"];

type FormData = {
  categories: string[];
  name: string;
  phone: string;
  email: string;
  note: string;
  consent: boolean;
};

function ProgressBar({ step }: { step: number }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, maxWidth: 480, margin: "0 auto" }}>
        {STEPS.map((label, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "none" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: i < step ? "#1A5FBF" : i === step ? "#1A5FBF" : "#E2E8F0",
                color: i <= step ? "#fff" : "#94A3B8",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 800, fontSize: "0.875rem",
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                transition: "background 0.3s",
              }}>
                {i < step
                  ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                  : i + 1}
              </div>
              <div style={{ fontSize: "0.72rem", fontWeight: 600, color: i <= step ? "#1A5FBF" : "#94A3B8", marginTop: "0.375rem", whiteSpace: "nowrap" }}>{label}</div>
            </div>
            {i < STEPS.length - 1 && (
              <div style={{ flex: 1, height: 2, background: i < step ? "#1A5FBF" : "#E2E8F0", margin: "0 0.5rem", marginBottom: "1.25rem", transition: "background 0.3s" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function FloatInput({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div style={{ position: "relative", marginBottom: "1.25rem" }}>
      <label style={{
        position: "absolute", left: 14, top: active ? 8 : 18,
        fontSize: active ? "0.7rem" : "0.95rem",
        color: focused ? "#1A5FBF" : "#94A3B8",
        fontWeight: active ? 600 : 400,
        transition: "all 0.18s ease",
        pointerEvents: "none", zIndex: 1,
        letterSpacing: active ? "0.04em" : 0,
        textTransform: active ? "uppercase" : "none",
      }}>
        {label}{required && " *"}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%", paddingTop: active ? "1.5rem" : "1rem", paddingBottom: "0.625rem",
          paddingLeft: 14, paddingRight: 14,
          border: `1.5px solid ${focused ? "#1A5FBF" : "#E2E8F0"}`,
          borderRadius: 10, background: "#fff",
          fontSize: "0.95rem", color: "#0D1423",
          outline: "none",
          transition: "border-color 0.18s",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

function FloatTextarea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div style={{ position: "relative", marginBottom: "1.25rem" }}>
      <label style={{
        position: "absolute", left: 14, top: active ? 8 : 16,
        fontSize: active ? "0.7rem" : "0.95rem",
        color: focused ? "#1A5FBF" : "#94A3B8",
        fontWeight: active ? 600 : 400,
        transition: "all 0.18s ease",
        pointerEvents: "none", zIndex: 1,
        letterSpacing: active ? "0.04em" : 0,
        textTransform: active ? "uppercase" : "none",
      }}>
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={4}
        style={{
          width: "100%", paddingTop: active ? "1.75rem" : "1rem", paddingBottom: "0.75rem",
          paddingLeft: 14, paddingRight: 14,
          border: `1.5px solid ${focused ? "#1A5FBF" : "#E2E8F0"}`,
          borderRadius: 10, background: "#fff",
          fontSize: "0.95rem", color: "#0D1423",
          outline: "none", resize: "none",
          transition: "border-color 0.18s",
          boxSizing: "border-box",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      />
    </div>
  );
}

function SuccessScreen() {
  return (
    <div style={{ textAlign: "center", padding: "3rem 1.5rem" }}>
      {/* Animated check */}
      <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#F0FDF4", border: "2px solid #BBF7D0", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      </div>
      <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#0D1423", marginBottom: "0.75rem" }}>
        Přihláška přijata! 🎉
      </h2>
      <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.7, maxWidth: 400, margin: "0 auto 2rem" }}>
        Děkujeme za zájem. Brzy se vám ozveme a domluvíme vstupní schůzku. Těšíme se na vás!
      </p>
      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/" style={{ background: "#1A5FBF", color: "#fff", padding: "0.875rem 1.75rem", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>Zpět na hlavní stránku</Link>
        <Link href="/jak-zacit" style={{ border: "1.5px solid #1A5FBF", color: "#1A5FBF", padding: "0.875rem 1.75rem", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>Jak výcvik probíhá →</Link>
      </div>
    </div>
  );
}

export default function Prihlaska() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({ categories: [], name: "", phone: "", email: "", note: "", consent: false });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const toggleCat = (code: string) => {
    setForm((f) => ({
      ...f,
      categories: f.categories.includes(code) ? f.categories.filter((c) => c !== code) : [...f.categories, code],
    }));
  };

  const validate1 = () => {
    if (form.categories.length === 0) { setErrors({ categories: "Vyberte alespoň jednu kategorii." }); return false; }
    return true;
  };

  const validate2 = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim())  e.name  = "Vyplňte jméno a příjmení.";
    if (!form.phone.trim()) e.phone = "Vyplňte telefonní číslo.";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Vyplňte platný e-mail.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (step === 0 && !validate1()) return;
    if (step === 1 && !validate2()) return;
    setErrors({});
    setStep((s) => s + 1);
  };

  const submit = () => {
    if (!form.consent) { setErrors({ consent: "Potvrďte souhlas se zpracováním údajů." }); return; }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Header */}
      <div style={{ paddingTop: 64, background: "linear-gradient(135deg, #1A5FBF 0%, #1240A0 100%)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "4rem 1.5rem 3rem" }}>
          <Link href="/" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", marginBottom: "1rem", display: "inline-block" }}>← Zpět</Link>
          <h1 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 3rem)", color: "#fff", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
            Online přihláška
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: 1.65 }}>
            Vyplňte přihlášku a my vás budeme kontaktovat do 24 hodin pro potvrzení termínu.
          </p>
        </div>
      </div>

      {/* Form card */}
      <div style={{ background: "#F0F4FB", minHeight: "60vh", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", background: "#fff", borderRadius: 16, boxShadow: "0 8px 40px rgba(0,0,0,0.1)", padding: "2.5rem" }}>
          {submitted ? <SuccessScreen /> : (
            <>
              <ProgressBar step={step} />

              {/* ── STEP 0: Category ── */}
              {step === 0 && (
                <div>
                  <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#0D1423", marginBottom: "0.375rem" }}>O jaký kurz máte zájem?</h2>
                  <p style={{ color: "#94A3B8", fontSize: "0.875rem", marginBottom: "1.75rem" }}>Vyberte jednu nebo více kategorií.</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem", marginBottom: errors.categories ? "0.5rem" : "1.75rem" }}>
                    {CATS.map((cat) => {
                      const selected = form.categories.includes(cat.code);
                      return (
                        <button
                          key={cat.code}
                          onClick={() => toggleCat(cat.code)}
                          style={{
                            border: `2px solid ${selected ? "#1A5FBF" : "#E2E8F0"}`,
                            borderRadius: 12, overflow: "hidden",
                            background: "transparent", cursor: "pointer", textAlign: "left",
                            position: "relative", padding: 0,
                            boxShadow: selected ? "0 0 0 3px rgba(26,95,191,0.15)" : "none",
                            transition: "border-color 0.18s, box-shadow 0.18s",
                          }}
                        >
                          <div style={{ position: "relative", height: 80, overflow: "hidden" }}>
                            <Image src={cat.img} alt={cat.name} fill style={{ objectFit: "cover" }} sizes="200px" />
                            <div style={{ position: "absolute", inset: 0, background: selected ? "rgba(26,95,191,0.3)" : "rgba(0,0,0,0.2)", transition: "background 0.18s" }} />
                            {selected && (
                              <div style={{ position: "absolute", top: 8, right: 8, width: 20, height: 20, borderRadius: "50%", background: "#1A5FBF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                              </div>
                            )}
                          </div>
                          <div style={{ padding: "0.625rem 0.75rem" }}>
                            <div style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.1rem", color: selected ? "#1A5FBF" : "#0D1423" }}>{cat.code}</div>
                            <div style={{ fontSize: "0.72rem", color: "#94A3B8" }}>{cat.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {errors.categories && <p style={{ color: "#DC2626", fontSize: "0.8rem", marginBottom: "1rem" }}>{errors.categories}</p>}
                </div>
              )}

              {/* ── STEP 1: Personal info ── */}
              {step === 1 && (
                <div>
                  <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#0D1423", marginBottom: "0.375rem" }}>Vaše kontaktní údaje</h2>
                  <p style={{ color: "#94A3B8", fontSize: "0.875rem", marginBottom: "1.75rem" }}>Ozveme se vám do 24 hodin.</p>

                  <FloatInput label="Jméno a příjmení" value={form.name} onChange={(v) => setForm((f) => ({ ...f, name: v }))} required />
                  {errors.name && <p style={{ color: "#DC2626", fontSize: "0.8rem", marginTop: "-0.875rem", marginBottom: "0.75rem" }}>{errors.name}</p>}

                  <FloatInput label="Telefonní číslo" type="tel" value={form.phone} onChange={(v) => setForm((f) => ({ ...f, phone: v }))} required />
                  {errors.phone && <p style={{ color: "#DC2626", fontSize: "0.8rem", marginTop: "-0.875rem", marginBottom: "0.75rem" }}>{errors.phone}</p>}

                  <FloatInput label="E-mailová adresa" type="email" value={form.email} onChange={(v) => setForm((f) => ({ ...f, email: v }))} required />
                  {errors.email && <p style={{ color: "#DC2626", fontSize: "0.8rem", marginTop: "-0.875rem", marginBottom: "0.75rem" }}>{errors.email}</p>}

                  {/* Selected categories recap */}
                  <div style={{ background: "#F0F4FB", borderRadius: 10, padding: "0.875rem 1rem", display: "flex", alignItems: "center", gap: "0.625rem", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.8rem", color: "#64748B" }}>Vybrané kategorie:</span>
                    {form.categories.map((c) => (
                      <span key={c} style={{ background: "#EBF2FE", color: "#1A5FBF", fontWeight: 700, fontSize: "0.8rem", padding: "0.2rem 0.625rem", borderRadius: 100 }}>{c}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* ── STEP 2: Review & submit ── */}
              {step === 2 && (
                <div>
                  <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#0D1423", marginBottom: "0.375rem" }}>Shrnutí přihlášky</h2>
                  <p style={{ color: "#94A3B8", fontSize: "0.875rem", marginBottom: "1.75rem" }}>Zkontrolujte údaje a odešlete přihlášku.</p>

                  {/* Summary card */}
                  <div style={{ background: "#F8FAFB", border: "1px solid #E2E8F0", borderRadius: 12, padding: "1.25rem", marginBottom: "1.25rem" }}>
                    {[
                      { label: "Jméno", value: form.name },
                      { label: "Telefon", value: form.phone },
                      { label: "E-mail", value: form.email },
                      { label: "Kategorie", value: form.categories.join(", ") },
                    ].map((row) => (
                      <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid #F1F5F9" }}>
                        <span style={{ fontSize: "0.8rem", color: "#94A3B8", fontWeight: 600 }}>{row.label}</span>
                        <span style={{ fontSize: "0.875rem", color: "#0D1423", fontWeight: 600 }}>{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <FloatTextarea label="Poznámka (volitelné)" value={form.note} onChange={(v) => setForm((f) => ({ ...f, note: v }))} />

                  <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer", marginBottom: "1.5rem" }}>
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                      style={{ marginTop: 3, accentColor: "#1A5FBF", width: 16, height: 16, flexShrink: 0 }}
                    />
                    <span style={{ fontSize: "0.825rem", color: "#475569", lineHeight: 1.6 }}>
                      Souhlasím se zpracováním osobních údajů pro účely zpracování přihlášky. Vaše údaje nebudou sdíleny s třetími stranami.
                    </span>
                  </label>
                  {errors.consent && <p style={{ color: "#DC2626", fontSize: "0.8rem", marginTop: "-1rem", marginBottom: "1rem" }}>{errors.consent}</p>}
                </div>
              )}

              {/* Navigation buttons */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
                {step > 0
                  ? <button onClick={() => setStep((s) => s - 1)} style={{ background: "none", border: "1.5px solid #E2E8F0", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, fontSize: "0.9rem", color: "#475569", cursor: "pointer" }}>← Zpět</button>
                  : <div />
                }
                {step < 2
                  ? <button onClick={next} style={{ background: "#1A5FBF", border: "none", borderRadius: 8, padding: "0.875rem 2rem", fontWeight: 800, fontSize: "0.95rem", color: "#fff", cursor: "pointer", fontFamily: "var(--font-jakarta), system-ui, sans-serif" }}>
                      Pokračovat →
                    </button>
                  : <button onClick={submit} style={{ background: "#16A34A", border: "none", borderRadius: 8, padding: "0.875rem 2rem", fontWeight: 800, fontSize: "0.95rem", color: "#fff", cursor: "pointer", fontFamily: "var(--font-jakarta), system-ui, sans-serif" }}>
                      Odeslat přihlášku ✓
                    </button>
                }
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
