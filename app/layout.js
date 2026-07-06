// app/layout.js
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

import StatusBar from "./components/cockpit/StatusBar";
import FooterStrip from "./components/cockpit/FooterStrip";
import CockpitBackground from "./components/cockpit/CockpitBackground";
import Scanlines from "./components/cockpit/Scanlines";
import CommandConsole from "./components/console/CommandConsole";
import Script from "next/script";

export const metadata = {
  title: "abmoallim",
  description: "Personal Portfolio of Abdihamid Moallim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
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
        <CockpitBackground />
        <StatusBar />
        {/* bottom padding clears the fixed command console dock */}
        <div className="pb-16">
          {children}
          <FooterStrip />
        </div>
        <CommandConsole />
        <Scanlines />
      </body>
    </html>
  );
}
