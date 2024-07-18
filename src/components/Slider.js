/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Slider.css";
export default function Slider(props) {
  const { images } = props;
  return (
    <div class="slider">
      <div class="slide-track">
        {images.map((image) => {
          return (
            <div class="slide">
              <img class="sli" src={image} />
            </div>
          );
        })}
        {images.map((image) => {
          return (
            <div class="slide">
              <img class="sli" src={image} />
            </div>
          );
        })}
        {images.map((image) => {
          return (
            <div class="slide">
              <img class="sli" src={image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
