// ============================================================
// SECTION DÉTAILLÉE — Projet vedette : Pont Gagnon, St-Urbain
// Nouveau pont acier-bois de 90 pi + démolition de l'ancien pont.
// Reconstruction après le désastre naturel de 2023. 850 k$ — 2025.
// Réutilise le style de GalerieTransport.css.
// ============================================================

import "./GalerieTransport.css";
import GalerieGrillePhotos from "./GalerieGrillePhotos";

const photos = [
  {
    src: "/images/pont-gagnon/pont-gagnon-8-simtrex.jpg",
    alt: "Nouveau pont acier-bois Gagnon terminé enjambant le cours d'eau à St-Urbain, sous les couleurs d'automne, par Simtrex inc",
    legende: "Le nouveau pont Gagnon terminé",
  },
  {
    src: "/images/pont-gagnon/pont-gagnon-5-simtrex.jpg",
    alt: "Démolition de l'ancien pont Gagnon et nettoyage des débris du cours d'eau à St-Urbain par Simtrex inc",
    legende: "Démolition de l'ancien pont et nettoyage du cours d'eau",
  },
  {
    src: "/images/pont-gagnon/pont-gagnon-3-simtrex.jpg",
    alt: "Poutres d'acier galvanisé et contreventements du nouveau pont Gagnon par Simtrex inc",
    legende: "Poutres d'acier galvanisé et contreventements",
  },
  {
    src: "/images/pont-gagnon/pont-gagnon-4-simtrex.jpg",
    alt: "Structure d'acier galvanisé du nouveau pont Gagnon enjambant le cours d'eau à St-Urbain par Simtrex inc",
    legende: "Mise en place de la structure d'acier au-dessus du cours d'eau",
  },
  {
    src: "/images/pont-gagnon/pont-gagnon-7-simtrex.jpg",
    alt: "Nouveau pont Gagnon et son tablier de bois sous les couleurs d'automne à St-Urbain par Simtrex inc",
    legende: "Tablier de bois et garde-corps du nouveau pont",
  },
  {
    src: "/images/pont-gagnon/pont-gagnon-9-simtrex.jpg",
    alt: "Pont Gagnon terminé avec le lit du cours d'eau stabilisé par enrochement à St-Urbain par Simtrex inc",
    legende: "Pont terminé et lit du cours d'eau stabilisé",
  },
  {
    src: "/images/pont-gagnon/pont-gagnon-6-simtrex.jpg",
    alt: "Nouveau pont acier-bois Gagnon vu de côté avec tablier et garde-corps de bois par Simtrex inc",
    legende: "Le nouveau pont vu de côté",
  },
  {
    src: "/images/pont-gagnon/pont-gagnon-11-simtrex.jpg",
    alt: "Pelle Volvo aménageant les nouvelles approches du pont Gagnon à St-Urbain par Simtrex inc",
    legende: "Aménagement des nouvelles approches",
  },
  {
    src: "/images/pont-gagnon/pont-gagnon-10-simtrex.jpg",
    alt: "Nouvelles approches de pont nivelées de part et d'autre du pont Gagnon par Simtrex inc",
    legende: "Nouvelles approches nivelées",
  },
  {
    src: "/images/pont-gagnon/pont-gagnon-12-simtrex.jpg",
    alt: "Cours d'eau et berges stabilisés par enrochement aux abords du pont Gagnon par Simtrex inc",
    legende: "Stabilisation du cours d'eau et des berges",
  },
  {
    src: "/images/pont-gagnon/pont-gagnon-1-simtrex.jpg",
    alt: "Nouveau pont Gagnon et ses approches enrochées en hiver à St-Urbain par Simtrex inc",
    legende: "Le pont et ses approches en hiver",
  },
  {
    src: "/images/pont-gagnon/pont-gagnon-2-simtrex.jpg",
    alt: "Vue de l'enrochement et des approches du nouveau pont Gagnon en hiver par Simtrex inc",
    legende: "Enrochement des approches en hiver",
  },
];

const pointsForts = [
  { icone: "🌊", texte: "Reconstruction après le désastre naturel de 2023 (St-Urbain / Baie-St-Paul)" },
  { icone: "🌉", texte: "Nouveau pont acier-bois de 90 pieds et démolition de l'ancien pont" },
  { icone: "🔩", texte: "Poutres d'acier galvanisé de 1,2 m — l'équivalent de 30 tonnes d'acier" },
  { icone: "🛣️", texte: "Construction des nouvelles approches de pont" },
  { icone: "🏛️", texte: "Projet financé par la Sécurité publique" },
  { icone: "💰", texte: "Envergure des travaux : 850 k$" },
];

export default function GaleriePontGagnon() {
  return (
    <section id="pont-gagnon" className="galerie-transport bg-gris">
      <div className="container">

        {/* Fil d'Ariane */}
        <nav className="galerie-transport__breadcrumb" aria-label="Navigation">
          <a href="#realisations">← Toutes nos réalisations</a>
          <span>/</span>
          <span>Reconstruction du pont Gagnon — St-Urbain</span>
        </nav>

        {/* En-tête */}
        <div className="galerie-transport__entete">
          <div className="galerie-transport__entete-texte">
            <div className="galerie-transport__badge">
              <span>⭐</span> Projet en vedette
            </div>
            <h2>Reconstruction du pont Gagnon — <span>St-Urbain</span></h2>
            <p className="galerie-transport__intro">
              À la suite du <strong>désastre naturel de 2023</strong> à St-Urbain et à
              Baie-Saint-Paul, Simtrex inc a réalisé en <strong>2025</strong> la démolition
              de l'ancien pont Gagnon et la construction d'un <strong>nouveau pont acier-bois
              de 90 pieds de long</strong>. La structure repose sur des <strong>poutres
              d'acier galvanisé de 1,2 m de hauteur</strong>, l'équivalent de
              <strong> 30 tonnes d'acier</strong>. Le mandat comprenait également la
              construction des <strong>nouvelles approches de pont</strong>. Un projet financé
              par la <strong>Sécurité publique</strong> — envergure de <strong>850 k$</strong>.
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
