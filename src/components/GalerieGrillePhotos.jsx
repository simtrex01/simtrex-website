// ============================================================
// COMPOSANT PARTAGÉ — Grille de photos cliquables
// Une photo agrandie s'affiche en pleine largeur (object-fit: contain).
// Des flèches ‹ › permettent de passer d'une photo à l'autre sans
// avoir à cliquer sur une autre vignette. Utilisé par toutes les
// galeries de projets (GaleriePontGagnon, GalerieClermont, etc.).
// ============================================================

import { useState } from "react";

export default function GalerieGrillePhotos({ photos }) {
  const [photoElargie, setPhotoElargie] = useState(0);
  const total = photos.length;

  const togglePhoto = (i) => {
    setPhotoElargie(photoElargie === i ? null : i);
  };

  const naviguer = (e, direction) => {
    e.stopPropagation(); // ne pas réduire la photo en cliquant la flèche
    setPhotoElargie((courant) => {
      const base = courant === null ? 0 : courant;
      return (base + direction + total) % total;
    });
  };

  return (
    <>
      {/* Indice */}
      <p className="galerie-transport__indice">
        🖱️ Cliquez sur une photo pour l'agrandir, puis utilisez les flèches ‹ › pour naviguer
      </p>

      {/* Grille de photos */}
      <div className="galerie-transport__grille">
        {photos.map((photo, i) => {
          const elargie = photoElargie === i;
          return (
            <figure
              key={i}
              className={`galerie-transport__carte${elargie ? " galerie-transport__carte--elargie" : ""}`}
              onClick={() => togglePhoto(i)}
              title={elargie ? "Cliquer pour réduire" : "Cliquer pour agrandir"}
            >
              <div className="galerie-transport__image-wrapper">
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                <div className="galerie-transport__overlay" />
                <div className="galerie-transport__zoom-icone">
                  {elargie ? "✕" : "⤢"}
                </div>

                {/* Flèches de navigation (uniquement sur la photo agrandie) */}
                {elargie && total > 1 && (
                  <>
                    <button
                      type="button"
                      className="galerie-transport__fleche galerie-transport__fleche--prec"
                      onClick={(e) => naviguer(e, -1)}
                      aria-label="Photo précédente"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="galerie-transport__fleche galerie-transport__fleche--suiv"
                      onClick={(e) => naviguer(e, 1)}
                      aria-label="Photo suivante"
                    >
                      ›
                    </button>
                    <div className="galerie-transport__compteur">
                      {i + 1} / {total}
                    </div>
                  </>
                )}
              </div>
              <figcaption className="galerie-transport__legende">
                {photo.legende}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </>
  );
}
