import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import Employees from './Employees';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
const EmployeeApp = () => {
  let [employees, setEmployees] = useState([
    { name: "Sana Siddiqui",
     age: 23, 
     salary: 100000,
     city: "Delhi", 
     employeeId:1},
  ]);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log("useEffect is fired!");
  }, [employees]);

  const addEmployeeApp = (event) => {
    event.preventDefault();
    const formObj = event.target;
    const inputObj = formObj.employeeApp;
    const inputtext = inputObj.value;
    let employeeObj = {
        name: formObj.name.value,
        age: formObj.age.value,
        city: formObj.city.value,
        salary: formObj.salary.value,
      };
    // let newTodos = [...todos, todoObj];

    // setTodos(newTodos);
    axios.post("/employees", employeeAppObj).then((response) => {
      console.log(response);
    });
    getData();
  };

  const deleteEmployeeApp = (indexTodelete) => {
    axios
    .delete(`/employees/${indexTodelete}`)
    .then((response)=> console.log(response));
    getData();
  };

  const clearEmployee = () => {
    axios.delete(`/deleteEmployeeApp`).then((response) => console.log(response));
    getData();
  };

  const getData = () => {
    axios.get("/employees").then(function (response) {
      setEmployees(response.data);
    });
  };
  return (
    <div id="todo-list">
      <h1>Employee App</h1>
      <EmployeeAppForm addEmployeeApp={addEmployeeApp} />
      <div id="todolist">
        <EmployeeList
          // handleCheckBox={handleCheckBox}
          employees={employees}
          deleteEmployeeApp={deleteEmployeeApp}
        />
      </div>
      <br />
      <Button className="clear" variant="contained" onClick={clearEmployeeApp}>
        Clear All
      </Button>
    </div>
  );
};


export default EmployeeApp;