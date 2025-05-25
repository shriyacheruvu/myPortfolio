export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Skill {
  name: string;
  category: 'language' | 'frontend' | 'backend' | 'concept';
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  credential?: string;
  achievement?: string;
  link: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}