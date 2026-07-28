import { Trophy, TrendingUp, TrendingDown, Minus, Award } from 'lucide-react';
import type { LeaderboardEntry } from '../../types';

interface LeaderboardRowProps {
  entry: LeaderboardEntry;
}

const rankStyles: Record<number, { bg: string; text: string; icon?: React.ReactNode; border: string }> = {
  1: { bg: 'bg-amber-500/15', text: 'text-amber-300', icon: <Trophy className="w-4 h-4 text-amber-400" />, border: 'border-amber-500/30' },
  2: { bg: 'bg-slate-400/15', text: 'text-slate-300', icon: <Trophy className="w-4 h-4 text-slate-400" />, border: 'border-slate-600/50' },
  3: { bg: 'bg-orange-600/15', text: 'text-orange-400', icon: <Trophy className="w-4 h-4 text-orange-500" />, border: 'border-orange-600/40' },
};

export default function LeaderboardRow({ entry }: LeaderboardRowProps) {
  const { rank } = entry;
  const style = rankStyles[rank] ?? { bg: 'bg-surface/60', text: 'text-slate-400', border: 'border-slate-800/60' };

  return (
    <div
      className={`flex items-center space-x-4 p-4 rounded-2xl border transition-all hover:border-violet-500/30 hover:shadow-md hover:shadow-violet-900/10 ${style.bg} ${style.border} cursor-default group`}
    >
      {/* Rank */}
      <div className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 font-display font-black text-lg ${style.text} ${rank <= 3 ? 'ring-1 ring-current/30' : ''}`}>
        {style.icon ?? <span className="text-base text-slate-500">#{rank}</span>}
      </div>

      {/* Avatar */}
      <img
        src={entry.avatar}
        alt={entry.name}
        className="w-10 h-10 rounded-full border-2 border-slate-700 group-hover:border-violet-500/50 transition-all shrink-0 object-cover"
      />

      {/* Name & Level */}
      <div className="flex-1 min-w-0">
        <p className="font-display font-bold text-sm text-white truncate group-hover:text-violet-200 transition-colors">{entry.name}</p>
        <p className="text-[11px] text-slate-500 flex items-center space-x-1 mt-0.5">
          <Award className="w-3 h-3 text-violet-500" />
          <span>{entry.ig}</span>
        </p>
      </div>

      {/* Rank Change */}
      <div className="hidden sm:flex items-center space-x-1 text-xs">
        {entry.rankChange > 0 ? (
          <span className="flex items-center space-x-1 text-lime-400 bg-lime-400/10 px-2 py-1 rounded-full border border-lime-400/20">
            <TrendingUp className="w-3 h-3" />
            <span>+{entry.rankChange}</span>
          </span>
        ) : entry.rankChange < 0 ? (
          <span className="flex items-center space-x-1 text-red-400 bg-red-400/10 px-2 py-1 rounded-full border border-red-400/20">
            <TrendingDown className="w-3 h-3" />
            <span>{entry.rankChange}</span>
          </span>
        ) : (
          <span className="flex items-center space-x-1 text-slate-500 bg-slate-800/60 px-2 py-1 rounded-full border border-slate-700/60">
            <Minus className="w-3 h-3" />
            <span>—</span>
          </span>
        )}
      </div>

      {/* Karma */}
      <div className="shrink-0 text-right">
        <p className="font-display font-black text-lg bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent tabular-nums">
          {entry.karma.toLocaleString()}
        </p>
        <p className="text-[10px] text-slate-500 uppercase tracking-wider">karma</p>
      </div>
    </div>
  );
}
