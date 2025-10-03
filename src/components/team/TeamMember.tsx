import { User, GraduationCap, Briefcase } from 'lucide-react';
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
        <p className="text-lg font-semibold text-immer-orange mb-1">{member.title}</p>
        {member.founderStory && (
          <p className="text-sm text-gray-600 italic mt-4 leading-relaxed">{member.founderStory}</p>
        )}
      </div>

      {/* Experience */}
      <div className="mb-6 flex-grow">
        <div className="flex items-center space-x-2 mb-3">
          <Briefcase className="w-5 h-5 text-immer-blue" />
          <h4 className="font-semibold text-gray-900">Experience</h4>
        </div>
        <ul className="space-y-2">
          {member.experience.map((exp, index) => (
            <li key={index} className="text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-gray-200">
              {exp}
            </li>
          ))}
        </ul>
      </div>

      {/* Education */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <GraduationCap className="w-5 h-5 text-immer-purple" />
          <h4 className="font-semibold text-gray-900">Education</h4>
        </div>
        <p className="text-sm text-gray-600 pl-4 border-l-2 border-gray-200">{member.education}</p>
      </div>
    </div>
  );
}
