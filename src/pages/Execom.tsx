import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/layout/SectionHeader';
import MemberCard from '../components/ui/MemberCard';
import teamData from '../content/team.json';
import type { Member } from '../types';

export default function Execom() {
  const leads = (teamData as Member[]).filter(m => m.year !== 'Faculty');
  const faculty = (teamData as Member[]).filter(m => m.year === 'Faculty');

  return (
    <div className="min-h-screen flex flex-col bg-background text-textMain pt-20">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 text-center">
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
            <h1 className="text-5xl sm:text-7xl font-display font-black text-white tracking-tight leading-tight">
              The people <br />
              <span className="gradient-text-animated">behind KNP.</span>
            </h1>
            <p className="text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              Student builders who lead from the front — organizing, mentoring, and shipping alongside everyone else.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">

          {/* Student Leads */}
          <section className="section-glow">
            <SectionHeader eyebrow="Core Team" title="Student Executive Committee" centered />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leads.map(m => <MemberCard key={m.id} member={m} />)}
            </div>
          </section>

          {/* Faculty Anchor */}
          {faculty.length > 0 && (
            <section className="section-glow">
              <SectionHeader eyebrow="Institutional Support" title="Faculty Anchor" centered />
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  {faculty.map(m => <MemberCard key={m.id} member={m} />)}
                </div>
              </div>
            </section>
          )}

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
