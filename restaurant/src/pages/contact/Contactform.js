import React, { useState } from "react";
import "../../styles/contact.css";
import TextField from "@mui/material/TextField";

const Contactform = () => {
  const [formdata, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();
    const infoObj = {
      name: formdata.name,
      email: formdata.email,
      subject: formdata.subject,
      message: formdata.message,
    };
    console.log(infoObj);
  };
  const handle = (e) => {
    const newData = { ...formdata };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };
  return (
    <div className="contactForm">
      {/* The action attribute in an HTML <form> tag specifies the URL to which
         the data entered into the form should be submitted when the form is submitted by the user. */}
      <form method="POST" id="contactForm" onSubmit={submit}>
        <TextField
          variant="outlined"
          onChange={handle}
          value={formdata.name}
          type="text"
          placeholder="Your Name"
          id="name"
          name="name"
          required
        />
        <TextField
          variant="outlined"
          className="email"
          onChange={handle}
          value={formdata.email}
          type="email"
          placeholder="Your Email"
          id="email"
          name="email"
          required
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          onChange={handle}
          value={formdata.subject}
          type="text"
          placeholder="Subject"
          id="subject"
          name="subject"
          required
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          onChange={handle}
          value={formdata.message}
          placeholder="Message"
          id="message"
          name="message"
          rows="10"
          required
        />
        <br />
        <br />
        <button className="outlined1" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contactform;
