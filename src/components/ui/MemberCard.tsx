import { useState } from 'react';
import { ExternalLink, GitBranch, Link, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Member } from '../../types';
import IKImage from './IKImage';

interface MemberCardProps {
  member: Member;
}

// Role-based accent colours so each card has its own character
const roleAccent: Record<string, { border: string; glow: string; badge: string; badgeText: string }> = {
  'Campus Lead':             { border: 'border-violet-500/40',  glow: 'rgba(139,92,246,0.18)',  badge: 'from-violet-600 to-indigo-600',  badgeText: 'text-violet-200' },
  'Campus Co-Lead':          { border: 'border-sky-500/40',     glow: 'rgba(56,189,248,0.18)',  badge: 'from-sky-600 to-blue-600',       badgeText: 'text-sky-200' },
  'Tech Lead':               { border: 'border-lime-500/40',    glow: 'rgba(163,230,53,0.18)',  badge: 'from-lime-600 to-emerald-600',   badgeText: 'text-lime-200' },
  'Creative Lead':           { border: 'border-pink-500/40',    glow: 'rgba(236,72,153,0.18)',  badge: 'from-pink-600 to-rose-600',      badgeText: 'text-pink-200' },
  'Outreach Lead':           { border: 'border-amber-500/40',   glow: 'rgba(245,158,11,0.18)',  badge: 'from-amber-500 to-orange-500',   badgeText: 'text-amber-200' },
  'Student Coordinator Lead':{ border: 'border-emerald-500/40', glow: 'rgba(16,185,129,0.18)',  badge: 'from-emerald-600 to-teal-600',   badgeText: 'text-emerald-200' },
  'UI/UX IG Lead':           { border: 'border-cyan-500/40',    glow: 'rgba(6,182,212,0.18)',   badge: 'from-cyan-600 to-sky-600',       badgeText: 'text-cyan-200' },
  'Web IG Lead':             { border: 'border-indigo-500/40',  glow: 'rgba(99,102,241,0.18)',  badge: 'from-indigo-600 to-violet-600',  badgeText: 'text-indigo-200' },
  'Gaming IG Lead':          { border: 'border-orange-500/40',  glow: 'rgba(249,115,22,0.18)',  badge: 'from-orange-600 to-red-600',     badgeText: 'text-orange-200' },
};

const fallbackAccent = { border: 'border-slate-600/40', glow: 'rgba(148,163,184,0.12)', badge: 'from-slate-600 to-slate-700', badgeText: 'text-slate-300' };

// Placeholder when SVG is not yet available
function InitialsPlaceholder({ name, accent }: { name: string; accent: typeof fallbackAccent }) {
  const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return (
    <div className={`w-full h-full flex items-end justify-center bg-gradient-to-b from-slate-800/60 to-slate-900`}>
      <div className={`mb-6 w-24 h-24 rounded-full bg-gradient-to-br ${accent.badge} flex items-center justify-center text-3xl font-display font-black text-white shadow-xl`}>
        {initials}
      </div>
    </div>
  );
}

export default function MemberCard({ member }: MemberCardProps) {
  const [showBio, setShowBio] = useState(false);
  const accent = roleAccent[member.role] ?? fallbackAccent;
  const hasSvg = !!member.image;

  return (
    <div
      className={`group relative flex flex-col rounded-3xl overflow-hidden border ${accent.border} bg-slate-900/60 backdrop-blur-sm cursor-pointer select-none transition-all duration-300 hover:-translate-y-1`}
      style={{ boxShadow: `0 0 0 0px transparent`, transition: 'box-shadow 0.3s, transform 0.3s' }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 40px ${accent.glow}, 0 8px 32px rgba(0,0,0,0.5)`)}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0 0px transparent`)}
      onClick={() => setShowBio(v => !v)}
    >

      {/* ── Photo area ── */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#0d0d1a]">

        {/* Subtle radial glow behind the person */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 80%, ${accent.glow}, transparent 80%)`,
          }}
        />

        {/* Dot grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />

        {/* Gradient fade at bottom so image blends into card content */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10 pointer-events-none" />

        {hasSvg ? (
          <IKImage
            src={member.image}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.04]"
            width={400}
            quality={85}
          />
        ) : (
          <InitialsPlaceholder name={member.name} accent={accent} />
        )}

        {/* Role badge pinned to bottom of image area, overlapping the fade */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
          <span className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${accent.badge} text-[10px] font-black uppercase tracking-widest ${accent.badgeText} shadow-lg whitespace-nowrap`}>
            {member.role}
          </span>
        </div>
      </div>

      {/* ── Info area ── */}
      <div className="flex flex-col items-center text-center px-4 pb-5 pt-2 gap-1">
        <h3 className="font-display font-black text-white text-base leading-tight mt-1">{member.name}</h3>
        <p className="text-[11px] text-slate-400 font-medium">{member.year} · {member.department}</p>

        {/* Bio (toggle) */}
        <div className={`overflow-hidden transition-all duration-300 ${showBio ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
          <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-3 px-1">{member.bio}</p>
        </div>

        {/* Social links */}
        {(member.socials?.linkedin || member.socials?.github || member.socials?.instagram || member.socials?.portfolio) && (
          <div className="flex items-center justify-center flex-wrap gap-2 mt-3">
            {member.socials.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
                title="LinkedIn"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {member.socials.github && (
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                title="GitHub"
              >
                <GitBranch className="w-3.5 h-3.5" />
              </a>
            )}
            {member.socials.instagram && (
              <a
                href={member.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-pink-400 hover:border-pink-500/40 transition-all"
                title="Instagram"
              >
                <Link className="w-3.5 h-3.5" />
              </a>
            )}
            {member.socials.portfolio && (
              <a
                href={member.socials.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-lime-400 hover:border-lime-500/40 transition-all"
                title="Portfolio"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
