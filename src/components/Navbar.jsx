// ============================================================
// COMPOSANT NAVBAR — Barre de navigation
// Pour modifier les liens : changez le tableau "liens" ci-dessous
// ============================================================

import { useState, useEffect } from "react";
import { companyInfo } from "../data/content";
import LogoSVG from "./LogoSVG";
import "./Navbar.css";

// Liens de navigation — modifiez ici si vous renommez des sections
const liens = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Équipements", href: "#equipements" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [defilé, setDefilé] = useState(false);

  // Détecte le défilement pour changer le style de la navbar
  useEffect(() => {
    const gererScroll = () => setDefilé(window.scrollY > 60);
    window.addEventListener("scroll", gererScroll);
    return () => window.removeEventListener("scroll", gererScroll);
  }, []);

  // Ferme le menu mobile lors d'un clic sur un lien
  const handleLienClick = () => setMenuOuvert(false);

  return (
    <nav className={`navbar ${defilé ? "navbar--defilé" : ""}`}>
      <div className="container navbar__inner">
        {/* Logo navbar */}
        <a href="#accueil" className="navbar__logo" onClick={handleLienClick} aria-label="Simtrex inc — Accueil">
          {/* Carré accent orange */}
          <span className="navbar__logo-carre" aria-hidden="true">S</span>
          <span className="navbar__logo-texte">
            <span className="navbar__logo-nom">SIMTREX <em>INC.</em></span>
            <span className="navbar__logo-sous">Transport · Génie civil · Ponts</span>
          </span>
        </a>

        {/* Liens desktop */}
        <ul className="navbar__liens">
          {liens.map((lien) => (
            <li key={lien.href}>
              <a href={lien.href} className="navbar__lien">
                {lien.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton CTA desktop */}
        <a href="#contact" className="btn btn-primaire navbar__cta">
          Soumission gratuite
        </a>

        {/* Bouton menu hamburger mobile */}
        <button
          className={`navbar__hamburger ${menuOuvert ? "actif" : ""}`}
          onClick={() => setMenuOuvert(!menuOuvert)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`navbar__mobile ${menuOuvert ? "actif" : ""}`}>
        <ul>
          {liens.map((lien) => (
            <li key={lien.href}>
              <a href={lien.href} className="navbar__lien-mobile" onClick={handleLienClick}>
                {lien.label}
              </a>
            </li>
          ))}
          <li>
            <a href={companyInfo.phoneHref} className="btn btn-secondaire navbar__mobile-tel" onClick={handleLienClick}>
              📞 {companyInfo.phone}
            </a>
          </li>
          <li>
            <a href="#contact" className="btn btn-primaire" onClick={handleLienClick} style={{ width: "100%", justifyContent: "center", marginTop: "4px" }}>
              Demander une soumission
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
