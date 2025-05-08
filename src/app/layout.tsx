import type { Metadata } from "next";
import { Jost, PT_Serif } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./About";

const jost = Jost({
  variable: "--font-jost",
  weight: ['400', '700'],
  subsets: ["latin"],
});

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-serif',
});

export const metadata: Metadata = {
  title: "Eliana barrionuevo | Diseñadora",
  description: "Desarrollado por Mateo Verdaguer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${ptSerif.variable} antialiased`}
      >
        <NavBar />
        {children}
        <About />
        <Footer />
      </body>
    </html>
  );
}
