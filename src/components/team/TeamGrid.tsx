import { teamMembers, teamCompetitiveness } from '@/data/team';
import TeamMember from './TeamMember';
import { Award } from 'lucide-react';

export default function TeamGrid() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Leadership <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Led by industry experts from <span className="font-bold text-immer-orange">Tesla</span> and{' '}
            <span className="font-bold text-immer-orange">Amazon</span>, specializing in AI, software
            engineering, supply chain management, and 3D Gen-AI
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>

        {/* Team Competitiveness */}
        <div className="bg-gradient-to-br from-immer-navy to-immer-blue text-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-immer-orange p-3 rounded-full">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center mb-4">Team Core Competitiveness</h3>
          <p className="text-lg text-center text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {teamCompetitiveness}
          </p>
        </div>
      </div>
    </section>
  );
}
