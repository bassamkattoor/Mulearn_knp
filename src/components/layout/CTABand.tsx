import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTABandProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function CTABand({
  title = "Ready to break the echo chamber?",
  subtitle = "Join µLearn KNP today and start building your proof-of-work portfolio with peers.",
  ctaText = "Join µLearn KNP Now",
  ctaLink = "/join",
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl p-8 sm:p-16 text-center">
      {/* Animated Mesh Blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-violet-700/30 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />

      {/* Border + glass */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/10 via-indigo-600/5 to-blue-600/10 border border-violet-500/20 backdrop-blur-sm" />

      {/* Grid dots overlay */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(124,58,237,0.12) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <div className="flex justify-center">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-[11px] font-bold tracking-wider text-violet-300">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span>µLearn KNP • Karunagappally</span>
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
        <div className="flex justify-center">
          <Link
            to={ctaLink}
            className="btn-glow inline-flex items-center space-x-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-base shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 transition-all"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
