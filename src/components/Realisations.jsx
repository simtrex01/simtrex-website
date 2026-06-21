// ============================================================
// COMPOSANT RÉALISATIONS
// Pour ajouter vos photos : mettez les images dans /public/images/
// et mettez à jour le champ "image" dans src/data/content.js
// ============================================================

import { useState } from "react";
import { realisations, categoriesRealisations } from "../data/content";
import BoutonFacebook from "./BoutonFacebook";
import "./Realisations.css";

// Scroll fluide vers une ancre avec compensation de la navbar fixe
function scrollVers(ancre) {
  const cible = document.getElementById(ancre);
  if (!cible) return;
  const top = cible.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Realisations() {
  const [filtreActif, setFiltreActif] = useState("Tous");

  // Tri par année de réalisation, de la plus récente à la plus ancienne.
  // Les entrées sans année numérique (ex. « Spécialité ») sont placées à la fin.
  const realisationsTriees = [...realisations].sort((a, b) => {
    const anneeA = parseInt(a.annee, 10);
    const anneeB = parseInt(b.annee, 10);
    const aNonNum = Number.isNaN(anneeA);
    const bNonNum = Number.isNaN(anneeB);
    if (aNonNum && bNonNum) return 0;
    if (aNonNum) return 1;
    if (bNonNum) return -1;
    return anneeB - anneeA;
  });

  const projetsFiltres =
    filtreActif === "Tous"
      ? realisationsTriees
      : realisationsTriees.filter((p) => p.categorie === filtreActif);

  return (
    <section id="realisations" className="realisations bg-gris">
      <div className="container">
        <div className="section-titre">
          <h2>Nos <span>Réalisations</span></h2>
          <div className="ligne-accent" />
          <p>
            Quelques exemples de projets réalisés par notre équipe.
            Des chantiers de toutes tailles, toujours livrés avec professionnalisme.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="realisations__filtres" role="group" aria-label="Filtrer par catégorie">
          {categoriesRealisations.map((cat) => (
            <button
              key={cat}
              className={`realisations__filtre-btn${filtreActif === cat ? " actif" : ""}`}
              onClick={() => setFiltreActif(cat)}
              aria-pressed={filtreActif === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="realisations__grille">
          {projetsFiltres.length === 0 ? (
            <p className="realisations__vide">Aucun projet dans cette catégorie pour l'instant.</p>
          ) : (
            projetsFiltres.map((projet) => (
              <div key={projet.id} className="projet-carte">
                {/* Zone image */}
                <div className={`projet-carte__image${projet.imageContain ? " projet-carte__image--contain" : ""}`}>
                  {projet.image ? (
                    <img src={projet.image} alt={projet.alt || projet.titre} loading="lazy" />
                  ) : (
                    <div className="projet-carte__placeholder">
                      <span className="projet-carte__placeholder-icone">📷</span>
                      <span className="projet-carte__placeholder-texte">Photo à venir</span>
                      <span className="projet-carte__placeholder-aide">Ajoutez votre photo dans /public/images/</span>
                    </div>
                  )}

                  {/* Badge catégorie */}
                  <div className="projet-carte__categorie">{projet.categorie}</div>

                  {/* Année */}
                  <div className="projet-carte__annee">{projet.annee}</div>
                </div>

                {/* Informations projet */}
                <div className="projet-carte__corps">
                  <h3 className="projet-carte__titre">{projet.titre}</h3>
                  <p className="projet-carte__desc">{projet.description}</p>
                  {projet.ancre && (
                    <button
                      className="projet-carte__voir"
                      onClick={() => scrollVers(projet.ancre)}
                    >
                      Voir le projet en photos →
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bloc Facebook */}
        <div className="realisations__facebook">
          <div className="realisations__facebook-texte">
            <span className="realisations__facebook-icone">📸</span>
            <p>
              Suivez Simtrex inc sur Facebook pour voir nos réalisations, nos photos de
              chantier, nos transports spécialisés et nos projets en cours.
            </p>
          </div>
          <BoutonFacebook variante="primaire" />
        </div>

        {/* Message d'invitation */}
        <div className="realisations__invite">
          <p>Vous souhaitez discuter d'un projet similaire ?</p>
          <a href="#contact" className="btn btn-primaire">Contactez-nous</a>
        </div>
      </div>
    </section>
  );
}
