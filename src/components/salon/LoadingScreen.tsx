import { useEffect, useState } from "react";
import { Scissors } from "lucide-react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(p + Math.random() * 12 + 4, 100);
      });
    }, 100);
    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setFadeOut(true), 400);
      setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
      }, 1100);
    }
  }, [progress]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center transition-all duration-700 ${
        fadeOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-gold/5 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full border border-gold/5 animate-ping" style={{ animationDuration: '4s' }} />
      </div>

      {/* Scissors icon with spinning border */}
      <div className="relative mb-10">
        <div className="w-24 h-24 rounded-full bg-gold/5 flex items-center justify-center">
          <Scissors
            className="w-12 h-12 text-gold transition-transform duration-500"
            style={{ transform: `rotate(${progress * 3.6}deg)` }}
          />
        </div>
        <svg className="absolute inset-0 w-24 h-24" viewBox="0 0 96 96">
          <circle cx="48" cy="48" r="46" fill="none" stroke="hsl(38 50% 55% / 0.15)" strokeWidth="2" />
          <circle
            cx="48" cy="48" r="46"
            fill="none"
            stroke="hsl(38 50% 55%)"
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 46}`}
            strokeDashoffset={`${2 * Math.PI * 46 * (1 - progress / 100)}`}
            strokeLinecap="round"
            className="transition-all duration-200 ease-out"
            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
          />
        </svg>
      </div>

      {/* Brand */}
      <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
        R <span className="text-gold">Coiff'</span>
      </h1>
      <p className="text-white/40 font-body text-sm tracking-[0.25em] uppercase mb-10">
        L'excellence capillaire
      </p>

      {/* Progress bar */}
      <div className="w-56 h-[3px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full gradient-gold rounded-full transition-all duration-150 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="text-white/30 font-body text-xs mt-3 tabular-nums">
        {Math.round(Math.min(progress, 100))}%
      </p>
    </div>
  );
}
