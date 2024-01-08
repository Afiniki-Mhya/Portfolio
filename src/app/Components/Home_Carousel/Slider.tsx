"use client";
import React, { useState, useEffect } from "react";
import Cards from "../CardComp";

function Slider() {
  const images = ["tanjiro.jpg", "auto.png", "nash.png", "rps.png", "ps.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[max(80dvh,30rem)] relative overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-transform duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: index === currentIndex ? 0 : "100%",
          }}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-fill"
          />
        </div>
      ))}
    </div>
  );
}

export default Slider;
