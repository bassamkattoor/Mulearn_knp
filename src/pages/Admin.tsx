import { useState, useEffect } from 'react';
import { LogIn, LayoutDashboard, LogOut, Award, Users, Calendar, Bell, Info, Shield, Download, FileJson, Check } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Load default files as baseline fallbacks
import defaultAbout from '../content/about.json';
import defaultLeaderboard from '../content/leaderboard.json';
import defaultTeam from '../content/team.json';
import defaultEvents from '../content/events.json';
import defaultNotices from '../content/notices.json';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Tab State
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'team' | 'events' | 'notices' | 'about'>('about');

  // Content States (Sync with localStorage or fall back to baseline JSON files)
  const [about, setAbout] = useState(defaultAbout);
  const [leaderboard, setLeaderboard] = useState(defaultLeaderboard);
  const [team, setTeam] = useState(defaultTeam);
  const [events, setEvents] = useState(defaultEvents);
  const [notices, setNotices] = useState(defaultNotices);

  // Copy Feedback state
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  // Initialize data from localStorage on load
  useEffect(() => {
    const savedSession = sessionStorage.getItem('admin_session');
    if (savedSession === 'active') {
      setIsLoggedIn(true);
    }

    const localAbout = localStorage.getItem('mulearn_knp_about');
    if (localAbout) setAbout(JSON.parse(localAbout));

    const localLeaderboard = localStorage.getItem('mulearn_knp_leaderboard');
    if (localLeaderboard) setLeaderboard(JSON.parse(localLeaderboard));

    const localTeam = localStorage.getItem('mulearn_knp_team');
    if (localTeam) setTeam(JSON.parse(localTeam));

    const localEvents = localStorage.getItem('mulearn_knp_events');
    if (localEvents) setEvents(JSON.parse(localEvents));

    const localNotices = localStorage.getItem('mulearn_knp_notices');
    if (localNotices) setNotices(JSON.parse(localNotices));
  }, []);

  // Save changes helper
  const handleSave = (tab: string, updatedData: any) => {
    let filename = '';
    if (tab === 'about') {
      setAbout(updatedData);
      localStorage.setItem('mulearn_knp_about', JSON.stringify(updatedData, null, 2));
      filename = 'about.json';
    } else if (tab === 'leaderboard') {
      setLeaderboard(updatedData);
      localStorage.setItem('mulearn_knp_leaderboard', JSON.stringify(updatedData, null, 2));
      filename = 'leaderboard.json';
    } else if (tab === 'team') {
      setTeam(updatedData);
      localStorage.setItem('mulearn_knp_team', JSON.stringify(updatedData, null, 2));
      filename = 'team.json';
    } else if (tab === 'events') {
      setEvents(updatedData);
      localStorage.setItem('mulearn_knp_events', JSON.stringify(updatedData, null, 2));
      filename = 'events.json';
    } else if (tab === 'notices') {
      setNotices(updatedData);
      localStorage.setItem('mulearn_knp_notices', JSON.stringify(updatedData, null, 2));
      filename = 'notices.json';
    }

    if (filename) {
      fetch('/api/save-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, data: updatedData })
      }).catch(() => {});
    }
  };

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim().toLowerCase() === 'admin' && password === 'mulearnknp') {
      setIsLoggedIn(true);
      setLoginError('');
      sessionStorage.setItem('admin_session', 'active');
    } else {
      setLoginError('Invalid admin username or password.');
    }
  };

  // Logout handler
  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('admin_session');
  };

  // Export JSON file downloader helper
  const downloadJSON = (filename: string, data: any) => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Copy to clipboard helper
  const copyToClipboard = (tab: string, data: any) => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopiedTab(tab);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-textMain pt-14 sm:pt-20">
      <Navbar />

      <main className="flex-grow flex flex-col">
        {!isLoggedIn ? (
          /* ====== LOGIN FORM SCREEN ====== */
          <section className="flex-grow flex items-center justify-center py-16 px-4 relative overflow-hidden">
            <div className="mesh-gradient w-[400px] h-[400px] bg-violet-700/20 top-[20%] left-[30%]" />
            <div className="relative z-10 w-full max-w-md glass-card p-8 border border-indigo-500/25 shadow-2xl">
              <div className="text-center space-y-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto text-indigo-400">
                  <Shield className="w-6 h-6 animate-pulse" />
                </div>
                <h1 className="text-2xl font-display font-black text-white">Admin Portal</h1>
                <p className="text-xs text-slate-400">Log in to modify leaderboard, execom, events and notice board datasets.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Admin Username</label>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="admin"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-indigo-500 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-indigo-500 focus:outline-none transition-all"
                  />
                </div>
                {loginError && (
                  <p className="text-xs text-red-400 bg-red-950/40 border border-red-500/30 p-3 rounded-xl">
                    {loginError}
                  </p>
                )}
                <button
                  type="submit"
                  className="btn-glow w-full py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm shadow-xl flex items-center justify-center space-x-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Access Dashboard</span>
                </button>
              </form>

              <div className="mt-6 pt-5 border-t border-slate-900 text-center">
                <p className="text-[10px] text-slate-500">
                  Tip: Credentials are default (admin / mulearnknp).
                </p>
              </div>
            </div>
          </section>
        ) : (
          /* ====== ADMIN CONTROL DASHBOARD ====== */
          <section className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col space-y-6">
            
            {/* Header Dashboard Area */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <LayoutDashboard className="w-5 h-5 text-indigo-400" />
                  <h1 className="text-2xl font-display font-black text-white">Admin Dashboard</h1>
                </div>
                <p className="text-xs text-slate-400">Save edits internally on your browser, then download JSON files to replace in your codebase.</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-red-950/20 border border-red-500/20 text-red-300 hover:bg-red-900/40 hover:border-red-400 text-xs font-semibold transition-all"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>

            {/* Editor Layout (Grid tabs + form viewport) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start flex-grow">
              
              {/* Vertical navigation menu tabs */}
              <div className="lg:col-span-3 flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-2 lg:pb-0 shrink-0">
                {[
                  { id: 'about', label: 'Stats & Info', icon: <Info className="w-4 h-4" /> },
                  { id: 'leaderboard', label: 'Leaderboard', icon: <Award className="w-4 h-4" /> },
                  { id: 'team', label: 'Execom Team', icon: <Users className="w-4 h-4" /> },
                  { id: 'events', label: 'Chapter Events', icon: <Calendar className="w-4 h-4" /> },
                  { id: 'notices', label: 'Announcements', icon: <Bell className="w-4 h-4" /> },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center space-x-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap lg:w-full ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-violet-600/30 to-indigo-600/30 border border-violet-500/40 text-white shadow-inner shadow-violet-950/40'
                        : 'bg-surface/40 border border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-surface/80'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Form editing board */}
              <div className="lg:col-span-9 glass-card border border-indigo-500/20 p-5 sm:p-6 flex flex-col space-y-6">
                
                {/* Active tab header & actions */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <h2 className="text-lg font-display font-black text-white capitalize">{activeTab} Dataset</h2>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => copyToClipboard(activeTab, activeTab === 'about' ? about : activeTab === 'leaderboard' ? leaderboard : activeTab === 'team' ? team : activeTab === 'events' ? events : notices)}
                      className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs transition-all"
                    >
                      {copiedTab === activeTab ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <FileJson className="w-3.5 h-3.5" />}
                      <span>{copiedTab === activeTab ? 'Copied' : 'Copy JSON'}</span>
                    </button>
                    <button
                      onClick={() => downloadJSON(`${activeTab}.json`, activeTab === 'about' ? about : activeTab === 'leaderboard' ? leaderboard : activeTab === 'team' ? team : activeTab === 'events' ? events : notices)}
                      className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-indigo-950 border border-indigo-500/25 text-indigo-300 hover:text-white text-xs transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download JSON</span>
                    </button>
                  </div>
                </div>

                {/* ====== TAB VIEWPORT CONTENT ====== */}
                <div className="space-y-6">
                  {/* ====== ABOUT STATS PANEL ====== */}
                  {activeTab === 'about' && (
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Core Dashboard Metrics</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Members</label>
                          <input
                            type="number"
                            value={about.stats.members}
                            onChange={(e) => handleSave('about', { ...about, stats: { ...about.stats, members: parseInt(e.target.value) || 0 } })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Karma Earned</label>
                          <input
                            type="number"
                            value={about.stats.karmaEarned}
                            onChange={(e) => handleSave('about', { ...about, stats: { ...about.stats, karmaEarned: parseInt(e.target.value) || 0 } })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Events Held</label>
                          <input
                            type="number"
                            value={about.stats.eventsHeld}
                            onChange={(e) => handleSave('about', { ...about, stats: { ...about.stats, eventsHeld: parseInt(e.target.value) || 0 } })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Interest Groups</label>
                          <input
                            type="number"
                            value={about.stats.activeIGs}
                            onChange={(e) => handleSave('about', { ...about, stats: { ...about.stats, activeIGs: parseInt(e.target.value) || 0 } })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-slate-900">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">About Explainer Paragraphs</h3>
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">The National Movement Explainer</label>
                            <textarea
                              rows={3}
                              value={about.mulearnNational}
                              onChange={(e) => handleSave('about', { ...about, mulearnNational: e.target.value })}
                              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">CEK Chapter Story</label>
                            <textarea
                              rows={3}
                              value={about.cekStory}
                              onChange={(e) => handleSave('about', { ...about, cekStory: e.target.value })}
                              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ====== LEADERBOARD PANEL ====== */}
                  {activeTab === 'leaderboard' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Leaderboard Rankings</h3>
                        <button
                          onClick={() => {
                            const newEntry = {
                              id: `lb-${Date.now()}`,
                              rank: leaderboard.length + 1,
                              name: 'New Builder',
                              avatar: 'https://ui-avatars.com/api/?name=New+Builder',
                              karma: 100,
                              level: 'LVL1',
                              department: 'Computer Science and Engineering',
                              rankChange: 0,
                              ig: 'Web Development'
                            };
                            handleSave('leaderboard', [...leaderboard, newEntry]);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-violet-600 text-white text-xs font-bold hover:bg-violet-500 transition-colors"
                        >
                          Add Student
                        </button>
                      </div>

                      <div className="space-y-3 max-h-[450px] overflow-y-auto pr-1">
                        {leaderboard.map((student: any, i: number) => (
                          <div key={student.id} className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 space-y-3 relative group">
                            <button
                              onClick={() => {
                                const list = leaderboard.filter((item: any) => item.id !== student.id).map((item: any, idx: number) => ({ ...item, rank: idx + 1 }));
                                handleSave('leaderboard', list);
                              }}
                              className="absolute top-4 right-4 text-xs text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-300"
                            >
                              Delete
                            </button>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              <div className="space-y-0.5">
                                <label className="text-[9px] uppercase tracking-wider text-slate-500">Student Name</label>
                                <input
                                  type="text"
                                  value={student.name}
                                  onChange={(e) => {
                                    const list = [...leaderboard];
                                    list[i].name = e.target.value;
                                    handleSave('leaderboard', list);
                                  }}
                                  className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                />
                              </div>
                              <div className="space-y-0.5">
                                <label className="text-[9px] uppercase tracking-wider text-slate-500">Karma Score</label>
                                <input
                                  type="number"
                                  value={student.karma}
                                  onChange={(e) => {
                                    const list = [...leaderboard];
                                    list[i].karma = parseInt(e.target.value) || 0;
                                    handleSave('leaderboard', list);
                                  }}
                                  className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                />
                              </div>
                              <div className="space-y-0.5">
                                <label className="text-[9px] uppercase tracking-wider text-slate-500">µLearn Level</label>
                                <select
                                  value={student.level || 'LVL1'}
                                  onChange={(e) => {
                                    const list = [...leaderboard];
                                    list[i].level = e.target.value;
                                    handleSave('leaderboard', list);
                                  }}
                                  className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                >
                                  <option value="LVL1">LVL1</option>
                                  <option value="LVL2">LVL2</option>
                                  <option value="LVL3">LVL3</option>
                                  <option value="LVL4">LVL4</option>
                                  <option value="LVL5">LVL5</option>
                                  <option value="LVL6">LVL6</option>
                                </select>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="space-y-0.5">
                                <label className="text-[9px] uppercase tracking-wider text-slate-500">Department</label>
                                <input
                                  type="text"
                                  value={student.department || ''}
                                  onChange={(e) => {
                                    const list = [...leaderboard];
                                    list[i].department = e.target.value;
                                    handleSave('leaderboard', list);
                                  }}
                                  className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                />
                              </div>
                              <div className="space-y-0.5">
                                <label className="text-[9px] uppercase tracking-wider text-slate-500">Interest Group / Cluster</label>
                                <input
                                  type="text"
                                  value={student.ig}
                                  onChange={(e) => {
                                    const list = [...leaderboard];
                                    list[i].ig = e.target.value;
                                    handleSave('leaderboard', list);
                                  }}
                                  className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ====== TEAM PANEL ====== */}
                  {activeTab === 'team' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Team Members</h3>
                        <button
                          onClick={() => {
                            const newMember = {
                              id: `team-${Date.now()}`,
                              name: 'New Officer',
                              role: 'IG Lead',
                              department: 'Computer Science Engineering',
                              year: '2nd Year',
                              bio: 'Passionate builder supporting peers.',
                              image: 'https://ui-avatars.com/api/?name=New+Officer',
                              socials: { linkedin: 'https://linkedin.com', github: 'https://github.com' }
                            };
                            handleSave('team', [...team, newMember]);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-violet-600 text-white text-xs font-bold hover:bg-violet-500 transition-colors"
                        >
                          Add Member
                        </button>
                      </div>

                      <div className="space-y-3 max-h-[450px] overflow-y-auto pr-1">
                        {team.map((member: any, i: number) => (
                          <div key={member.id} className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 space-y-3 relative group">
                            <button
                              onClick={() => {
                                const list = team.filter((item: any) => item.id !== member.id);
                                handleSave('team', list);
                              }}
                              className="absolute top-4 right-4 text-xs text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-300"
                            >
                              Delete
                            </button>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              <div className="space-y-0.5">
                                <label className="text-[9px] uppercase tracking-wider text-slate-500">Name</label>
                                <input
                                  type="text"
                                  value={member.name}
                                  onChange={(e) => {
                                    const list = [...team];
                                    list[i].name = e.target.value;
                                    handleSave('team', list);
                                  }}
                                  className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                />
                              </div>
                              <div className="space-y-0.5">
                                <label className="text-[9px] uppercase tracking-wider text-slate-500">Role</label>
                                <input
                                  type="text"
                                  value={member.role}
                                  onChange={(e) => {
                                    const list = [...team];
                                    list[i].role = e.target.value;
                                    handleSave('team', list);
                                  }}
                                  className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                />
                              </div>
                              <div className="space-y-0.5">
                                <label className="text-[9px] uppercase tracking-wider text-slate-500">Department</label>
                                <input
                                  type="text"
                                  value={member.department}
                                  onChange={(e) => {
                                    const list = [...team];
                                    list[i].department = e.target.value;
                                    handleSave('team', list);
                                  }}
                                  className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              <div className="space-y-0.5">
                                <label className="text-[9px] uppercase tracking-wider text-slate-500">Year / Level</label>
                                <select
                                  value={member.year}
                                  onChange={(e) => {
                                    const list = [...team];
                                    list[i].year = e.target.value;
                                    handleSave('team', list);
                                  }}
                                  className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                >
                                  <option value="1st Year">1st Year</option>
                                  <option value="2nd Year">2nd Year</option>
                                  <option value="3rd Year">3rd Year</option>
                                  <option value="4th Year">4th Year</option>
                                  <option value="Faculty">Faculty Anchor</option>
                                </select>
                              </div>
                              <div className="space-y-0.5">
                                <label className="text-[9px] uppercase tracking-wider text-slate-500">LinkedIn URL</label>
                                <input
                                  type="text"
                                  value={member.socials?.linkedin || ''}
                                  onChange={(e) => {
                                    const list = [...team];
                                    list[i].socials = { ...list[i].socials, linkedin: e.target.value };
                                    handleSave('team', list);
                                  }}
                                  className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                />
                              </div>
                              <div className="space-y-0.5">
                                <label className="text-[9px] uppercase tracking-wider text-slate-500">GitHub URL</label>
                                <input
                                  type="text"
                                  value={member.socials?.github || ''}
                                  onChange={(e) => {
                                    const list = [...team];
                                    list[i].socials = { ...list[i].socials, github: e.target.value };
                                    handleSave('team', list);
                                  }}
                                  className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                />
                              </div>
                            </div>

                            <div className="space-y-0.5">
                              <label className="text-[9px] uppercase tracking-wider text-slate-500">Bio</label>
                              <textarea
                                rows={2}
                                value={member.bio}
                                onChange={(e) => {
                                  const list = [...team];
                                  list[i].bio = e.target.value;
                                  handleSave('team', list);
                                }}
                                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ====== EVENTS PANEL ====== */}
                  {activeTab === 'events' && (
                    <div className="space-y-4">
                      {/* Upcoming Events Subsection */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Upcoming Events</h3>
                          <button
                            onClick={() => {
                              const newEvent = {
                                id: `ev-${Date.now()}`,
                                title: 'New Interactive Workshop',
                                date: new Date().toISOString(),
                                venue: 'Seminar Hall, CEK',
                                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
                                registerLink: 'https://discord.gg'
                              };
                              handleSave('events', { ...events, upcoming: [...events.upcoming, newEvent] });
                            }}
                            className="px-2.5 py-1 rounded-lg bg-violet-600 text-white text-xs font-bold hover:bg-violet-500 transition-colors"
                          >
                            Add Upcoming
                          </button>
                        </div>
                        <div className="space-y-3 max-h-[250px] overflow-y-auto pr-1">
                          {events.upcoming.map((ev: any, i: number) => (
                            <div key={ev.id} className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 space-y-3 relative group animate-fade">
                              <button
                                onClick={() => {
                                  const list = events.upcoming.filter((item: any) => item.id !== ev.id);
                                  handleSave('events', { ...events, upcoming: list });
                                }}
                                className="absolute top-4 right-4 text-xs text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-300"
                              >
                                Delete
                              </button>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-0.5">
                                  <label className="text-[9px] uppercase tracking-wider text-slate-500">Event Title</label>
                                  <input
                                    type="text"
                                    value={ev.title}
                                    onChange={(e) => {
                                      const list = [...events.upcoming];
                                      list[i].title = e.target.value;
                                      handleSave('events', { ...events, upcoming: list });
                                    }}
                                    className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                  />
                                </div>
                                <div className="space-y-0.5">
                                  <label className="text-[9px] uppercase tracking-wider text-slate-500">Registration Link</label>
                                  <input
                                    type="text"
                                    value={ev.registerLink || ''}
                                    onChange={(e) => {
                                      const list = [...events.upcoming];
                                      list[i].registerLink = e.target.value;
                                      handleSave('events', { ...events, upcoming: list });
                                    }}
                                    className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                  />
                                </div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-0.5">
                                  <label className="text-[9px] uppercase tracking-wider text-slate-500">Venue</label>
                                  <input
                                    type="text"
                                    value={ev.venue}
                                    onChange={(e) => {
                                      const list = [...events.upcoming];
                                      list[i].venue = e.target.value;
                                      handleSave('events', { ...events, upcoming: list });
                                    }}
                                    className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                  />
                                </div>
                                <div className="space-y-0.5">
                                  <label className="text-[9px] uppercase tracking-wider text-slate-500">Banner URL</label>
                                  <input
                                    type="text"
                                    value={ev.image}
                                    onChange={(e) => {
                                      const list = [...events.upcoming];
                                      list[i].image = e.target.value;
                                      handleSave('events', { ...events, upcoming: list });
                                    }}
                                    className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Past Events Subsection */}
                      <div className="space-y-3 pt-4 border-t border-slate-900">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Past Events / Recaps</h3>
                          <button
                            onClick={() => {
                              const newEvent = {
                                id: `ev-${Date.now()}`,
                                title: 'New Past Event Recap',
                                date: new Date().toISOString(),
                                venue: 'Main Seminar Hall',
                                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
                                recapLink: 'https://instagram.com'
                              };
                              handleSave('events', { ...events, past: [...events.past, newEvent] });
                            }}
                            className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 transition-colors"
                          >
                            Add Past
                          </button>
                        </div>
                        <div className="space-y-3 max-h-[250px] overflow-y-auto pr-1">
                          {events.past.map((ev: any, i: number) => (
                            <div key={ev.id} className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 space-y-3 relative group">
                              <button
                                onClick={() => {
                                  const list = events.past.filter((item: any) => item.id !== ev.id);
                                  handleSave('events', { ...events, past: list });
                                }}
                                className="absolute top-4 right-4 text-xs text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-300"
                              >
                                Delete
                              </button>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-0.5">
                                  <label className="text-[9px] uppercase tracking-wider text-slate-500">Event Title</label>
                                  <input
                                    type="text"
                                    value={ev.title}
                                    onChange={(e) => {
                                      const list = [...events.past];
                                      list[i].title = e.target.value;
                                      handleSave('events', { ...events, past: list });
                                    }}
                                    className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                  />
                                </div>
                                <div className="space-y-0.5">
                                  <label className="text-[9px] uppercase tracking-wider text-slate-500">Instagram Recap Link</label>
                                  <input
                                    type="text"
                                    value={ev.recapLink || ''}
                                    onChange={(e) => {
                                      const list = [...events.past];
                                      list[i].recapLink = e.target.value;
                                      handleSave('events', { ...events, past: list });
                                    }}
                                    className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                  />
                                </div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="space-y-0.5">
                                  <label className="text-[9px] uppercase tracking-wider text-slate-500">Venue</label>
                                  <input
                                    type="text"
                                    value={ev.venue}
                                    onChange={(e) => {
                                      const list = [...events.past];
                                      list[i].venue = e.target.value;
                                      handleSave('events', { ...events, past: list });
                                    }}
                                    className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                  />
                                </div>
                                <div className="space-y-0.5">
                                  <label className="text-[9px] uppercase tracking-wider text-slate-500">Banner URL</label>
                                  <input
                                    type="text"
                                    value={ev.image}
                                    onChange={(e) => {
                                      const list = [...events.past];
                                      list[i].image = e.target.value;
                                      handleSave('events', { ...events, past: list });
                                    }}
                                    className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ====== NOTICES PANEL ====== */}
                  {activeTab === 'notices' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Notices</h3>
                        <button
                          onClick={() => {
                            const newNotice = {
                              id: `not-${Date.now()}`,
                              tag: 'Event',
                              title: 'New Announcement Topic',
                              date: new Date().toISOString().split('T')[0],
                              body: 'Write notice details here to notify student community.'
                            };
                            handleSave('notices', [...notices, newNotice]);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-violet-600 text-white text-xs font-bold hover:bg-violet-500 transition-colors"
                        >
                          Add Notice
                        </button>
                      </div>

                      <div className="space-y-3 max-h-[450px] overflow-y-auto pr-1">
                        {notices.map((notice: any, i: number) => (
                          <div key={notice.id} className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 space-y-3 relative group">
                            <button
                              onClick={() => {
                                const list = notices.filter((item: any) => item.id !== notice.id);
                                handleSave('notices', list);
                              }}
                              className="absolute top-4 right-4 text-xs text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-300"
                            >
                              Delete
                            </button>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              <div className="space-y-0.5 sm:col-span-2">
                                <label className="text-[9px] uppercase tracking-wider text-slate-500">Notice Title</label>
                                <input
                                  type="text"
                                  value={notice.title}
                                  onChange={(e) => {
                                    const list = [...notices];
                                    list[i].title = e.target.value;
                                    handleSave('notices', list);
                                  }}
                                  className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                />
                              </div>
                              <div className="space-y-0.5">
                                <label className="text-[9px] uppercase tracking-wider text-slate-500">Tag Type</label>
                                <select
                                  value={notice.tag}
                                  onChange={(e) => {
                                    const list = [...notices];
                                    list[i].tag = e.target.value;
                                    handleSave('notices', list);
                                  }}
                                  className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                >
                                  <option value="Urgent">Urgent</option>
                                  <option value="Opportunity">Opportunity</option>
                                  <option value="Event">Event</option>
                                </select>
                              </div>
                            </div>
                            <div className="space-y-0.5">
                              <label className="text-[9px] uppercase tracking-wider text-slate-500">Notice Details</label>
                              <textarea
                                rows={2}
                                value={notice.body}
                                onChange={(e) => {
                                  const list = [...notices];
                                  list[i].body = e.target.value;
                                  handleSave('notices', list);
                                }}
                                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
