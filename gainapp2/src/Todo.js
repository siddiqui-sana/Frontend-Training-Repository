import {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import axios from "axios";
const Todo = () => {
    // let students = ["Kamran", "Sana", "Apporva", "Shri,","Nidhi"];
    let [todo, setTodo]= useState([]);
    //Equivalent to ComponentDidMount
    useEffect(()=>{
        getData();
    },[]);
    useEffect(()=>{
        console.log("Use Effect Fired!");
    },[todo]);
    const getData=()=>{
        axios.get("/todos")
        .then(function(response){
            setTodo(response.data);
        });
    };
    const addTodo = (event) => {
        event.preventDefault();
        const formObject=event.target;
        console.log(formObject);
        let inputObject = formObject.todo;
        console.log(inputObject)
        let enteredValue = inputObject.value;
        console.log(enteredValue);
        let newTodo = [...todo,inputObject.value];
        console.log(newTodo);
        setTodo(newTodo);
    };
    const deleteTodo = (indexTodelete) => {
        let newTodo = todo.filter((val, index) => {
          if (index == indexTodelete) {
            return false;
          }
          return true;
        });
        setTodo(newTodo);
  };
  const clearTodo = () => {
    let newTodo = [];
    setTodo(newTodo);
  };
//   function handleCheckBox(event) {
//     const pdiv = event.target.parentNode;
//     const delbtn = pdiv.getElementsByClassName("delete-btn")[0];
//     const para = pdiv.getElementsByTagName("p")[0];
//     // console.log(delbtn)
//     delbtn.disabled = event.target.checked;
//     if (event.target.checked) {
//       para.classList.add("completed");
//     } else {
//       para.classList.remove("completed")

    return (
        <div id="todo-list">
      <h1>TODO</h1>
      <Button variant="contained" onClick={getData}>GetData</Button>
      <form onSubmit={addTodo}>
        <input type="text" id="todo" name="todo" placeholder="Enter Todo" />
        <Button variant="contained">Add</Button>
      </form>
      <div id="todolist">
        {todo.map((val, index) => {
          return (
            <div>
                Name: {val.name} <br/>
                Status: {val.status}
                <br/>
              <input type="checkbox" id="checkB"/>
              {/* <p>{val}</p> */}
              <button
                class="delete-btn"
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <br />
      <button class="clear" onClick={clearTodo}>
        Clear All
      </button>
    </div>
    );
};

export default Todo;