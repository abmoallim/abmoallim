// app/components/FloatingIcons.js
"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const FloatingIcons = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 dark:bg-slate-900 rounded-full z-50 flex flex-col space-y-4 p-2">
            <button onClick={toggleDarkMode} className="flex items-center justify-center rounded-full w-12 h-12 hover:text-black dark:hover:text-white transition">
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-gray-500 w-6 h-6" />
            </button>
            <hr className="border-gray-300 dark:border-slate-700" />
            <a href="https://www.linkedin.com/in/abmoallim/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full w-12 h-12 hover:text-black dark:hover:text-white transition">
                <FontAwesomeIcon icon={faLinkedin} className="text-gray-500 dark:text-gray-300 w-6 h-6" />
            </a>
            <a href="https://github.com/abmoallim" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full w-12 h-12 hover:text-black dark:hover:text-white transition">
                <FontAwesomeIcon icon={faGithub} className="text-gray-500 dark:text-gray-300 w-6 h-6" />
            </a>
            <a href="https://x.com/abmoallim" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full w-12 h-12 hover:text-black dark:hover:text-white transition">
                <FontAwesomeIcon icon={faTwitter} className="text-gray-500 dark:text-gray-300 w-6 h-6" />
            </a>
        </div>
    );
};

export default FloatingIcons;
