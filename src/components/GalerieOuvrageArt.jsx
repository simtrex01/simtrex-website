// ============================================================
// SECTION DÉTAILLÉE — Projet vedette : Ouvrage d'art
// Réfection du PBA de la décharge du lac Saint-Antoine
// Route 362, Saint-Irénée (2021) + mur Redi-Rock
// Réutilise le style de GalerieTransport.css.
// ============================================================

import "./GalerieTransport.css";
import GalerieGrillePhotos from "./GalerieGrillePhotos";

const photos = [
  {
    src: "/images/ouvrage-art/ouvrage-pba-termine-route362-simtrex.jpg",
    alt: "Ouvrage d'art terminé sur la route 362 à Saint-Irénée par Simtrex inc — ponceau et enrochement",
    legende: "Ouvrage terminé — ponceau et enrochement",
  },
  {
    src: "/images/ouvrage-art/ouvrage-grue-chantier-simtrex.jpg",
    alt: "Grue de levage sur le chantier de l'ouvrage d'art route 362 par Simtrex inc",
    legende: "Levage des sections par grue",
  },
  {
    src: "/images/ouvrage-art/ouvrage-grue-sections-beton-simtrex.jpg",
    alt: "Installation des sections de béton préfabriqué par Simtrex inc sur la route 362",
    legende: "Mise en place des sections de béton",
  },
  {
    src: "/images/ouvrage-art/ouvrage-levage-sections-simtrex.jpg",
    alt: "Levage d'une section de ponceau en béton armé par Simtrex inc",
    legende: "Levage d'une section de ponceau",
  },
  {
    src: "/images/ouvrage-art/ouvrage-installation-ponceau-simtrex.jpg",
    alt: "Installation du ponceau en béton armé sur la route 362 par Simtrex inc",
    legende: "Installation du ponceau en béton armé",
  },
  {
    src: "/images/ouvrage-art/ouvrage-mur-redirock-simtrex.jpg",
    alt: "Construction du mur de soutènement Redi-Rock par Simtrex inc — route 362",
    legende: "Construction du mur de soutènement Redi-Rock",
  },
];

const pointsForts = [
  { icone: "🏛️", texte: "Pour le ministère des Transports du Québec (MTQ)" },
  { icone: "🌉", texte: "Réfection d'un ouvrage d'art (PBA)" },
  { icone: "📍", texte: "Route 362, Saint-Irénée — 2021" },
  { icone: "🧱", texte: "Mur de soutènement Redi-Rock" },
];

export default function GalerieOuvrageArt() {
  return (
    <section id="ouvrage-art-route362" className="galerie-transport bg-gris">
      <div className="container">

        {/* Fil d'Ariane */}
        <nav className="galerie-transport__breadcrumb" aria-label="Navigation">
          <a href="#realisations">← Toutes nos réalisations</a>
          <span>/</span>
          <span>Ouvrage d'art — Route 362, Saint-Irénée</span>
        </nav>

        {/* En-tête */}
        <div className="galerie-transport__entete">
          <div className="galerie-transport__entete-texte">
            <div className="galerie-transport__badge">
              <span>⭐</span> Projet en vedette
            </div>
            <h2>Ouvrage d'art — <span>Route 362, Saint-Irénée</span></h2>
            <p className="galerie-transport__intro">
              En <strong>2021</strong>, Simtrex inc a réalisé pour le <strong>ministère des
              Transports du Québec (MTQ)</strong> la réfection du ponceau (PBA) de la décharge
              du lac Saint-Antoine, sur la <strong>route 362</strong> à Saint-Irénée. Le projet
              comprenait l'excavation, le levage et la mise en place de sections de béton armé
              préfabriqué, la construction d'un mur de soutènement <strong>Redi-Rock</strong> et
              l'aménagement d'un enrochement de protection — un mandat de génie civil d'envergure.
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
