import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/salon/Footer";
import Navbar from "@/components/salon/Navbar";
import { useEffect } from "react";

const MentionsLegales = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gold font-body text-sm mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Mentions Légales</h1>

        <div className="prose prose-sm max-w-none font-body space-y-8 text-foreground/80">
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Informations légales</h2>
            <ul className="space-y-1 list-none pl-0">
              <li><strong>Raison sociale :</strong> R'COIFF</li>
              <li><strong>Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)</li>
              <li><strong>Dirigeant :</strong> Ramzi Araoud</li>
              <li><strong>SIREN :</strong> 990 587 073</li>
              <li><strong>SIRET :</strong> 990 587 073 00018</li>
              <li><strong>Activité :</strong> Coiffure</li>
              <li><strong>Adresse :</strong> 2 Place de la Grande Fontaine, 94290 Villeneuve-le-Roi</li>
              <li><strong>Téléphone :</strong> 09 61 00 74 49</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">2. Hébergement</h2>
            <p>Ce site est hébergé par Lovable (Lovable Technologies). Pour toute question relative à l'hébergement, vous pouvez nous contacter à l'adresse indiquée ci-dessus.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">3. Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de R'COIFF.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">4. Protection des données personnelles (RGPD)</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="mt-3">Les données collectées via le formulaire de contact (nom, email, téléphone, message) sont utilisées uniquement dans le cadre de la gestion des rendez-vous et de la relation client. Elles ne sont jamais transmises à des tiers.</p>
            <p>Pour exercer vos droits, contactez-nous par courrier à l'adresse du salon ou par téléphone au 09 61 00 74 49.</p>
            <p><strong>Responsable du traitement :</strong> Ramzi Araoud</p>
            <p><strong>Durée de conservation :</strong> Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">5. Cookies</h2>
            <p>Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne collectent aucune donnée personnelle à des fins publicitaires.</p>
            <p>Les cookies techniques sont essentiels au fonctionnement du site et ne nécessitent pas votre consentement. Si des cookies analytiques ou marketing sont mis en place ultérieurement, votre consentement sera systématiquement demandé.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">6. Limitation de responsabilité</h2>
            <p>R'COIFF s'efforce de fournir des informations aussi précises que possible. Toutefois, elle ne saurait être tenue responsable des omissions, des inexactitudes ou des carences dans la mise à jour des informations.</p>
            <p>Les prix indiqués sur le site sont donnés à titre indicatif et peuvent être modifiés sans préavis.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">7. Droit applicable</h2>
            <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
          </section>

          <p className="text-muted-foreground text-xs mt-12">Dernière mise à jour : Mars 2026</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
