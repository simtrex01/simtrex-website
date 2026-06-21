// ============================================================
// COMPOSANT CONTACT — Formulaire de soumission
// Envoi via Netlify Forms (gratuit, sans backend).
// Les soumissions arrivent dans le tableau de bord Netlify
// et par courriel à l'adresse configurée dans les paramètres
// de notification du formulaire "soumission-simtrex".
// ============================================================

import { useState } from "react";
import { companyInfo, typesProjet } from "../data/content";
import BoutonFacebook from "./BoutonFacebook";
import "./Contact.css";

const { adresse } = companyInfo;

const etatInitial = {
  nom: "",
  telephone: "",
  courriel: "",
  typeProjet: "",
  description: "",
  ville: "",
};

// Encode les données en format URL (requis par Netlify Forms)
function encodeFormData(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export default function Contact() {
  const [champs, setChamps] = useState(etatInitial);
  const [envoyé, setEnvoyé] = useState(false);
  const [envoi, setEnvoi] = useState("idle"); // "idle" | "en-cours" | "erreur"
  const [erreurs, setErreurs] = useState({});

  const valider = () => {
    const e = {};
    if (!champs.nom.trim())        e.nom        = "Le nom est requis";
    if (!champs.telephone.trim())  e.telephone  = "Le téléphone est requis";
    if (!champs.courriel.trim())   e.courriel   = "Le courriel est requis";
    else if (!/\S+@\S+\.\S+/.test(champs.courriel)) e.courriel = "Courriel invalide";
    if (!champs.typeProjet)        e.typeProjet = "Veuillez sélectionner un type de projet";
    if (!champs.description.trim()) e.description = "La description est requise";
    if (!champs.ville.trim())      e.ville      = "La ville / secteur est requis";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChamps((prev) => ({ ...prev, [name]: value }));
    if (erreurs[name]) setErreurs((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation côté client
    const erreursValidation = valider();
    if (Object.keys(erreursValidation).length > 0) {
      setErreurs(erreursValidation);
      // Scroll vers la première erreur
      const premierChamp = document.querySelector(".champ.erreur");
      if (premierChamp) premierChamp.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setEnvoi("en-cours");

    try {
      // Envoi à Netlify Forms via fetch
      // Le nom "soumission-simtrex" doit correspondre exactement
      // au name= du formulaire caché dans index.html
      const reponse = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({
          "form-name": "soumission-simtrex",
          "bot-field": "",   // champ anti-spam — doit rester vide
          ...champs,
        }),
      });

      if (reponse.ok) {
        setEnvoyé(true);
        setChamps(etatInitial);
        setEnvoi("idle");
      } else {
        // Réponse HTTP non-OK (ex : 400, 500)
        setEnvoi("erreur");
      }
    } catch {
      // Erreur réseau (pas de connexion, timeout, etc.)
      setEnvoi("erreur");
    }
  };

  const recommencer = () => {
    setEnvoyé(false);
    setEnvoi("idle");
    setErreurs({});
  };

  return (
    <section id="contact" className="contact bg-gris">
      <div className="container">
        <div className="section-titre">
          <h2>Demandez une <span>Soumission</span></h2>
          <div className="ligne-accent" />
          <p>
            Remplissez le formulaire ci-dessous et nous vous contacterons
            dans les plus brefs délais pour discuter de votre projet.
          </p>
        </div>

        <div className="contact__contenu">
          {/* ── Colonne formulaire ── */}
          <div className="contact__formulaire-wrapper">

            {/* ── Confirmation d'envoi ── */}
            {envoyé ? (
              <div className="contact__succes">
                <div className="contact__succes-icone">✅</div>
                <h3>Demande envoyée !</h3>
                <p>
                  Merci pour votre demande de soumission. Nous vous contacterons
                  très rapidement pour discuter de votre projet.
                </p>
                <p className="contact__succes-coords">
                  En attendant, vous pouvez nous joindre directement au{" "}
                  <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>.
                </p>
                <button className="btn btn-primaire" onClick={recommencer}>
                  Nouvelle demande
                </button>
              </div>

            ) : (
              /* ── Formulaire ── */
              <form
                className="contact__formulaire"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Champ anti-spam invisible — NE PAS supprimer */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <label>
                    Ne pas remplir si vous êtes humain
                    <input name="bot-field" tabIndex="-1" autoComplete="off" />
                  </label>
                </div>

                <div className="champs-groupe">
                  {/* Nom */}
                  <div className={`champ ${erreurs.nom ? "erreur" : ""}`}>
                    <label htmlFor="nom">Nom complet *</label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={champs.nom}
                      onChange={handleChange}
                      placeholder="Jean Tremblay"
                      autoComplete="name"
                    />
                    {erreurs.nom && <span className="champ__erreur" role="alert">{erreurs.nom}</span>}
                  </div>

                  {/* Téléphone */}
                  <div className={`champ ${erreurs.telephone ? "erreur" : ""}`}>
                    <label htmlFor="telephone">Téléphone *</label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={champs.telephone}
                      onChange={handleChange}
                      placeholder="418-000-0000"
                      autoComplete="tel"
                    />
                    {erreurs.telephone && <span className="champ__erreur" role="alert">{erreurs.telephone}</span>}
                  </div>
                </div>

                {/* Courriel */}
                <div className={`champ ${erreurs.courriel ? "erreur" : ""}`}>
                  <label htmlFor="courriel">Courriel *</label>
                  <input
                    type="email"
                    id="courriel"
                    name="courriel"
                    value={champs.courriel}
                    onChange={handleChange}
                    placeholder="votre@courriel.com"
                    autoComplete="email"
                  />
                  {erreurs.courriel && <span className="champ__erreur" role="alert">{erreurs.courriel}</span>}
                </div>

                {/* Type de projet */}
                <div className={`champ ${erreurs.typeProjet ? "erreur" : ""}`}>
                  <label htmlFor="typeProjet">Type de projet *</label>
                  <select
                    id="typeProjet"
                    name="typeProjet"
                    value={champs.typeProjet}
                    onChange={handleChange}
                  >
                    <option value="">— Sélectionnez un type —</option>
                    {typesProjet.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {erreurs.typeProjet && <span className="champ__erreur" role="alert">{erreurs.typeProjet}</span>}
                </div>

                {/* Ville / Secteur */}
                <div className={`champ ${erreurs.ville ? "erreur" : ""}`}>
                  <label htmlFor="ville">Ville / Secteur *</label>
                  <input
                    type="text"
                    id="ville"
                    name="ville"
                    value={champs.ville}
                    onChange={handleChange}
                    placeholder="Ex : La Malbaie, Québec, Charlevoix..."
                  />
                  {erreurs.ville && <span className="champ__erreur" role="alert">{erreurs.ville}</span>}
                </div>

                {/* Description */}
                <div className={`champ ${erreurs.description ? "erreur" : ""}`}>
                  <label htmlFor="description">Description du projet *</label>
                  <textarea
                    id="description"
                    name="description"
                    value={champs.description}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Décrivez brièvement votre projet : dimensions, contraintes, délais souhaités..."
                  />
                  {erreurs.description && <span className="champ__erreur" role="alert">{erreurs.description}</span>}
                </div>

                {/* Message d'erreur réseau */}
                {envoi === "erreur" && (
                  <div className="contact__erreur-reseau" role="alert">
                    <strong>⚠️ Envoi impossible.</strong> Vérifiez votre connexion et réessayez.
                    Si le problème persiste, contactez-nous directement au{" "}
                    <a href={companyInfo.phoneHref}>{companyInfo.phone}</a> ou par courriel à{" "}
                    <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.
                  </div>
                )}

                {/* Bouton d'envoi */}
                <button
                  type="submit"
                  className={`btn btn-primaire contact__btn-envoi ${envoi === "en-cours" ? "en-cours" : ""}`}
                  disabled={envoi === "en-cours"}
                >
                  {envoi === "en-cours" ? (
                    <><span className="contact__spinner" aria-hidden="true" /> Envoi en cours…</>
                  ) : (
                    "Envoyer ma demande →"
                  )}
                </button>

                <p className="contact__mention-rbq">
                  Entrepreneur licencié RBQ&nbsp;<strong>{companyInfo.rbq}</strong>
                </p>
              </form>
            )}
          </div>

          {/* ── Colonne coordonnées ── */}
          <div className="contact__infos">
            <div className="contact__infos-carte">
              <h3>Coordonnées</h3>

              <div className="contact__info-item">
                <span className="contact__info-icone">🏢</span>
                <div>
                  <strong>{companyInfo.name}</strong>
                  <span>Entrepreneur en construction</span>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icone">👤</span>
                <div>
                  <strong>{companyInfo.contact}</strong>
                  <span>Propriétaire</span>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icone">📍</span>
                <div>
                  <a href={adresse.googleMaps} target="_blank" rel="noopener noreferrer" className="contact__lien">
                    {adresse.rue}<br />
                    {adresse.ville}, {adresse.province}&nbsp;&nbsp;{adresse.codePostal}
                  </a>
                  <span>Ouvrir dans Google Maps</span>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icone">📞</span>
                <div>
                  <a href={companyInfo.phoneHref} className="contact__lien">{companyInfo.phone}</a>
                  <span>Lun – Ven, 7h – 18h</span>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icone">✉️</span>
                <div>
                  <a href={`mailto:${companyInfo.email}`} className="contact__lien">{companyInfo.email}</a>
                  <span>Réponse sous 24h</span>
                </div>
              </div>

              <div className="contact__rbq">
                <span className="contact__rbq-label">Licence RBQ</span>
                <span className="contact__rbq-numero">{companyInfo.rbq}</span>
              </div>
            </div>

            <div className="contact__urgence">
              <div className="contact__urgence-entete">
                <span>🚨</span>
                <strong>Urgence de chantier ?</strong>
              </div>
              <p>
                Appelez-nous directement au{" "}
                <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>.
                Nous sommes disponibles pour les urgences.
              </p>
            </div>

            <div className="contact__secteurs">
              <h4>Secteurs couverts</h4>
              <p>{companyInfo.zonesDesservies.join(", ")}.</p>
            </div>

            <div className="contact__facebook">
              <p>Voyez nos réalisations et photos de chantier en temps réel.</p>
              <BoutonFacebook variante="primaire" texte="Suivez-nous sur Facebook" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
