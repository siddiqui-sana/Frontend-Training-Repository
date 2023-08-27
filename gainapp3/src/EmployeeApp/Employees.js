import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
const Employees = ({ val, deleteEmployeeApp, index }) => {
    return (
      <div>
        <p>{val.name}</p>
        <p>{val.status}</p>
        <button onClick={() => {
            deleteEmployeeApp(index);
          }}
        >
            {console.log("index",index)}
          Delete
        </button>
      </div>
    );
  };

  export default Employees;