// ============================================================
// SECTION DÉTAILLÉE — Projet vedette : Déboisement initial Hautes-Gorges
// Nouvelle ligne électrique pour Hydro-Québec (alimentation de la Sépaq)
// Secteur des Hautes-Gorges, Charlevoix. 1 M$ — 2018.
// Réutilise le style de GalerieTransport.css.
// ============================================================

import "./GalerieTransport.css";
import GalerieGrillePhotos from "./GalerieGrillePhotos";

const photos = [
  {
    src: "/images/deboisement-hautes-gorges/hautes-gorges-1-simtrex.jpg",
    alt: "Déboisement de la nouvelle emprise de ligne électrique avec abatteuse et billots empilés dans Charlevoix par Simtrex inc",
    legende: "Déboisement de la nouvelle emprise de ligne",
  },
  {
    src: "/images/deboisement-hautes-gorges/hautes-gorges-3-simtrex.jpg",
    alt: "Nouvelle emprise déboisée le long de la route vers les Hautes-Gorges par Simtrex inc",
    legende: "Emprise déboisée le long de la route",
  },
  {
    src: "/images/deboisement-hautes-gorges/hautes-gorges-4-simtrex.jpg",
    alt: "Pelle Komatsu déboisant la nouvelle ligne électrique dans le secteur des Hautes-Gorges par Simtrex inc",
    legende: "Déboisement à la pelle mécanique",
  },
  {
    src: "/images/deboisement-hautes-gorges/hautes-gorges-6-simtrex.jpg",
    alt: "Deux pelles Komatsu déboisant l'emprise de la ligne électrique en bordure de route par Simtrex inc",
    legende: "Déboisement en bordure de route",
  },
  {
    src: "/images/deboisement-hautes-gorges/hautes-gorges-5-simtrex.jpg",
    alt: "Billots coupés et empilés le long de la glissière de sécurité dans Charlevoix par Simtrex inc",
    legende: "Billots coupés et empilés",
  },
  {
    src: "/images/deboisement-hautes-gorges/hautes-gorges-8-simtrex.jpg",
    alt: "Pelle mécanique au lever du jour sous la première neige sur le chantier de déboisement par Simtrex inc",
    legende: "Au lever du jour, sous la première neige",
  },
  {
    src: "/images/deboisement-hautes-gorges/hautes-gorges-7-simtrex.jpg",
    alt: "Nouveaux poteaux électriques d'Hydro-Québec dans l'emprise déboisée, avec un orignal, dans Charlevoix par Simtrex inc",
    legende: "Nouveaux poteaux d'Hydro-Québec dans l'emprise (et un orignal !)",
  },
  {
    src: "/images/deboisement-hautes-gorges/hautes-gorges-2-simtrex.jpg",
    alt: "Accès au secteur des Hautes-Gorges où Simtrex inc a réalisé le déboisement de la ligne électrique",
    legende: "Accès au secteur des Hautes-Gorges",
  },
];

const pointsForts = [
  { icone: "⚡", texte: "Projet réalisé pour Hydro-Québec" },
  { icone: "🌲", texte: "Déboisement initial d'une nouvelle emprise de ligne électrique" },
  { icone: "🏞️", texte: "Secteur des Hautes-Gorges, dans Charlevoix" },
  { icone: "🔌", texte: "Nouvelle ligne pour alimenter la Sépaq en électricité" },
  { icone: "💰", texte: "Envergure des travaux : 1 M$" },
];

export default function GalerieHautesGorges() {
  return (
    <section id="deboisement-hautes-gorges" className="galerie-transport bg-sombre">
      <div className="container">

        {/* Fil d'Ariane */}
        <nav className="galerie-transport__breadcrumb" aria-label="Navigation">
          <a href="#realisations">← Toutes nos réalisations</a>
          <span>/</span>
          <span>Déboisement des Hautes-Gorges — Hydro-Québec</span>
        </nav>

        {/* En-tête */}
        <div className="galerie-transport__entete">
          <div className="galerie-transport__entete-texte">
            <div className="galerie-transport__badge">
              <span>⭐</span> Projet en vedette
            </div>
            <h2>Déboisement des Hautes-Gorges — <span>Hydro-Québec</span></h2>
            <p className="galerie-transport__intro">
              Dans le secteur des <strong>Hautes-Gorges, dans Charlevoix</strong>, Simtrex inc
              a réalisé pour <strong>Hydro-Québec</strong> le déboisement initial d'une
              <strong> nouvelle emprise de ligne électrique</strong>. Ce projet visait à
              permettre à Hydro-Québec d'amener le courant jusqu'aux installations de la
              <strong> Sépaq</strong>, au cœur du parc. Réalisé en <strong>2018</strong>, il
              s'agit d'un mandat d'envergure de <strong>1 million de dollars</strong>.
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
          <a href="#realisations" className="btn btn-outline">
            ← Toutes nos réalisations
          </a>
        </div>

      </div>
    </section>
  );
}
