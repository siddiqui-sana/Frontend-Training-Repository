import React from "react";
import { MenuList } from "../data/menudata";
import MenuCard from "./MenuCard";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
  const data = useSelector((data) => data.cart.cart);
  const dispatcher = useDispatch();
  return (
    <div className="menu-bg">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          // justifyContent: "center",
          marginTop: "70px",
        }}
      >
        {MenuList.map((menu) => {
          return <MenuCard menu={menu} />;
        })}
      </Box>
    </div>
  );
};

export default Menu;
