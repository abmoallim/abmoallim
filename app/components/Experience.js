// app/components/Experience.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPython, faPhp, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const technologies = [
    { icon: faHtml5, name: "HTML", level: "Experienced", color: "text-orange-500" },
    { icon: faCss3Alt, name: "CSS", level: "Experienced", color: "text-blue-500" },
    { icon: faJs, name: "JavaScript", level: "Experienced", color: "text-yellow-500" },
    { icon: faReact, name: "Next.js", level: "Intermediate", color: "text-teal-500" },
    { icon: faJs, name: "TypeScript", level: "Basic", color: "text-blue-500" },
    { icon: faReact, name: "Flutter", level: "Advanced", color: "text-blue-500" },
    { icon: faPhp, name: "PHP", level: "Intermediate", color: "text-purple-500" },
    { icon: faNodeJs, name: "Node.js", level: "Advanced", color: "text-green-500" },
    { icon: faPython, name: "Python", level: "Intermediate", color: "text-blue-500" },
    { icon: faDatabase, name: "PostgreSQL", level: "Intermediate", color: "text-gray-500" },
    { icon: faDatabase, name: "MySQL", level: "Experienced", color: "text-orange-500" },
    { icon: faNodeJs, name: "Express.js", level: "Intermediate", color: "text-yellow-500" },
    { icon: faGitAlt, name: "Git", level: "Intermediate", color: "text-red-500" },
    { icon: faCloud, name: "Vercel", level: "Intermediate", color: "text-black dark:text-white" },
    { icon: faDatabase, name: "MongoDB", level: "Intermediate", color: "text-green-600" },
    { icon: faServer, name: "VPS", level: "Basic", color: "text-blue-600" },
];

const Experience = () => {
    return (
        <section id="experience" className="py-2 bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* <h2 className="text-4xl font-bold text-center mb-8">Technologies</h2> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                        <CardContent className="p-6">
                            <ul className="grid grid-cols-2 gap-4">
                                {technologies.slice(0, 8).map((tech, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <FontAwesomeIcon icon={tech.icon} className={`w-6 h-6 ${tech.color}`} />
                                        <div>
                                            <strong>{tech.name}</strong>
                                            <Badge variant="secondary" className="ml-2">{tech.level}</Badge>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <ul className="grid grid-cols-2 gap-4">
                                {technologies.slice(8).map((tech, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <FontAwesomeIcon icon={tech.icon} className={`w-6 h-6 ${tech.color}`} />
                                        <div>
                                            <strong>{tech.name}</strong>
                                            <Badge variant="secondary" className="ml-2">{tech.level}</Badge>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Experience;
