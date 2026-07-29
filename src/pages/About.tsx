import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/layout/SectionHeader';
import CTABand from '../components/layout/CTABand';
import StatCounter from '../components/ui/StatCounter';
import { Heart, Eye, Globe, Sparkles } from 'lucide-react';
import aboutData from '../content/about.json';

import { useState, useEffect } from 'react';

export default function About() {
  const [data, setData] = useState(aboutData);

  useEffect(() => {
    const localData = localStorage.getItem('mulearn_knp_about');
    if (localData) {
      setData(JSON.parse(localData));
    }
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-background text-textMain pt-20">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-violet-700/20 rounded-full blur-[100px] pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(124,58,237,0.06) 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-5">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[11px] font-bold uppercase tracking-widest text-violet-300">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span>About µLearn KNP</span>
            </span>
            <h1 className="text-5xl sm:text-7xl font-display font-black text-white tracking-tight leading-tight">
              We are peer<br />
              <span className="gradient-text-animated">builders.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Not a club. Not a lecture room. µLearn KNP is a living proof-of-work ecosystem where students build real skills by helping each other grow.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">

          {/* Stats */}
          <section className="section-glow grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCounter value={data.stats.members} label="Active Members" suffix="+" />
            <StatCounter value={data.stats.karmaEarned} label="Karma Points Earned" suffix="+" />
            <StatCounter value={data.stats.eventsHeld} label="Events Hosted" suffix="+" />
            <StatCounter value={data.stats.activeIGs} label="Interest Groups" />
          </section>

          {/* What is µLearn */}
          <section className="section-glow grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <SectionHeader eyebrow="The National Movement" title="What is µLearn?" />
              <p className="text-slate-400 text-sm leading-relaxed">{data.mulearnNational}</p>
              <a
                href="https://mulearn.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-indigo-500/30 text-indigo-300 text-xs font-semibold hover:border-indigo-400/60 hover:text-white transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>Visit mulearn.org</span>
              </a>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-indigo-500/20 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
              <Sparkles className="w-8 h-8 text-violet-400 mb-2" />
              <blockquote className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
                "Break the echo chamber. Build proof of work."
              </blockquote>
              <p className="text-slate-500 text-sm">— The µLearn Ethos</p>
            </div>
          </section>

          {/* KNP Story */}
          <section className="section-glow glass-card p-8 sm:p-12 rounded-3xl border border-slate-800/60">
            <SectionHeader eyebrow="Our Story" title="The KNP Chapter" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">{data.cekStory}</p>
          </section>

          {/* Vision & Mission */}
          <section className="section-glow grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-2xl border border-violet-500/20 relative overflow-hidden group hover:border-violet-500/40 transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl shadow-lg">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">Our Vision</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{data.vision}</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-sky-500/20 relative overflow-hidden group hover:border-sky-500/40 transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-sky-600 to-blue-600 rounded-xl shadow-lg">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">Our Mission</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{data.mission}</p>
            </div>
          </section>

          {/* Values */}
          <section className="section-glow">
            <SectionHeader eyebrow="Core Values" title="What We Stand For" centered />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.values.map((val, i) => {
                const colors = ['from-violet-600 to-indigo-600', 'from-sky-600 to-blue-600', 'from-lime-500 to-emerald-500'];
                const glows = ['bg-violet-600/10', 'bg-sky-600/10', 'bg-lime-500/10'];
                return (
                  <div key={i} className="glass-card p-8 rounded-2xl text-center group hover:border-violet-500/25 transition-all relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-40 h-40 ${glows[i]} rounded-full blur-3xl pointer-events-none`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[i]} flex items-center justify-center mx-auto mb-5 shadow-xl font-display font-black text-xl text-white`}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-3">{val.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{val.definition}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <CTABand />
        </div>
      </main>

      <Footer />
    </div>
  );
}
