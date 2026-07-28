interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  centered?: boolean;
}

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  ctaText,
  ctaLink,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 ${centered ? 'items-center text-center sm:text-center sm:justify-center sm:flex-col' : ''}`}>
      <div className={`space-y-2 ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
        {eyebrow && (
          <span className="inline-flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-violet-400 px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span>{eyebrow}</span>
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-slate-400 leading-relaxed">{subtitle}</p>
        )}
      </div>

      {ctaText && ctaLink && (
        <Link
          to={ctaLink}
          className="shrink-0 inline-flex items-center space-x-1.5 text-xs font-semibold text-violet-300 hover:text-white border border-violet-500/25 hover:border-violet-400/50 px-4 py-2 rounded-full bg-violet-500/5 hover:bg-violet-500/15 transition-all"
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </div>
  );
}
