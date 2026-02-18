import type { Metadata } from "next";
import { Geist_Mono, Lato, Roboto_Slab } from "next/font/google";
import "../../app/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
      <body
        className={`${lato.variable} ${geistMono.variable} ${robotoSlab.variable} antialiased font-sans`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
