// ============================================================
// COMPOSANT HERO — Section d'accueil principale
// ============================================================

import { companyInfo, avantages } from "../data/content";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      {/* ── Section héro ───────────────────────────────────────── */}
      <section id="accueil" className="hero">
        <div className="hero__overlay" />

        <div className="container hero__contenu">
          {/* Badges identité */}
          <div className="hero__badges">
            <span className="hero__badge">
              <span className="hero__badge-point" />
              Depuis {companyInfo.annéeFondation}
            </span>
            <span className="hero__badge hero__badge--rbq">
              RBQ {companyInfo.rbq}
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="hero__titre">Construction Simtrex inc</h1>
          <p className="hero__tagline">
            Excavation&nbsp;•&nbsp;Transport&nbsp;•&nbsp;Génie civil
          </p>

          {/* Texte court */}
          <p className="hero__sous-titre">
            {companyInfo.description}
          </p>

          {/* Boutons d'action */}
          <div className="hero__boutons">
            <a href="#contact" className="btn btn-primaire">
              Demander une soumission
            </a>
            <a href="#services" className="btn btn-secondaire">
              Voir nos services
            </a>
          </div>

          {/* Statistiques rapides */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-chiffre">100+</span>
              <span className="hero__stat-label">Projets publics réalisés</span>
            </div>
            <div className="hero__stat-separateur" />
            <div className="hero__stat">
              <span className="hero__stat-chiffre">20 M$+</span>
              <span className="hero__stat-label">En contrats générés</span>
            </div>
            <div className="hero__stat-separateur" />
            <div className="hero__stat">
              <span className="hero__stat-chiffre">10+</span>
              <span className="hero__stat-label">Services offerts</span>
            </div>
            <div className="hero__stat-separateur" />
            <div className="hero__stat">
              <span className="hero__stat-chiffre">Charlevoix</span>
              <span className="hero__stat-label">Territoire principal</span>
            </div>
          </div>
        </div>

        <a href="#historique-bande" className="hero__fleche" aria-label="Défiler vers le bas">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* ── Bande historique ────────────────────────────────────── */}
      <section id="historique-bande" className="historique-bande bg-sombre">
        <div className="container historique-bande__contenu">
          <div className="historique-bande__texte">
            <p>
              Une entreprise de terrain, bâtie sur la <strong>fiabilité</strong> et le respect
              des engagements, au service de Charlevoix en excavation, transport et génie civil.
            </p>
          </div>
          <div className="historique-bande__jalons">
            <div className="jalon">
              <span className="jalon__annee">2012</span>
              <span className="jalon__desc">Fondation de l'entreprise</span>
            </div>
            <div className="jalon__fleche">→</div>
            <div className="jalon">
              <span className="jalon__annee">2014</span>
              <span className="jalon__desc">Incorporation</span>
            </div>
            <div className="jalon__fleche">→</div>
            <div className="jalon">
              <span className="jalon__annee">Aujourd'hui</span>
              <span className="jalon__desc">10+ services • Charlevoix</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pourquoi choisir Simtrex ────────────────────────────── */}
      <section id="avantages" className="avantages bg-gris">
        <div className="container">
          <div className="section-titre">
            <h2>Pourquoi choisir <span>Simtrex inc</span></h2>
            <div className="ligne-accent" />
            <p>Une équipe de terrain dédiée à la réussite de vos projets, du résidentiel au municipal.</p>
          </div>

          <div className="avantages__grille">
            {avantages.map((item, index) => (
              <div key={index} className="avantage-carte">
                <div className="avantage-carte__icone">{item.icon}</div>
                <h3 className="avantage-carte__titre">{item.titre}</h3>
                <p className="avantage-carte__desc">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Bande CTA */}
          <div className="cta-bande">
            <div className="cta-bande__texte">
              <h3>Prêt à démarrer votre projet ?</h3>
              <p>Contactez-nous pour une soumission gratuite et sans engagement.</p>
            </div>
            <div className="cta-bande__actions">
              <a href={companyInfo.phoneHref} className="btn btn-secondaire">
                📞 {companyInfo.phone}
              </a>
              <a href="#contact" className="btn btn-primaire">
                Soumission gratuite
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
