import { useState } from 'react';
import { Globe, Share2, ChevronDown, ChevronUp } from 'lucide-react';
import type { Member } from '../../types';

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="glass-card rounded-2xl p-5 relative overflow-hidden group hover:border-violet-500/30 transition-all cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      {/* BG glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Avatar with ring */}
        <div className="relative mb-4">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-sky-500 opacity-50 group-hover:opacity-100 blur-sm transition-opacity" />
          <img
            src={member.image}
            alt={member.name}
            className="relative w-20 h-20 rounded-full border-2 border-slate-800 object-cover"
          />
        </div>

        {/* Name & Role */}
        <h3 className="font-display font-bold text-base text-white">{member.name}</h3>
        <span className="inline-block mt-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-violet-500/10 border border-violet-500/25 text-violet-300 uppercase tracking-wider">
          {member.role}
        </span>
        <p className="text-[11px] text-slate-500 mt-1">{member.department} · {member.year}</p>

        {/* Bio (expand) */}
        {expanded && (
          <p className="text-xs text-slate-400 mt-3 leading-relaxed border-t border-slate-800 pt-3">
            {member.bio}
          </p>
        )}

        {/* Social Links */}
        <div className="flex items-center space-x-2 mt-4">
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              title="GitHub Profile"
            >
              <Globe className="w-4 h-4" />
            </a>
          )}
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-all"
              title="LinkedIn Profile"
            >
              <Share2 className="w-4 h-4" />
            </a>
          )}
          <button
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-violet-400 hover:border-violet-500/30 transition-all"
            onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
