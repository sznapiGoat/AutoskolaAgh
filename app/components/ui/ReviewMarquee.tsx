"use client";

import { REVIEWS } from "../../lib/data";

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < n ? "#FBBF24" : "#E5E7EB"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof REVIEWS)[0] }) {
  return (
    <div style={{
      flexShrink: 0,
      width: 300,
      background: "#fff",
      border: "1px solid #E2E8F0",
      borderRadius: 14,
      padding: "1.25rem 1.5rem",
      marginRight: "1rem",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: `hsl(${review.name.charCodeAt(0) * 7 % 360}, 60%, 55%)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 800, fontSize: "0.875rem",
            fontFamily: "var(--font-jakarta), system-ui, sans-serif",
          }}>
            {review.name[0]}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#0D1423" }}>{review.name}</div>
            <div style={{ fontSize: "0.7rem", color: "#94A3B8" }}>{review.year}</div>
          </div>
        </div>
        <Stars n={review.stars} />
      </div>
      <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65, margin: 0 }}>
        &ldquo;{review.text}&rdquo;
      </p>
    </div>
  );
}

export default function ReviewMarquee() {
  const row1 = REVIEWS.slice(0, 6);
  const row2 = REVIEWS.slice(6);
  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section style={{ padding: "5rem 0", background: "#F8FAFB", borderTop: "1px solid #E2E8F0", overflow: "hidden" }}>
      {/* Header */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", marginBottom: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A5FBF", display: "block", marginBottom: "0.375rem" }}>Co říkají absolventi</span>
          <h2 style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.025em", color: "#0D1423", margin: 0 }}>
            Recenze z Google
          </h2>
        </div>
        {/* Rating badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, padding: "0.875rem 1.25rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <div style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "2.25rem", color: "#0D1423", lineHeight: 1 }}>4.2</div>
          <div>
            <Stars n={4} />
            <div style={{ fontSize: "0.75rem", color: "#94A3B8", marginTop: "0.375rem" }}>28 recenzí · Google</div>
          </div>
        </div>
      </div>

      {/* Row 1 — left */}
      <div style={{ overflow: "hidden", marginBottom: "0.875rem" }}>
        <div className="marquee-track-left" style={{ display: "flex", width: "max-content" }}>
          {doubled1.map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>
      </div>

      {/* Row 2 — right */}
      <div style={{ overflow: "hidden" }}>
        <div className="marquee-track-right" style={{ display: "flex", width: "max-content" }}>
          {doubled2.map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>
      </div>
    </section>
  );
}
