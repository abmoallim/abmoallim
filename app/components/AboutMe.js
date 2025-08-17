/* eslint-disable @next/next/no-img-element */
// app/components/AboutMe.js

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Code, Brain, Compass, Target, Rocket } from 'lucide-react';

const AboutMe = () => {
    const skills = [
        { name: "Web Development", icon: Code, color: "text-blue-500" },
        { name: "AI & Machine Learning", icon: Brain, color: "text-purple-500" },
        { name: "Problem Solving", icon: Target, color: "text-green-500" },
        { name: "Open Source", icon: Rocket, color: "text-orange-500" },
        { name: "Aviation Interest", icon: Plane, color: "text-sky-500" },
        { name: "Navigation Systems", icon: Compass, color: "text-emerald-500" }
    ];

    return (
        <section id="about" className="py-16 bg-background text-foreground relative">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 right-20 w-16 h-16 border border-primary/5 rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-10 left-20 w-12 h-12 border border-green-400/5 rounded-full animate-pulse-slow delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center md:text-left relative z-10">
                <div className="flex flex-col md:flex-row items-center md:space-x-12 gap-8">
                    {/* Enhanced image section */}
                    <div className="relative">
                        {/* Aviation-themed frame */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-green-400/10 rounded-xl blur-lg"></div>
                        <div className="relative">
                            <img 
                                src="/imgs/about-pic.png" 
                                alt="Abdihamid Moallim" 
                                className="rounded-xl w-64 h-64 object-cover border-2 border-primary/20 shadow-2xl aviation-hover"
                            />
                            {/* Cockpit-style indicators */}
                            <div className="absolute -top-2 -right-2 bg-green-400 w-3 h-3 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-2 -left-2 bg-blue-500 w-2 h-2 rounded-full animate-pulse delay-500"></div>
                        </div>
                    </div>

                    {/* Content section with enhanced styling */}
                    <div className="flex-1 space-y-6">
                        {/* Aviation-themed introduction */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <Plane className="h-5 w-5 text-primary rotate-45" />
                                <h2 className="text-3xl font-bold aviation-gradient">About My Journey</h2>
                                <Compass className="h-5 w-5 text-green-400" />
                            </div>
                            
                            <Card className="glass-morphism aviation-hover">
                                <CardContent className="p-6">
                                    <p className="text-lg leading-relaxed mb-4">
                                        I&apos;m a Software Engineer with a passion for web technologies and AI, currently charting a course toward the aviation industry. 
                                        Like a pilot navigating through complex airspace, I navigate through code with precision and purpose.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        My journey in software development is driven by curiosity and innovation. Whether I&apos;m building web applications or dreaming of cockpit displays, 
                                        I approach every challenge with the same attention to detail that aviation demands. <span className="text-green-400 font-semibold">Insha Allah</span>, 
                                        I&apos;ll soon be combining my technical skills with my aviation aspirations.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Enhanced skills section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <Target className="h-5 w-5 text-primary" />
                                <h3 className="text-xl font-semibold">Core Competencies</h3>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {skills.map((skill, index) => {
                                    const IconComponent = skill.icon;
                                    return (
                                        <Badge 
                                            key={index} 
                                            variant="outline" 
                                            className="text-sm py-2 px-4 aviation-hover glass-morphism justify-center md:justify-start"
                                        >
                                            <IconComponent className={`h-4 w-4 mr-2 ${skill.color}`} />
                                            {skill.name}
                                        </Badge>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Aviation aspiration callout */}
                        <Card className="cockpit-border bg-gradient-to-r from-green-400/5 to-blue-500/5">
                            <CardContent className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-400/20 p-2 rounded-full">
                                        <Plane className="h-5 w-5 text-green-400 rotate-45" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-400">Future Aviator</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Exploring opportunities to merge software engineering with aviation technology
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
