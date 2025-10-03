import { teamMembers, teamCompetitiveness } from '@/data/team';
import TeamMember from './TeamMember';
import { Sparkles } from 'lucide-react';

export default function TeamGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>

        {/* Team Strengths */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 md:p-12 border-2 border-gray-200">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-br from-immer-blue to-immer-purple p-4 rounded-full">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
            World-Class Expertise
          </h3>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {teamCompetitiveness}
          </p>
        </div>
      </div>
    </section>
  );
}
