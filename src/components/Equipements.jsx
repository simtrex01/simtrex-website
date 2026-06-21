// ============================================================
// COMPOSANT ÉQUIPEMENTS
// Modifiez la liste dans src/data/content.js
// ============================================================

import { equipements } from "../data/content";
import "./Equipements.css";

export default function Equipements() {
  return (
    <section id="equipements" className="equipements bg-sombre">
      <div className="container">
        <div className="section-titre blanc">
          <h2>Notre <span>Flotte</span></h2>
          <div className="ligne-accent" />
          <p>
            Des équipements modernes et bien entretenus pour répondre aux exigences
            des chantiers les plus complexes.
          </p>
        </div>

        <div className="equipements__grille">
          {equipements.map((equip) => (
            <div key={equip.id} className="equip-carte">
              <div className="equip-carte__icone">{equip.icon}</div>
              <div className="equip-carte__corps">
                <h3 className="equip-carte__nom">{equip.nom}</h3>
                <p className="equip-carte__desc">{equip.description}</p>
                <div className="equip-carte__spec">
                  <span className="equip-carte__spec-label">Capacité :</span>
                  {equip.specs}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message supplémentaire */}
        <div className="equipements__note">
          <div className="equipements__note-icone">ℹ️</div>
          <p>
            Notre flotte est régulièrement mise à jour et entretenue pour garantir
            fiabilité et performance sur chaque chantier. Contactez-nous pour connaître
            la disponibilité de nos équipements.
          </p>
        </div>
      </div>
    </section>
  );
}
