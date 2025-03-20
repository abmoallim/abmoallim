'use client';

import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Github } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

const GitHubStreak = ({ username }) => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    currentStreak: 0,
    totalContributions: 0,
    currentYearContributions: 0
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch from our backend API
        const response = await fetch(`/api/github-stats?username=${username}`);
        
        if (!response.ok) {
          throw new Error(`API returned ${response.status}`);
        }
        
        const data = await response.json();
        
        setStats({
          currentStreak: data.currentStreak || 0,
          totalContributions: data.totalContributions || 0,
          currentYearContributions: data.currentYearContributions || 0
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Keep default values in case of error
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [username]);

  return (
    <Card className="p-6 border rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Github className="h-5 w-5" />
        <h3 className="text-lg font-semibold">GitHub Stats</h3>
        <span className="ml-auto text-sm text-muted-foreground">@{username}</span>
      </div>

      {loading ? (
        <div className="flex justify-between gap-4">
          <Skeleton className="h-16 w-24" />
          <Skeleton className="h-16 w-24" />
          <Skeleton className="h-16 w-24" />
        </div>
      ) : (
        <div className="flex justify-between gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-amber-500 text-2xl font-bold">{stats.currentStreak}</span>
            <span className="text-sm text-muted-foreground">Current Streak</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-green-500 text-2xl font-bold">{stats.currentYearContributions}</span>
            <span className="text-sm text-muted-foreground">{new Date().getFullYear()} Contribs</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-purple-500 text-2xl font-bold">{stats.totalContributions}</span>
            <span className="text-sm text-muted-foreground">Total Contribs</span>
          </div>
        </div>
      )}
    </Card>
  );
};

export default GitHubStreak;