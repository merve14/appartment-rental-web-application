import React, { useState } from "react";
import { useParams } from "react-router-dom";
import leftArrow from "../styles/assets/leftArrow.svg";
import rightArrow from "../styles/assets/rightArrow.svg";
import data from "../styles/assets/fichier.json";

const Carrousel = () => {
  const { id } = useParams();
  const selectedItem = data.find((item) => item.id === id);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === selectedItem.pictures.length - 1 ? 0 : prevSlide + 1
    );
    console.log(nextSlide);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? selectedItem.pictures.length - 1 : prevSlide - 1
    );
    console.log(prevSlide);
  };
  if (
    !selectedItem ||
    !selectedItem.pictures ||
    !selectedItem.pictures.length
  ) {
    return <p>No images available for this housing item.</p>;
  }

  return (
    <div className="slideshow">
      <div className="carousel">
        <img
          src={selectedItem.pictures[currentSlide]}
          className="slide"
          alt="Image démontrant pièce d'appartement ou maison transmis par le host"
        />
        {selectedItem.pictures.length > 1 && (
          <>
            <div className="slide-info">
              <span className="slide-position">
                {currentSlide + 1}/{selectedItem.pictures.length}
              </span>
            </div>
            <img
              src={leftArrow}
              alt="Left Arrow"
              className="arrow left"
              onClick={prevSlide}
            />

            <img
              src={rightArrow}
              alt="Right Arrow"
              className="arrow right"
              onClick={nextSlide}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Carrousel;
