import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("rcoiff-cookies")) {
      setTimeout(() => setVisible(true), 1500);
    }
  }, []);

  const accept = () => { localStorage.setItem("rcoiff-cookies", "accepted"); setVisible(false); };
  const refuse = () => { localStorage.setItem("rcoiff-cookies", "refused"); setVisible(false); };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-charcoal/97 border-t border-white/10 backdrop-blur-md px-6 py-4 flex flex-wrap items-center justify-between gap-4 animate-in slide-in-from-bottom duration-500">
      <p className="text-white/70 font-body text-sm leading-relaxed flex-1 min-w-[240px]">
        <span className="text-gold font-semibold">Respect de votre vie privée.</span>{" "}
        Ce site utilise uniquement des cookies techniques essentiels à son fonctionnement. Aucun cookie publicitaire n'est utilisé.{" "}
        <a href="/mentions-legales" className="text-gold underline underline-offset-2 hover:text-gold/80 transition-colors">
          Politique de confidentialité
        </a>
      </p>
      <div className="flex gap-3 shrink-0">
        <button
          onClick={refuse}
          className="px-4 py-2 border border-white/20 text-white/50 font-body text-sm rounded-lg hover:text-white hover:border-white/40 transition-all"
        >
          Refuser
        </button>
        <button
          onClick={accept}
          className="px-5 py-2 bg-gold text-black font-body font-semibold text-sm rounded-lg hover:bg-gold/90 transition-all"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
