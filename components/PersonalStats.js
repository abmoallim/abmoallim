'use client';

import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Code, Briefcase, Users, Github } from 'lucide-react';

const PersonalStats = () => {
  // Personal stats
  const [stats, setStats] = useState({
    projectsCompleted: 0,
    yearsExperience: 0,
    clientsSatisfied: 0,
    gitRepos: 0
  });
  
  // Animate counting up
  useEffect(() => {
    const targetStats = {
      projectsCompleted: 70,
      yearsExperience: 4,
      clientsSatisfied: 50,
      gitRepos: 79
    };
    
    const duration = 2000; // 2 seconds animation
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setStats({
        projectsCompleted: Math.floor(progress * targetStats.projectsCompleted),
        yearsExperience: Math.floor(progress * 10 * targetStats.yearsExperience) / 10,
        clientsSatisfied: Math.floor(progress * targetStats.clientsSatisfied),
        gitRepos: Math.floor(progress * targetStats.gitRepos)
      });
      
      if (frame === totalFrames) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, frameDuration);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="p-4 border rounded-lg shadow-sm">
      <div className="grid grid-cols-4 gap-3 text-center">
        <div className="flex flex-col items-center">
          <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-2">
            <Code className="h-5 w-5 text-amber-500" />
          </div>
          <span className="text-2xl font-bold">{stats.projectsCompleted}+</span>
          <span className="text-xs text-muted-foreground">Projects</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
            <Briefcase className="h-5 w-5 text-blue-500" />
          </div>
          <span className="text-2xl font-bold">{stats.yearsExperience}+</span>
          <span className="text-xs text-muted-foreground">Years Exp</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
            <Users className="h-5 w-5 text-green-500" />
          </div>
          <span className="text-2xl font-bold">{stats.clientsSatisfied}+</span>
          <span className="text-xs text-muted-foreground">Clients</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-2">
            <Github className="h-5 w-5 text-purple-500" />
          </div>
          <span className="text-2xl font-bold">{stats.gitRepos}</span>
          <span className="text-xs text-muted-foreground">Git Repos</span>
        </div>
      </div>
    </Card>
  );
};

export default PersonalStats;