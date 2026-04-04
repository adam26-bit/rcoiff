import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Scissors, Sparkles, Palette, Droplets, ChevronRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Scissors,
    title: "Coupe Homme",
    desc: "Une coupe sur-mesure qui sublimera votre style. Consultation personnalisée, coupe de précision et finitions soignées.",
    price: "20€",
    items: ["Coupe classique", "Dégradé", "Coupe + barbe", "Coupe enfant"],
    accent: "from-amber-500/20 to-yellow-600/10",
  },
  {
    icon: Scissors,
    title: "Coupe Femme",
    desc: "De la coupe tendance au style intemporel, nos experts révèlent la beauté de chaque chevelure avec élégance.",
    price: "30€",
    items: ["Coupe + brushing", "Coupe courte", "Coupe longue", "Coupe enfant"],
    accent: "from-rose-500/20 to-pink-600/10",
  },
  {
    icon: Sparkles,
    title: "Barbe",
    desc: "Un rituel de soin complet pour une barbe impeccable. Taille de précision, contours nets et hydratation premium.",
    price: "15€",
    items: ["Taille classique", "Rasage traditionnel", "Soin barbe", "Contours"],
    accent: "from-blue-500/20 to-indigo-600/10",
  },
  {
    icon: Palette,
    title: "Coloration",
    desc: "Des couleurs vibrantes et naturelles grâce à des produits professionnels respectueux de vos cheveux.",
    price: "40€",
    items: ["Coloration complète", "Mèches", "Balayage", "Patine"],
    accent: "from-purple-500/20 to-violet-600/10",
  },
  {
    icon: Droplets,
    title: "Soins Capillaires",
    desc: "Des traitements sur-mesure pour nourrir, réparer et sublimer votre chevelure. Résultats visibles dès la première séance.",
    price: "25€",
    items: ["Soin profond", "Kératine", "Botox capillaire", "Masque nutrition"],
    accent: "from-emerald-500/20 to-teal-600/10",
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
                {/* Top accent */}
                <div className={`h-1 w-full bg-gradient-to-r ${s.accent} group-hover:h-1.5 transition-all duration-300`} />
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
                  <a
                    href="tel:0961007449"
                    className="inline-flex items-center gap-2 text-gold font-body text-sm font-semibold group-hover:gap-3 transition-all duration-300 pt-4 border-t border-border/40"
                  >
                    Réserver
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
