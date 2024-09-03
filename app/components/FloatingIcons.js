"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

const FloatingIcons = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Load the saved dark mode preference from localStorage on component mount
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedDarkMode);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.toggle('dark', darkMode);
        // Save the dark mode preference to localStorage whenever it changes
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="fixed top-1/2 right-1 md:right-0 transform -translate-y-1/2 md:bg-gray-200 md:dark:bg-slate-900 z-50 flex flex-col space-y-4 p-2 md:p-0 md:rounded-full">
                <div className="md:flex flex-col space-y-4 hidden">
                    <button onClick={toggleDarkMode} className="flex items-center justify-center rounded-full w-12 h-12 md:dark:hover:text-white transition">
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-gray-500 w-6 h-6 md:dark:text-gray-300" />
                    </button>
                    <hr className="border-gray-300 dark:border-slate-700" />
                    <a href="https://www.linkedin.com/in/abmoallim/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full w-12 h-12 md:bg-gray-200 dark:bg-slate-900 hover:text-black dark:hover:text-white transition">
                        <FontAwesomeIcon icon={faLinkedin} className="text-gray-500 dark:text-gray-300 w-6 h-6" />
                    </a>
                    <a href="https://github.com/abmoallim" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full w-12 h-12 md:bg-gray-200 dark:bg-slate-900 hover:text-black dark:hover:text-white transition">
                        <FontAwesomeIcon icon={faGithub} className="text-gray-500 dark:text-gray-300 w-6 h-6" />
                    </a>
                    <a href="https://x.com/abmoallim" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full w-12 h-12 md:bg-gray-200 dark:bg-slate-900 hover:text-black dark:hover:text-white transition">
                        <FontAwesomeIcon icon={faTwitter} className="text-gray-500 dark:text-gray-300 w-6 h-6" />
                    </a>
                </div>
                <button onClick={toggleMenu} className="md:hidden top-0 transform -translate-y-1/4 flex items-center justify-center rounded-full w-12 h-12 bg-gray-200 dark:bg-slate-900 text-gray-500 dark:text-gray-300 z-50">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faChevronDown} className="w-6 h-6" />
                </button>
            </div>
            {isOpen && (
                <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 flex flex-col space-y-4 bg-gray-200 dark:bg-slate-900 rounded-full p-2 transition-all duration-300 md:hidden">
                    <button onClick={toggleDarkMode} className="flex items-center justify-center rounded-full w-12 h-12 md:dark:hover:text-white transition">
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-gray-500 dark:text-gray-300 w-6 h-6" />
                    </button>
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
            )}
        </div>
    );
};

export default FloatingIcons;
