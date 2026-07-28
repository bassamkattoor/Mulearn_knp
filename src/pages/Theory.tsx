import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Brain, Heart, Zap, ExternalLink, ChevronRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const pillars = [
  {
    icon: <Brain className="w-7 h-7" />,
    color: 'from-violet-500 to-indigo-500',
    glow: 'rgba(124,58,237,0.2)',
    title: 'Autonomy',
    tagline: 'You choose your path.',
    description:
      'People thrive when they feel in control of their own learning. At µLearn KNP, there are no forced syllabi — you pick your domain, your pace, your projects.',
    mulearn: 'Choose your Interest Group (Web, AI, Cyber, Design, IoT). Build what you want. Karma follows effort, not attendance.',
  },
  {
    icon: <Zap className="w-7 h-7" />,
    color: 'from-amber-400 to-orange-500',
    glow: 'rgba(251,191,36,0.2)',
    title: 'Competence',
    tagline: 'Growth you can measure.',
    description:
      'Humans are intrinsically motivated to develop skills and master their environment. Progress that is visible and real builds confidence and keeps you going.',
    mulearn: 'Every task you complete earns Karma Points. Every level you reach unlocks new opportunities. Your skill growth is public, verifiable, and yours.',
  },
  {
    icon: <Heart className="w-7 h-7" />,
    color: 'from-rose-500 to-pink-500',
    glow: 'rgba(244,63,94,0.2)',
    title: 'Relatedness',
    tagline: 'You are not alone.',
    description:
      'Belonging to a community of peers who genuinely care is one of the strongest drivers of sustained motivation. Isolation kills learning; connection fuels it.',
    mulearn: 'Learning Circles meet weekly — small groups, no lecturing, just peer builders. Senior mentors who have been where you are guide the way.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Theory() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-textMain overflow-x-hidden pt-16 sm:pt-20">
      <Navbar />

      {/* ====== HERO BANNER ====== */}
      <section className="relative flex flex-col items-center justify-center py-16 sm:py-24 px-4 overflow-hidden bg-gradient-to-b from-[#06060e] via-[#0b0c1b] to-background text-center">
        {/* Mesh blobs */}
        <div className="mesh-gradient w-[500px] h-[500px] bg-violet-700/20 top-[-80px] left-[-150px]" style={{ animationDelay: '0s' }} />
        <div className="mesh-gradient w-[400px] h-[400px] bg-indigo-600/15 bottom-[0px] right-[-100px]" style={{ animationDelay: '-5s' }} />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124,58,237,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124,58,237,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto space-y-5">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-1.5 text-xs text-slate-500"
          >
            <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-400">Self-Determination Theory</span>
          </motion.div>

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-sky-950/70 border border-sky-500/30 text-xs font-semibold text-sky-300">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Psychology of Motivation</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-black leading-[1.1] tracking-tight text-white"
          >
            Why We Learn{' '}
            <span className="gradient-text-animated">This Way.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            µLearn KNP is not built on random ideas. It is grounded in{' '}
            <span className="text-slate-200 font-medium">Self-Determination Theory</span> — one of the most rigorously tested frameworks in motivational psychology, developed by{' '}
            <span className="text-slate-200 font-medium">Edward Deci &amp; Richard Ryan</span> at the University of Rochester.
          </motion.p>

          {/* Research Link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex justify-center"
          >
            <a
              href="https://selfdeterminationtheory.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-xs text-indigo-300 hover:border-indigo-400/60 transition-all group"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Read the original research at selfdeterminationtheory.org</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ====== CORE QUOTE ====== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative border-l-4 border-violet-500 pl-6 sm:pl-8 py-4"
        >
          <p className="text-lg sm:text-2xl font-display font-semibold text-slate-200 leading-snug italic">
            "People are inherently motivated to grow, but environments can either nurture or undermine that motivation."
          </p>
          <footer className="mt-3 text-sm text-slate-500 font-medium">— Deci &amp; Ryan, Self-Determination Theory (1985)</footer>
        </motion.blockquote>
      </section>

      {/* ====== THREE PILLARS ====== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-xl sm:text-3xl font-display font-black text-white">The Three Pillars of SDT</h2>
          <p className="text-slate-500 text-sm mt-2">And exactly how µLearn KNP applies each one.</p>
        </motion.div>

        <div className="space-y-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-8"
              style={{ boxShadow: `0 0 40px ${pillar.glow}` }}
            >
              {/* Icon */}
              <div className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-lg`}>
                {pillar.icon}
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-white">{pillar.title}</h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>{pillar.tagline}</p>
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{pillar.description}</p>
                <div className="pt-1 border-t border-slate-800">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">At µLearn KNP</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{pillar.mulearn}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="section-glow py-16 sm:py-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto space-y-5"
        >
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white leading-tight">
            Ready to learn the right way?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Join a community built on science — not certificates.
          </p>
          <Link
            to="/join"
            className="btn-glow inline-flex items-center space-x-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-violet-600/30 pulse-ring"
          >
            <span>Join µLearn KNP</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
