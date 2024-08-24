"use client";
// app/components/Header.js
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-4 left-1/2 transform -translate-x-1/2 w-full md:w-3/4 z-50 rounded-full border px-8">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl font-mono font-bold text-gray-600 ml-2">Abmoallim</span>
        </div>
        <div className="hidden md:flex-1 md:flex md:justify-end">
          <nav className="space-x-12 text-lg flex items-center font-mono">
            <Link href="/" legacyBehavior>
              <a className="text-gray-800 hover:text-emerald-600">About</a>
            </Link>
            <Link href="/projects" legacyBehavior>
              <a className="text-gray-800 hover:text-emerald-600">Projects</a>
            </Link>
            <Link href="/blog" legacyBehavior>
              <a className="text-gray-800 hover:text-emerald-600">blog</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-gray-800 hover:text-emerald-600">Contact</a>
            </Link>
          </nav>
        </div>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} className="text-gray-700 text-2xl" />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md">
          <div className="container mx-auto px-6 py-4">
            <nav className="space-y-6 text-lg font-mono">
              <Link href="/" legacyBehavior>
                <a className="block text-gray-800 hover:text-emerald-600" onClick={handleLinkClick}>About</a>
              </Link>
              <Link href="/projects" legacyBehavior>
                <a className="block text-gray-800 hover:text-emerald-600" onClick={handleLinkClick}>Projects</a>
              </Link>
              <Link href="/blog" legacyBehavior>
                <a className="block text-gray-800 hover:text-emerald-600" onClick={handleLinkClick}>blog</a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="block text-gray-800 hover:text-emerald-600" onClick={handleLinkClick}>Contact</a>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
