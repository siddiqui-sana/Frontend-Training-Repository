import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import Employees from './Employees';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
const EmployeeApp = () => {
  let [employees, setEmployees] = useState([
    { name: "Aviral Gupta", age: "complete",city: "New Jersey", salary:"200000" },
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
    let employeeObj = {
      name: formObj.name.value,
      age: formObj.age.value,
      city: formObj.city.value,
      salary: formObj.salary.value,
    };
    axios.post("/employee", employeeObj).then((response) => {
      console.log(response);
    });
    getData();
  };
  const deleteEmployeeApp = (indexTodelete) => {
    axios
    .delete(`/employee/${indexTodelete}`)
    .then((response)=> console.log(response));
    getData();
  };
  const clearEmployeeApp = () => {
    axios.delete(`/deleteemployee`).then((response) => console.log(response));
    getData();
  };
  const getData = () => {
    axios.get("/employee").then(function (response) {
      setEmployees(response.data);
    });
  };
  return (
    <div class="myDiv">
      <h1>Welcome to the Employee App</h1>
      <EmployeeForm addEmployeeApp={addEmployeeApp} />
      <div id="employeelist">
        <EmployeeList
          employees={employees}
          deleteEmployeeApp={deleteEmployeeApp}
        />
      </div>
      <br />
      <Button className="clear" variant="outlined" color="error" onClick={clearEmployeeApp}>
        Clear All
      </Button>
    </div>
  );
};

export default EmployeeApp;