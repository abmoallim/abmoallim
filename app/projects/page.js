/* eslint-disable @next/next/no-img-element */
// app/projects/page.js

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const projects = [
    {
        title: 'Internsim',
        description: 'A platform offering personalized, story-driven internship simulations to elevate skills with AI-generated tasks and real-world scenarios.',
        technologies: ['Next.js', 'Vercel', 'AI'],
        link: 'https://internsim.vercel.app/',
        image: '/imgs/internsim.png',  // You'll need to add this image to your project
    },
    {
        title: 'InterviewWay',
        description: 'A platform helping users prepare for interviews and assessments, providing tailored resources and practice tools.',
        technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'FastAPI'],
        link: 'https://interviewway.com',
        image: '/imgs/inter.png',
    },
    {
        title: 'Scraper',
        description: 'A web scraping tool designed to extract valuable data from websites efficiently.',
        technologies: ['Next.js', 'Node.js', 'Python', 'Tailwind CSS', 'Playwright'],
        link: 'https://github.com/abmoallim/scraper',
        image: '/imgs/scraper.png',
    },
    {
        title: 'Flashcard SaaS',
        description: 'A SaaS platform integrating OpenAI and Stripe to create customizable flashcards for educational purposes.',
        technologies: ['React', 'Node.js', 'Stripe API', 'OpenAI API'],
        link: 'https://github.com/muhaksim/flashkards',
        image: '/imgs/flash.png',
    },
    {
        title: 'Inventory Management System',
        description: 'A fun, gamified, colorful, and clean inventory management system with animations and a focus on user experience.',
        technologies: ['PostgreSQL', 'React', 'Node.js', 'Tailwind CSS'],
        link: 'https://github.com/abmoallim/inventory-management-system',
        image: '/imgs/inventory.png',
    },
    {
        title: 'Express Therapy',
        description: 'A gamified speech and language therapy service for children and young people, aimed at making therapy engaging and fun.',
        technologies: ['WordPress'],
        link: 'https://express-therapy.com',
        image: '/imgs/express.png',
    },
    {
        title: 'Target LED',
        description: 'A comprehensive solution for managing Ads displayed on LED screens, involving full web development, mobile apps, APIs, dashboards, and IoT integration.',
        technologies: ['HTML', 'Bootstrap', 'JavaScript', 'Ajax', 'jQuery', 'Flutter', 'Node.js', 'Flask', 'Next.js', 'IoT'],
        link: 'https://github.com/orgs/Target-so/',
        image: '/imgs/about-pic.png',
    },
    {
        title: 'Rays Initiative',
        description: 'A website built with WordPress to support the Rays Initiative, focused on empowering communities through education and development.',
        technologies: ['WordPress'],
        link: 'https://raysinitiative.org/',
        image: '/imgs/rays.png',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="pt-32 py-16 bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="transition-shadow hover:shadow-lg hover:shadow-primary/25 dark:hover:shadow-primary/20">
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="md:w-2/3 md:pr-6">
                                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                        <p className="text-muted-foreground mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, techIndex) => (
                                                <Badge key={techIndex} variant="secondary">{tech}</Badge>
                                            ))}
                                        </div>
                                        <Button asChild variant="default">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                View Project
                                            </a>
                                        </Button>
                                    </div>
                                    <div className="md:w-1/3 mt-4 md:mt-0">
                                        <Image 
                                            src={project.image} 
                                            alt={`${project.title} screenshot`} 
                                            width={300}
                                            height={200}
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
