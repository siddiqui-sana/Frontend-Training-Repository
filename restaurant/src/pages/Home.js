import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Background from "../image/bg1.jpg";

const Home = () => {
  return (
    // <Layout className="layout">
    <div className="home" style={{ backgroundImage: `url(${Background})` }}>
      <div className="home1">
        <h1 className="headingEnjoy">
          Enjoy Our <br />
          Delicious Meals
        </h1>
        <br />
        <p className="para">
          Our menu is a celebration of the finest ingredients, expertly crafted
          by our talented chefs. From sizzling steaks to delicate seafood, from
          hearty comfort food to gourmet creations, every dish is a work of art.
          Prepare your taste buds for a symphony of flavors that will leave you
          craving for more.
        </p>
        <br />
        <Link to={"/bookatable"} className="book_table_btn">
          <button class="contained-button">Book A Table</button>
        </Link>
      </div>
      <div className="home2"></div>
    </div>
    // </Layout>
  );
};

export default Home;
