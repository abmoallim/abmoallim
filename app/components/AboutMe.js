/* eslint-disable @next/next/no-img-element */
// app/components/AboutMe.js

import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const skills = ["Web Development", "AI", "Problem Solving", "Open Source"];

    return (
        <section id="about" className="py-16 bg-background text-foreground">
            <hr className="border-t-2 border-border mx-32 py-6" />
            <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center md:text-left">
                <h2 className="text-4xl font-bold mb-8">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <img 
                        src="/imgs/about-pic.png" 
                        alt="Abdihamid Moallim" 
                        className="rounded-lg w-64 h-64 mb-8 md:mb-0"
                    />
                    <div>
                        <p className="text-lg mb-4">
                            I&apos;m a passionate Fullstack Developer focused on web technologies and AI. I create meaningful experiences that solve real-world problems.
                        </p>
                        <p className="text-lg mb-4">
                            My journey in software development is driven by curiosity and a desire to innovate. I&apos;m always eager to learn and take on new challenges.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {skills.map((skill, index) => (
                                <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
