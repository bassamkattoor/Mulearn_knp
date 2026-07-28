import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/layout/SectionHeader';
import MemberCard from '../components/ui/MemberCard';
import teamData from '../content/team.json';
import type { Member } from '../types';
import { Star } from 'lucide-react';

export default function Execom() {
  const all = teamData as Member[];
  const faculty = all.filter(m => m.year === 'Faculty');
  const coreLeads = all.filter(m => ['Campus Lead', 'Campus Co-Lead', 'Tech Lead'].includes(m.role));
  const otherLeads = all.filter(m => !['Campus Lead', 'Campus Co-Lead', 'Tech Lead'].includes(m.role) && m.year !== 'Faculty');

  return (
    <div className="min-h-screen flex flex-col bg-background text-textMain pt-14 sm:pt-20">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 sm:py-24 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-indigo-700/20 rounded-full blur-[100px] pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(99,102,241,0.06) 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[11px] font-bold uppercase tracking-widest text-violet-300">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span>Leadership Team</span>
            </span>
            <h1 className="text-4xl sm:text-7xl font-display font-black text-white tracking-tight leading-tight">
              The people <br />
              <span className="gradient-text-animated">behind KNP.</span>
            </h1>
            <p className="text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              Student builders who lead from the front — organizing, mentoring, and shipping alongside everyone else.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">

          {/* Campus Enabler — Featured at top */}
          {faculty.map(m => (
            <section key={m.id} className="section-glow">
              <SectionHeader eyebrow="Institutional Support" title="Campus Enabler" centered />
              <div className="flex justify-center">
                <div className="relative glass-card rounded-3xl p-6 sm:p-8 border border-indigo-500/30 shadow-[0_0_40px_rgba(99,102,241,0.12)] max-w-sm w-full text-center">
                  {/* Special badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center space-x-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-[11px] font-bold shadow-lg shadow-indigo-600/30">
                    <Star className="w-3 h-3" />
                    <span>Faculty Guide</span>
                  </div>
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-indigo-500/40 object-cover"
                  />
                  <h3 className="font-display font-black text-white text-xl">{m.name}</h3>
                  <p className="text-indigo-400 font-semibold text-sm mt-1">{m.role}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{m.department}</p>
                  <p className="text-slate-400 text-xs leading-relaxed mt-3 px-2">{m.bio}</p>
                  {m.socials?.linkedin && (
                    <a
                      href={m.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 mt-4 px-4 py-1.5 rounded-full bg-slate-800/60 border border-slate-700 text-xs text-slate-300 hover:border-indigo-500/40 hover:text-white transition-all"
                    >
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </section>
          ))}

          {/* Core Leadership — Campus Lead, Co-Lead, Tech Lead */}
          <section className="section-glow">
            <SectionHeader eyebrow="Core Leadership" title="Campus Leads" centered />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {coreLeads.map(m => <MemberCard key={m.id} member={m} />)}
            </div>
          </section>

          {/* IG & Ops Leads */}
          <section className="section-glow">
            <SectionHeader eyebrow="Operations & Interest Groups" title="Executive Committee" centered />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherLeads.map(m => <MemberCard key={m.id} member={m} />)}
            </div>
          </section>

          {/* Open positions CTA */}
          <section className="glass-card p-8 sm:p-12 rounded-3xl border border-violet-500/20 text-center relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto space-y-4">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/25 text-[11px] font-bold uppercase tracking-widest text-lime-300">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                <span>Now Recruiting</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
                Want to lead? Apply now.
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Applications for Interest Group Leads and Operations roles for 2026-27 are open. Reach Level 4 and show us your proof of work.
              </p>
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center space-x-2 mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-violet-600/25"
              >
                <span>Apply on Discord</span>
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
