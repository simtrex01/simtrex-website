// ============================================================
// SECTION DÉTAILLÉE — Projet vedette : Déblai en intérieur de courbe
// Route 172, secteur des Monts-Valin (MTQ Saguenay–Lac-Saint-Jean)
// Déblai de 21 000 m³ — amélioration de la visibilité. Terminé printemps 2020.
// Réutilise le style de GalerieTransport.css.
// ============================================================

import "./GalerieTransport.css";
import GalerieGrillePhotos from "./GalerieGrillePhotos";

const photos = [
  {
    src: "/images/deblai-172/deblai-172-3-simtrex.jpg",
    alt: "Déblai en intérieur de courbe sur la route 172 dans les Monts-Valin par Simtrex inc",
    legende: "Déblai en intérieur de courbe — route 172",
  },
  {
    src: "/images/deblai-172/deblai-172-14-simtrex.jpg",
    alt: "Déboisement préalable au déblai de la route 172 par Simtrex inc",
    legende: "Déboisement préalable",
  },
  {
    src: "/images/deblai-172/deblai-172-8-simtrex.jpg",
    alt: "Excavation en soirée avec deux pelles mécaniques sur la route 172 par Simtrex inc",
    legende: "Excavation en continu, jour et soir",
  },
  {
    src: "/images/deblai-172/deblai-172-4-simtrex.jpg",
    alt: "Excavation et chargement des matériaux de déblai sur la route 172 par Simtrex inc",
    legende: "Excavation et chargement des matériaux",
  },
  {
    src: "/images/deblai-172/deblai-172-6-simtrex.jpg",
    alt: "Déblai en cours le long de la route 172 dans les Monts-Valin par Simtrex inc",
    legende: "Déblai en cours le long de la route",
  },
  {
    src: "/images/deblai-172/deblai-172-13-simtrex.jpg",
    alt: "Progression du déblai de 21 000 m³ sur la route 172 par Simtrex inc",
    legende: "Progression du déblai de 21 000 m³",
  },
  {
    src: "/images/deblai-172/deblai-172-12-simtrex.jpg",
    alt: "Courbe de la route 172 dégagée après le déblai par Simtrex inc — visibilité améliorée",
    legende: "Courbe dégagée, visibilité améliorée",
  },
  {
    src: "/images/deblai-172/deblai-172-10-simtrex.jpg",
    alt: "Finition du déblai avec fossé de drainage en enrochement sur la route 172 par Simtrex inc",
    legende: "Finition et fossé de drainage en enrochement",
  },
  {
    src: "/images/deblai-172/deblai-172-11-simtrex.jpg",
    alt: "Aménagement final du talus et du drainage après le déblai de la route 172 par Simtrex inc",
    legende: "Aménagement final du talus et du drainage",
  },
];

const pointsForts = [
  { icone: "🏛️", texte: "MTQ — division Saguenay–Lac-Saint-Jean" },
  { icone: "⛰️", texte: "Secteur des Monts-Valin, route 172" },
  { icone: "🚜", texte: "Déblai de 21 000 m³" },
  { icone: "👁️", texte: "Amélioration de la visibilité d'une courbe" },
  { icone: "📅", texte: "Décroché à l'automne, terminé au printemps 2020" },
];

export default function GalerieDeblai172() {
  return (
    <section id="deblai-courbe-172" className="galerie-transport bg-sombre">
      <div className="container">

        {/* Fil d'Ariane */}
        <nav className="galerie-transport__breadcrumb" aria-label="Navigation">
          <a href="#realisations">← Toutes nos réalisations</a>
          <span>/</span>
          <span>Déblai en intérieur de courbe — Route 172</span>
        </nav>

        {/* En-tête */}
        <div className="galerie-transport__entete">
          <div className="galerie-transport__entete-texte">
            <div className="galerie-transport__badge">
              <span>⭐</span> Projet en vedette
            </div>
            <h2>Déblai en intérieur de courbe — <span>Route 172</span></h2>
            <p className="galerie-transport__intro">
              Obtenu auprès du <strong>ministère des Transports du Québec (division
              Saguenay–Lac-Saint-Jean)</strong>, ce projet d'envergure consistait à réaliser
              un important déblai de <strong>21 000 m³</strong> afin d'améliorer la visibilité
              d'une courbe de la <strong>route 172</strong>, dans le secteur des Monts-Valin.
              Décroché à l'automne, le mandat s'est terminé avec succès au <strong>printemps
              2020</strong>.
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
