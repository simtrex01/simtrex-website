// ============================================================
// SECTION DÉTAILLÉE — Transport de matériaux
// Cliquez sur une photo pour l'agrandir en pleine largeur.
// Recliquez (ou cliquez sur ✕) pour la réduire.
// ============================================================

import imgPonceaux      from "../assets/transport/transport-materiaux-ponceaux-simtrex.jpg";
import imgFardier       from "../assets/transport/transport-fardier-simtrex.jpg";
import imgConteneurs    from "../assets/transport/transport-conteneurs-simtrex.jpg";
import imgHorsDimension from "../assets/transport/transport-fardier-hors-dimension-simtrex.jpg";
import imgChargement    from "../assets/transport/transport-fardier-chargement-simtrex.jpg";
import "./GalerieTransport.css";
import GalerieGrillePhotos from "./GalerieGrillePhotos";

// ── Données des photos — modifiez légendes et alt ici ──────
const photos = [
  {
    src: imgHorsDimension,
    alt: "Transport de charge hors dimension par fardier Simtrex inc — Charlevoix",
    legende: "Transport hors dimension par fardier",
  },
  {
    src: imgPonceaux,
    alt: "Camion Simtrex inc transportant des ponceaux de béton pour chantier",
    legende: "Transport de ponceaux et matériaux de chantier",
  },
  {
    src: imgFardier,
    alt: "Transport spécialisé par fardier avec camion Simtrex inc",
    legende: "Transport spécialisé par fardier",
  },
  {
    src: imgConteneurs,
    alt: "Camion Simtrex inc transportant des conteneurs de matériaux",
    legende: "Transport de conteneurs et matériaux de construction",
  },
  {
    src: imgChargement,
    alt: "Camion Simtrex inc chargé de matériaux de construction — planches et bois de charpente",
    legende: "Transport de matériaux de construction — bois et charpente",
  },
];

// Points forts du service — modifiez ici
const pointsForts = [
  { icone: "🚛", texte: "Matériaux en vrac, roc, gravier, terre" },
  { icone: "🏗️", texte: "Ponceaux et pièces de chantier" },
  { icone: "📦", texte: "Conteneurs et équipements lourds" },
  { icone: "🚚", texte: "Transport par fardier — charges exceptionnelles" },
];

export default function GalerieTransport() {
  return (
    <section id="transport-materiaux" className="galerie-transport bg-gris">
      <div className="container">

        {/* Fil d'Ariane */}
        <nav className="galerie-transport__breadcrumb" aria-label="Navigation">
          <a href="#services">← Tous nos services</a>
          <span>/</span>
          <span>Transport de matériaux</span>
        </nav>

        {/* En-tête de la section détaillée */}
        <div className="galerie-transport__entete">
          <div className="galerie-transport__entete-texte">
            <div className="galerie-transport__badge">
              <span>🚛</span> Service détaillé
            </div>
            <h2>Transport de <span>Matériaux</span></h2>
            <p className="galerie-transport__intro">
              Simtrex inc offre un service de transport de matériaux et de transport spécialisé
              pour les chantiers de construction, les travaux municipaux et les projets de génie
              civil. Nous transportons notamment des matériaux en vrac, des ponceaux, des
              conteneurs, des pièces de chantier et de l'équipement lourd selon les besoins
              du projet.
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
          <a href="#services" className="btn btn-outline">
            ← Tous nos services
          </a>
        </div>

      </div>
    </section>
  );
}
