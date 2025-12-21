import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

const siteUrl = "https://www.mrluisamador.com/";
const siteTitle = "Luis Amador Portfolio";
const siteDescription =
  "Luis Amador portfolio to showcase his talents and skills.";

export const metadata: Metadata = {
  title: `Home | ${siteTitle}`,
  description: siteDescription,
  keywords: ["Next.js", "React", "JavaScript"],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    images: ["/images/mugshot.jpg"],
    url: siteUrl,
    siteName: siteTitle,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>
        <Button>Click me</Button>
      </h1>
    </div>
  );
}
