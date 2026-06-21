// ============================================================
// SECTION DÉTAILLÉE — Projet vedette : Recouvrement L.E.T.
// MRC de Charlevoix-Est (2023)
// Cliquez sur une photo pour l'agrandir en pleine largeur.
// Réutilise le style de GalerieTransport.css.
// ============================================================

import "./GalerieTransport.css";
import GalerieGrillePhotos from "./GalerieGrillePhotos";

// ── Données des photos ──────
const photos = [
  {
    src: "/images/let/let-membrane-remorque-simtrex.jpg",
    alt: "Recouvrement de cellule avec membrane géotextile au L.E.T. de la MRC de Charlevoix-Est par Simtrex inc",
    legende: "Recouvrement de la cellule avec membrane géotextile",
  },
  {
    src: "/images/let/let-compactage-montagnes-simtrex.jpg",
    alt: "Mise en place des matériaux de recouvrement au L.E.T. par Simtrex inc — Charlevoix",
    legende: "Mise en place des matériaux de recouvrement",
  },
  {
    src: "/images/let/let-nivellement-cat-simtrex.jpg",
    alt: "Nivellement final au bouteur sur le site d'enfouissement par Simtrex inc",
    legende: "Nivellement final au bouteur",
  },
  {
    src: "/images/let/let-compacteur-membrane-simtrex.jpg",
    alt: "Compactage des matériaux sur la membrane du L.E.T. par Simtrex inc",
    legende: "Compactage des matériaux de recouvrement",
  },
  {
    src: "/images/let/let-site-enfouissement-simtrex.jpg",
    alt: "Vue du lieu d'enfouissement technique de la MRC de Charlevoix-Est — Simtrex inc",
    legende: "Lieu d'enfouissement technique (L.E.T.)",
  },
  {
    src: "/images/let/let-vue-ensemble-simtrex.jpg",
    alt: "Vue d'ensemble du chantier de recouvrement de cellule par Simtrex inc",
    legende: "Vue d'ensemble du chantier",
  },
];

// Points forts du projet
const pointsForts = [
  { icone: "📍", texte: "L.E.T. de la MRC de Charlevoix-Est" },
  { icone: "📅", texte: "Réalisé en 2023" },
  { icone: "🌿", texte: "Recouvrement avec membrane géotextile" },
  { icone: "🏗️", texte: "Excavation, compactage et nivellement" },
];

export default function GalerieLET() {
  return (
    <section id="recouvrement-let" className="galerie-transport bg-sombre">
      <div className="container">

        {/* Fil d'Ariane */}
        <nav className="galerie-transport__breadcrumb" aria-label="Navigation">
          <a href="#realisations">← Toutes nos réalisations</a>
          <span>/</span>
          <span>Recouvrement L.E.T. — Charlevoix-Est</span>
        </nav>

        {/* En-tête */}
        <div className="galerie-transport__entete">
          <div className="galerie-transport__entete-texte">
            <div className="galerie-transport__badge">
              <span>⭐</span> Projet en vedette
            </div>
            <h2>Recouvrement final de cellule — <span>L.E.T. Charlevoix-Est</span></h2>
            <p className="galerie-transport__intro">
              En <strong>2023</strong>, Simtrex inc a réalisé le recouvrement final d'une cellule
              d'enfouissement au lieu d'enfouissement technique (L.E.T.) de la MRC de
              Charlevoix-Est. Le projet comprenait la mise en place d'une membrane géotextile,
              le transport et l'épandage des matériaux granulaires, le compactage et le
              nivellement final — un mandat de génie civil environnemental d'envergure.
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
