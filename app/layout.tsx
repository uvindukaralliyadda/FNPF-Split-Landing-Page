import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

const title = "Fiji National Provident Fund | New & Existing Members";
const description =
  "New to FNPF or already a member? Choose your path to registration guides, benefits, withdrawals, statements and myFNPF services.";

export const metadata: Metadata = {
  title,
  description,
  // Favicons are picked up automatically from app/favicon.ico, app/icon.png and app/apple-icon.png
  openGraph: {
    title,
    description,
    siteName: "Fiji National Provident Fund",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#172A45",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
