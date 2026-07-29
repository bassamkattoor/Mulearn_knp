import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Flame, Users, Compass, Award, Zap,
  ChevronRight, Sparkles, Atom, Terminal, Info,
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/layout/SectionHeader';
import CTABand from '../components/layout/CTABand';
import StatCounter from '../components/ui/StatCounter';
import EventCard from '../components/ui/EventCard';

import aboutData from '../content/about.json';
import eventsData from '../content/events.json';
import type { Event } from '../types';

export default function Home() {
  const upcomingEvents = (eventsData.upcoming as Event[]).slice(0, 2);

  const offers = [
    {
      icon: <Award className="w-5 h-5" />,
      color: 'from-lime-400 to-emerald-400',
      title: 'Karma Points',
      description: 'Gamified proof-of-work. Level up by shipping code, writing docs, and completing tasks that matter.',
    },
    {
      icon: <Users className="w-5 h-5" />,
      color: 'from-violet-400 to-indigo-400',
      title: 'Learning Circles',
      description: 'Small peer groups that meet weekly — 1 hour, no lectures, just builders helping each other grow.',
    },
    {
      icon: <Compass className="w-5 h-5" />,
      color: 'from-sky-400 to-blue-400',
      title: 'Interest Groups',
      description: 'Specialized domain communities in Web, Cyber, AI/ML, Design & IoT — unlocked at Level 4.',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      color: 'from-amber-400 to-orange-400',
      title: 'Peer Mentorship',
      description: 'Guidance from senior builders who have shipped real projects and climbed the karma ranks.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-textMain overflow-x-hidden pt-14 sm:pt-20">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center pt-2 sm:pt-8 pb-0 overflow-hidden bg-gradient-to-b from-[#06060e] via-[#0b0c1b] to-background">

        {/* Animated mesh blobs */}
        <div className="mesh-gradient w-[350px] h-[350px] sm:w-[650px] sm:h-[650px] bg-violet-700/20 top-[-100px] left-[-150px]" style={{ animationDelay: '0s' }} />
        <div className="mesh-gradient w-[300px] h-[300px] sm:w-[550px] sm:h-[550px] bg-blue-600/15 top-[80px] right-[-140px]" style={{ animationDelay: '-4s' }} />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124,58,237,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124,58,237,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-3 sm:space-y-6 pb-2 sm:pb-4">

          {/* Logo with full animated aura + orbiting widgets */}
          <div className="flex flex-col items-center justify-center pt-1 pb-2">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04 }}
              className="relative cursor-pointer transform-gpu"
            >
              {/* Rotating multi-color aura */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.75, 0.4],
                }}
                transition={{
                  rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute -inset-4 sm:-inset-10 bg-gradient-to-r from-purple-600 via-cyan-400 via-indigo-500 to-lime-400 rounded-full blur-xl sm:blur-3xl pointer-events-none transform-gpu"
              />

              {/* Orbiting Sparkle — top right */}
              <motion.div
                animate={{ x: [0, 14, 0, -14, 0], y: [0, -10, 0, 10, 0], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 z-30 p-1 sm:p-2 bg-slate-950/90 rounded-full border border-lime-400/70 shadow-lg text-lime-400 transform-gpu"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
              </motion.div>

              {/* Orbiting Atom — bottom left */}
              <motion.div
                animate={{ x: [0, -16, 0, 16, 0], y: [0, 10, 0, -10, 0], scale: [1, 0.8, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -left-3 sm:-bottom-4 sm:-left-4 z-30 p-1 sm:p-2 bg-slate-950/90 rounded-full border border-cyan-400/70 shadow-lg text-cyan-400 transform-gpu"
              >
                <Atom className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.div>

              {/* Floating logo */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 flex items-center justify-center transform-gpu"
              >
                <img
                  src="/mulearn-knp-logo-color.png"
                  alt="µLearn KNP Logo"
                  className="h-24 sm:h-44 w-auto object-contain drop-shadow-[0_0_35px_rgba(124,58,237,0.55)]"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Chapter badge */}
          <div className="flex justify-center">
            <a
              href="https://mulearn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/25 text-[11px] sm:text-xs font-medium text-indigo-200 hover:border-indigo-400/50 transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <span className="sm:hidden">µLearn KNP • CE Karunagappally</span>
              <span className="hidden sm:inline">µLearn KNP Campus Chapter • CE Karunagappally</span>
              <ChevronRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-6xl lg:text-7xl font-display font-black leading-[1.08] tracking-tight text-white"
          >
            Break the<br />
            <span className="gradient-text-animated">Echo Chamber.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl font-display font-semibold text-slate-300 tracking-tight"
          >
            Build <span className="text-lime-400 font-bold">proof of work.</span> Not certificates.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed"
          >
            The official peer-to-peer learning community at{' '}
            <span className="text-slate-200 font-medium">College of Engineering Karunagappally</span>.
          </motion.p>

          {/* Theory badge */}
          <div className="flex justify-center pt-1 sm:pt-0">
            <Link
              to="/theory"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-indigo-950/80 to-violet-950/80 border border-violet-500/25 text-[10px] sm:text-xs font-medium text-slate-300 hover:border-violet-400/50 hover:bg-indigo-900/40 transition-all shadow-md max-w-full"
            >
              <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
              <span className="truncate">Backed by Self-Determination Theory — Deci &amp; Ryan</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-400 shrink-0" />
            </Link>
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-1"
          >
            <Link
              to="/join"
              className="btn-glow w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-violet-600/25 flex items-center justify-center space-x-2 pulse-ring"
            >
              <span>Join µLearn KNP</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-indigo-500/30 bg-surface/60 backdrop-blur-md text-slate-200 font-semibold text-sm sm:text-base hover:border-indigo-400/60 hover:bg-surface/90 transition-all flex items-center justify-center space-x-2"
            >
              <Atom className="w-4 h-4 text-violet-400" />
              <span>Explore Chapter</span>
            </Link>
          </motion.div>
        </div>

        {/* 3D Characters with floating badges */}
        <div className="relative w-full max-w-6xl mx-auto mt-4 sm:mt-8 px-4 flex justify-center items-end">

          {/* Ambient glow */}
          <div className="absolute inset-x-12 bottom-0 h-64 bg-gradient-to-t from-violet-600/30 via-indigo-600/20 to-transparent blur-3xl pointer-events-none" />

          {/* Floating pill badges — desktop only */}
          <div className="absolute top-4 left-4 sm:left-12 z-20 hidden sm:flex items-center space-x-2 px-3.5 py-2 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-lime-500/40 shadow-xl text-xs font-bold text-lime-300 animate-float" style={{ animationDelay: '0s' }}>
            <Sparkles className="w-4 h-4 text-lime-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>+100 Karma Earned</span>
          </div>

          <div className="absolute top-12 right-4 sm:right-16 z-20 hidden sm:flex items-center space-x-2 px-3.5 py-2 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-violet-500/40 shadow-xl text-xs font-bold text-violet-300 animate-float" style={{ animationDelay: '-2s' }}>
            <Award className="w-4 h-4 text-violet-400" />
            <span>Level 4 Domain Unlocked</span>
          </div>

          <div className="absolute bottom-16 left-6 sm:left-24 z-20 hidden md:flex items-center space-x-2 px-3.5 py-2 bg-slate-950/85 backdrop-blur-md rounded-2xl border border-indigo-500/40 shadow-xl text-xs font-semibold text-white animate-float" style={{ animationDelay: '-4s' }}>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>320+ KNP Builders</span>
          </div>

          <div className="absolute bottom-24 right-6 sm:right-28 z-20 hidden md:flex items-center space-x-2 px-3.5 py-2 bg-slate-950/85 backdrop-blur-md rounded-2xl border border-sky-500/40 shadow-xl text-xs font-semibold text-sky-300 animate-float" style={{ animationDelay: '-1s' }}>
            <Terminal className="w-4 h-4 text-sky-400" />
            <span>Peer Code Reviews</span>
          </div>

          {/* Characters image */}
          <div className="relative z-10 w-full max-w-4xl hover:scale-[1.01] transition-transform duration-700">
            <img
              src="/mulearn-hero-characters.png"
              alt="µLearn Official Student Community 3D Characters"
              className="w-full h-auto object-contain mix-blend-screen drop-shadow-[0_20px_50px_rgba(124,58,237,0.3)]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 text-accent mb-8">
            <Flame className="w-4 h-4 animate-pulse" />
            <span className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">Chapter Pulse</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StatCounter value={aboutData.stats.members} label="Active Members" suffix="+" />
            <StatCounter value={aboutData.stats.karmaEarned} label="Karma Earned" suffix="+" />
            <StatCounter value={aboutData.stats.eventsHeld} label="Events Hosted" suffix="+" />
            <StatCounter value={aboutData.stats.activeIGs} label="Interest Groups" />
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-20 pb-24">

        {/* ── WHAT µLEARN OFFERS ── */}
        <section>
          <SectionHeader eyebrow="Ecosystem" title="What µLearn Offers" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {offers.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl group hover:border-slate-600/60 transition-all"
              >
                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${item.color} mb-4 shadow-md group-hover:scale-105 transition-transform`}>
                  <span className="text-slate-950">{item.icon}</span>
                </div>
                <h3 className="font-display font-bold text-base text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── UPCOMING EVENTS ── */}
        {upcomingEvents.length > 0 && (
          <section>
            <SectionHeader
              eyebrow="Happenings"
              title="Upcoming Events"
              ctaText="View All Events"
              ctaLink="/events"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {upcomingEvents.map((ev) => (
                <EventCard key={ev.id} event={ev} variant="upcoming" />
              ))}
            </div>
          </section>
        )}

        {/* ── FINAL CTA ── */}
        <CTABand
          title="Ready to join µLearn KNP?"
          subtitle="Start building your proof-of-work portfolio with peers today."
          ctaText="Join µLearn KNP Now"
          ctaLink="/join"
        />
      </div>

      <Footer />
    </div>
  );
}
