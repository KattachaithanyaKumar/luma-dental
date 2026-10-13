import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { AppointmentProvider } from "@/components/providers/AppointmentProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "dental practice",
    "dentist",
    "preventive dentistry",
    "restorative dentistry",
    "cosmetic dentistry",
    "dental implants",
    "teeth whitening",
    "orthodontics",
    "emergency dental care",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body
        className="flex min-h-full flex-col bg-paper"
        suppressHydrationWarning
      >
        <AppointmentProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppointmentProvider>
      </body>
    </html>
  );
}
