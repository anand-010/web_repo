import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import WhatsAppButton from "@/components/WhatsAppButton";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Hom Controls - Home Automation",
  description: "Experience of a decade in the home automation industry we can provide reliable and gorgeous home automation solutions.",
  openGraph: {
    title: "Hom Controls - Home Automation",
    description: "Experience of a decade in the home automation industry we can provide reliable and gorgeous home automation solutions.",
    url: "https://unifylabs.in/",
    type: "website",
    images: [{ url: "https://unifylabs.in/assets/img/meta.gif" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hom Controls - Home Automation",
    description: "Experience of a decade in the home automation industry we can provide reliable and gorgeous home automation solutions.",
    images: ["https://unifylabs.in/assets/img/meta.gif"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-67LHV7B0BG"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-67LHV7B0BG');
          `}
        </Script>
      </head>
      <body className={outfit.className}>
        <Navbar />
        <ScrollAnimation />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
