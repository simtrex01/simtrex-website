// ============================================================
// APP PRINCIPALE — Simtrex inc
// Importez ou réordonnez les sections ici
// ============================================================

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import GalerieTransport from "./components/GalerieTransport";
import GalerieSeptique from "./components/GalerieSeptique";
import GalerieFondations from "./components/GalerieFondations";
import Realisations from "./components/Realisations";
import GalerieLET from "./components/GalerieLET";
import GalerieOuvrageArt from "./components/GalerieOuvrageArt";
import GaleriePonceaux138 from "./components/GaleriePonceaux138";
import GalerieTBA362 from "./components/GalerieTBA362";
import GalerieBarrage from "./components/GalerieBarrage";
import GalerieBerges from "./components/GalerieBerges";
import GalerieDeblai172 from "./components/GalerieDeblai172";
import GalerieTalusLoisirs from "./components/GalerieTalusLoisirs";
import GalerieClermont from "./components/GalerieClermont";
import GaleriePontGagnon from "./components/GaleriePontGagnon";
import GalerieHautesGorges from "./components/GalerieHautesGorges";
import Equipements from "./components/Equipements";
import APropos from "./components/APropos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <GalerieTransport />
        <GalerieSeptique />
        <GalerieFondations />
        <Realisations />
        <GalerieLET />
        <GalerieOuvrageArt />
        <GaleriePonceaux138 />
        <GalerieTBA362 />
        <GalerieBarrage />
        <GalerieBerges />
        <GalerieDeblai172 />
        <GalerieTalusLoisirs />
        <GalerieClermont />
        <GaleriePontGagnon />
        <GalerieHautesGorges />
        <Equipements />
        <APropos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
