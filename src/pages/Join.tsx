import { Link } from 'react-router-dom';
import { MessageSquare, Send, ArrowRight, Compass, Shield, Terminal, Code, Award, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/layout/SectionHeader';

export default function Join() {
  const levels = [
    {
      level: 'L1',
      title: 'Onboarding & Fundamentals',
      icon: <Terminal className="w-5 h-5 text-lime-400" />,
      gradient: 'from-lime-600 to-emerald-600',
      glow: 'shadow-lime-600/20',
      tasks: 'Setup Discord profile, introduce yourself, configure Git & GitHub account.',
      reward: '+100 Karma',
    },
    {
      level: 'L2',
      title: 'Developer Workflows',
      icon: <Code className="w-5 h-5 text-indigo-400" />,
      gradient: 'from-indigo-600 to-violet-600',
      glow: 'shadow-indigo-600/20',
      tasks: 'Learn Markdown, basic CLI commands, and make your first open-source commit.',
      reward: '+300 Karma',
    },
    {
      level: 'L3',
      title: 'Building & Peer Review',
      icon: <Shield className="w-5 h-5 text-sky-400" />,
      gradient: 'from-sky-600 to-blue-600',
      glow: 'shadow-sky-600/20',
      tasks: 'Build a static webpage, host it on GitHub Pages, and peer-review another builder\'s code.',
      reward: '+600 Karma',
    },
    {
      level: 'L4',
      title: 'Interest Group Unlock',
      icon: <Compass className="w-5 h-5 text-amber-400" />,
      gradient: 'from-amber-500 to-orange-500',
      glow: 'shadow-amber-500/20',
      tasks: 'Unlock specialized domain communities: UI/UX, Web Dev, Cyber, Game Dev, IoT, Product, AI.',
      reward: 'Unlock Domain IGs',
    },
  ];

  const interestGroups = [
    { name: 'UI/UX Design', color: 'text-pink-400 border-pink-500/30 bg-pink-500/5' },
    { name: 'Web Development', color: 'text-sky-400 border-sky-500/30 bg-sky-500/5' },
    { name: 'Cybersecurity & CTF', color: 'text-red-400 border-red-500/30 bg-red-500/5' },
    { name: 'Game Development', color: 'text-amber-400 border-amber-500/30 bg-amber-500/5' },
    { name: 'IoT & Robotics', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' },
    { name: 'Cloud & DevOps', color: 'text-orange-400 border-orange-500/30 bg-orange-500/5' },
    { name: 'AI / ML', color: 'text-violet-400 border-violet-500/30 bg-violet-500/5' },
    { name: 'Product Management', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' },
    { name: 'Entrepreneurship', color: 'text-lime-400 border-lime-500/30 bg-lime-500/5' },
    { name: 'AR / VR', color: 'text-blue-400 border-blue-500/30 bg-blue-500/5' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-textMain pt-20">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-60 bg-violet-700/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="mesh-gradient w-96 h-96 bg-indigo-700/20 top-0 left-0" style={{ animationDelay: '-3s' }} />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(124,58,237,0.06) 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-[11px] font-bold uppercase tracking-widest text-lime-300">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              <span>Freshers 2026 Special</span>
            </span>
            <h1 className="text-5xl sm:text-7xl font-display font-black text-white tracking-tight leading-tight">
              Start your<br />
              <span className="gradient-text-animated">builder journey.</span>
            </h1>
            <p className="text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              No prior coding experience required. We guide you step-by-step from zero to shipping real projects alongside student peers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-violet-600/30 flex items-center justify-center space-x-2.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Join Discord Community</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/20 flex items-center justify-center space-x-2.5 transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>KNP WhatsApp Group</span>
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">

          {/* Level Progression */}
          <section className="section-glow">
            <SectionHeader eyebrow="Your Roadmap" title="Level 1 → 4 Progression" centered />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
              {/* Connector line on desktop */}
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-lime-600/40 via-violet-500/40 to-amber-500/40 pointer-events-none" />

              {levels.map((item, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl flex flex-col relative overflow-hidden group hover:border-violet-500/30 transition-all">
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${item.gradient} pointer-events-none`} />
                  <div className="flex items-center justify-between mb-5">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg ${item.glow}`}>
                      <span className="font-display font-black text-white text-xs">{item.level}</span>
                    </div>
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed flex-grow">{item.tasks}</p>
                  <div className="flex items-center space-x-1.5 mt-4 pt-4 border-t border-slate-800/60 text-xs font-bold text-lime-400">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.reward}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interest Groups */}
          <section className="section-glow glass-card p-8 sm:p-12 rounded-3xl border border-indigo-500/20">
            <SectionHeader eyebrow="Level 4 Unlocks" title="Choose Your Domain" />
            <p className="text-sm text-slate-400 mb-6 -mt-4 max-w-2xl">
              Once you complete Level 4 tasks, you get full access to specialized Interest Groups led by senior mentors across 10+ tech domains.
            </p>
            <div className="flex flex-wrap gap-3">
              {interestGroups.map((ig, i) => (
                <span
                  key={i}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl border text-xs font-semibold transition-all hover:scale-105 cursor-default ${ig.color}`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 opacity-70" />
                  <span>{ig.name}</span>
                </span>
              ))}
            </div>
          </section>

          {/* Final action */}
          <section className="relative overflow-hidden rounded-3xl p-8 sm:p-16 text-center">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-violet-700/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-indigo-700/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/5 to-indigo-600/5" />
            <div className="relative z-10 max-w-xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-5xl font-display font-black text-white">
                Ready? Let's build.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Join the µLearn KNP Discord server, complete the onboarding task, and earn your first 100 Karma points today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-violet-600/30 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Join Discord Onboarding</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  to="/about"
                  className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-sm hover:border-violet-500/40 hover:text-white transition-all flex items-center justify-center space-x-2"
                >
                  <span>Learn More About KNP</span>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
