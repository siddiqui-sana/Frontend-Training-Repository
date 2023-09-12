import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      {/* The action attribute in an HTML <form> tag specifies the URL to which
         the data entered into the form should be submitted when the form is submitted by the user. */}
      <form method="POST">
        <input
          type="text"
          placeholder="Your Name"
          id="name"
          name="name"
          required
        />
        <input
          className="email-input"
          type="email"
          placeholder="Your Email"
          id="email"
          name="email"
          required
        />
        <br />
        <input
          type="text"
          placeholder="Subject"
          id="subject"
          name="subject"
          required
        />
        <br />
        <textarea
          placeholder="Message"
          id="message"
          name="message"
          rows="4"
          required
        />
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
