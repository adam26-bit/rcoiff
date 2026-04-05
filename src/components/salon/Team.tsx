import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const team = [
  {
    name: "Ramzi",
    role: "Fondateur & Coiffeur Expert",
    experience: "10+ ans d'expérience",
    desc: "Passionné par l'art capillaire depuis toujours, Ramzi a fondé R Coiff' avec une vision : offrir l'excellence à chaque client. Son expertise et son écoute font de chaque visite un moment unique.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Sarah",
    role: "Coloriste Experte",
    experience: "8 ans d'expérience",
    desc: "Artiste de la couleur, Sarah transforme chaque chevelure en œuvre d'art. Spécialiste du balayage et des techniques modernes, elle sublime votre beauté naturelle.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80",
  },
  {
    name: "Karim",
    role: "Barbier & Coiffeur",
    experience: "6 ans d'expérience",
    desc: "Expert du dégradé et de la taille de barbe, Karim allie précision et créativité pour un résultat toujours impeccable. Son attention aux détails fait la différence.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

export default function Team() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="equipe" className="py-24 lg:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Notre équipe</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Des experts passionnés
          </h2>
          <div className="w-20 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Une équipe talentueuse et chaleureuse, dévouée à votre satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((m, i) => (
            <div
              key={m.name}
              className={`group text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-gold/20 group-hover:border-gold/50 transition-all duration-500 shadow-xl">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-1">{m.name}</h3>
              <p className="text-gold font-body text-sm font-semibold mb-1">{m.role}</p>
              <p className="text-muted-foreground font-body text-xs uppercase tracking-wider mb-4">{m.experience}</p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-sm mx-auto">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
