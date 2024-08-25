// app/components/Experience.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPython, faPhp, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
    return (
        <section id="experience" className="py-16 bg-white dark:bg-gray-900 text-black dark:text-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 border rounded-lg shadow-md bg-gray-50 dark:bg-slate-800">
                        <h3 className="text-2xl font-semibold text-center mb-4">Frontend Development</h3>
                        <ul className="space-y-4">
                            <li><FontAwesomeIcon icon={faHtml5} className="text-orange-500 w-6 h-6 mr-2" /><strong>HTML</strong> - Experienced</li>
                            <li><FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 w-6 h-6 mr-2" /><strong>CSS</strong> - Experienced</li>
                            <li><FontAwesomeIcon icon={faJs} className="text-yellow-500 w-6 h-6 mr-2" /><strong>JavaScript</strong> - Experienced</li>
                            <li><FontAwesomeIcon icon={faReact} className="text-teal-500 w-6 h-6 mr-2" /><strong>Next.js</strong> - Intermediate</li>
                            <li><FontAwesomeIcon icon={faJs} className="text-blue-500 w-6 h-6 mr-2" /><strong>TypeScript</strong> - Basic</li>
                            <li><FontAwesomeIcon icon={faReact} className="text-blue-500 w-6 h-6 mr-2" /><strong>Flutter</strong> - Advanced</li>
                            <li><FontAwesomeIcon icon={faPhp} className="text-purple-500 w-6 h-6 mr-2" /><strong>PHP</strong> - Intermediate</li>
                        </ul>
                    </div>
                    <div className="p-6 border rounded-lg shadow-md bg-gray-50 dark:bg-slate-800">
                        <h3 className="text-2xl font-semibold text-center mb-4">Back-end Development</h3>
                        <ul className="space-y-4">
                            <li><FontAwesomeIcon icon={faNodeJs} className="text-green-500 w-6 h-6 mr-2" /><strong>Node.js</strong> - Advanced</li>
                            <li><FontAwesomeIcon icon={faPython} className="text-blue-500 w-6 h-6 mr-2" /><strong>Python</strong> - Experienced</li>
                            <li><FontAwesomeIcon icon={faDatabase} className="text-gray-500 w-6 h-6 mr-2" /><strong>PostgreSQL</strong> - Intermediate</li>
                            <li><FontAwesomeIcon icon={faDatabase} className="text-orange-500 w-6 h-6 mr-2" /><strong>MySQL</strong> - Experienced</li>
                            <li><FontAwesomeIcon icon={faNodeJs} className="text-yellow-500 w-6 h-6 mr-2" /><strong>Express.js</strong> - Intermediate</li>
                            <li><FontAwesomeIcon icon={faGitAlt} className="text-red-500 w-6 h-6 mr-2" /><strong>Git</strong> - Intermediate</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
