import { User, Sparkles } from 'lucide-react';
import { TeamMember as TeamMemberType } from '@/data/team';

interface TeamMemberProps {
  member: TeamMemberType;
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-immer-blue transition-all p-8 h-full flex flex-col">
      {/* Avatar */}
      <div className="bg-gradient-to-br from-immer-blue to-immer-purple p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
        <User className="w-12 h-12 text-white" />
      </div>

      {/* Name & Title */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-lg font-semibold text-immer-orange">{member.title}</p>
      </div>

      {/* Description */}
      <div className="mb-6 flex-grow">
        <p className="text-gray-600 leading-relaxed text-center">{member.description}</p>
      </div>

      {/* Expertise Tags */}
      <div className="mt-auto">
        <div className="flex items-center justify-center space-x-2 mb-3">
          <Sparkles className="w-4 h-4 text-immer-orange" />
          <h4 className="font-semibold text-gray-900 text-sm">Core Expertise</h4>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {member.expertise.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-br from-blue-50 to-purple-50 text-immer-navy text-sm font-medium rounded-full border border-gray-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
