import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Orbitron } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Layer One IT Consultants",
  description: "Solutions for the modern world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
