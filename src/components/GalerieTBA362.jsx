// ============================================================
// SECTION DÉTAILLÉE — Projet vedette : Ponceau majeur 1800 mm
// Route 362 (2020) — 7 m de profondeur, MTQ, 1 M$
// Réutilise le style de GalerieTransport.css.
// ============================================================

import "./GalerieTransport.css";
import GalerieGrillePhotos from "./GalerieGrillePhotos";

const photos = [
  {
    src: "/images/tba362/tba362-4-simtrex.jpg",
    alt: "Excavation profonde et mise en place du ponceau de 1800 mm sur la route 362 par Simtrex inc",
    legende: "Excavation et mise en place du ponceau de 1800 mm",
  },
  {
    src: "/images/tba362/tba362-3-simtrex.jpg",
    alt: "Excavation à 7 mètres de profondeur pour le ponceau de la route 362 par Simtrex inc",
    legende: "Excavation à 7 mètres de profondeur",
  },
  {
    src: "/images/tba362/tba362-5-simtrex.jpg",
    alt: "Tranchée étayée et support des conduites d'aqueduc sur la route 362 par Simtrex inc",
    legende: "Tranchée étayée et support des conduites d'aqueduc",
  },
  {
    src: "/images/tba362/tba362-6-simtrex.jpg",
    alt: "Ponceau de 1800 mm installé avec enrochement de protection par Simtrex inc",
    legende: "Ponceau de 1800 mm installé avec enrochement",
  },
  {
    src: "/images/tba362/tba362-1-simtrex.jpg",
    alt: "Chemin de contournement temporaire aménagé par Simtrex inc sur la route 362",
    legende: "Chemin de contournement temporaire",
  },
  {
    src: "/images/tba362/tba362-2-simtrex.jpg",
    alt: "Circulation en alternance maintenue durant les travaux sur la route 362 par Simtrex inc",
    legende: "Circulation en alternance maintenue",
  },
];

const pointsForts = [
  { icone: "🏛️", texte: "Pour le ministère des Transports du Québec (MTQ)" },
  { icone: "🛢️", texte: "Ponceau de 1800 mm — 7 m de profondeur" },
  { icone: "🚧", texte: "Chemin de contournement, circulation en alternance" },
  { icone: "💰", texte: "Envergure des travaux : 1 M$ — 2020" },
];

export default function GalerieTBA362() {
  return (
    <section id="ponceau-tba-route362" className="galerie-transport bg-gris">
      <div className="container">

        {/* Fil d'Ariane */}
        <nav className="galerie-transport__breadcrumb" aria-label="Navigation">
          <a href="#realisations">← Toutes nos réalisations</a>
          <span>/</span>
          <span>Ponceau majeur 1800 mm — Route 362</span>
        </nav>

        {/* En-tête */}
        <div className="galerie-transport__entete">
          <div className="galerie-transport__entete-texte">
            <div className="galerie-transport__badge">
              <span>⭐</span> Projet en vedette
            </div>
            <h2>Ponceau majeur 1800 mm — <span>Route 362</span></h2>
            <p className="galerie-transport__intro">
              En <strong>2020</strong>, Simtrex inc a réalisé pour le <strong>ministère des
              Transports du Québec (MTQ)</strong> la réfection d'un ponceau de 1800 mm de
              diamètre, à <strong>7 mètres de profondeur</strong>, sur la route 362. Le mandat
              comprenait également le support de 2 conduites d'aqueduc et la construction d'un
              chemin de contournement temporaire permettant la circulation en alternance.
              Un projet d'envergure de <strong>1 million de dollars</strong>.
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
