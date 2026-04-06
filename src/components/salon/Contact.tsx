import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Nous trouver</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Contactez-nous
          </h2>
          <div className="w-20 h-[2px] bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            {[
              { icon: MapPin, label: "Adresse", value: "2 Place de la Grande Fontaine", sub: "94290 Villeneuve-le-Roi" },
              { icon: Phone, label: "Téléphone", value: "09 61 00 74 49", sub: "Du lundi au samedi" },
              { icon: Clock, label: "Horaires", value: "Mar–Ven : 9h–12h / 14h–19h", sub: "Sam : 9h–18h · Lun & Dim : Fermé" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-1">{c.label}</p>
                    <p className="font-display text-lg font-semibold text-foreground">{c.value}</p>
                    <p className="text-sm font-body text-muted-foreground">{c.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.5!2d2.4355!3d48.7334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDQ0JzAwLjQiTiAywrAyNicwNy44IkU!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="R Coiff' - Villeneuve-le-Roi"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
