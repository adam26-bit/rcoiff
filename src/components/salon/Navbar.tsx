import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Prestations", href: "/#prestations" },
  { label: "Équipe", href: "/#equipe" },
  { label: "Avis", href: "/#avis" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="text-2xl font-display font-bold tracking-wider">
              R'<span className="text-gold">Coiff</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-body font-medium tracking-wide uppercase text-foreground/80 hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0961007449"
              className="flex items-center gap-2 bg-gold text-accent-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4" />
              Réserver
            </a>
          </div>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/98 backdrop-blur-lg border-t border-border px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block text-sm font-body font-medium tracking-wide uppercase text-foreground/80 hover:text-gold transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0961007449"
            className="flex items-center justify-center gap-2 bg-gold text-accent-foreground px-5 py-3 rounded-full text-sm font-semibold font-body w-full"
          >
            <Phone className="w-4 h-4" />
            Réserver maintenant
          </a>
        </div>
      </div>
    </nav>
  );
}
