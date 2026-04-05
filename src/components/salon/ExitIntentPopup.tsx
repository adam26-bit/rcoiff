import { useEffect, useState } from "react";
import { X, Scissors, Phone } from "lucide-react";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed]);

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      {/* Popup */}
      <div className="relative bg-card border border-border rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
            <Scissors className="w-8 h-8 text-gold" />
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Vous partez déjà ?
          </h3>

          <p className="text-gold font-display text-lg italic mb-2">
            « Ne coupez pas court à votre beauté ! »
          </p>

          <p className="text-muted-foreground font-body text-sm mb-6 leading-relaxed">
            Offrez-vous une coupe d'exception chez R Coiff'. 
            Nos experts vous attendent pour sublimer votre style.
          </p>

          <div className="space-y-3">
            <a
              href="tel:0961007449"
              className="flex items-center justify-center gap-2 w-full bg-gold text-accent-foreground py-3.5 rounded-full font-body font-semibold text-sm hover:bg-gold-dark transition-all duration-300 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Réserver maintenant
            </a>
            <button
              onClick={handleClose}
              className="w-full text-muted-foreground font-body text-sm py-2 hover:text-foreground transition-colors"
            >
              Non merci, je reviendrai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
