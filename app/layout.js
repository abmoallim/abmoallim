// app/layout.js
import { Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-hand", display: "swap", weight: ["500", "600", "700"] });

import Nav from "./components/nav/Nav";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Abdihamid Moallim",
  description: "Software engineer. Building web apps, internal tools, and AI-backed products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${caveat.variable}`}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZBHQKS3HR1"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZBHQKS3HR1');
          `}
        </Script>
      </head>
      <body>
        <Nav />
        <div className="pt-14">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
