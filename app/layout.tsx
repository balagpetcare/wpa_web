import type { Metadata } from "next";
import { Inter, Hind_Siliguri, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-bengali",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-bengali-fallback",
});

export const metadata: Metadata = {
  title: "World Pet Association | WPA",
  description:
    "WPA unites veterinary clinics, NGOs, local chapters, volunteers, and donors under one transparent, global platform for animal welfare.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "World Pet Association | WPA",
    description:
      "A global animal welfare network connecting pet owners, veterinarians, clinics, shelters, NGOs, volunteers, and donors.",
    url: "https://wpa.org",
    siteName: "World Pet Association",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${hindSiliguri.variable} ${notoSansBengali.variable}`}>
        {children}
      </body>
    </html>
  );
}
