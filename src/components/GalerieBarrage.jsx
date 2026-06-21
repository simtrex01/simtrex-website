// ============================================================
// SECTION DÉTAILLÉE — Projet vedette : Barrage de l'étang Malbaie
// Réfection complète (2021) — défi environnemental, 650 k$
// Pour le ministère de l'Environnement et des Changements climatiques
// Réutilise le style de GalerieTransport.css.
// ============================================================

import "./GalerieTransport.css";
import GalerieGrillePhotos from "./GalerieGrillePhotos";

const photos = [
  {
    src: "/images/barrage-malbaie/barrage-malbaie-9-simtrex.jpg",
    alt: "Étang Malbaie protégé par un rideau de turbidité durant les travaux de Simtrex inc",
    legende: "Rideau de turbidité pour protéger l'étang",
  },
  {
    src: "/images/barrage-malbaie/barrage-malbaie-3-simtrex.jpg",
    alt: "Batardeau et déviation temporaire du cours d'eau au barrage de l'étang Malbaie par Simtrex inc",
    legende: "Batardeau et déviation temporaire du cours d'eau",
  },
  {
    src: "/images/barrage-malbaie/barrage-malbaie-8-simtrex.jpg",
    alt: "Batardeau de big bags et rideau de turbidité au barrage de l'étang Malbaie par Simtrex inc",
    legende: "Batardeau de big bags et rideau de turbidité",
  },
  {
    src: "/images/barrage-malbaie/barrage-malbaie-4-simtrex.jpg",
    alt: "Pompage et gestion des eaux durant la réfection du barrage de l'étang Malbaie par Simtrex inc",
    legende: "Pompage et gestion des eaux",
  },
  {
    src: "/images/barrage-malbaie/barrage-malbaie-11-simtrex.jpg",
    alt: "Installation et agrafage de la membrane géotextile par l'équipe de Simtrex inc",
    legende: "Installation de la membrane géotextile",
  },
  {
    src: "/images/barrage-malbaie/barrage-malbaie-10-simtrex.jpg",
    alt: "Excavatrice Simtrex inc et mise en place de la membrane au barrage de l'étang Malbaie",
    legende: "Mise en place de l'empierrement et de la membrane",
  },
  {
    src: "/images/barrage-malbaie/barrage-malbaie-1-simtrex.jpg",
    alt: "Bétonnage de l'empierrement au barrage de l'étang Malbaie par Simtrex inc",
    legende: "Bétonnage de l'empierrement",
  },
  {
    src: "/images/barrage-malbaie/barrage-malbaie-2-simtrex.jpg",
    alt: "Empierrement et membrane géotextile au barrage de l'étang Malbaie par Simtrex inc",
    legende: "Empierrement et membrane géotextile",
  },
  {
    src: "/images/barrage-malbaie/barrage-malbaie-7-simtrex.jpg",
    alt: "Vue d'ensemble du chantier du barrage de l'étang Malbaie avec ponceaux par Simtrex inc",
    legende: "Vue d'ensemble du chantier et des ponceaux",
  },
  {
    src: "/images/barrage-malbaie/barrage-malbaie-6-simtrex.jpg",
    alt: "Remise en état du site après la réfection du barrage de l'étang Malbaie par Simtrex inc",
    legende: "Remise en état du site",
  },
  {
    src: "/images/barrage-malbaie/barrage-malbaie-5-simtrex.jpg",
    alt: "Cours d'eau restauré après la réfection du barrage de l'étang Malbaie par Simtrex inc",
    legende: "Cours d'eau restauré",
  },
];

const pointsForts = [
  { icone: "🌎", texte: "Pour le ministère de l'Environnement et des Changements climatiques" },
  { icone: "🏞️", texte: "Réfection complète du barrage de l'étang Malbaie" },
  { icone: "💧", texte: "Déviation temporaire du cours d'eau" },
  { icone: "💰", texte: "Envergure des travaux : 650 k$ — 2021" },
];

export default function GalerieBarrage() {
  return (
    <section id="barrage-etang-malbaie" className="galerie-transport bg-sombre">
      <div className="container">

        {/* Fil d'Ariane */}
        <nav className="galerie-transport__breadcrumb" aria-label="Navigation">
          <a href="#realisations">← Toutes nos réalisations</a>
          <span>/</span>
          <span>Barrage de l'étang Malbaie</span>
        </nav>

        {/* En-tête */}
        <div className="galerie-transport__entete">
          <div className="galerie-transport__entete-texte">
            <div className="galerie-transport__badge">
              <span>⭐</span> Projet en vedette
            </div>
            <h2>Réfection du barrage — <span>Étang Malbaie</span></h2>
            <p className="galerie-transport__intro">
              En <strong>2021</strong>, Simtrex inc a réalisé pour le <strong>ministère de
              l'Environnement et des Changements climatiques</strong> la réfection complète du
              barrage de l'étang Malbaie : bétonnage de l'empierrement et déviation temporaire
              du cours d'eau. Un défi environnemental de taille, exécuté avec succès dans le
              respect du milieu naturel — un projet d'envergure de <strong>650 k$</strong>.
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
