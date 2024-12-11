// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Header from "./components/Header";
import FloatingIcons from "./components/FloatingIcons";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata = {
  title: "abmoallim",
  description: "Personal Portfolio of Abdihamid Moallim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
        <Header />
        {children}
        <FloatingIcons />
        <Footer />
      </body>
    </html>
  );
}
