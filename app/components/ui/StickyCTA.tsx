"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CONTACT } from "../../lib/data";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="md:hidden"
      style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100,
        background: "#fff",
        borderTop: "1px solid #E2E8F0",
        padding: "0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom))",
        display: "flex", gap: "0.625rem",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.1)",
        transform: show ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <a
        href={`tel:${CONTACT.phoneRaw}`}
        style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
          background: "#1A5FBF", color: "#fff",
          padding: "0.875rem 0", borderRadius: 8,
          fontWeight: 800, fontSize: "0.95rem", textDecoration: "none",
          fontFamily: "var(--font-jakarta), system-ui, sans-serif",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
        Zavolat
      </a>
      <Link
        href="/prihlaska"
        style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
          border: "2px solid #1A5FBF", color: "#1A5FBF",
          padding: "0.875rem 0", borderRadius: 8,
          fontWeight: 800, fontSize: "0.95rem", textDecoration: "none",
          fontFamily: "var(--font-jakarta), system-ui, sans-serif",
        }}
      >
        Přihlásit se
      </Link>
    </div>
  );
}
