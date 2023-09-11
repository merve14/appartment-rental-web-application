import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams to get the ID from the URL
import data from "../styles/assets/fichier.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const InfoSeller = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const selectedItem = data.find((item) => item.id === id);
  const classStars = (index) => {
    return index < selectedItem.rating ? "star-filled" : "stars";
  };

  //Redirect incase the slideshow is not found
  useEffect(() => {
    if (!selectedItem) {
      return <p>No information available for this housing item.</p>;
      navigate("/error");
    }
  }, [selectedItem, navigate]);

  return (
    <div className="info-seller-container">
      <div className="housing-info">
        <h1 className="item-title">{selectedItem.title}</h1>
        <p className="housing-location">{selectedItem.location}</p>
        <div className="tags-container">
          {selectedItem.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="host-info">
        <div className="host-name-and-picture">
          <p className="host-name">{selectedItem.host.name}</p>
          <img
            className="host-picture"
            src={selectedItem.host.picture}
            alt="host picture"
          />
        </div>
        <div className="stars">
          {Array.from({ length: 5 }, (_, index) => (
            <FontAwesomeIcon
              icon={faStar}
              key={index}
              className={`star-icon ${classStars(index)}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default InfoSeller;
