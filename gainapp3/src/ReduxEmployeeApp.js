import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import {add, clearAll, del, fetchAction} from "./actions/employeeappactions";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ReduxEmployeeApp = () => {
  const dispatch = useDispatch();
//   let step = 4;
  const [employees] = useSelector((state) => {
    console.log(state);
    return [state.employees];
  });
  useEffect(() => {
    // console.log(state)
    dispatch(fetchAction());
  },[])
  const addEmployeeApp = (event) => {
    event.preventDefault();
    const newData={
        name:event.target.name.value,
        age:event.target.age.value,
        city: event.target.city.value,
        salary: event.target.salary.value
    }
    dispatch(add(newData))
 
    console.log("herer",employees)
}
const deleteme=(indx)=>{
    dispatch(del(indx))
    dispatch(fetchAction());

}
const reset = () => {
    dispatch(clearAll());
    dispatch(fetchAction());
  };

  return (
    <div>
        <h2> Welcome to the Employee App</h2>
        <form onSubmit={addEmployeeApp}>
        <TextField id="outlined-basic" label="Enter Name" variant="outlined" type="text" name="name"/>
        <TextField id="outlined-basic" label="Enter Age" variant="outlined" type="number" name="age"/>
        <TextField id="outlined-basic" label="Enter City" variant="outlined" type="text" name="city"/>
        <TextField id="outlined-basic" label="Enter Salary" variant="outlined" type="number" name="salary"/>
        <br/>
        
      <button variant="outlined" >
        Add Employee
      </button>
      </form>
      <div>
        { employees.map((m,indx)=>  (<div>
         Name: {m.name} <br/>Age: {m.age} <br/>City: {m.city} <br/>Salary: {m.salary}<br/>

     <IconButton aria-label="delete" button onClick={()=>deleteme(indx)}><DeleteIcon /></IconButton>
            </div>)
         )}
      </div>
      <Button variant="outlined" color="error" onClick={reset}>
        Delete All
      </Button>
    </div>
  );
};
export default ReduxEmployeeApp;