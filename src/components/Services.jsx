// ============================================================
// COMPOSANT SERVICES
// Les données viennent de src/data/content.js
// Pour ajouter une section détaillée à un service :
//   1. Créez la section avec un id unique (ex: id="mon-service")
//   2. Mettez ce même id dans le champ ancre: "mon-service" du service
// ============================================================

import { useState } from "react";
import { services } from "../data/content";
import "./Services.css";

// Scroll fluide vers une ancre avec compensation de la navbar fixe
function scrollVers(ancre) {
  const cible = document.getElementById(ancre);
  if (!cible) return;
  const offsetNavbar = 80;
  const top = cible.getBoundingClientRect().top + window.scrollY - offsetNavbar;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Services() {
  const [actif, setActif] = useState(null);

  const toggleDetails = (id, e) => {
    // Empêche le clic sur le bouton "Voir ce service" de propager
    e.stopPropagation();
    setActif(actif === id ? null : id);
  };

  return (
    <section id="services" className="services bg-sombre">
      <div className="container">
        <div className="section-titre blanc">
          <h2>Nos <span>Services</span></h2>
          <div className="ligne-accent" />
          <p>
            De l'excavation aux travaux municipaux, en passant par le transport de matériaux —
            Simtrex inc couvre l'ensemble de vos besoins en génie civil.
          </p>
        </div>

        <div className="services__grille">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-carte ${actif === service.id ? "actif" : ""} ${service.ancre ? "service-carte--avec-detail" : ""}`}
            >
              {/* Photo du service si disponible */}
              {service.image && (
                <div className="service-carte__photo">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
              )}

              {/* En-tête de carte */}
              <div className="service-carte__entete">
                <div className="service-carte__icone">{service.icon}</div>
                <div className="service-carte__numero">
                  {String(service.id).padStart(2, "0")}
                </div>
              </div>

              <h3 className="service-carte__titre">{service.title}</h3>
              <p className="service-carte__desc">{service.description}</p>

              {/* Liste des détails — visible au clic sur "Détails" */}
              {actif === service.id && (
                <ul className="service-carte__details">
                  {service.details.map((detail, i) => (
                    <li key={i}>
                      <span className="service-carte__puce">▸</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              {/* Actions en bas de carte */}
              <div className="service-carte__footer">
                {/* Bouton accordéon Détails */}
                <button
                  className="service-carte__toggle"
                  onClick={(e) => toggleDetails(service.id, e)}
                  aria-expanded={actif === service.id}
                >
                  {actif === service.id ? "Réduire ▴" : "Détails ▾"}
                </button>

                {/* Bouton "Voir ce service" — uniquement si une section détaillée existe */}
                {service.ancre ? (
                  <button
                    className="service-carte__voir"
                    onClick={() => scrollVers(service.ancre)}
                    aria-label={`Voir le service ${service.title} en détail`}
                  >
                    Voir ce service →
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className="service-carte__voir service-carte__voir--contact"
                  >
                    Soumission →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA bas de section */}
        <div className="services__cta">
          <p>Vous avez un projet spécifique ? Parlez-nous en.</p>
          <a href="#contact" className="btn btn-primaire">
            Demander une soumission
          </a>
        </div>
      </div>
    </section>
  );
}
