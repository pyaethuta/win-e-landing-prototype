import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./styles-original.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Win Everest Construction Company Limited",
  description: "Win Everest Construction Company Limited is a Myanmar construction company delivering building construction, civil engineering, infrastructure, project management, equipment rental, and trading services.",
};

export const viewport: Viewport = {
  themeColor: "#07417d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main className="page-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
