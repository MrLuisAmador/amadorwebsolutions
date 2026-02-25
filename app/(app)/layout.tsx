import type { Metadata } from "next";
import { Geist_Mono, Lato, Roboto_Slab } from "next/font/google";
import "../../app/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import {
  EMAIL,
  GOOGLE_BUSINESS_PROFILE_URL,
  PHONE,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SOCIAL_LINKS,
} from "@/lib/constants";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_TITLE,
  url: "https://www.amadorwebsolutions.com",
  description: SITE_DESCRIPTION,
  email: EMAIL,
  telephone: PHONE,
  sameAs: [
    ...SOCIAL_LINKS.map((link) => link.href),
    GOOGLE_BUSINESS_PROFILE_URL,
  ],
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amadorwebsolutions.com"),
  title: "Amador Web Solutions",
  description:
    "Your website should be your best sales rep. Strategy-driven web development that converts visitors into leads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-NVSC9687" />
      <body
        className={`${lato.variable} ${geistMono.variable} ${robotoSlab.variable} antialiased font-sans`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
