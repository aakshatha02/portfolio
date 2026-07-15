export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metrics?: { label: string; value: string };
  category: 'pipelines' | 'cloud' | 'analytics' | 'streaming';
  githubUrl?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 1 to 5 or percentage
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  link?: string;
  date?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  description: string;
  issuer: string;
  year: string;
}
