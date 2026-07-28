import { Link } from 'react-router-dom';
import { MessageSquare, Send, Globe, Share2, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-textMuted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-baseline space-x-1.5 group">
              <span className="font-display text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent tracking-tight">
                µlearn
              </span>
              <span className="text-xs font-bold text-slate-300 tracking-wider uppercase">
                KNP
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              The official µLearn campus chapter at College of Engineering Karunagappally. Breaking the echo chamber through peer-led growth.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/execom" className="hover:text-white transition-colors">Execom</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/notice-board" className="hover:text-white transition-colors">Notice Board</Link></li>
              <li><Link to="/leaderboard" className="hover:text-white transition-colors">Karma Leaderboard</Link></li>
              <li><Link to="/join" className="hover:text-white transition-colors">Join Chapter</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-primary hover:bg-slate-800 transition-colors" title="Discord">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-accent hover:bg-slate-800 transition-colors" title="WhatsApp">
                <Send className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-pink-500 hover:bg-slate-800 transition-colors" title="Instagram">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-secondary hover:bg-slate-800 transition-colors" title="LinkedIn">
                <Globe className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              College of Engineering Karunagappally, Kollam, Kerala.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} µLearn KNP. Built by students, for students.</p>
          <p className="flex items-center space-x-1">
            <span>Proof of work over certificates</span>
            <Heart className="w-3.5 h-3.5 text-accent fill-accent inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
