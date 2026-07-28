import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LeaderboardRow from '../components/ui/LeaderboardRow';
import leaderboardData from '../content/leaderboard.json';
import type { LeaderboardEntry } from '../types';
import { Flame, Info, Trophy } from 'lucide-react';

export default function Leaderboard() {
  const entries = leaderboardData as LeaderboardEntry[];

  return (
    <div className="min-h-screen flex flex-col bg-background text-textMain pt-20">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-60 bg-lime-600/15 rounded-full blur-[100px] pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(163,230,53,0.05) 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-[11px] font-bold uppercase tracking-widest text-lime-300">
              <Flame className="w-3 h-3" />
              <span>Karma Leaderboard</span>
            </span>
            <h1 className="text-5xl sm:text-7xl font-display font-black text-white tracking-tight leading-tight">
              The chapter's<br />
              <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">top builders.</span>
            </h1>
            <p className="text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              Karma is proof of work. Every commit, article, pull request, and peer-session earns you points that show up here.
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pb-24">

          {/* Top 3 podium cards */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[entries[1], entries[0], entries[2]].filter(Boolean).map((entry, i) => {
              const pos = [2, 1, 3][i];
              const heights = ['h-24', 'h-32', 'h-20'];
              const glows = ['border-slate-500/40 shadow-slate-600/10', 'border-amber-500/40 shadow-amber-600/20', 'border-orange-500/40 shadow-orange-600/10'];
              const gradients = ['from-slate-700 to-slate-600', 'from-amber-500 to-yellow-500', 'from-orange-600 to-amber-600'];
              return (
                <div key={entry.id} className={`glass-card rounded-2xl p-4 text-center flex flex-col items-center justify-end border ${glows[i]} shadow-xl`}>
                  <img src={entry.avatar} alt={entry.name} className="w-12 h-12 rounded-full border-2 border-slate-700 mb-2 object-cover" />
                  <p className="font-display font-bold text-white text-xs leading-tight truncate w-full">{entry.name}</p>
                  <p className="text-[10px] text-slate-500 truncate w-full mb-2">{entry.ig}</p>
                  <div className={`w-full ${heights[i]} rounded-xl bg-gradient-to-t ${gradients[i]} flex items-center justify-center flex-col`}>
                    <Trophy className="w-4 h-4 text-white/80 mb-1" />
                    <span className="font-display font-black text-white text-sm">#{pos}</span>
                  </div>
                  <p className="font-display font-black text-sm bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent mt-2 tabular-nums">
                    {entry.karma.toLocaleString()}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Full leaderboard list */}
          <div className="space-y-3">
            {entries.map(entry => (
              <LeaderboardRow key={entry.id} entry={entry} />
            ))}
          </div>

          {/* How karma works */}
          <div className="glass-card p-6 rounded-2xl border border-indigo-500/20 mt-8 space-y-3">
            <div className="flex items-center space-x-2">
              <Info className="w-4 h-4 text-indigo-400 shrink-0" />
              <h4 className="font-display font-bold text-white text-sm">How Karma Works</h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {[
                { action: 'GitHub Commit', pts: '+10' },
                { action: 'Publish Article', pts: '+50' },
                { action: 'Peer Review', pts: '+30' },
                { action: 'Host Session', pts: '+100' },
              ].map((k, i) => (
                <div key={i} className="bg-slate-900/60 rounded-xl p-3 border border-slate-800">
                  <p className="font-display font-black text-lime-400 text-base">{k.pts}</p>
                  <p className="text-[10px] text-slate-500 leading-tight mt-1">{k.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
