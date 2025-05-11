import type { Metadata } from "next";
import { Jost, PT_Serif } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Experience from "./Experience";

const jost = Jost({
  variable: "--font-jost",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
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
        <Portfolio />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
