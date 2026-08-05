import { MapPin, ArrowRight, Clock, Play } from 'lucide-react';
import type { Event } from '../../types';
import IKImage from './IKImage';

interface EventCardProps {
  event: Event;
  variant: 'upcoming' | 'past';
}

export default function EventCard({ event, variant }: EventCardProps) {
  const date = new Date(event.date);
  const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
  const day = date.getDate();
  const time = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <div className="glass-card rounded-2xl overflow-hidden group relative">
      {/* Banner Image */}
      <div className="relative h-48 overflow-hidden">
        <IKImage
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          width={600}
          height={192}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06060e] via-[#06060e]/40 to-transparent" />

        {/* Date badge */}
        <div className="absolute top-4 left-4 flex flex-col items-center justify-center w-14 h-14 bg-slate-950/90 backdrop-blur-sm rounded-2xl border border-indigo-500/30 shadow-lg">
          <span className="text-[10px] font-bold text-violet-400 tracking-widest leading-none">{month}</span>
          <span className="text-2xl font-display font-black text-white leading-tight">{day}</span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          {variant === 'upcoming' ? (
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-lime-400/20 border border-lime-400/40 text-xs font-bold text-lime-300">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              <span>Upcoming</span>
            </span>
          ) : (
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-400">
              <Play className="w-3 h-3" />
              <span>Past Event</span>
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="font-display font-bold text-lg text-white leading-snug group-hover:text-violet-200 transition-colors">
          {event.title}
        </h3>

        <div className="flex flex-wrap gap-3 text-xs text-slate-400">
          <span className="flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span>{time}</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-violet-400 shrink-0" />
            <span>{event.venue}</span>
          </span>
        </div>

        {/* CTA */}
        <div className="pt-1">
          {variant === 'upcoming' && event.registerLink ? (
            <a
              href={event.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold shadow-md shadow-violet-600/20 hover:scale-105 transition-all"
            >
              <span>Register Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          ) : event.recapLink ? (
            <a
              href={event.recapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-slate-700 text-slate-300 text-xs font-semibold hover:border-slate-600 hover:text-white transition-all"
            >
              <Play className="w-3.5 h-3.5" />
              <span>View Recap</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
