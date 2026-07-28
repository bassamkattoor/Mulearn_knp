import { MessageSquare, Award, Terminal } from 'lucide-react';

export default function ChatSimulation() {
  const messages = [
    {
      user: "Rahul V (CSE '27)",
      role: "Level 1 Learner",
      avatar: "https://ui-avatars.com/api/?name=Rahul+V&background=8b5cf6&color=fff",
      text: "Hey everyone! Stuck on configuring GitHub SSH keys for my Level 2 Karma task. Any quick tips?",
      time: "4:12 PM",
    },
    {
      user: "Devika M (IT '26)",
      role: "Web Dev IG Lead",
      avatar: "https://ui-avatars.com/api/?name=Devika+M&background=3b82f6&color=fff",
      text: "Run `ssh-keygen -t ed25519 -C 'your_email@example.com'` and add the pub key under GitHub Settings -> SSH Keys! Here's the test command:",
      code: "ssh -T git@github.com",
      time: "4:14 PM",
    },
    {
      user: "Karma Bot",
      role: "µLearn System",
      isBot: true,
      text: "🎉 Task Completed! Rahul V earned +100 Karma Points for SSH Key Configuration.",
      points: "+100 PTS",
      time: "4:15 PM",
    },
  ];

  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-indigo-500/20 relative overflow-hidden shadow-2xl">
      {/* Glow highlight */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex items-center justify-between pb-6 border-b border-indigo-500/15 mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl shadow-lg shadow-violet-600/30">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-base">Live Learning Circle Discord Stage</h4>
            <p className="text-xs text-slate-400 flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>320+ KNP Builders Online</span>
            </p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 hidden sm:inline-block">
          Peer-to-Peer Execution
        </span>
      </div>

      {/* Chat Messages */}
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-4 rounded-2xl transition-all ${
              msg.isBot
                ? 'bg-gradient-to-r from-lime-500/10 via-emerald-500/10 to-transparent border border-lime-500/30'
                : 'bg-surface/80 border border-indigo-500/10 hover:border-indigo-500/30'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2.5">
                {msg.isBot ? (
                  <div className="p-1.5 bg-lime-400 rounded-lg text-slate-950 font-black text-xs">
                    µ
                  </div>
                ) : (
                  <img src={msg.avatar} alt={msg.user} className="w-7 h-7 rounded-full border border-slate-700" />
                )}
                <div>
                  <span className="text-xs font-bold text-slate-200">{msg.user}</span>
                  <span className="text-[10px] text-slate-400 ml-2 px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800">
                    {msg.role}
                  </span>
                </div>
              </div>
              <span className="text-[10px] text-slate-500">{msg.time}</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed pl-9">{msg.text}</p>

            {msg.code && (
              <div className="ml-9 mt-2 p-2.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-[11px] text-lime-400 flex items-center justify-between">
                <code>{msg.code}</code>
                <Terminal className="w-3.5 h-3.5 text-slate-500" />
              </div>
            )}

            {msg.points && (
              <div className="ml-9 mt-2 inline-flex items-center space-x-1.5 px-2.5 py-1 bg-lime-400/20 text-lime-300 rounded-lg text-xs font-bold border border-lime-400/40">
                <Award className="w-3.5 h-3.5" />
                <span>{msg.points}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
