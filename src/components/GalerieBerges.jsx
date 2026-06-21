// ============================================================
// SECTION DÉTAILLÉE — Projet vedette : Stabilisation des berges
// Rivière Saint-Jean, L'Anse-Saint-Jean (MTQ Saguenay–Lac-Saint-Jean)
// Rivière à saumon — milieu hautement protégé. Travaux 850 k$.
// Réutilise le style de GalerieTransport.css.
// ============================================================

import "./GalerieTransport.css";
import GalerieGrillePhotos from "./GalerieGrillePhotos";

const photos = [
  {
    src: "/images/berges-stjean/berges-stjean-9-simtrex.jpg",
    alt: "Berge stabilisée avec ensemencement hydraulique et clôture le long de la rivière Saint-Jean par Simtrex inc",
    legende: "Berge stabilisée, ensemencement hydraulique et clôture",
  },
  {
    src: "/images/berges-stjean/berges-stjean-1-simtrex.jpg",
    alt: "Berge de la rivière Saint-Jean, rivière à saumon, en cours de stabilisation par Simtrex inc",
    legende: "La rivière Saint-Jean, une rivière à saumon",
  },
  {
    src: "/images/berges-stjean/berges-stjean-3-simtrex.jpg",
    alt: "Stabilisation de la berge par enrochement le long de la rivière Saint-Jean par Simtrex inc",
    legende: "Stabilisation de la berge par enrochement",
  },
  {
    src: "/images/berges-stjean/berges-stjean-2-simtrex.jpg",
    alt: "Mise en place de l'empierrement et de la membrane par la pelle Simtrex inc — rivière Saint-Jean",
    legende: "Mise en place de l'empierrement",
  },
  {
    src: "/images/berges-stjean/berges-stjean-4-simtrex.jpg",
    alt: "Ponceau TTOG de 1800 mm pour la rivière Saint-Jean installé par Simtrex inc",
    legende: "Ponceau TTOG de 1800 mm",
  },
  {
    src: "/images/berges-stjean/berges-stjean-5-simtrex.jpg",
    alt: "Installation du ponceau TTOG de 1800 mm sur la rivière Saint-Jean par Simtrex inc",
    legende: "Installation du ponceau TTOG",
  },
  {
    src: "/images/berges-stjean/berges-stjean-7-simtrex.jpg",
    alt: "Terrassement et préparation de la piste cyclable le long de la berge par Simtrex inc",
    legende: "Terrassement de la piste cyclable",
  },
  {
    src: "/images/berges-stjean/berges-stjean-8-simtrex.jpg",
    alt: "Construction de la clôture le long de la piste cyclable par Simtrex inc — Anse-Saint-Jean",
    legende: "Construction de la clôture",
  },
  {
    src: "/images/berges-stjean/berges-stjean-10-simtrex.jpg",
    alt: "Pavage de la piste cyclable à L'Anse-Saint-Jean par Simtrex inc",
    legende: "Pavage de la piste cyclable",
  },
  {
    src: "/images/berges-stjean/berges-stjean-11-simtrex.jpg",
    alt: "Piste cyclable pavée terminée à L'Anse-Saint-Jean par Simtrex inc",
    legende: "Piste cyclable terminée",
  },
];

const pointsForts = [
  { icone: "🏛️", texte: "MTQ Saguenay–Lac-Saint-Jean, avec Ressources naturelles et Environnement" },
  { icone: "🐟", texte: "Rivière à saumon — milieu hautement protégé" },
  { icone: "🛰️", texte: "Travaux à la pelle mécanique guidée par système 3D" },
  { icone: "🚴", texte: "Ponceau TTOG 1800 mm, piste cyclable 400 m, clôture, ensemencement et pavage" },
  { icone: "💰", texte: "Envergure des travaux : 850 k$" },
];

export default function GalerieBerges() {
  return (
    <section id="berges-riviere-stjean" className="galerie-transport bg-gris">
      <div className="container">

        {/* Fil d'Ariane */}
        <nav className="galerie-transport__breadcrumb" aria-label="Navigation">
          <a href="#realisations">← Toutes nos réalisations</a>
          <span>/</span>
          <span>Stabilisation des berges — Rivière Saint-Jean</span>
        </nav>

        {/* En-tête */}
        <div className="galerie-transport__entete">
          <div className="galerie-transport__entete-texte">
            <div className="galerie-transport__badge">
              <span>⭐</span> Projet en vedette
            </div>
            <h2>Stabilisation des berges — <span>Rivière Saint-Jean</span></h2>
            <p className="galerie-transport__intro">
              À <strong>L'Anse-Saint-Jean</strong>, Simtrex inc a réalisé pour le <strong>ministère
              des Transports du Québec (division Saguenay–Lac-Saint-Jean)</strong> la stabilisation
              des berges de la rivière Saint-Jean — une <strong>rivière à saumon</strong> en milieu
              hautement protégé, sous la supervision des ministères des Ressources naturelles et de
              l'Environnement ainsi que des gardes-chasse. Nos travaux, exécutés à la pelle mécanique
              guidée par <strong>système 3D</strong>, comprenaient la réfection d'un ponceau TTOG de
              1800 mm, la réfection d'une piste cyclable sur 400 m, la construction d'une clôture,
              l'ensemencement hydraulique et le pavage. Un projet médiatisé, mené dans le plus grand
              respect de l'environnement — envergure de <strong>850 k$</strong>.
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
