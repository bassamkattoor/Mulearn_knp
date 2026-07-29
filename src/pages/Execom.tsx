import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import MemberCard from '../components/ui/MemberCard';
import teamData from '../content/team.json';
import type { Member } from '../types';
import { Star, ExternalLink } from 'lucide-react';

import { useState, useEffect } from 'react';

export default function Execom() {
  const [all, setAll] = useState<Member[]>(teamData as Member[]);

  useEffect(() => {
    const localData = localStorage.getItem('mulearn_knp_team');
    if (localData) {
      setAll(JSON.parse(localData));
    }
  }, []);

  const faculty = all.filter(m => m.year === 'Faculty');
  const studentLeads = all.filter(m => m.year !== 'Faculty');

  return (
    <div className="min-h-screen flex flex-col bg-background text-textMain pt-14 sm:pt-20">
      <Navbar />

      <main className="flex-grow">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-16 sm:py-24 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-72 bg-indigo-700/20 rounded-full blur-[120px] pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(99,102,241,0.06) 1px, transparent 1px)',
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">

          {/* ── Campus Enabler ── */}
          {faculty.map(m => (
            <section key={m.id}>
              <div className="flex flex-col items-center text-center mb-10 space-y-2">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-bold uppercase tracking-widest text-indigo-300">
                  Institutional Support
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-black text-white">Campus Enabler</h2>
              </div>

              {/* Featured enabler card — horizontal, wider */}
              <div className="max-w-2xl mx-auto">
                <div className="relative glass-card rounded-3xl overflow-hidden border border-indigo-500/30 shadow-[0_0_60px_rgba(99,102,241,0.15)] flex flex-col sm:flex-row">

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-20 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-[11px] font-bold shadow-lg shadow-indigo-600/30">
                    <Star className="w-3 h-3" />
                    <span>Faculty Guide</span>
                  </div>

                  {/* Photo */}
                  <div className="relative w-full sm:w-64 flex-shrink-0 aspect-[3/4] sm:aspect-auto sm:h-72 overflow-hidden bg-gradient-to-b from-slate-800/40 to-slate-950">
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent z-10 sm:hidden pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10 hidden sm:block pointer-events-none" />
                    {m.image ? (
                      <img
                        src={m.image}
                        alt={m.name}
                        className="absolute inset-0 w-full h-full object-contain object-bottom sm:object-center"
                        style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.6))' }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-3xl font-display font-black text-white">
                          {m.name.split(' ').slice(0, 2).map((w: string) => w[0]).join('')}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-center px-8 py-8 space-y-3">
                    <div>
                      <h3 className="font-display font-black text-white text-2xl">{m.name}</h3>
                      <p className="text-indigo-400 font-semibold text-sm mt-1">{m.role}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{m.department}</p>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{m.bio}</p>
                    {m.socials?.linkedin && (
                      <a
                        href={m.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 w-fit mt-2 px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 hover:border-sky-500/40 hover:text-sky-300 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* ── Executive Committee ── */}
          <section>
            <div className="flex flex-col items-center text-center mb-10 space-y-2">
              <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[11px] font-bold uppercase tracking-widest text-violet-300">
                Chapter Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white">Executive Committee</h2>
              <p className="text-sm text-slate-500 max-w-md">Click any card to read their story. Hover to see the magic.</p>
            </div>

            <div className="grid grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
              {studentLeads.map(m => <MemberCard key={m.id} member={m} />)}
            </div>
          </section>

          {/* ── Open positions CTA ── */}
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
