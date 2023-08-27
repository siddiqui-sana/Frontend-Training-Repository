import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
const Ecommerce = () => {
  let [todos, setTodos] = useState([
    { name: "Perfume", available: "No", price: 5000 },
  ]);
  useEffect(() => {
    console.log("useEffect is fired!");
  }, [todos]);
  const addProduct = (event) => {
    event.preventDefault();
    const formObj = event.target;
    const productObj = formObj.product;
    const priceObj = formObj.price;
    let newTodos = [
      ...todos,
      { name: productObj.value, price: priceObj.value, available: "yes" },
    ];
    setTodos(newTodos);
  };
  const deleteProduct = (indexTodelete) => {
    let newTodos = todos.filter((val, index) => {
      if (index == indexTodelete) {
        return false;
      }
      return true;
    });
    setTodos(newTodos);
  };
  const clearTodo = () => {
    let newTodos = [];
    setTodos(newTodos);
  };
  return (
    <div id="todo-list">
      <h1>Welcome to the Shop</h1>
      <form onSubmit={addProduct}>
        <TextField
          label="Product Name"
          name="product"
        />
        <br/>
        <br/>
        {/* <input type="text" placeholder="Price"></input> */}
        <TextField
          label="Price"
          name="price"
        />
        <br/>
        <br/>
        <Button variant="outlined" class="add" type="submit" background-color="green">
          Add Product
        </Button>
      </form>
      <div id="todolist">
        {todos.map((val, index) => {
          return (
            <div>
              <p>Name : {val.name}   Cost : {val.price}  Availability : {val.available}</p>
              <Button variant="outlined"
                onClick={() => {
                  deleteProduct(index);
                }}
              >
                Remove
              </Button>
              <br/>
            </div>
          );
        })}
      </div>
      <br/>
      <Button variant="outlined" className="clear" onClick={clearTodo}>
        Delete All
      </Button>
    </div>
  );
};
export default Ecommerce;