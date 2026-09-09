import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Sections/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Batres Web Design | Websites for Small Businesses",
  description:
    "Modern, responsive websites for small businesses. I help local businesses build a professional online presence with affordable web design and development.",
    openGraph: {
    title: "Batres Web Design | Websites for Small Businesses",
    description:
      "Modern, responsive websites designed to help small businesses build a stronger online presence.",
    url: "https://batreswebdesign.com",
    siteName: "Batres Web Design",
    images: [
      {
        url: "./assets/OpenGraphImg",
        width: 1200,
        height: 630,
        alt: "Batres Web Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
