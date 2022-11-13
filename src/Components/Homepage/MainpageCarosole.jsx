import React from 'react'
import ImageSlider from "./ImageSlider";
import c1 from "../Homepageimage/c1.png"
import c2 from "../Homepageimage/c2.png"
import c3 from "../Homepageimage/c3.png"
import c4 from "../Homepageimage/c4.png"
import c5 from "../Homepageimage/c5.png"

import "./slidermain.css";

export default function MainpageCarosole() {
  const slides = [
    { url:c1 , title: "beach" },
    { url:c2, title: "boat" },
    { url:c3 , title: "forest" },
    { url:c4 , title: "city" },
    { url:c5 , title: "italy" },
  ];
  const containerStyles = {
    width: "75%",
    height: "400px",
    margin:"auto",
  };
  return (
    <>
     <div style={containerStyles}>
        <ImageSlider slides={slides} id="slidermain" />
      </div>

    </>
  )
}