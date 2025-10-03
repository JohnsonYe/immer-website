export interface TeamMember {
  name: string;
  title: string;
  role: string;
  experience: string[];
  education: string;
  founderStory?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Johnson Ye',
    title: 'Founder and CEO',
    role: 'CEO',
    experience: [
      'Founded and operates RGB Run (Dec 2024)',
      'Founded and operates Cloud Escape Room (July 2024)',
      'Former Amazon software engineer (joined 2020)',
      'Former IoT full-stack engineer at Locbit (2018)',
    ],
    education: 'UC San Diego - Computer Science and Mathematics (2018)',
    founderStory:
      '7 years of software engineering experience (5 years at Amazon, IoT startup previously), specializing in global supply chain automation. Successfully launched two retail escape rooms in 1.5 years from scratch, identifying critical pain points in design and manufacturing for small businesses scaling globally, which inspired Immer\'s creation.',
  },
  {
    name: 'Yiling Chen',
    title: 'Co-Founder and AI Leader',
    role: 'AI Leader',
    experience: [
      'Staff Engineer at Tesla Vision Automation Team, led AI team to deploy computer vision-based systems in four factories (Joined 2022)',
      'Former AR platform backend engineer at Bytedance AI Lab (Joined 2020)',
      'Former backend engineer at Amazon AWS identity team (Joined 2016)',
    ],
    education: 'MS in Computer Science, Carnegie Mellon (2016)',
  },
  {
    name: 'Andy Sun',
    title: 'Co-Founder and Dev Leader',
    role: 'Dev Leader',
    experience: [
      'Head of AI Adoption program for Amazon India, leads IN and NA departments (2025)',
      'Senior Engineer at Amazon India, leads B2B third party seller new business program and supply chain system optimization (2022)',
      'Backend Engineer at Amazon India emerging market (2018)',
    ],
    education: 'BS in Computer Science, University of Washington (2010)',
  },
];

export const teamCompetitiveness =
  'Team members come from top tech companies, combining expertise in AI, industrial platforms, supply chain, and engineering execution.';
