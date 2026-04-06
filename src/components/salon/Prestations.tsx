import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Scissors, Sparkles, Palette, Droplets, ChevronRight } from "lucide-react";
import { useState } from "react";
import prestationCoupeCoiffage from "@/assets/prestation-coupe-coiffage.jpg";
import prestationCoupeBarbe from "@/assets/prestation-coupe-barbe.jpg";
import prestationCouronne from "@/assets/prestation-couronne.jpg";
import prestationCouronneBarbe from "@/assets/prestation-couronne-barbe.jpg";
import prestationEnfant from "@/assets/prestation-enfant.jpg";
import prestationJeune from "@/assets/prestation-jeune.jpg";
import babyHaircutImg from "@/assets/baby-haircut.jpg";

const services = [
  {
    icon: Scissors,
    title: "Shampoing + Coupe + Coiffage",
    desc: "Shampoing soigneux, coupe sur-mesure et coiffage final. Un résultat net et soigné en 30 minutes.",
    price: "24€",
    items: ["Shampoing inclus", "Coupe sur-mesure", "Coiffage final", "30 min"],
    accent: "from-amber-500/20 to-yellow-600/10",
    image: prestationCoupeCoiffage,
  },
  {
    icon: Scissors,
    title: "Coupe + Taille de Barbe",
    desc: "Shampoing, coupe de précision et taille de barbe à la tondeuse. La formule complète pour un look impeccable.",
    price: "30€",
    items: ["Shampoing inclus", "Coupe + barbe", "Tondeuse précision", "30 min"],
    accent: "from-rose-500/20 to-pink-600/10",
    image: prestationCoupeBarbe,
  },
  {
    icon: Sparkles,
    title: "Coupe Couronne",
    desc: "Shampoing et coupe couronne à la tondeuse. Simple, propre et rapide.",
    price: "20€",
    items: ["Shampoing inclus", "Tondeuse couronne", "Coiffage", "30 min"],
    accent: "from-blue-500/20 to-indigo-600/10",
    image: prestationCouronne,
  },
  {
    icon: Palette,
    title: "Couronne + Barbe",
    desc: "Shampoing, coupe couronne à la tondeuse et taille de barbe. Résultat net garanti.",
    price: "26€",
    items: ["Shampoing inclus", "Couronne tondeuse", "Barbe incluse", "30 min"],
    accent: "from-purple-500/20 to-violet-600/10",
    image: prestationCouronneBarbe,
  },
  {
    icon: Droplets,
    title: "Coupe Enfant -12 ans",
    desc: "Shampoing et coupe coiffage pour les enfants de moins de 12 ans. Accueil doux et adapté.",
    price: "18€",
    items: ["Shampoing inclus", "Coupe enfant", "Coiffage", "30 min"],
    accent: "from-emerald-500/20 to-teal-600/10",
    image: prestationEnfant,
  },
  {
    icon: Scissors,
    title: "Shampoing + Coupe + Coiffage -25 ans",
    desc: "Tarif jeune : shampoing, coupe sur-mesure et coiffage final pour les moins de 25 ans.",
    price: "20€",
    items: ["Shampoing inclus", "Coupe sur-mesure", "Coiffage", "30 min"],
    accent: "from-cyan-500/20 to-sky-600/10",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
  },
  {
    icon: Droplets,
    title: "Coupe Bébé -3 ans",
    desc: "Première coupe en douceur pour les tout-petits de moins de 3 ans. Patience et bienveillance assurées.",
    price: "14€",
    items: ["Coupe douce", "Bébé -3 ans", "Sans shampoing", "15 min"],
    accent: "from-pink-500/20 to-rose-600/10",
    image: babyHaircutImg,
  },
];

export default function Prestations() {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="prestations" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-4 font-semibold">Nos services</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-5 tracking-tight">
            Prestations
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-5" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto text-base leading-relaxed">
            Des prestations haut de gamme adaptées à chaque besoin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isHovered = hoveredIndex === i;
            return (
              <div
                key={s.title}
                className={`group relative bg-card rounded-3xl border border-border/60 overflow-hidden transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] hover:-translate-y-3 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 brightness-75 saturate-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative p-7">
                  {/* Icon + title row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-body text-lg font-bold text-foreground tracking-tight leading-tight">{s.title}</h3>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-body text-muted-foreground uppercase tracking-wider leading-none mb-0.5">à partir de</span>
                      <span className="text-2xl font-body font-extrabold text-gold leading-none">{s.price}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground font-body text-[13px] leading-relaxed mb-5">{s.desc}</p>

                  {/* Items */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.items.map((item, idx) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/5 border border-gold/10 text-xs font-body font-medium text-foreground/80 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-300"
                        style={{ transitionDelay: isHovered ? `${idx * 40}ms` : '0ms' }}
                      >
                        <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" })}
                    className="inline-flex items-center gap-2 text-gold font-body text-sm font-semibold group-hover:gap-3 transition-all duration-300 pt-4 border-t border-border/40 bg-transparent border-x-0 border-b-0 cursor-pointer"
                  >
                    Réserver
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
