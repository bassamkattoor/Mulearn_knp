export interface Member {
  id: string;
  name: string;
  role: string;
  department: string;
  year: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  image: string;
  registerLink?: string;
  recapLink?: string;
}

export interface Notice {
  id: string;
  tag: string;
  title: string;
  date: string;
  body: string;
}

export interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  karma: number;
  rankChange: number;
  ig: string;
}
