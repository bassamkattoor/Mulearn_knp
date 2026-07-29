import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Flame, Users, Compass, Award, Zap, ChevronRight,
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
      <section className="relative flex flex-col items-center justify-center pt-4 sm:pt-10 pb-0 overflow-hidden">

        {/* Single subtle radial glow */}
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-violet-700/18 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-6 pb-2 sm:pb-4">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Soft aura behind logo */}
              <div className="absolute -inset-6 bg-gradient-to-r from-violet-600/30 via-indigo-500/20 to-lime-400/20 rounded-full blur-2xl pointer-events-none" />
              <img
                src="/mulearn-knp-logo-color.png"
                alt="µLearn KNP"
                className="relative h-20 sm:h-36 w-auto object-contain drop-shadow-[0_0_30px_rgba(124,58,237,0.45)]"
              />
            </motion.div>
          </motion.div>

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
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-slate-700 text-slate-300 font-semibold text-sm sm:text-base hover:border-slate-500 hover:text-white transition-all flex items-center justify-center space-x-2"
            >
              <span>Explore Chapter</span>
            </Link>
          </motion.div>
        </div>

        {/* 3D Characters */}
        <div className="relative w-full max-w-5xl mx-auto mt-6 sm:mt-10 px-4 flex justify-center items-end">
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-violet-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />
          <div className="relative z-10 w-full max-w-3xl">
            <img
              src="/mulearn-hero-characters.png"
              alt="µLearn Student Community"
              className="w-full h-auto object-contain mix-blend-screen drop-shadow-[0_16px_40px_rgba(124,58,237,0.25)]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
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
