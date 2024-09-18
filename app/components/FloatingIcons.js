// app/components/FloatingIcons.js
"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button";

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
        <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
            <Button
                variant="outline"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full w-10 h-10"
            >
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="w-5 h-5" />
            </Button>
            <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full w-10 h-10"
            >
                <a href="https://www.linkedin.com/in/abmoallim/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                </a>
            </Button>
            <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full w-10 h-10"
            >
                <a href="https://github.com/abmoallim" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                </a>
            </Button>
            <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full w-10 h-10"
            >
                <a href="https://x.com/abmoallim" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                </a>
            </Button>
        </div>
    );
};

export default FloatingIcons;
