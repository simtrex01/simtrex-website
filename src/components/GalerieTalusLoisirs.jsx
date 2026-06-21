// ============================================================
// SECTION DÉTAILLÉE — Projet vedette : Stabilisation de talus
// Chemin des Loisirs, La Malbaie (MTQ Capitale-Nationale)
// Déblai 15 000 m², enrochement 18 000 t, terre végétale, ensemencement. 750 k$.
// Réutilise le style de GalerieTransport.css.
// ============================================================

import "./GalerieTransport.css";
import GalerieGrillePhotos from "./GalerieGrillePhotos";

const photos = [
  {
    src: "/images/talus-loisirs/talus-loisirs-12-simtrex.jpg",
    alt: "Talus stabilisé et ensemencé le long du chemin des Loisirs à La Malbaie par Simtrex inc",
    legende: "Talus stabilisé et ensemencé",
  },
  {
    src: "/images/talus-loisirs/talus-loisirs-7-simtrex.jpg",
    alt: "Déblai du talus avec pelles mécaniques sur le chemin des Loisirs par Simtrex inc",
    legende: "Déblai du talus en cours",
  },
  {
    src: "/images/talus-loisirs/talus-loisirs-5-simtrex.jpg",
    alt: "Excavation du talus à la pelle Volvo sur le chemin des Loisirs par Simtrex inc",
    legende: "Excavation et mise en forme du talus",
  },
  {
    src: "/images/talus-loisirs/talus-loisirs-2-simtrex.jpg",
    alt: "Camion et pelle mécanique pour le déblai du talus à La Malbaie par Simtrex inc",
    legende: "Transport des matériaux de déblai",
  },
  {
    src: "/images/talus-loisirs/talus-loisirs-3-simtrex.jpg",
    alt: "Chargement des matériaux de déblai du talus par Simtrex inc",
    legende: "Chargement des matériaux",
  },
  {
    src: "/images/talus-loisirs/talus-loisirs-9-simtrex.jpg",
    alt: "Talus en cours de stabilisation le long du chemin des Loisirs par Simtrex inc",
    legende: "Gestion du chantier et de la circulation",
  },
  {
    src: "/images/talus-loisirs/talus-loisirs-6-simtrex.jpg",
    alt: "Excavation du talus à la pelle Volvo en bordure de la route par Simtrex inc — chemin des Loisirs",
    legende: "Excavation du talus en bordure de route",
  },
  {
    src: "/images/talus-loisirs/talus-loisirs-8-simtrex.jpg",
    alt: "Déblai du talus au lever du jour avec camion benne et pelles mécaniques par Simtrex inc",
    legende: "Déblai au petit matin, camion et pelles",
  },
  {
    src: "/images/talus-loisirs/talus-loisirs-10-simtrex.jpg",
    alt: "Vue d'ensemble du chantier de talus au crépuscule avec circulation en alternance par Simtrex inc",
    legende: "Vue d'ensemble du chantier, circulation en alternance",
  },
  {
    src: "/images/talus-loisirs/talus-loisirs-4-simtrex.jpg",
    alt: "Nouveau chemin d'accès aménagé dans le talus stabilisé par Simtrex inc — chemin des Loisirs",
    legende: "Chemin d'accès aménagé dans le talus",
  },
  {
    src: "/images/talus-loisirs/talus-loisirs-11-simtrex.jpg",
    alt: "Ensemencement hydraulique du talus stabilisé par Simtrex inc — chemin des Loisirs",
    legende: "Ensemencement hydraulique du talus",
  },
  {
    src: "/images/talus-loisirs/talus-loisirs-1-simtrex.jpg",
    alt: "Talus végétalisé après stabilisation sur le chemin des Loisirs à La Malbaie par Simtrex inc",
    legende: "Talus végétalisé après ensemencement",
  },
];

const pointsForts = [
  { icone: "🏛️", texte: "MTQ — division de la Capitale-Nationale" },
  { icone: "📍", texte: "Chemin des Loisirs, La Malbaie" },
  { icone: "🚜", texte: "Déblai de 15 000 m²" },
  { icone: "🪨", texte: "Stabilisation par enrochement — plus de 18 000 tonnes de pierre" },
  { icone: "🌱", texte: "Terre végétale et ensemencement, circulation en alternance" },
  { icone: "💰", texte: "Envergure des travaux : 750 k$" },
];

export default function GalerieTalusLoisirs() {
  return (
    <section id="talus-chemin-loisirs" className="galerie-transport bg-gris">
      <div className="container">

        {/* Fil d'Ariane */}
        <nav className="galerie-transport__breadcrumb" aria-label="Navigation">
          <a href="#realisations">← Toutes nos réalisations</a>
          <span>/</span>
          <span>Stabilisation de talus — Chemin des Loisirs</span>
        </nav>

        {/* En-tête */}
        <div className="galerie-transport__entete">
          <div className="galerie-transport__entete-texte">
            <div className="galerie-transport__badge">
              <span>⭐</span> Projet en vedette
            </div>
            <h2>Stabilisation de talus — <span>Chemin des Loisirs</span></h2>
            <p className="galerie-transport__intro">
              Sur le <strong>chemin des Loisirs à La Malbaie</strong>, Simtrex inc a réalisé pour
              le <strong>ministère des Transports du Québec (division de la Capitale-Nationale)</strong>
              le terrassement et la stabilisation d'un énorme talus. Le projet comprenait un déblai
              de <strong>15 000 m²</strong>, la stabilisation par enrochement avec plus de
              <strong> 18 000 tonnes de pierre</strong>, la mise en place de terre végétale,
              l'ensemencement et la gestion de la circulation en alternance — un projet d'envergure
              de <strong>750 k$</strong>.
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
