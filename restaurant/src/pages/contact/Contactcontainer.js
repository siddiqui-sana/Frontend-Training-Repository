import React from "react";
import Contactform from "./Contactform";
import Gmap from "./Gmap";
import "../../styles/contact.css";
import ContactMails from "./ContactMails";

const Contactcontainer = () => {
  return (
    <div className="container-bg2">
      <h4 className="ch1">Contact Us</h4>
      <br />
      <h1 className="ch2">Contact for any Query</h1>
      <br />
      <br />
      <ContactMails />
      <br />
      <div className="cdiv">
        <Gmap />
        <Contactform />
      </div>
    </div>
  );
};

export default Contactcontainer;
