// ============================================================
// SECTION DÉTAILLÉE — Projet vedette : Réfection de 9 ponceaux
// Route 138 (2024) — drainage de chaussée, pour le MTQ
// Réutilise le style de GalerieTransport.css.
// ============================================================

import "./GalerieTransport.css";
import GalerieGrillePhotos from "./GalerieGrillePhotos";

const photos = [
  {
    src: "/images/ponceaux-138/ponceaux138-installation-equipe-simtrex.jpg",
    alt: "Installation d'un ponceau en béton sur la route 138 par l'équipe de Simtrex inc",
    legende: "Installation d'un ponceau en béton",
  },
  {
    src: "/images/ponceaux-138/ponceaux138-excavation-drainage-simtrex.jpg",
    alt: "Excavation et drainage de chaussée sur la route 138 par Simtrex inc",
    legende: "Excavation et drainage de chaussée",
  },
  {
    src: "/images/ponceaux-138/ponceaux138-chantier-route-simtrex.jpg",
    alt: "Chantier de réfection de ponceaux sur la route 138 par Simtrex inc",
    legende: "Gestion du chantier routier",
  },
];

const pointsForts = [
  { icone: "🏛️", texte: "Pour le ministère des Transports du Québec (MTQ)" },
  { icone: "🛣️", texte: "9 ponceaux remplacés sur la route 138" },
  { icone: "💧", texte: "Drainage de chaussée" },
  { icone: "📅", texte: "Réalisé en 2024" },
];

export default function GaleriePonceaux138() {
  return (
    <section id="ponceaux-route138" className="galerie-transport bg-sombre">
      <div className="container">

        {/* Fil d'Ariane */}
        <nav className="galerie-transport__breadcrumb" aria-label="Navigation">
          <a href="#realisations">← Toutes nos réalisations</a>
          <span>/</span>
          <span>Réfection de 9 ponceaux — Route 138</span>
        </nav>

        {/* En-tête */}
        <div className="galerie-transport__entete">
          <div className="galerie-transport__entete-texte">
            <div className="galerie-transport__badge">
              <span>⭐</span> Projet en vedette
            </div>
            <h2>Réfection de 9 ponceaux — <span>Route 138</span></h2>
            <p className="galerie-transport__intro">
              En <strong>2024</strong>, Simtrex inc a réalisé pour le <strong>ministère des
              Transports du Québec (MTQ)</strong> la réfection de 9 ponceaux et le drainage de
              chaussée sur la <strong>route 138</strong>. Le projet comprenait l'excavation,
              le remplacement des ponceaux en béton, l'installation du drainage et la remise
              en état de la chaussée, le tout en maintenant la circulation routière.
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

        <GalerieGrillePhotos photos={photos} />

        {/* Appels à l'action */}
        <div className="galerie-transport__cta">
          <a href="#contact" className="btn btn-primaire">
            Demander une soumission
          </a>
          <a href="#realisations" className="btn btn-outline">
            ← Toutes nos réalisations
          </a>
        </div>

      </div>
    </section>
  );
}
