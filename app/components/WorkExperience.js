// app/components/WorkExperience.js

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const WorkExperience = () => {
    const experiences = [
        {
            company: 'Lama Tools',
            role: 'Founder',
            duration: 'Dec 2024 - present',
            location: 'Remote',
            description: 'Technology consulting firm dedicated to empowering businesses through personalized AI tools and automation solutions.',
        },
        {
            company: 'Shakir Group',
            role: 'Head of ICT',
            duration: 'Oct 2023 - present',
            location: 'Mogadishu - Remote',
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
        <section id="work-experience" className="relative overflow-hidden py-20 text-foreground">
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-background/98 to-background"></div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.06),_transparent_50%)]"></div>
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(transparent_95%,rgba(79,70,229,0.12)),linear-gradient(90deg,transparent_96%,rgba(56,189,248,0.12))] bg-[length:140px_140px] opacity-25"></div>

            <div className="container relative mx-auto px-6 md:px-12 lg:px-24">
                <div className="mb-16 flex flex-col items-center text-center">
                    <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-mono uppercase tracking-[0.35em] text-primary/80">Career</span>
                    <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">Work Timeline</h2>
                </div>

                <div className="relative mx-auto max-w-5xl">
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 md:left-1/2"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`group relative flex items-start gap-8 ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                <div className="hidden md:block md:w-1/2"></div>

                                <div className="absolute left-8 top-6 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background shadow-[0_0_16px_rgba(59,130,246,0.4)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_24px_rgba(59,130,246,0.6)] md:left-1/2 md:-translate-x-1/2">
                                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                                </div>

                                <Card className="ml-16 w-full rounded-2xl border border-border/70 bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_45px_-25px_rgba(59,130,246,0.5)] md:ml-0 md:w-1/2">
                                    <CardContent className="p-6">
                                        <div className="mb-4 flex items-start justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                    <Briefcase className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                                                    <Badge variant="secondary" className="mt-1 bg-primary/10 text-primary">
                                                        {exp.role}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4 flex flex-wrap gap-4 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground/70">
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-3.5 w-3.5" />
                                                <span>{exp.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-3.5 w-3.5" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>

                                        <div className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.35em] text-primary/70">
                                            <span>View Details</span>
                                            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
