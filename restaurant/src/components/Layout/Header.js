//Contains the Navigation Bar
import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { NavLink } from "react-router-dom";
import "../../styles/headerStyle.css";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Header = () => {
  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "#150c25" }}>
        <Toolbar>
          <Typography
            color={"goldenrod"}
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <RestaurantIcon color={"golderrod"} />
            Desi Flavours
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <NavLink activeClassName="active" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/service"}>Service</NavLink>
              </li>
              <li>
                <NavLink to={"/menu"}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={"/cart"}>
                  <IconButton
                    style={{ color: "white" }}
                    aria-label="add to shopping cart"
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li className="book_table_btn">
                <NavLink to={"/bookatable"} className="book_table_btn">
                  Book A Table
                </NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
