import React from "react";
import "../../styles/about.css";
import ResturantGallery from "./ResturantGallery";
import Abouttext from "./Abouttext";

const About = () => {
  return (
    <div className="about1">
      <ResturantGallery />
      <Abouttext />
    </div>
  );
};

export default About;
