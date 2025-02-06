import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Contact',
  /* 
  50-60 caractères sinon tronqué
  pertinent
  cohérent avec le contenu de la page
  doit contenir des mots clés de la page
  */
  description: 'Je suis une description',
  /* 
  150-160 caractères
  résumer l'essentiel de la page et inciter l'utilisateur à cliquer dessus
  */
  keywords: 'mot1, mot2, mot3',
  /*
  limiter 3 à 5 mots clé spécifiques
  ciblés
  pertinents pour le contenu de la page
  */

//Ajouter des solutions SEO
/*  openGraph: {
  title: 'Titre pour openGraph',
  description: 'Description de openGraph',
  images: ['/path/to/image.jpg']
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Titre pour twitter',
  description: 'Description de twitter',
  images: ['/path/to/image.jpg']
 }, */
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
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
