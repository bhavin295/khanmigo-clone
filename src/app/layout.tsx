import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";

// Keep variable names for existing styles: --font-sora and --font-dm
// (Fraunces for headings, Nunito for body)
const sora = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const dmSans = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: {
    default: "TutorAI",
    template: "%s | TutorAI",
  },
  description: "AI-powered tutoring for students, tools for teachers, visibility for parents",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#7C3AED",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${dmSans.variable} antialiased`} style={{ backgroundColor: "var(--bg-base)", color: "var(--text)" }}>
        <div className="page-enter">{children}</div>
      </body>
    </html>
  );
}
