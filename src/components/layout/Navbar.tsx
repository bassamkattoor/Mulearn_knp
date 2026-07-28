import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Execom', path: '/execom' },
    { name: 'Events', path: '/events' },
    { name: 'Notice Board', path: '/notice-board' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Join', path: '/join' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#06060e]/85 border-b border-indigo-500/20 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Official µLearn OG Logo Container */}
          <Link to="/" className="flex items-center">
            <img
              src="/mulearn-knp-logo-white.png"
              alt="µLearn KNP"
              className="h-35 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 bg-surface/80 p-1.5 rounded-full border border-indigo-500/20 shadow-inner backdrop-blur-md">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${active
                    ? 'text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-600/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/40'
                    }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Login Slot */}
          <div className="hidden md:flex items-center">
            <div className="relative group">
              <button
                disabled
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-surface/60 text-slate-400 border border-indigo-500/20 cursor-not-allowed opacity-80 group-hover:border-indigo-500/40 transition-all"
              >
                <LogIn className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-medium">Login</span>
                <Sparkles className="w-3 h-3 text-amber-400 opacity-60" />
              </button>
              <div className="absolute right-0 top-full mt-2 hidden group-hover:block bg-surface border border-indigo-500/20 text-xs text-slate-300 px-3 py-1.5 rounded-xl shadow-2xl whitespace-nowrap z-50">
                Login — Coming soon
              </div>
            </div>
          </div>

          {/* Mobile Drawer Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-surface border border-indigo-500/20"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-violet-400" /> : <Menu className="w-6 h-6 text-violet-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#06060e]/95 backdrop-blur-2xl border-b border-indigo-500/20 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive(link.path)
                ? 'text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-surface/80'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-800">
            <button
              disabled
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-surface/60 text-slate-400 border border-indigo-500/20 cursor-not-allowed opacity-75"
            >
              <LogIn className="w-4 h-4 text-violet-400" />
              <span className="text-xs font-medium">Login (Coming Soon)</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
