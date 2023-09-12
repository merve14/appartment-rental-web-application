import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import bannerAbout from "../styles/assets/banner-about-page.png";
import Collapses from "../components/Collapses";

const About = () => {
  return (
    <div>
      <Nav />
      <Banner image={bannerAbout} />
      <div className="accordion-about-page">
        <Collapses
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes."
        />
        <Collapses
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapses
          title="Service"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme.
"
        />
        <Collapses
          title="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
