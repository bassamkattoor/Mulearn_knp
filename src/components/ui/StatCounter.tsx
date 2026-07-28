import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export default function StatCounter({ value, label, suffix = '', prefix = '' }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1800;
          const step = Math.ceil(value / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={ref}
      className="glass-card p-6 sm:p-8 rounded-2xl text-center relative overflow-hidden group hover:border-violet-500/30 transition-all"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <p className="text-3xl sm:text-4xl font-display font-black text-white tabular-nums">
          {prefix}
          {value >= 1000 ? `${(count / 1000).toFixed(count >= value ? 1 : 0)}K` : count.toLocaleString()}
          <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">{suffix}</span>
        </p>
        <p className="text-xs text-slate-400 font-medium mt-2 uppercase tracking-wider">{label}</p>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-500" />
      </div>
    </div>
  );
}
