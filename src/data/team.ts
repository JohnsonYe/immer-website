export interface TeamMember {
  name: string;
  title: string;
  role: string;
  description: string;
  expertise: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Johnson Ye',
    title: 'Founder & CEO',
    role: 'CEO',
    description:
      'Johnson brings 7 years of software engineering experience, including 5 years at Amazon specializing in global supply chain automation and IoT systems. After founding two successful escape room businesses, he identified critical gaps in design-to-manufacturing workflows for small businesses scaling globally, inspiring the creation of Immer. His unique blend of technical expertise and entrepreneurial experience drives Immer\'s vision of democratizing industrial design through AI.',
    expertise: ['Supply Chain Automation', 'Product Strategy', 'Business Development'],
  },
  {
    name: 'Yiling Chen',
    title: 'Co-Founder & AI Leader',
    role: 'AI Leader',
    description:
      'Yiling is a Staff Engineer at Tesla\'s Vision Automation Team, where he leads AI initiatives deploying computer vision systems across four factories. With prior experience building AR platforms at Bytedance AI Lab and backend systems at Amazon AWS, he brings deep expertise in production-scale AI systems. His background in both cutting-edge AI research and industrial deployment makes him uniquely qualified to lead Immer\'s AI development.',
    expertise: ['Computer Vision', 'AI/ML Systems', 'Industrial Automation'],
  },
  {
    name: 'Andy Sun',
    title: 'Co-Founder & Dev Leader',
    role: 'Dev Leader',
    description:
      'Andy currently leads AI Adoption programs for Amazon India, overseeing departments across India and North America. His extensive experience includes building B2B seller platforms and optimizing supply chain systems at Amazon. With a proven track record of scaling complex technical systems and leading engineering teams in emerging markets, Andy drives Immer\'s platform development and technical architecture.',
    expertise: ['Platform Architecture', 'B2B Systems', 'Team Leadership'],
  },
];

export const teamCompetitiveness =
  'Our leadership team combines world-class expertise from Tesla, Amazon, and Bytedance, bringing together deep knowledge in AI, supply chain automation, and scalable platform development.';
