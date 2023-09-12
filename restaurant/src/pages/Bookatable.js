import React, { useState } from "react";
import "../styles/bookTable.css";

const Bookatable = () => {
  const url = " ";
  const [data, setData] = useState({
    name: "",
    email: "",
    dateTime: "",
    noOfPeople: 0,
    specialRequest: " ",
  });

  function submit(e) {
    e.preventDefault();
    const infoObj = {
      name: data.name,
      email: data.email,
      dateTime: data.dateTime,
      noOfPeople: data.noOfPeople,
      specialRequest: data.noOfPeople,
    };
    console.log(infoObj);
  }
  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  return (
    <div className="container">
      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_dui6BUmMBg?si=VUc-0LE6XQ02AGHN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="bookatable">
        <p className="heading-rsv">Reservation</p>
        <h2 className="h2">Book A Table Online</h2>
        <form
          className="form"
          method="POST"
          id="myForm"
          onSubmit={(e) => submit(e)}
        >
          <input
            className="stylish-input"
            onChange={handle}
            id="name"
            value={data.name}
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />
          <input
            className="stylish-input"
            onChange={handle}
            id="email"
            value={data.email}
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
          <br />
          <br />
          <input
            className="stylish-input"
            onChange={handle}
            id="dateTime"
            value={data.dateTime}
            type="datetime-local"
            placeholder="Date and Time"
            name="dateTime"
            required
          />
          <input
            className="stylish-input"
            placeholder="No of People"
            onChange={handle}
            id="noOfPeople"
            value={data.noOfPeople}
            type="number"
            name="noOfPeople"
            required
          />
          <br />
          <br />
          <textarea
            className="stylish-input1"
            onChange={handle}
            id="specialRequest"
            value={data.specialRequest}
            placeholder="Any Special Request"
            name="specialRequest"
            rows="4"
          />
          <br />
          <br />
          <button className="outlined" type="submit">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bookatable;
