import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nextjs Blog Website with Sanity Studio - by @HassanRJ",
  description: "A blog website built with Next.js and Sanity Studio. This project is a great starting point for building blogs.",
  authors: [{name: "HassanRJ"}],
  keywords: ["nextjs", "sanity", "blog", "website", "HassanRJ"],
  openGraph: {
    title: "Nextjs Blog Website with Sanity Studio - by @HassanRJ",
    description: "A blog website built with Next.js and Sanity Studio. This project is a great starting point for building blogs.",
    type: "website",
    locale: "pk_PK",
    url: "https://first-blog-website-with-sanity.vercel.app/",
    siteName: "Nextjs Blog Website with Sanity Studio",
    images: [
      {
        url: "https://nextjs-blog-sanity-studio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nextjs Blog Website with Sanity Studio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
