import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { addToCart } from "../reducer";
import "../styles/cartdiv.css";
const MenuCard = (props) => {
  const menu = props.menu;
  const data = useSelector((data) => data.cart.cart);
  const dispatcher = useDispatch();
  const inputElement = useRef();

  return (
    <div>
      <Card sx={{ maxWidth: "300px", display: "flex", m: 2 }}>
        <CardActionArea>
          <CardMedia
            sx={{ minHeight: "300px" }}
            component={"img"}
            src={menu.image}
            alt={menu.name}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom component={"div"}>
              {menu.name}
            </Typography>
            <Typography variant="body2">{menu.description}</Typography>
            <input
              id="outlined-basic"
              variant="outlined"
              className="qty-btn"
              type="number"
              placeholder="Qty"
              ref={inputElement}
            />
            <Button
              onClick={() => {
                dispatcher(
                  addToCart({
                    name: menu.name,
                    price: menu.price,
                    quantity: Number(inputElement.current.value),
                  })
                );
                console.log(data);
              }}
            >
              +
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default MenuCard;
