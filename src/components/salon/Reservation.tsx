import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Clock, ExternalLink, Calendar } from "lucide-react";

// ⚠️ Remplacez "rcoiff" par le vrai username Cal.com du salon une fois le compte créé
const CAL_USERNAME = "rcoiff";
const CAL_EVENT = "rdv";

export default function Reservation() {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    // Charge le script Cal.com une seule fois
    if ((window as any).Cal) return;
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      const Cal = (window as any).Cal;
      Cal("init", { origin: "https://app.cal.com" });
      Cal("inline", {
        elementOrSelector: "#cal-inline",
        calLink: `${CAL_USERNAME}/${CAL_EVENT}`,
        layout: "month_view",
      });
      Cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#C9A96E" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <section id="reservation" className="py-24 lg:py-32 bg-secondary/30">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Rendez-vous</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Réservez votre créneau
          </h2>
          <div className="w-20 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Prenez rendez-vous en ligne ou contactez-nous directement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quick options */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <a
              href="tel:0961007449"
              className="flex items-center gap-6 bg-card border border-border rounded-2xl p-6 hover:border-gold/40 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors shrink-0">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Par téléphone</h3>
                <p className="text-gold font-body font-semibold">01 60 21 05 06</p>
                <p className="text-muted-foreground font-body text-sm">Réponse immédiate aux heures d'ouverture</p>
              </div>
            </a>

            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Horaires d'ouverture</h3>
                  <p className="text-muted-foreground font-body text-sm">Sans rendez-vous aussi accepté</p>
                </div>
              </div>
              <div className="space-y-2 ml-[4.5rem]">
                {[
                  { day: "Lundi", hours: "Fermé" },
                  { day: "Mardi", hours: "09h00 - 12h00 / 14h00 - 19h00" },
                  { day: "Mercredi", hours: "09h00 - 12h00 / 14h00 - 19h00" },
                  { day: "Jeudi", hours: "09h00 - 12h00 / 14h00 - 19h00" },
                  { day: "Vendredi", hours: "09h00 - 12h00 / 14h00 - 19h00" },
                  { day: "Samedi", hours: "09h00 - 18h00" },
                  { day: "Dimanche", hours: "Fermé" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between text-sm font-body">
                    <span className="text-foreground/70">{h.day}</span>
                    <span className={`font-medium ${h.hours === "Fermé" ? "text-destructive" : "text-foreground"}`}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6 text-center">
              <Calendar className="w-10 h-10 text-gold mx-auto mb-3" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Première visite ?</h3>
              <p className="text-muted-foreground font-body text-sm mb-4">
                Profitez de -10% sur votre première prestation en mentionnant le site web.
              </p>
              <a
                href="tel:0961007449"
                className="inline-block bg-gold text-white px-6 py-3 rounded-full font-body font-semibold text-sm hover:bg-gold-dark transition-colors"
              >
                Réserver maintenant
              </a>
            </div>
          </div>

          {/* Cal.com embed */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
              <div className="px-6 pt-6 pb-3 flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-foreground">Choisissez votre créneau</h3>
                <a
                  href={`https://cal.com/${CAL_USERNAME}/${CAL_EVENT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gold text-sm font-body hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Ouvrir en plein écran
                </a>
              </div>
              <div
                id="cal-inline"
                style={{ width: "100%", height: "520px", overflow: "hidden" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
