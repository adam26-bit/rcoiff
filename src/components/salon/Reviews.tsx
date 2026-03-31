import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Marie L.",
    text: "Un salon exceptionnel ! Ramzi a parfaitement compris ce que je voulais. Le résultat est au-delà de mes attentes. Je recommande à 100% !",
    rating: 5,
    service: "Coloration + Coupe",
  },
  {
    name: "Thomas D.",
    text: "Meilleur barbier de Villeneuve-le-Roi ! Le dégradé est parfait, l'ambiance est top et l'accueil chaleureux. Mon salon attitré désormais.",
    rating: 5,
    service: "Coupe + Barbe",
  },
  {
    name: "Sophia K.",
    text: "Sarah est une artiste de la couleur. Mon balayage est sublime et mes cheveux sont en pleine forme. Le soin kératine est magique !",
    rating: 5,
    service: "Balayage + Soin",
  },
  {
    name: "Mehdi A.",
    text: "Première visite et je suis conquis. Écoute, professionnalisme et résultat impeccable. L'équipe est vraiment au top !",
    rating: 5,
    service: "Coupe Homme",
  },
  {
    name: "Camille R.",
    text: "Enfin un salon où on prend le temps de vous écouter. Le cadre est magnifique et les produits sont de qualité. Je reviendrai !",
    rating: 5,
    service: "Coupe + Brushing",
  },
  {
    name: "Youssef B.",
    text: "Karim est un expert du dégradé. Chaque coupe est précise et soignée. L'ambiance est conviviale, on s'y sent très bien.",
    rating: 5,
    service: "Dégradé",
  },
];

export default function Reviews() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="avis" className="py-24 lg:py-32 bg-charcoal text-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Témoignages</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ce que disent nos clients
          </h2>
          <div className="w-20 h-[2px] bg-gold mx-auto mb-6" />
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-6 h-6 text-gold fill-gold" />
            ))}
          </div>
          <p className="text-white/60 font-body text-lg">4.9/5 — Plus de 150 avis positifs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-gold/40 mb-4" />
              <p className="text-white/80 font-body text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-semibold text-white">{r.name}</p>
                  <p className="text-gold text-xs font-body">{r.service}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
