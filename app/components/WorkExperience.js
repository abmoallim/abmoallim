// app/components/WorkExperience.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const WorkExperience = () => {
    const experiences = [
        {
            company: 'Interview Way',
            role: 'Founder',
            duration: 'July 2024 - present',
            location: 'Remote',
            description: 'Built and scaled a platform that assists job seekers with interview preparation through AI-driven tools and resources.',
        },
        {
            company: 'Shakir Group',
            role: 'Head of ICT',
            duration: 'Sep 2023 - present',
            location: 'Remote ',
            description: 'Led the digital transformation of the company by implementing a comprehensive ERP system and optimizing IT infrastructure.',
        },
        {
            company: 'Byteso Tech',
            role: 'Co-founder',
            duration: 'May 2022 - Aug 2023',
            location: 'Mogadishu, Somalia',
            description: 'Co-founded a tech startup focused on developing SaaS products for small businesses to streamline their operations.',
        },
        {
            company: 'Target Marketing',
            role: 'IT Personnel',
            duration: 'Aug 2021 - Nov 2021',
            location: 'Mogadishu, Somalia',
            description: 'Managed the IT infrastructure and provided technical support, ensuring smooth daily operations and minimal downtime.',
        },
        {
            company: 'Print Sign',
            role: 'Graphic Designer',
            duration: 'Nov 2020 - April 2021',
            location: 'Mogadishu, Somalia',
            description: 'Designed branding materials and improved the visual identity of the company’s marketing assets.',
        },
        {
            company: 'SOCSOYU',
            role: 'Volunteer IT Advisor',
            duration: 'Mar 2019 - Aug 2019',
            location: 'Mogadishu, Somalia',
            description: 'Advised the organization on IT strategies and implemented solutions to improve operational efficiency.',
        },
    ];

    return (
        <section id="work-experience" className="py-16 bg-white dark:bg-gray-700 text-black dark:text-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Companies I Worked In</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="p-6 border rounded-lg shadow-md bg-white dark:bg-slate-800 text-black dark:text-white flex flex-col md:flex-row items-start transition-shadow hover:shadow-lg hover:shadow-blue-300">
                            <div className="flex-none mb-4 md:mb-0 md:mr-8">
                                {/* <FontAwesomeIcon icon={faBriefcase} className="text-black w-12 h-12 mb-4" /> */}
                                <p className="text-blue-600 font-semibold">{exp.duration}</p>
                                <p className="text-gray-800 dark:text-gray-400 font-bold">{exp.role}</p>
                                <p className="text-gray-600">{exp.company}</p>
                                <p className="text-gray-400">{exp.location}</p>
                            </div>
                            <div className="flex-grow text-gray-600">
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
