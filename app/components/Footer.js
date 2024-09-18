// app/components/Footer.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="w-full bg-background border-t border-border text-foreground py-6">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm mb-4 md:mb-0">
                    © {new Date().getFullYear()} Abmoallim. All rights reserved.
                </p>
                <p className="text-sm flex items-center">
                    Made with <FontAwesomeIcon icon={faHeart} className="text-red-500 mx-1" /> using Next.js and Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
