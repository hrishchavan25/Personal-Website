export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Mobile & Safety' | 'AI & Mental Health' | 'Web Systems & Guidance' | 'AI/ML Research' | 'AI & Biomedical Health' | 'Biomedical AI';
  status: 'Completed' | 'Ongoing Research' | 'Copyright Registered' | 'Copyright Filed' | 'Active' | 'Final Year Research' | 'Senior Capstone';
  description: string;
  fullOverview: string;
  problemStatement: string;
  solutionArchitecture: string;
  keyContributions: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  highlights: string[];
  copyrightNote?: string;
  copyrightRegistered?: boolean;
  certificateNo?: string;
  applicationNo?: string;
  copyrightYear?: string;
  registeredWorkTitle?: string;
  hasCertificatePdf?: boolean;
  keyAlgorithms?: string[];
  links?: {
    github?: string;
    paper?: string;
    demo?: string;
    certificate?: string;
  };
}

export interface ResearchArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  focusPoints: string[];
  outcome: string;
  publicationOrStatus: string;
}

export interface CopyrightItem {
  id?: string;
  title: string;
  projectReference?: string;
  registeredWorkTitle?: string;
  applicationType: string;
  status: string;
  isRegistered?: boolean;
  domain: string;
  description: string;
  year: string;
  certificateNo?: string;
  applicationNo?: string;
  dateOfFiling?: string;
  dateOfROC?: string;
  authors?: string[];
  owners?: string[];
  hasCertificatePdf?: boolean;
}

export interface ExtracurricularItem {
  role: string;
  title?: string;
  organization?: string;
  organizationOrEvent: string;
  type: 'Hackathon' | 'Leadership & Editorial' | 'Community & Wellness';
  period: string;
  description: string;
  badges: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    categoryBadge?: string;
    tags: string[];
    description: string;
    experience?: string;
  }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  type: 'Education' | 'Research' | 'Project' | 'Milestone';
  description: string;
  badges: string[];
}
