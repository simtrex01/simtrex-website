// ============================================================
// SECTION DÉTAILLÉE — Projet vedette : Développement résidentiel
// Phase 2, Clermont (secteur Aréna — rues Brassard, Asselin, des Érables)
// Égout, aqueduc et pluvial — 30 nouveaux services. 1,7 M$ — 2025.
// Réutilise le style de GalerieTransport.css.
// ============================================================

import "./GalerieTransport.css";
import GalerieGrillePhotos from "./GalerieGrillePhotos";

const photos = [
  {
    src: "/images/developpement-clermont/clermont-phase2-1-simtrex.jpg",
    alt: "Pose de la membrane et installation des bornes-fontaines devant les nouvelles résidences à Clermont par Simtrex inc",
    legende: "Membrane et bornes-fontaines devant les nouvelles résidences",
  },
  {
    src: "/images/developpement-clermont/clermont-phase2-7-simtrex.jpg",
    alt: "Nivellement et compaction du gravier MG-20 au bouteur CAT dans le développement résidentiel de Clermont par Simtrex inc",
    legende: "Nivellement et compaction de la surface granulaire",
  },
  {
    src: "/images/developpement-clermont/clermont-phase2-2-simtrex.jpg",
    alt: "Excavation des tranchées d'égout et d'aqueduc avec pelles Volvo et Komatsu à Clermont par Simtrex inc",
    legende: "Excavation des tranchées d'égout et d'aqueduc",
  },
  {
    src: "/images/developpement-clermont/clermont-phase2-8-simtrex.jpg",
    alt: "Arpentage et implantation des services dans le nouveau développement résidentiel de Clermont par Simtrex inc",
    legende: "Arpentage et implantation des services",
  },
  {
    src: "/images/developpement-clermont/clermont-phase2-6-simtrex.jpg",
    alt: "Vue d'ensemble du chantier d'infrastructures du développement résidentiel de Clermont par Simtrex inc",
    legende: "Vue d'ensemble du chantier d'infrastructures",
  },
  {
    src: "/images/developpement-clermont/clermont-phase2-4-simtrex.jpg",
    alt: "Installation de la membrane et des regards le long du réseau pluvial à Clermont par Simtrex inc",
    legende: "Membrane et regards le long du réseau pluvial",
  },
  {
    src: "/images/developpement-clermont/clermont-phase2-5-simtrex.jpg",
    alt: "Mise en place de la membrane sur l'infrastructure avec pelle Volvo à Clermont par Simtrex inc",
    legende: "Mise en place de la membrane sur l'infrastructure",
  },
  {
    src: "/images/developpement-clermont/clermont-phase2-3-simtrex.jpg",
    alt: "Préparation de la surface granulaire devant les nouvelles résidences de Clermont par Simtrex inc",
    legende: "Préparation de la surface granulaire",
  },
];

const pointsForts = [
  { icone: "🏘️", texte: "Nouveau développement résidentiel — phase 2, Clermont" },
  { icone: "🚰", texte: "Égout, aqueduc et réseau pluvial" },
  { icone: "🔧", texte: "30 nouveaux services pour 30 nouveaux terrains" },
  { icone: "📍", texte: "Rues Brassard, Asselin et des Érables" },
  { icone: "🧱", texte: "Membrane sur l'infrastructure et surface granulaire complète" },
  { icone: "🛣️", texte: "Bordures complètes (phases 1 et 2) et pavage complet" },
  { icone: "💰", texte: "Envergure des travaux : 1,7 M$" },
];

export default function GalerieClermont() {
  return (
    <section id="developpement-clermont" className="galerie-transport bg-sombre">
      <div className="container">

        {/* Fil d'Ariane */}
        <nav className="galerie-transport__breadcrumb" aria-label="Navigation">
          <a href="#realisations">← Toutes nos réalisations</a>
          <span>/</span>
          <span>Développement résidentiel — Clermont</span>
        </nav>

        {/* En-tête */}
        <div className="galerie-transport__entete">
          <div className="galerie-transport__entete-texte">
            <div className="galerie-transport__badge">
              <span>⭐</span> Projet en vedette
            </div>
            <h2>Développement résidentiel — <span>Phase 2, Clermont</span></h2>
            <p className="galerie-transport__intro">
              Dans le <strong>secteur Aréna à Clermont</strong>, Simtrex inc a réalisé la
              construction complète des infrastructures de la <strong>phase 2</strong> d'un
              nouveau développement résidentiel : <strong>égout, aqueduc et réseau pluvial</strong>,
              avec <strong>30 nouveaux services pour 30 nouveaux terrains</strong> sur les rues
              <strong> Brassard, Asselin et des Érables</strong>. Les travaux comprenaient la
              préparation de l'infrastructure, la pose d'une membrane, la préparation de la
              surface granulaire complète, les bordures complètes des phases 1 et 2 ainsi que
              le pavage complet — un projet d'envergure de <strong>1,7 million $</strong>.
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
