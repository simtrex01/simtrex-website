// ============================================================
// SECTION DÉTAILLÉE — Service : Fondations de maison
// Excavation, coffrage et bétonnage de fondations résidentielles.
// Réutilise le style de GalerieTransport.css.
// ============================================================

import "./GalerieTransport.css";
import GalerieGrillePhotos from "./GalerieGrillePhotos";

const photos = [
  {
    src: "/images/fondation-maison/fondation-maison-3-simtrex.jpg",
    alt: "Fondation de maison coffrée et bétonnée, prête pour la construction, par Simtrex inc",
    legende: "Fondation bétonnée, prête pour la construction",
  },
  {
    src: "/images/fondation-maison/fondation-maison-1-simtrex.jpg",
    alt: "Coffrage d'une fondation de maison et pompe à béton en hiver par Simtrex inc",
    legende: "Coffrage et coulée à la pompe à béton",
  },
  {
    src: "/images/fondation-maison/fondation-maison-2-simtrex.jpg",
    alt: "Coffrage des murs d'une fondation résidentielle avant la coulée de béton par Simtrex inc",
    legende: "Coffrage des murs avant la coulée",
  },
];

const pointsForts = [
  { icone: "🚜", texte: "Excavation de l'emplacement de la fondation" },
  { icone: "🧱", texte: "Coffrage professionnel des semelles et des murs" },
  { icone: "🏗️", texte: "Bétonnage et coulée à la pompe" },
  { icone: "❄️", texte: "Travaux réalisés en toute saison, même en hiver" },
  { icone: "📐", texte: "Précision et conformité pour une fondation durable" },
];

export default function GalerieFondations() {
  return (
    <section id="fondations-maison" className="galerie-transport bg-gris">
      <div className="container">

        {/* Fil d'Ariane */}
        <nav className="galerie-transport__breadcrumb" aria-label="Navigation">
          <a href="#services">← Tous nos services</a>
          <span>/</span>
          <span>Fondations de maison</span>
        </nav>

        {/* En-tête */}
        <div className="galerie-transport__entete">
          <div className="galerie-transport__entete-texte">
            <div className="galerie-transport__badge">
              <span>🧱</span> Service détaillé
            </div>
            <h2>Fondations de Maison — <span>Excavation, coffrage et bétonnage</span></h2>
            <p className="galerie-transport__intro">
              Simtrex inc réalise des <strong>fondations résidentielles complètes</strong>, de
              l'<strong>excavation</strong> de l'emplacement au <strong>coffrage</strong> et au
              <strong> bétonnage</strong> des semelles et des murs. Grâce à notre équipe et à
              notre équipement spécialisé, nous menons ces travaux avec précision <strong>en
              toute saison</strong> — même en plein hiver — pour vous livrer une fondation
              solide et conforme, prête à recevoir votre maison.
            </p>
          </div>

          {/* Points forts */}
          <div className="galerie-transport__points">
            {pointsForts.map((p, i) => (
              <div key={i} className="galerie-transport__point">
                <span className="galerie-transport__point-icone">{p.icone}</span>
                <span>{p.texte}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grille de photos avec navigation par flèches */}
        <GalerieGrillePhotos photos={photos} />

        {/* Appels à l'action */}
        <div className="galerie-transport__cta">
          <a href="#contact" className="btn btn-primaire">
            Demander une soumission
          </a>
          <a href="#services" className="btn btn-outline">
            ← Tous nos services
          </a>
        </div>

      </div>
    </section>
  );
}
