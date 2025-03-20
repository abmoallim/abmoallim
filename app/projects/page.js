'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  ExternalLink, 
  LockKeyhole, 
  AlertCircle,
  InfoIcon,
  X
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';

const projects = [
    {
        title: 'Internsim',
        description: 'A platform offering personalized, story-driven internship simulations to elevate skills with AI-generated tasks and real-world scenarios.',
        technologies: ['Next.js', 'Vercel', 'AI'],
        link: 'https://internsim.vercel.app/',
        image: '/imgs/internsim.png',
        type: 'open'
    },
    {
        title: 'InterviewWay',
        description: 'A platform helping users prepare for interviews and assessments, providing tailored resources and practice tools.',
        technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'FastAPI'],
        link: 'https://interviewway.com',
        image: '/imgs/inter.png',
        type: 'open'
    },
    {
        title: 'Scraper',
        description: 'A web scraping tool designed to extract valuable data from websites efficiently.',
        technologies: ['Next.js', 'Node.js', 'Python', 'Tailwind CSS', 'Playwright'],
        link: 'https://github.com/abmoallim/scraper',
        image: '/imgs/scraper.png',
        type: 'github'
    },
    {
        title: 'Flashcard SaaS',
        description: 'A SaaS platform integrating OpenAI and Stripe to create customizable flashcards for educational purposes.',
        technologies: ['React', 'Node.js', 'Stripe API', 'OpenAI API'],
        link: 'https://github.com/muhaksim/flashkards',
        image: '/imgs/flash.png',
        type: 'github'
    },
    {
        title: 'Inventory Management System',
        description: 'A fun, gamified, colorful, and clean inventory management system with animations and a focus on user experience.',
        technologies: ['PostgreSQL', 'React', 'Node.js', 'Tailwind CSS'],
        link: 'https://github.com/abmoallim/inventory-management-system',
        image: '/imgs/inventory.png',
        type: 'github'
    },
    {
        title: 'Express Therapy',
        description: 'A gamified speech and language therapy service for children and young people, aimed at making therapy engaging and fun.',
        technologies: ['WordPress'],
        link: 'https://express-therapy.com',
        image: '/imgs/express.png',
        type: 'open'
    },
    {
        title: 'Target LED',
        description: 'A comprehensive solution for managing Ads displayed on LED screens, involving full web development, mobile apps, APIs, dashboards, and IoT integration.',
        technologies: ['HTML', 'Bootstrap', 'JavaScript', 'Ajax', 'jQuery', 'Flutter', 'Node.js', 'Flask', 'Next.js', 'IoT'],
        link: 'https://github.com/orgs/Target-so/',
        image: '/imgs/about-pic.png',
        type: 'github'
    },
    {
        title: 'Rays Initiative',
        description: 'A website built with WordPress to support the Rays Initiative, focused on empowering communities through education and development.',
        technologies: ['WordPress'],
        link: 'https://raysinitiative.org/',
        image: '/imgs/rays.png',
        type: 'open'
    },
];

// Toast component for Sonner-like notifications
const Toast = ({ message, title, onClose }) => (
  <div className="fixed top-4 right-4 z-50 animate-in fade-in slide-in-from-top-5 duration-300">
    <div className="bg-card border rounded-lg shadow-lg p-4 w-80 flex gap-3">
      <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <div className="font-medium mb-1">{title}</div>
        <div className="text-sm text-muted-foreground">{message}</div>
      </div>
      <button 
        onClick={onClose}
        className="text-muted-foreground hover:text-foreground flex-shrink-0"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  </div>
);

const Projects = () => {
    const [showToast, setShowToast] = useState(true);
    
    // Hide toast after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowToast(false);
        }, 5000);
        
        return () => clearTimeout(timer);
    }, [showToast]);

    return (
        <section id="projects" className="pt-32 py-16 bg-background text-foreground">
            {/* Sonner-like Toast */}
            {showToast && (
                <Toast 
                    title="Most projects are private"
                    message="Many of my projects were developed for clients under NDAs and can't be publicly displayed. The projects shown here represent only a portion of my work."
                    onClose={() => setShowToast(false)}
                />
            )}
            
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">My Projects</h2>
                    <div className="flex items-center justify-center gap-2">
                        <p className="text-muted-foreground max-w-2xl">
                            A collection of my public work. Check out what I&apos;ve been building.
                        </p>
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className="rounded-full h-8 w-8 text-muted-foreground hover:text-foreground"
                            onClick={() => setShowToast(true)}
                        >
                            <InfoIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                
                {/* Project Filtering */}
                <Tabs defaultValue="all" className="mb-10">
                    <div className="flex justify-center">
                        <TabsList className="grid w-full max-w-md grid-cols-3">
                            <TabsTrigger value="all">All Projects</TabsTrigger>
                            <TabsTrigger value="open">Live Sites</TabsTrigger>
                            <TabsTrigger value="github">Open Source</TabsTrigger>
                        </TabsList>
                    </div>
                    
                    <TabsContent value="all" className="mt-8">
                        <ProjectList projects={projects} />
                    </TabsContent>
                    
                    <TabsContent value="open" className="mt-8">
                        <ProjectList projects={projects.filter(p => p.type === 'open')} />
                    </TabsContent>
                    
                    <TabsContent value="github" className="mt-8">
                        <ProjectList projects={projects.filter(p => p.type === 'github')} />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

const ProjectList = ({ projects }) => (
    <div className="space-y-8">
        {projects.map((project, index) => (
            <ProjectListCard key={index} project={project} />
        ))}
    </div>
);

const ProjectListCard = ({ project }) => (
    <Card className="transition-shadow hover:shadow-lg hover:shadow-primary/25 dark:hover:shadow-primary/20">
        <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 md:pr-6">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                        {project.type === 'github' ? (
                            <Github className="h-5 w-5 text-muted-foreground" />
                        ) : (
                            <ExternalLink className="h-5 w-5 text-muted-foreground" />
                        )}
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">{tech}</Badge>
                        ))}
                    </div>
                    <Button asChild variant="default">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            {project.type === 'github' ? (
                                <>
                                    <Github className="mr-2 h-4 w-4" />
                                    View on GitHub
                                </>
                            ) : (
                                <>
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    View Project
                                </>
                            )}
                        </a>
                    </Button>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0">
                    <div className="relative h-48 w-full overflow-hidden rounded-lg">
                        <Image 
                            src={project.image} 
                            alt={`${project.title} screenshot`} 
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default Projects;