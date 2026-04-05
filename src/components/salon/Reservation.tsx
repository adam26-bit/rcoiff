import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Calendar, Clock, User, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Reservation() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirige vers WhatsApp avec les infos pré-remplies
    const message = encodeURIComponent(
      `Bonjour R Coiff', je souhaite prendre rendez-vous :\n\n` +
      `Nom : ${form.name}\n` +
      `Téléphone : ${form.phone}\n` +
      `Prestation : ${form.service}\n` +
      (form.message ? `Message : ${form.message}\n` : "")
    );
    window.open(`https://wa.me/33961007449?text=${message}`, "_blank");
    toast({
      title: "Demande envoyée !",
      description: "WhatsApp s'est ouvert avec votre demande. Envoyez le message pour confirmer votre RDV.",
    });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

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
                <p className="text-gold font-body font-semibold">09 61 00 74 49</p>
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
                  { day: "Mardi - Vendredi", hours: "09h00 - 19h30" },
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

          {/* Form */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Formulaire de réservation</h3>

              <div className="space-y-5">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Votre nom complet"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-secondary/50 border border-border rounded-xl font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Votre email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-secondary/50 border border-border rounded-xl font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="tel"
                    placeholder="Votre téléphone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-secondary/50 border border-border rounded-xl font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors"
                  />
                </div>

                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  required
                  className="w-full px-4 py-3.5 bg-secondary/50 border border-border rounded-xl font-body text-sm text-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors"
                >
                  <option value="">Choisir une prestation</option>
                  <option value="coupe-homme">Coupe Homme</option>
                  <option value="coupe-femme">Coupe Femme</option>
                  <option value="barbe">Barbe</option>
                  <option value="coloration">Coloration</option>
                  <option value="soins">Soins Capillaires</option>
                </select>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground" />
                  <textarea
                    placeholder="Un message ? (optionnel)"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full pl-12 pr-4 py-3.5 bg-secondary/50 border border-border rounded-xl font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-white py-4 rounded-xl font-body font-semibold text-base hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Envoyer ma demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
