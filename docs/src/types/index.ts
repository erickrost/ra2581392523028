export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  link?: { label: string; url: string };
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  type: 'education' | 'certification';
}

export interface ContactInfo {
  label: string;
  value: string;
  href: string;
}

export interface SiteData {
  name: string;
  title: string;
  shortDesc: string;
  about: string[];
  interests: { label: string; items: string[] }[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  contact: ContactInfo[];
  github: string;
  linkedin: string;
  email: string;
}