import { useEffect, useState } from "react";
import { Scissors } from "lucide-react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setFadeOut(true), 300);
      setTimeout(() => setVisible(false), 900);
    }
  }, [progress]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated scissors */}
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-full border-2 border-gold/20 flex items-center justify-center animate-pulse">
          <Scissors
            className="w-10 h-10 text-gold transition-transform duration-700"
            style={{ transform: `rotate(${progress * 3.6}deg)` }}
          />
        </div>
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold animate-spin" />
      </div>

      {/* Brand */}
      <h1 className="text-3xl font-display font-bold mb-2">
        R'<span className="text-gold">Coiff</span>
      </h1>
      <p className="text-muted-foreground font-body text-sm tracking-[0.2em] uppercase mb-8">
        L'excellence capillaire
      </p>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-gold rounded-full transition-all duration-200 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
}
