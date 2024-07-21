import type { Metadata } from "next";
import { Raleway, Comfortaa, Nunito, Playfair_Display,Roboto } from "next/font/google";
import "./globals.css";

const raleway =Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: "100"
})

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: "100"
})

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})

const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comfortaa',
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my first portfolio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable}, ${playfair_display.variable},${comfortaa.variable},${roboto.variable},${raleway.variable} scroll-smooth`}>
      <body >{children}</body>
    </html>
  );
}
