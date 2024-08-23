// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Header from './components/Header';
import FloatingIcons from './components/FloatingIcons';
import Footer from './components/Footer';

export const metadata = {
  title: 'abmoallim',
  description: 'Personal Portfolio of Abdihamid Moallim',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <FloatingIcons />
        <Footer />
      </body>
    </html>
  );
}
