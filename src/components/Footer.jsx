// ============================================================
// COMPOSANT FOOTER
// Les informations légales viennent de src/data/content.js
// ============================================================

import { companyInfo, services } from "../data/content";
import BoutonFacebook from "./BoutonFacebook";
import "./Footer.css";

const { adresse } = companyInfo;

// Adresse formatée sur une ligne — utilisée dans plusieurs endroits
const adresseComplete = `${adresse.rue}, ${adresse.ville}, ${adresse.province}, ${adresse.codePostal}`;

export default function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__corps">
          {/* Colonne 1 — Identité + coordonnées légales */}
          <div className="footer__col">
            <div className="footer__logo">
              <span className="footer__logo-nom">{companyInfo.name}</span>
              <span className="footer__logo-sous">{companyInfo.tagline}</span>
            </div>
            <p className="footer__desc">
              Entreprise québécoise spécialisée en excavation, génie civil et travaux municipaux.
              Fiabilité, efficacité et expertise terrain.
            </p>

            {/* Coordonnées complètes */}
            <address className="footer__coords">
              {/* Adresse — lien Google Maps */}
              <a
                href={adresse.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__lien footer__lien--adresse"
                aria-label="Ouvrir l'adresse dans Google Maps"
              >
                <span className="footer__lien-icone">📍</span>
                <span>
                  {adresse.rue}<br />
                  {adresse.ville}, {adresse.province}&nbsp;&nbsp;{adresse.codePostal}
                </span>
              </a>

              {/* Téléphone */}
              <a href={companyInfo.phoneHref} className="footer__lien">
                <span className="footer__lien-icone">📞</span>
                {companyInfo.phone}
              </a>

              {/* Courriel */}
              <a href={`mailto:${companyInfo.email}`} className="footer__lien">
                <span className="footer__lien-icone">✉️</span>
                {companyInfo.email}
              </a>
            </address>

            {/* Numéro RBQ */}
            <div className="footer__rbq">
              <span className="footer__rbq-label">Licence RBQ</span>
              <span className="footer__rbq-numero">{companyInfo.rbq}</span>
            </div>
          </div>

          {/* Colonne 2 — Services */}
          <div className="footer__col">
            <h4 className="footer__titre-col">Services</h4>
            <ul className="footer__liste">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Navigation */}
          <div className="footer__col">
            <h4 className="footer__titre-col">Navigation</h4>
            <ul className="footer__liste">
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#realisations">Réalisations</a></li>
              <li><a href="#equipements">Équipements</a></li>
              <li><a href="#apropos">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 4 — CTA */}
          <div className="footer__col">
            <h4 className="footer__titre-col">Démarrer un projet</h4>
            <p className="footer__cta-texte">
              Obtenez une soumission gratuite pour votre projet d'excavation ou de génie civil.
            </p>
            <a href="#contact" className="btn btn-primaire" style={{ width: "100%", justifyContent: "center" }}>
              Soumission gratuite
            </a>
            <a href={companyInfo.phoneHref} className="btn btn-secondaire footer__btn-tel">
              Appeler maintenant
            </a>
            <div className="footer__facebook">
              <BoutonFacebook variante="sombre" texte="Suivez-nous sur Facebook" />
            </div>
          </div>
        </div>

        {/* Barre légale — bas de page */}
        <div className="footer__bas">
          <p>© {annee} {companyInfo.name}. Tous droits réservés.</p>
          <p className="footer__bas-histoire">
            Fondée en {companyInfo.annéeFondation}&nbsp;·&nbsp;Incorporée en {companyInfo.annéeIncorporation}
          </p>
          <p className="footer__bas-rbq">
            Entrepreneur licencié RBQ&nbsp;
            <span className="footer__bas-rbq-num">{companyInfo.rbq}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
