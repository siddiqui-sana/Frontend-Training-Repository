import * as React from 'react';
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
const EmployeeForm = ({ addEmployeeApp }) => {
    return (
    <form onSubmit={addEmployeeApp}>
        <TextField
        label="name"
        variant="filled"
        type="text"
        name="name"
        placeholder="Name"
      />
      <br/>
      <TextField
        label="age"
        variant="filled"
        type="number"
        name="age"
        placeholder="Age"
      />
      <br/>
      <TextField
        label="city"
        variant="filled"
        type="text"
        name="city"
        placeholder="City"
      />
      <br/>
      <TextField
        label="salary"
        variant="filled"
        type="number"
        name="salary"
        placeholder="Salary"
      />
      <br/>
        <Button variant="contained" className="add" type="submit">Add</Button>
      </form>
    );
  };
  export default EmployeeForm;
