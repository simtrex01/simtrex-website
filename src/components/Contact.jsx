// ============================================================
// COMPOSANT CONTACT — Formulaire de soumission
// Envoi via FormSubmit (gratuit, sans backend).
// - La demande est envoyée par courriel à simtrex01@hotmail.com
// - Un accusé de réception automatique est envoyé au client (_autoresponse)
// - Après l'envoi, FormSubmit redirige vers ?envoye=1 (message de confirmation)
// Note : la 1re soumission nécessite d'activer le formulaire via le
// courriel de confirmation envoyé par FormSubmit.
// ============================================================

import { useState, useEffect } from "react";
import { companyInfo, typesProjet } from "../data/content";
import BoutonFacebook from "./BoutonFacebook";
import "./Contact.css";

const { adresse } = companyInfo;

// Message d'accusé de réception envoyé automatiquement au client
const messageAutoReponse =
  "Bonjour,\n\n" +
  "Merci d'avoir contacté Construction Simtrex inc. Nous avons bien reçu votre demande de soumission et nous vous contacterons dans les plus brefs délais pour discuter de votre projet.\n\n" +
  "Pour toute question ou urgence, vous pouvez nous joindre directement au 418-617-9467.\n\n" +
  "Au plaisir de travailler avec vous,\n" +
  "Michael Simard\n" +
  "Construction Simtrex inc\n" +
  "https://simtrex.ca";

const etatInitial = {
  nom: "",
  telephone: "",
  email: "",
  typeProjet: "",
  description: "",
  ville: "",
};

export default function Contact() {
  const [champs, setChamps] = useState(etatInitial);
  // Affiche la confirmation quand on revient de FormSubmit (?envoye=1)
  const [envoyé, setEnvoyé] = useState(
    () => new URLSearchParams(window.location.search).get("envoye") === "1"
  );
  const [envoi, setEnvoi] = useState("idle"); // "idle" | "en-cours" | "erreur"
  const [erreurs, setErreurs] = useState({});

  // Au retour de FormSubmit, on ramène l'utilisateur à la section contact
  useEffect(() => {
    if (envoyé) {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const valider = () => {
    const e = {};
    if (!champs.nom.trim())        e.nom        = "Le nom est requis";
    if (!champs.telephone.trim())  e.telephone  = "Le téléphone est requis";
    if (!champs.email.trim())      e.email      = "Le courriel est requis";
    else if (!/\S+@\S+\.\S+/.test(champs.email)) e.email = "Courriel invalide";
    if (!champs.typeProjet)        e.typeProjet = "Veuillez sélectionner un type de projet";
    if (!champs.description.trim()) e.description = "La description est requise";
    if (!champs.ville.trim())      e.ville      = "La ville / secteur est requis";
    return e;
  };

  // Curried : la clé d'état interne (propre) est indépendante du "name"
  // envoyé à FormSubmit (qui sert d'étiquette lisible dans le courriel).
  const handleChange = (cle) => (e) => {
    const { value } = e.target;
    setChamps((prev) => ({ ...prev, [cle]: value }));
    if (erreurs[cle]) setErreurs((prev) => ({ ...prev, [cle]: undefined }));
  };

  const handleSubmit = (e) => {
    // Validation côté client AVANT l'envoi natif à FormSubmit
    const erreursValidation = valider();
    if (Object.keys(erreursValidation).length > 0) {
      e.preventDefault(); // on bloque l'envoi tant qu'il y a des erreurs
      setErreurs(erreursValidation);
      const premierChamp = document.querySelector(".champ.erreur");
      if (premierChamp) premierChamp.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    // Aucune erreur : on laisse le navigateur envoyer le formulaire à FormSubmit.
    // FormSubmit notifie Simtrex par courriel, envoie l'accusé de réception au
    // client, puis redirige vers ?envoye=1 (message de confirmation).
    setEnvoi("en-cours");
  };

  const recommencer = () => {
    setEnvoyé(false);
    setEnvoi("idle");
    setErreurs({});
    window.history.replaceState({}, "", "/#contact");
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
                action="https://formsubmit.co/simtrex01@hotmail.com"
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* ── Réglages FormSubmit (champs cachés) ── */}
                <input type="hidden" name="_subject" value="Nouvelle demande de soumission — simtrex.ca" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value={messageAutoReponse} />
                <input type="hidden" name="_next" value="https://simtrex.ca/?envoye=1" />
                {/* Piège anti-spam (doit rester vide) */}
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

                <div className="champs-groupe">
                  {/* Nom */}
                  <div className={`champ ${erreurs.nom ? "erreur" : ""}`}>
                    <label htmlFor="nom">Nom complet *</label>
                    <input
                      type="text"
                      id="nom"
                      name="Nom complet"
                      value={champs.nom}
                      onChange={handleChange("nom")}
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
                      name="Téléphone"
                      value={champs.telephone}
                      onChange={handleChange("telephone")}
                      placeholder="418-000-0000"
                      autoComplete="tel"
                    />
                    {erreurs.telephone && <span className="champ__erreur" role="alert">{erreurs.telephone}</span>}
                  </div>
                </div>

                {/* Courriel */}
                <div className={`champ ${erreurs.email ? "erreur" : ""}`}>
                  <label htmlFor="email">Courriel *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={champs.email}
                    onChange={handleChange("email")}
                    placeholder="votre@courriel.com"
                    autoComplete="email"
                  />
                  {erreurs.email && <span className="champ__erreur" role="alert">{erreurs.email}</span>}
                </div>

                {/* Type de projet */}
                <div className={`champ ${erreurs.typeProjet ? "erreur" : ""}`}>
                  <label htmlFor="typeProjet">Type de projet *</label>
                  <select
                    id="typeProjet"
                    name="Type de projet"
                    value={champs.typeProjet}
                    onChange={handleChange("typeProjet")}
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
                    name="Ville / secteur"
                    value={champs.ville}
                    onChange={handleChange("ville")}
                    placeholder="Ex : La Malbaie, Québec, Charlevoix..."
                  />
                  {erreurs.ville && <span className="champ__erreur" role="alert">{erreurs.ville}</span>}
                </div>

                {/* Description */}
                <div className={`champ ${erreurs.description ? "erreur" : ""}`}>
                  <label htmlFor="description">Description du projet *</label>
                  <textarea
                    id="description"
                    name="Description"
                    value={champs.description}
                    onChange={handleChange("description")}
                    rows={5}
                    placeholder="Décrivez brièvement votre projet : dimensions, contraintes, délais souhaités..."
                  />
                  {erreurs.description && <span className="champ__erreur" role="alert">{erreurs.description}</span>}
                </div>

                {/* Pièce jointe (plan, photo…) — optionnel */}
                <div className="champ">
                  <label htmlFor="attachment">Plan ou document <span className="champ__optionnel">(optionnel)</span></label>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    className="champ__fichier"
                    accept=".pdf,.jpg,.jpeg,.png,.heic,.heif,.webp,.doc,.docx"
                  />
                  <span className="champ__aide">
                    Vous pouvez joindre votre plan ou une photo (PDF, JPG, PNG… — max. ~10 Mo).
                  </span>
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
