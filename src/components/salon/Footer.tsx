import { Link } from "react-router-dom";
import { Scissors, Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-6 h-6 text-gold" />
              <span className="text-2xl font-display font-bold">R'<span className="text-gold">Coiff</span></span>
            </div>
            <p className="text-white/60 font-body text-sm leading-relaxed">
              Votre salon de coiffure premium à Villeneuve-le-Roi. Excellence, passion et style au quotidien.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-gold">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Accueil", id: "accueil" },
                { label: "Prestations", id: "prestations" },
                { label: "Équipe", id: "equipe" },
                { label: "Avis", id: "avis" },
                { label: "Contact", id: "contact" },
              ].map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleNavClick(l.id)}
                    className="text-white/60 hover:text-gold font-body text-sm transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span className="text-white/60 font-body text-sm">2 Place de la Grande Fontaine, 94290</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:0961007449" className="text-white/60 hover:text-gold font-body text-sm transition-colors">09 61 00 74 49</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-gold">Horaires</h4>
            <div className="space-y-1.5 font-body text-sm">
              <div className="flex justify-between text-white/60"><span>Mar - Ven</span><span>9h - 19h30</span></div>
              <div className="flex justify-between text-white/60"><span>Samedi</span><span>9h - 18h</span></div>
              <div className="flex justify-between text-white/40"><span>Dim - Lun</span><span>Fermé</span></div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-body text-xs">
            © {new Date().getFullYear()} R'Coiff — SASU — SIREN 990 587 073. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/mentions-legales" className="text-white/40 hover:text-gold font-body text-xs transition-colors">
              Mentions légales
            </Link>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
