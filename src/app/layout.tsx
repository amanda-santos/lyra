import type { Metadata } from "next";
import { Heebo, Kalam } from "next/font/google";

import { Header } from "./components/header";
import { Footer } from "./components/footer";

import "./globals.css";

const heebo = Heebo({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

const kalam = Kalam({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Amanda Santos",
  description: "Amanda Santos's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-surface-background">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${heebo.variable} ${kalam.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
