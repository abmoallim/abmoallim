'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFire, faCodeCommit, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const GitHubStreak = ({ username = "abmoallim" }) => {
  const [loading, setLoading] = useState(true);
  
  // Simulate loading state for demo purposes - remove this in production
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <div className="p-4 text-center rounded-lg bg-card/50 border border-border">
        <span className="text-muted-foreground">Loading GitHub stats...</span>
      </div>
    );
  }
  
  // Hard-coded stats (you can update these manually)
  const currentStreak = 12;
  const thisYearContributions = 107;
  const totalContributions = 1453; // Total lifetime contributions
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="p-4 rounded-lg bg-card/50 border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium flex items-center">
          <FontAwesomeIcon icon={faGithub} className="mr-2 text-primary" />
          GitHub Stats
        </h3>
        <a 
          href={`https://github.com/${username}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-primary hover:underline"
        >
          @{username}
        </a>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center p-3 rounded-md bg-background/80">
          <div className="flex items-center mb-1">
            <FontAwesomeIcon icon={faFire} className="mr-1 text-amber-500" />
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
              {currentStreak}
            </span>
          </div>
          <span className="text-xs text-muted-foreground text-center">Current Streak</span>
        </div>
        
        <div className="flex flex-col items-center p-3 rounded-md bg-background/80">
          <div className="flex items-center mb-1">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-1 text-green-400" />
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              {thisYearContributions}
            </span>
          </div>
          <span className="text-xs text-muted-foreground text-center">{currentYear} Contribs</span>
        </div>
        
        <div className="flex flex-col items-center p-3 rounded-md bg-background/80">
          <div className="flex items-center mb-1">
            <FontAwesomeIcon icon={faCodeCommit} className="mr-1 text-purple-400" />
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              {totalContributions}
            </span>
          </div>
          <span className="text-xs text-muted-foreground text-center">Total Contribs</span>
        </div>
      </div>
    </div>
  );
};

export default GitHubStreak; 