/* eslint-disable @next/next/no-img-element */
// app/components/Hero.js

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PersonalStats from "@/components/PersonalStats";
import { Plane, Navigation, Radar, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative bg-background text-foreground flex flex-col md:flex-row items-center justify-center text-center md:text-left pt-36 py-24 overflow-hidden">
            {/* Aviation-themed background elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle radar circle animation */}
                <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rounded-full animate-ping"></div>
                <div className="absolute bottom-20 left-10 w-24 h-24 border border-green-400/10 rounded-full animate-pulse"></div>
                
                {/* Aviation grid overlay */}
                <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,_currentColor_1px,_transparent_1px),_linear-gradient(currentColor_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
            </div>

            {/* Profile Image with Aviation-inspired styling */}
            <div className="relative mb-6 md:mb-0 md:mr-12">
                {/* Cockpit-style ring around profile */}
                <div className="absolute inset-0 w-72 h-72 rounded-full border-2 border-primary/20 animate-pulse-slow"></div>
                <div className="absolute -inset-2 w-76 h-76 rounded-full border border-green-400/10 animate-radar-sweep"></div>
                
                <img 
                    src="/imgs/profile-pic.png" 
                    alt="Abdihamid Moallim" 
                    className="relative rounded-full w-72 h-72 border-4 border-background shadow-2xl z-10" 
                />
                
                {/* Aviation indicators around profile */}
                <div className="absolute -top-2 -right-2 bg-green-400 w-4 h-4 rounded-full animate-cockpit-glow"></div>
                <div className="absolute -bottom-2 -left-2 bg-blue-500 w-3 h-3 rounded-full animate-pulse"></div>
            </div>

            <div className="relative z-10">
                {/* Aviation-themed title with enhanced styling */}
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    {/* <Navigation className="h-6 w-6 text-primary/60" /> */}
                    <h1 className="text-5xl font-bold aviation-gradient">
                        Abdihamid Moallim
                    </h1>
                    <Plane className="h-6 w-6 text-primary/60 rotate" />
                </div>

                {/* Enhanced subtitle with aviation theme */}
                <h2 className="text-2xl font-light text-muted-foreground mb-4">
                    Software Engineer | <span className='text-primary'>AI Enthusiast</span> | <span className='text-green-400'>Future Aviator </span>
                </h2>

                {/* Quote with aviation-inspired styling */}
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-8">
                    <Badge variant="outline" className="italic text-sm glass-morphism cockpit-border">
                        <Radar className="h-3 w-3 mr-2 text-green-400" />
                        &ldquo;Code is like flight navigation. Precision and clarity lead to smooth landings&rdquo; 
                        <span className="block text-xs text-right mt-1 opacity-70">- Inspired by Aviation</span>
                    </Badge>
                </div>

                {/* GitHub Stats with enhanced styling */}
                <div className="mt-6 mb-6">
                    <div className="relative">
                        <PersonalStats />
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-blue-500/5 rounded-lg blur-xl -z-10"></div>
                    </div>
                </div>

                {/* Action buttons with aviation styling */}
                <div className="flex space-x-4 justify-center md:justify-start mb-6">
                    <Button asChild variant="default" className="aviation-hover cockpit-border">
                        <a href="/imgs/resume.pdf" target="_blank" className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            My Resume
                        </a>
                    </Button>
                    <Button asChild variant="outline" className="aviation-hover glass-morphism">
                        <a href="/contact" className="flex items-center gap-2">
                            <Navigation className="h-4 w-4" />
                            Contact Info
                        </a>
                    </Button>
                </div>

                {/* Aviation-themed status indicators */}
                <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Available for opportunities</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span>Open to aviation projects</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;