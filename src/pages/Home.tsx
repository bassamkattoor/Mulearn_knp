import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Flame, Users, Compass, Award, Zap,
  ChevronRight, ChevronDown, Sparkles, Atom, Terminal, Info,
} from 'lucide-react';
import IKImage from '../components/ui/IKImage';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/layout/SectionHeader';
import CTABand from '../components/layout/CTABand';
import StatCounter from '../components/ui/StatCounter';
import EventCard from '../components/ui/EventCard';

import aboutData from '../content/about.json';
import eventsData from '../content/events.json';
import type { Event } from '../types';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as number[] },
  }),
};

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
    <div className="flex flex-col bg-background text-textMain overflow-x-hidden">
      <Navbar />

      {/* ══════════════════════════════════════════
          SECTION 1 — FULLSCREEN LOGO INTRO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#05050f]">

        {/* Asymmetric depth glow — left dominant, right softer */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-15%] w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] bg-violet-700/30 rounded-full blur-[120px]" />
          <div className="absolute top-[5%] right-[-10%] w-[50vw] h-[50vw] max-w-[420px] max-h-[420px] bg-indigo-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-5%] left-[20%] w-[40vw] h-[40vw] max-w-[300px] max-h-[300px] bg-violet-900/20 rounded-full blur-[90px]" />
        </div>

        {/* Very subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124,58,237,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* ── Centered logo stack ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center gap-5"
        >
          {/* Logo — dominant */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Soft halo directly behind logo */}
            <div className="absolute inset-0 -m-8 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
            <IKImage
              src="/site/mulearn-knp-logo-color.png"
              alt="µLearn KNP"
              className="relative z-10 w-[72vw] max-w-[360px] sm:max-w-[420px] lg:max-w-[500px] h-auto object-contain drop-shadow-[0_0_40px_rgba(124,58,237,0.6)]"
              width={500}
              quality={90}
            />
          </motion.div>

          {/* Subtitle — small caps, airy tracking */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 text-center"
          >
            Campus Chapter &nbsp;·&nbsp; CE Karunagappally
          </motion.p>

          {/* Chapter badge pill */}
          <motion.a
            href="https://mulearn.org"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-medium text-slate-300 hover:border-indigo-500/40 hover:text-white transition-all group backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse shrink-0" />
            µLearn KNP · Official Campus Chapter
            <ChevronRight className="w-3 h-3 text-slate-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </motion.a>

          {/* Scroll indicator — close to content, not floating at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex flex-col items-center gap-1.5 mt-8 text-slate-600"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.3em]">scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>


      {/* ══════════════════════════════════════════
          SECTION 2 — HERO CONTENT (scroll-reveal)
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#05050f] via-[#090915] to-background pt-8 pb-0">

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5 sm:space-y-7 pb-4">

          {/* Chapter badge */}


          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.1}
            className="text-4xl sm:text-6xl lg:text-8xl font-display font-black leading-[1.06] tracking-tight text-white"
          >
            Break the<br />
            <span className="gradient-text-animated">Echo Chamber.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.2}
            className="text-lg sm:text-2xl font-display font-semibold text-slate-300 tracking-tight"
          >
            Build <span className="text-lime-400 font-bold">proof of work</span> — not certificates.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.28}
            className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed"
          >
            The official peer-to-peer learning community at{' '}
            <span className="text-slate-200 font-medium">College of Engineering Karunagappally</span>.
          </motion.p>


          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.34}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2"
          >
            {/* Primary — full width on mobile */}
            <Link
              to="/join"
              className="btn-glow w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-violet-600/30 flex items-center justify-center gap-2 pulse-ring"
            >
              Join µLearn KNP
              <ArrowRight className="w-4 h-4" />
            </Link>
            {/* Secondary — ghost, smaller, auto-width */}
            <Link
              to="/about"
              className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1.5 py-2"
            >
              Explore Chapter
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* 3D Characters + floating badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          custom={0.3}
          className="relative w-full max-w-6xl mx-auto mt-10 px-4 flex justify-center items-end"
        >
          <div className="absolute inset-x-12 bottom-0 h-64 bg-gradient-to-t from-violet-600/25 via-indigo-600/15 to-transparent blur-3xl pointer-events-none" />

          {/* Floating pill badges — desktop only */}
          <div className="absolute top-4 left-4 sm:left-12 z-20 hidden sm:flex items-center space-x-2 px-3.5 py-2 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-lime-500/40 shadow-xl text-xs font-bold text-lime-300 animate-float" style={{ animationDelay: '0s' }}>
            <Sparkles className="w-4 h-4 text-lime-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>+100 Karma Earned</span>
          </div>
          <div className="absolute top-12 right-4 sm:right-16 z-20 hidden sm:flex items-center space-x-2 px-3.5 py-2 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-violet-500/40 shadow-xl text-xs font-bold text-violet-300 animate-float" style={{ animationDelay: '-2s' }}>
            <Award className="w-4 h-4 text-violet-400" />
            <span>Level 4 Domain Unlocked</span>
          </div>
          <div className="absolute bottom-20 left-6 sm:left-24 z-20 hidden md:flex items-center space-x-2 px-3.5 py-2 bg-slate-950/85 backdrop-blur-md rounded-2xl border border-indigo-500/40 shadow-xl text-xs font-semibold text-white animate-float" style={{ animationDelay: '-4s' }}>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>320+ KNP Builders</span>
          </div>
          <div className="absolute bottom-28 right-6 sm:right-28 z-20 hidden md:flex items-center space-x-2 px-3.5 py-2 bg-slate-950/85 backdrop-blur-md rounded-2xl border border-sky-500/40 shadow-xl text-xs font-semibold text-sky-300 animate-float" style={{ animationDelay: '-1s' }}>
            <Terminal className="w-4 h-4 text-sky-400" />
            <span>Peer Code Reviews</span>
          </div>

          {/* Characters float freely — no box */}
          <IKImage
            src="/site/mulearn-hero-characters.png"
            alt="µLearn Official Student Community 3D Characters"
            className="relative z-10 w-full max-w-4xl h-auto object-contain mix-blend-screen drop-shadow-[0_20px_60px_rgba(124,58,237,0.35)] hover:scale-[1.01] transition-transform duration-700"
            width={900}
          />
          {/* Fade into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-20" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — STATS BAR
      ══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="flex items-center justify-center space-x-2 mb-10"
          >
            <Flame className="w-4 h-4 text-accent animate-pulse" />
            <span className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">Chapter Pulse</span>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: aboutData.stats.members, label: 'Active Members', suffix: '+' },
              { value: aboutData.stats.karmaEarned, label: 'Karma Earned', suffix: '+' },
              { value: aboutData.stats.eventsHeld, label: 'Events Hosted', suffix: '+' },
              { value: aboutData.stats.activeIGs, label: 'Interest Groups' },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={i * 0.08}
              >
                <StatCounter value={s.value} label={s.label} suffix={s.suffix} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-20 pb-24">

        {/* ══════════════════════════════════════════
            SECTION 4 — WHAT µLEARN OFFERS
        ══════════════════════════════════════════ */}
        <section>
          <SectionHeader eyebrow="Ecosystem" title="What µLearn Offers" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {offers.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={idx * 0.08}
                className="glass-card p-6 rounded-2xl group hover:border-slate-600/60 transition-all"
              >
                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${item.color} mb-4 shadow-md group-hover:scale-105 transition-transform`}>
                  <span className="text-slate-950">{item.icon}</span>
                </div>
                <h3 className="font-display font-bold text-base text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 5 — UPCOMING EVENTS
        ══════════════════════════════════════════ */}
        {upcomingEvents.length > 0 && (
          <section>
            <SectionHeader
              eyebrow="Happenings"
              title="Upcoming Events"
              ctaText="View All Events"
              ctaLink="/events"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {upcomingEvents.map((ev, i) => (
                <motion.div
                  key={ev.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={i * 0.1}
                >
                  <EventCard event={ev} variant="upcoming" />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
        >
          <CTABand
            title="Ready to join µLearn KNP?"
            subtitle="Start building your proof-of-work portfolio with peers today."
            ctaText="Join µLearn KNP Now"
            ctaLink="/join"
          />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
