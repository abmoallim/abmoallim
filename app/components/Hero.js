/* eslint-disable @next/next/no-img-element */
// app/components/Hero.js

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GitHubStreak from "@/components/GitHubStreak";

const Hero = () => {
    return (
        <section className="bg-background text-foreground flex flex-col md:flex-row items-center justify-center text-center md:text-left pt-36 py-24">
            <img 
                src="/imgs/profile-pic.png" 
                alt="Abdihamid Moallim" 
                className="rounded-full w-72 h-72 mb-6 md:mb-0 md:mr-12" 
            />
            <div>
                <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                    Abdihamid Moallim
                </h1>
                <h2 className="text-2xl font-light text-muted-foreground mb-4">Software Engineer | <span className='text-primary'>AI enthusiast</span></h2>
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-8">
                    <Badge variant="outline" className="italic text-sm">
                        &ldquo;Code is like humor. When you have to explain it, it&rsquo;s bad&rdquo; 
                        <span className="block text-xs text-right mt-1 opacity-70">- Cory House</span>
                    </Badge>
                </div>
                <div className="flex space-x-4 justify-center md:justify-start mb-6">
                    <Button asChild variant="default">
                        <a href="/imgs/resume.pdf" target="_blank">My Resume</a>
                    </Button>
                    <Button asChild variant="outline">
                        <a href="/contact">Contact Info</a>
                    </Button>
                </div>
                
                {/* GitHub Stats */}
                <div className="mt-6">
                    <GitHubStreak username="abmoallim" />
                </div>
            </div>
        </section>
    );
};

export default Hero;