// app/components/WorkExperience.js

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';

const WorkExperience = () => {
    const experiences = [
        {
            company: 'Infinitely services',
            role: 'Founder',
            duration: 'Sep 2024 - present',
            location: 'Remote',
            description: 'Technology consulting firm dedicated to empowering businesses through personalized AI tools and automation solutions.',
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
        <section id="work-experience" className="py-16 bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-8">Work Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <Card key={index} className="transition-shadow hover:shadow-lg hover:shadow-primary/25 dark:hover:shadow-primary/20">
                            <CardContent className="p-6">
                                <div className="flex flex-col space-y-2">
                                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                                    <Badge variant="secondary" className="w-fit">{exp.role}</Badge>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2" />
                                        {exp.duration}
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 mr-2" />
                                        {exp.location}
                                    </div>
                                    <p className="mt-2 text-sm">{exp.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
