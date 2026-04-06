import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Client Planity",
    text: "C'est comme à la maison ! Un bonheur de se faire coiffer 🥰👍",
    rating: 5,
    service: "Coupe",
    date: "22/03/2026",
  },
  {
    name: "Client Planity",
    text: "Un accueil chaleureux et une personne très pro et très agréable.",
    rating: 5,
    service: "Coupe",
    date: "17/03/2026",
  },
  {
    name: "Client Planity",
    text: "Parfait, comme d'habitude ! Rien à dire. Tres bon acueil, toujours un petit café, coupe parfaite et rapide. Un vrai professionnel. Je recommande !",
    rating: 5,
    service: "Coupe",
    date: "15/03/2026",
  },
  {
    name: "Client Planity",
    text: "Ramzi toujours au top.",
    rating: 5,
    service: "Coupe",
    date: "15/03/2026",
  },
  {
    name: "Client Planity",
    text: "Accueil au top, Ramzi est très professionnel et à l'écoute. Je recommande vivement !",
    rating: 5,
    service: "Coupe",
    date: "Mars 2026",
  },
  {
    name: "Client Planity",
    text: "Excellent salon, ambiance chaleureuse et résultat impeccable. On y revient les yeux fermés.",
    rating: 5,
    service: "Coupe + Barbe",
    date: "Mars 2026",
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
          <p className="text-white/60 font-body text-lg">5.0/5 — 128 avis clients vérifiés</p>
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
                  <p className="text-gold text-xs font-body">{r.service} · {r.date}</p>
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
