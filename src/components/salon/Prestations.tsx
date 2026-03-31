import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Scissors, Sparkles, Palette, Droplets } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Coupe Homme",
    desc: "Une coupe sur-mesure qui sublimera votre style. Consultation personnalisée, coupe de précision et finitions soignées.",
    price: "À partir de 20€",
    items: ["Coupe classique", "Dégradé", "Coupe + barbe", "Coupe enfant"],
  },
  {
    icon: Scissors,
    title: "Coupe Femme",
    desc: "De la coupe tendance au style intemporel, nos experts révèlent la beauté de chaque chevelure avec élégance.",
    price: "À partir de 30€",
    items: ["Coupe + brushing", "Coupe courte", "Coupe longue", "Coupe enfant"],
  },
  {
    icon: Sparkles,
    title: "Barbe",
    desc: "Un rituel de soin complet pour une barbe impeccable. Taille de précision, contours nets et hydratation premium.",
    price: "À partir de 15€",
    items: ["Taille classique", "Rasage traditionnel", "Soin barbe", "Contours"],
  },
  {
    icon: Palette,
    title: "Coloration",
    desc: "Des couleurs vibrantes et naturelles grâce à des produits professionnels respectueux de vos cheveux.",
    price: "À partir de 40€",
    items: ["Coloration complète", "Mèches", "Balayage", "Patine"],
  },
  {
    icon: Droplets,
    title: "Soins Capillaires",
    desc: "Des traitements sur-mesure pour nourrir, réparer et sublimer votre chevelure. Résultats visibles dès la première séance.",
    price: "À partir de 25€",
    items: ["Soin profond", "Kératine", "Botox capillaire", "Masque nutrition"],
  },
];

export default function Prestations() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="prestations" className="py-24 lg:py-32 bg-secondary/30">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Nos services</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Prestations
          </h2>
          <div className="w-20 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Des prestations haut de gamme adaptées à chaque besoin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`group bg-card rounded-2xl border border-border p-8 hover:border-gold/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                    <p className="text-gold font-body text-sm font-semibold">{s.price}</p>
                  </div>
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-body text-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
