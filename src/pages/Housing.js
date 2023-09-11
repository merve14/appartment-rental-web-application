import React from "react";
import Carrousel from "../components/Carrousel";
import Nav from "../components/Navbar";
import Collapses from "../components/Collapses";
import InfoSeller from "../components/InfoSeller";
import Footer from "../components/Footer";
import data from "../styles/assets/fichier.json";
import { useParams } from "react-router-dom";

const housing = () => {
  const params = useParams();
  const id = params.id;
  const selectedItem = data.find((item) => item.id === id);
  console.log(selectedItem);
  const textEquipments = () => {
    return selectedItem.equipments
      .map((equipment) => {
        return `${equipment}\n`;
      })
      .join("");
  };
  return (
    <div>
      <Nav />
      <Carrousel />
      <InfoSeller />
      <div className="housing-page-accordion">
        <Collapses
          text={selectedItem.description}
          title="Description"
          isHousing={true}
        />
        <Collapses
          text={textEquipments()}
          title="Équipements"
          isHousing={true}
        />
      </div>
      <Footer />
    </div>
  );
};

export default housing;
