import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Heart, Sparkles, Shield } from "lucide-react";

const features = [
  { icon: Award, title: "Expertise", desc: "Des coiffeurs passionnés avec des années d'expérience" },
  { icon: Heart, title: "Passion", desc: "L'amour du métier au service de votre beauté" },
  { icon: Sparkles, title: "Qualité", desc: "Des produits haut de gamme pour des résultats exceptionnels" },
  { icon: Shield, title: "Hygiène", desc: "Protocoles stricts pour votre sécurité et confort" },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Notre philosophie</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            L'art de la coiffure
          </h2>
          <div className="w-20 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg leading-relaxed">
            Fondé en 2025 par Ramzi Araoud, R'Coiff est né d'une passion profonde pour l'art capillaire.
            Notre mission : offrir à chaque client une expérience unique, alliant savoir-faire technique
            et conseil personnalisé dans un cadre élégant et accueillant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`text-center p-8 rounded-2xl bg-secondary/50 border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
