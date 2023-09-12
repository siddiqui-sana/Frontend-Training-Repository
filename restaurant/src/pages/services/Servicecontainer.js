import React from "react";
import Services from "../services/Services";
import "../../styles/service.css";
const Service = () => {
  return (
    <div className="service-container">
      <h4 className="h4">Our Services</h4>
      <br />
      <h1 className="h1">Explore our Services</h1>
      <Services />
    </div>
  );
};

export default Service;
