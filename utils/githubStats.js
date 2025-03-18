import { fetchStats } from 'contribution';

export async function getGitHubStats(username) {
  try {
    const gitHubStats = await fetchStats(username);
    return gitHubStats;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return null;
  }
} 