import React from "react";
import { Fade } from "react-slideshow-image";

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  arrows: true,
  indicators: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  },
};

export const Slideshow = ({ fadeImages, name }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 1)",
      }}
    >
      <div
        className="slide-container"
        style={{ width: `${name === "Flim Nite" ? "90%" : "70%"}` }}
      >
        <Fade {...fadeProperties}>
          {fadeImages.map((image) => {
            return (
              <div className="each-fade" key={image}>
                <div className="image-container">
                  <img
                    src={image}
                    alt="slideshow images of projects"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      // border: '5px solid black'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
};
