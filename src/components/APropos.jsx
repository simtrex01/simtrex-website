// ============================================================
// COMPOSANT À PROPOS
// Modifiez les textes directement dans ce fichier
// ============================================================

import { companyInfo } from "../data/content";
import "./APropos.css";

// Valeurs de l'entreprise — modifiez ici
const valeurs = [
  { titre: "Terrain avant tout", texte: "Nous sommes une équipe de terrain. Nos décideurs sont présents sur les chantiers, pas seulement au bureau." },
  { titre: "Proximité client", texte: "Chaque client est unique. Nous prenons le temps de comprendre vos contraintes et vos objectifs avant de commencer." },
  { titre: "Efficacité opérationnelle", texte: "Optimisation des déplacements, des équipements et des ressources pour livrer dans les délais et respecter les budgets." },
  { titre: "Standards de qualité", texte: "Nos travaux sont réalisés conformément aux normes en vigueur, avec le souci du détail que nos clients sont en droit d'attendre." },
];

export default function APropos() {
  return (
    <section id="apropos" className="apropos bg-gris">
      <div className="container">
        <div className="apropos__contenu">
          {/* Colonne gauche — texte */}
          <div className="apropos__texte">
            <div className="section-titre" style={{ textAlign: "left" }}>
              <h2>À Propos de <span>Simtrex inc</span></h2>
              <div className="ligne-accent" style={{ margin: "14px 0 20px" }} />
            </div>

            {/* Biographie du fondateur — première chose qu'on voit */}
            <div className="apropos__bio">
              <div className="apropos__bio-photo">
                <img
                  src="/images/equipe/michael-simard-simtrex.jpg"
                  alt="Michael Simard, fondateur et propriétaire de Simtrex inc"
                  loading="lazy"
                />
              </div>
              <div className="apropos__bio-texte">
                <h3 className="apropos__bio-titre">Le mot du fondateur</h3>
                <p>
                  Mécanicien de machinerie de formation, j'ai su dès l'adolescence que je
                  voulais devenir entrepreneur. À <strong>21 ans</strong>, lorsque j'ai eu la
                  maturité nécessaire, j'ai fondé Simtrex avec seulement <strong>20 000 $</strong>
                  {" "}en poche — mais avec une passion incarnée, une détermination sans bornes
                  et un courage à toute épreuve.
                </p>
                <p>
                  Depuis, j'ai travaillé avec acharnement pour livrer la marchandise et
                  respecter les délais, et je me suis bâti une réputation solide. Je suis
                  particulièrement fier d'avoir contribué au développement économique de
                  Charlevoix, ma région.
                </p>

                <div className="apropos__bio-stats">
                  <div className="apropos__bio-stat">
                    <strong>100+</strong>
                    <span>projets publics réalisés</span>
                  </div>
                  <div className="apropos__bio-stat">
                    <strong>20 M$+</strong>
                    <span>en contrats générés</span>
                  </div>
                  <div className="apropos__bio-stat">
                    <strong>21 ans</strong>
                    <span>à la fondation, avec 20 k$</span>
                  </div>
                </div>

                <p className="apropos__bio-signature">
                  — Michael Simard, fondateur et propriétaire de Simtrex inc
                </p>
              </div>
            </div>

            {/* Historique de l'entreprise — modifiez ici */}
            <div className="apropos__historique">
              <span className="apropos__historique-annee">Fondée en 2012</span>
              <span className="apropos__historique-separateur">·</span>
              <span className="apropos__historique-annee">Incorporée en 2014</span>
            </div>

            <p className="apropos__intro">
              Fondée en 2012, Simtrex inc a d'abord vu le jour comme entreprise enregistrée
              avant de s'incorporer en 2014. Depuis ses débuts, l'entreprise évolue dans le
              domaine de l'excavation, du génie civil, des travaux municipaux et du transport
              spécialisé.
            </p>

            <p className="apropos__para">
              Grâce à une approche terrain, efficace et rigoureuse, Simtrex inc s'est bâtie
              une réputation basée sur la fiabilité, la qualité d'exécution et le respect
              des engagements. Que ce soit pour des projets d'infrastructure municipale, des
              travaux résidentiels ou commerciaux, ou encore le transport de machinerie lourde,
              nous nous engageons à livrer des résultats à la hauteur des exigences de nos clients.
            </p>

            <p className="apropos__para">
              Notre force : une équipe habituée aux contraintes du terrain, des équipements
              modernes bien entretenus, et une communication directe avec chaque client.
              Chez Simtrex inc, vous parlez à la personne qui fait le travail.
            </p>

            {/* Origine du nom — modifiez ici */}
            <div className="apropos__nom-origine">
              <div className="apropos__nom-origine-entete">
                <span className="apropos__nom-origine-icone">💡</span>
                <h3 className="apropos__nom-origine-titre">L'origine du nom Simtrex</h3>
              </div>
              <p className="apropos__nom-origine-texte">
                Le nom <strong>Simtrex</strong> provient de{" "}
                <em>« Simard Transport Excavation »</em>, une appellation qui représentait
                les activités principales de l'entreprise à ses débuts. Lorsque l'entreprise
                s'est incorporée en 2014, le nom a été simplifié pour devenir{" "}
                <strong>Simtrex inc</strong>. Cette évolution marque une étape importante
                dans le développement de l'entreprise, tout en conservant le lien avec ses
                racines : le transport, l'excavation et le travail de terrain.
              </p>
              <div className="apropos__nom-decompose">
                <span className="apropos__nom-partie"><strong>Sim</strong>ard</span>
                <span className="apropos__nom-plus">+</span>
                <span className="apropos__nom-partie"><strong>Tr</strong>ansport</span>
                <span className="apropos__nom-plus">+</span>
                <span className="apropos__nom-partie"><strong>Ex</strong>cavation</span>
                <span className="apropos__nom-fleche">→</span>
                <span className="apropos__nom-resultat">Simtrex</span>
              </div>
            </div>

            {/* Info de contact rapide */}
            <div className="apropos__contact">
              <div className="apropos__contact-personne">
                <div className="apropos__contact-avatar">MS</div>
                <div>
                  <strong>{companyInfo.contact}</strong>
                  <span>Propriétaire — {companyInfo.name}</span>
                </div>
              </div>
              <div className="apropos__contact-coords">
                <a href={`tel:${companyInfo.phone.replace(/-/g, "")}`} className="apropos__lien">
                  📞 {companyInfo.phone}
                </a>
                <a href={`mailto:${companyInfo.email}`} className="apropos__lien">
                  ✉️ {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Colonne droite — valeurs */}
          <div className="apropos__valeurs">
            <h3 className="apropos__valeurs-titre">Nos engagements</h3>
            <div className="apropos__valeurs-liste">
              {valeurs.map((v, i) => (
                <div key={i} className="valeur-item">
                  <div className="valeur-item__num">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h4 className="valeur-item__titre">{v.titre}</h4>
                    <p className="valeur-item__texte">{v.texte}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Notre approche */}
            <div className="apropos__approche">
              <h4 className="apropos__approche-titre">Notre approche</h4>
              <ul className="apropos__approche-liste">
                <li>Contact direct avec le propriétaire</li>
                <li>Devis gratuit et sans engagement</li>
                <li>Équipements adaptés à chaque chantier</li>
                <li>Respect des délais et des normes</li>
                <li>Service personnalisé pour chaque client</li>
              </ul>
            </div>

            {/* Zones de service */}
            <div className="apropos__zones">
              <h4>Zones desservies</h4>
              <div className="apropos__zones-liste">
                {companyInfo.zonesDesservies.map((z) => (
                  <span key={z} className="zone-badge">{z}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
