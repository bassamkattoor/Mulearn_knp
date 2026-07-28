import { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, Briefcase, CalendarDays, Clock } from 'lucide-react';
import type { Notice } from '../../types';

interface NoticeItemProps {
  notice: Notice;
}

const tagConfig: Record<string, { label: string; classes: string; icon: React.ReactNode }> = {
  Urgent: {
    label: 'Urgent',
    classes: 'text-red-300 bg-red-500/10 border-red-500/30',
    icon: <AlertCircle className="w-3 h-3" />,
  },
  Opportunity: {
    label: 'Opportunity',
    classes: 'text-lime-300 bg-lime-500/10 border-lime-500/30',
    icon: <Briefcase className="w-3 h-3" />,
  },
  Event: {
    label: 'Event',
    classes: 'text-sky-300 bg-sky-500/10 border-sky-500/30',
    icon: <CalendarDays className="w-3 h-3" />,
  },
};

export default function NoticeItem({ notice }: NoticeItemProps) {
  const [expanded, setExpanded] = useState(false);
  const config = tagConfig[notice.tag] ?? { label: notice.tag, classes: 'text-slate-300 bg-slate-700/30 border-slate-600', icon: <Clock className="w-3 h-3" /> };
  const date = new Date(notice.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <div
      className={`glass-card rounded-2xl border transition-all duration-300 cursor-pointer ${expanded ? 'border-violet-500/30 shadow-lg shadow-violet-900/20' : 'hover:border-slate-700/60'}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between p-5 gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <span className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider shrink-0 ${config.classes}`}>
            {config.icon}
            <span>{config.label}</span>
          </span>
          <div className="min-w-0">
            <h3 className={`font-display font-bold text-sm sm:text-base truncate transition-colors ${expanded ? 'text-white' : 'text-slate-200'}`}>
              {notice.title}
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">{date}</p>
          </div>
        </div>
        <div className={`shrink-0 p-1.5 rounded-lg border transition-all ${expanded ? 'bg-violet-500/15 border-violet-500/30 text-violet-300' : 'bg-surface border-slate-800 text-slate-500'}`}>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </div>

      {expanded && (
        <div className="px-5 pb-5 border-t border-slate-800/60 pt-4">
          <p className="text-sm text-slate-300 leading-relaxed">{notice.body}</p>
        </div>
      )}
    </div>
  );
}
