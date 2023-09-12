import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "../styles/cartdiv.css";
import { removeItem, orderItem } from "../reducer";
import OrderPlaced from "../OrderPlaced";

const Cart = () => {
  const data = useSelector((data) => data.cart.cart);
  console.log(data);
  const [totalPrice, setTotalPrice] = useState(0);
  const [btnToggle, setBtnToggle] = useState(false);
  const dispatcher = useDispatch();
  useEffect(() => {
    setTotalPrice(
      data.reduce((sum, currentItem) => {
        return sum + currentItem.price * currentItem.quantity;
      }, 0)
    );
    console.log(totalPrice);
  }, [totalPrice, data]);

  const handleOrder = () => {
    setBtnToggle(true);
    dispatcher(orderItem());
  };
  return (
    <div className="cartdivtop">
      {data.map((d, index) => (
        <div className="cartdiv">
          Item: {d.name}
          <br />
          Price: {d.price}
          <br />
          Quantity: {d.quantity}
          <br />
          <button
            onClick={() => {
              dispatcher(removeItem(index));
              console.log(data);
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <p>Total Cost: {totalPrice}</p>
      <br />
      <button className="order-btn" onClick={handleOrder}>
        Order
      </button>
      {btnToggle ? <OrderPlaced /> : <></>}
    </div>
  );
};

export default Cart;
