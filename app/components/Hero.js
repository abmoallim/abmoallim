/* eslint-disable @next/next/no-img-element */
// app/components/Hero.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
    return (
        <section className="bg-white dark:bg-gray-800 text-black dark:text-white flex flex-col md:flex-row items-center justify-center text-center md:text-left pt-32 py-28">
            <img 
                src="/imgs/profile-pic.png" 
                alt="Abdihamid Moallim" 
                className="rounded-lg w-80 h-80 mb-6 md:mb-0 md:mr-8" 
            />
            <div>
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-2">
                    Abdihamid Moallim
                </h1>
                <h2 className="text-2xl font-light text-gray-600 mb-4 dark:text-slate-400">Fullstack Developer |<span className='text-lg'> AI enthusiast</span> </h2>
                <p className="text-lg text-gray-600 dark:text-slate-400 mb-8">
                    Top Talent award winner @ SIMAD iLab
                </p>
                <div className="flex space-x-4">
                    <a 
                        href="/imgs/resume.pdf" 
                        className="bg-gray-900 text-white py-2 px-4 rounded-full hover:bg-gray-800"
                        target="_blank" // This will open the resume in a new tab
                    >
                        My Resume
                    </a>
                    <a 
                        href="/contact" 
                        className="bg-gray-400 dark:text-slate-950 text-white py-2 px-4 rounded-full hover:bg-gray-300"
                    >
                        Contact Info
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
