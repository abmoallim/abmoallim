// app/components/FloatingIcons.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FloatingIcons = () => {
    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 rounded-full  z-50 flex flex-col space-y-4">
            <a href="https://www.linkedin.com/in/abmoallim/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center  rounded-full w-12 h-12  hover:text-black transition">
                <FontAwesomeIcon icon={faLinkedin} className="text-gray-500 w-6 h-6 hover:text-black" />
            </a>
            <a href="https://github.com/abmoallim" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full w-12 h-12  hover:text-black transition">
                <FontAwesomeIcon icon={faGithub} className="text-gray-500 w-6 h-6 hover:text-black" />
            </a>
            <a href="https://x.com/abmoallim" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full w-12 h-12 hover:text-black transition">
                <FontAwesomeIcon icon={faTwitter} className="text-gray-500 w-6 h-6 hover:text-black" />
            </a>
        </div>
    );
};

export default FloatingIcons;
