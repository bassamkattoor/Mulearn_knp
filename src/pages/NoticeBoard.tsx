import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import NoticeItem from '../components/ui/NoticeItem';
import noticesData from '../content/notices.json';
import type { Notice } from '../types';
import { Bell, Info } from 'lucide-react';

import { useState, useEffect } from 'react';

export default function NoticeBoard() {
  const [allNotices, setAllNotices] = useState<Notice[]>(noticesData as Notice[]);
  const [activeTag, setActiveTag] = useState('All');

  useEffect(() => {
    const localData = localStorage.getItem('mulearn_knp_notices');
    if (localData) {
      setAllNotices(JSON.parse(localData));
    }
  }, []);

  const notices = activeTag === 'All' ? allNotices : allNotices.filter(n => n.tag === activeTag);
  const tags = ['All', 'Urgent', 'Opportunity', 'Event'];
  const tagColors: Record<string, string> = {
    Urgent: 'text-red-300 bg-red-500/10 border-red-500/30',
    Opportunity: 'text-lime-300 bg-lime-500/10 border-lime-500/30',
    Event: 'text-sky-300 bg-sky-500/10 border-sky-500/30',
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-textMain pt-20">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-60 bg-amber-700/15 rounded-full blur-[100px] pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(251,191,36,0.05) 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-bold uppercase tracking-widest text-amber-300">
              <Bell className="w-3 h-3 animate-bounce" />
              <span>Announcements</span>
            </span>
            <h1 className="text-5xl sm:text-7xl font-display font-black text-white tracking-tight leading-tight">
              Stay in the<br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">loop.</span>
            </h1>
            <p className="text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              All chapter announcements, opportunities, and event updates in one place.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pb-24">
          {/* Tag Legend */}
          <div className="flex flex-wrap items-center gap-3 pb-4 border-b border-slate-800/60">
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Filter by:</span>
            {tags.map(tag => {
              const isSelected = activeTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1 rounded-full border text-[11px] font-bold cursor-pointer transition-all ${
                    isSelected
                      ? tag === 'All'
                        ? 'text-violet-300 bg-violet-500/20 border-violet-500/50 shadow-[0_0_12px_rgba(124,58,237,0.2)]'
                        : tag === 'Urgent'
                        ? 'text-red-300 bg-red-500/20 border-red-500/50 shadow-[0_0_12px_rgba(239,68,68,0.2)]'
                        : tag === 'Opportunity'
                        ? 'text-lime-300 bg-lime-500/20 border-lime-500/50 shadow-[0_0_12px_rgba(132,204,22,0.2)]'
                        : 'text-sky-300 bg-sky-500/20 border-sky-500/50 shadow-[0_0_12px_rgba(14,165,233,0.2)]'
                      : 'text-slate-400 bg-slate-900/60 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {/* Notice Items */}
          <div className="space-y-4">
            {notices.map(n => <NoticeItem key={n.id} notice={n} />)}
          </div>

          {/* Info footer note */}
          <div className="flex items-start space-x-3 p-4 glass-card rounded-xl border border-slate-800/60 mt-8">
            <Info className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
            <p className="text-xs text-slate-500 leading-relaxed">
              Official notices are posted here and mirrored on the µLearn KNP Discord server. Join Discord for real-time updates, announcements, and peer discussions.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
