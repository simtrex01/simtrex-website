// ============================================================
// SECTION DÉTAILLÉE — Fosses septiques & champs d'épuration
// Cliquez sur une photo pour l'agrandir en pleine largeur.
// Réutilise le style de GalerieTransport.css.
// Les images sont dans public/images/septique/ (référencées par URL).
// ============================================================

import "./GalerieTransport.css";
import GalerieGrillePhotos from "./GalerieGrillePhotos";

// ── Données des photos — modifiez légendes et alt ici ──────
const photos = [
  {
    src: "/images/septique/septique-fosse-installee-simtrex.jpg",
    alt: "Fosse septique installée par Simtrex inc avec couvercles d'accès — Charlevoix",
    legende: "Fosse septique installée et raccordée",
  },
  {
    src: "/images/septique/septique-enviroseptic-tubes-simtrex.jpg",
    alt: "Installation d'un champ d'épuration Enviro-Septic certifié par Simtrex inc",
    legende: "Champ d'épuration Enviro-Septic certifié",
  },
  {
    src: "/images/septique/septique-champ-epuration-simtrex.jpg",
    alt: "Champ d'épuration Enviro-Septic en cours d'installation par Simtrex inc",
    legende: "Réseau de distribution du champ d'épuration",
  },
  {
    src: "/images/septique/septique-champ-tuyaux-simtrex.jpg",
    alt: "Champ d'épuration avec tuyaux de distribution installés par Simtrex inc",
    legende: "Champ d'épuration — tuyaux de distribution",
  },
  {
    src: "/images/septique/septique-fosse-beton-simtrex.jpg",
    alt: "Mise en place d'une fosse septique en béton par Simtrex inc",
    legende: "Mise en place d'une fosse septique en béton",
  },
  {
    src: "/images/septique/septique-champ-residentiel-simtrex.jpg",
    alt: "Champ d'épuration résidentiel terminé par Simtrex inc",
    legende: "Champ d'épuration résidentiel terminé",
  },
];

// Points forts du service
const pointsForts = [
  { icone: "🌱", texte: "Systèmes Enviro-Septic certifiés" },
  { icone: "🏠", texte: "Résidentiel et commercial" },
  { icone: "✅", texte: "Conforme aux normes (Q-2, r.22)" },
  { icone: "🔑", texte: "Installation clé en main" },
];

export default function GalerieSeptique() {
  return (
    <section id="fosses-septiques" className="galerie-transport bg-sombre">
      <div className="container">

        {/* Fil d'Ariane */}
        <nav className="galerie-transport__breadcrumb" aria-label="Navigation">
          <a href="#services">← Tous nos services</a>
          <span>/</span>
          <span>Fosses septiques & champs d'épuration</span>
        </nav>

        {/* En-tête de la section détaillée */}
        <div className="galerie-transport__entete">
          <div className="galerie-transport__entete-texte">
            <div className="galerie-transport__badge">
              <span>🌱</span> Service détaillé
            </div>
            <h2>Fosses Septiques & <span>Champs d'Épuration</span></h2>
            <p className="galerie-transport__intro">
              Simtrex inc conçoit et installe des fosses septiques et des champs d'épuration
              pour les résidences et les commerces. Nous sommes certifiés pour les systèmes
              <strong> Enviro-Septic</strong>, une technologie de traitement avancée et
              écologique des eaux usées. De l'excavation au raccordement final, nous réalisons
              votre installation conforme aux normes en vigueur.
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
