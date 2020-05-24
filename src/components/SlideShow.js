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

export const Slideshow = ({ fadeImages }) => {
  return (
    <div className="slide-container" style={{ width: "70%" }}>
      <Fade {...fadeProperties}>
        {fadeImages.map((image) => {
          return (
            <div className="each-fade" key={image}>
              <div className="image-container">
                <img
                  src={image}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          );
        })}
        {/* <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} />
          </div>
        </div> */}
      </Fade>
    </div>
  );
};
