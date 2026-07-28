import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/layout/SectionHeader';
import EventCard from '../components/ui/EventCard';
import eventsData from '../content/events.json';
import type { Event } from '../types';
import { CalendarDays, History } from 'lucide-react';

export default function Events() {
  const upcoming = eventsData.upcoming as Event[];
  const past = eventsData.past as Event[];

  return (
    <div className="min-h-screen flex flex-col bg-background text-textMain pt-20">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-60 bg-sky-700/20 rounded-full blur-[100px] pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(56,189,248,0.05) 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-[11px] font-bold uppercase tracking-widest text-sky-300">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>Chapter Events</span>
            </span>
            <h1 className="text-5xl sm:text-7xl font-display font-black text-white tracking-tight leading-tight">
              Where builders<br />
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">come together.</span>
            </h1>
            <p className="text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              From hands-on workshops to hackathons and peer sessions — every event is designed to ship real skills.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">

          {/* Upcoming Events */}
          <section className="section-glow">
            <SectionHeader
              eyebrow="What's Next"
              title="Upcoming Events"
            />
            {upcoming.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcoming.map(ev => <EventCard key={ev.id} event={ev} variant="upcoming" />)}
              </div>
            ) : (
              <div className="glass-card rounded-2xl p-12 text-center border border-dashed border-slate-700/60">
                <CalendarDays className="w-10 h-10 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-500 text-sm">No upcoming events right now. Check back soon!</p>
              </div>
            )}
          </section>

          {/* Past Events */}
          <section className="section-glow">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-slate-900 rounded-xl border border-slate-800">
                <History className="w-5 h-5 text-slate-400" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Archive</span>
                <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">Past Events</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-80">
              {past.map(ev => <EventCard key={ev.id} event={ev} variant="past" />)}
            </div>
          </section>

          {/* Host an Event CTA */}
          <section className="glass-card p-8 sm:p-12 rounded-3xl border border-sky-500/20 relative overflow-hidden text-center">
            <div className="absolute -top-16 -left-16 w-60 h-60 bg-sky-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto space-y-4">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/25 text-[11px] font-bold uppercase tracking-widest text-sky-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span>Propose an Event</span>
              </span>
              <h2 className="text-3xl font-display font-black text-white">Got an event idea?</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Any µLearn KNP member can propose a workshop, session, or hackathon. Reach out to the execom on Discord and let's build it together.
              </p>
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold text-sm shadow-xl shadow-sky-600/20"
              >
                <span>Propose on Discord</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
