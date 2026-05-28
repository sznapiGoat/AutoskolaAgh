import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import StickyCTA from "./components/ui/StickyCTA";

const inter = Inter({ variable: "--font-inter", subsets: ["latin", "latin-ext"] });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: { default: "Autoškola AGH Most", template: "%s | Autoškola AGH Most" },
  description: "Autoškola AGH Most – výcvik skupin AM, A1, A2, A, B, B+E. Individuální přístup, malé skupiny, splátky bez příplatku. Alexandr Agh, Most od roku 2008.",
  keywords: ["autoškola", "Most", "řidičský průkaz", "výcvik B", "motocykly", "AGH", "Alexandr Agh"],
  openGraph: { siteName: "Autoškola AGH Most", locale: "cs_CZ" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${inter.variable} ${jakarta.variable} h-full antialiased`}>
      <body style={{ minHeight: "100%", display: "flex", flexDirection: "column", background: "#fff", color: "#0D1423" }}>
        <Navbar />
        <main style={{ flex: 1, paddingBottom: "env(safe-area-inset-bottom)" }}>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
