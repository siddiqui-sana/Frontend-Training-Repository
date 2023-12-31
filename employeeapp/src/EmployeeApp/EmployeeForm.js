import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
const EmployeeForm = ({ addEmployeeApp }) => {
    return (
      <form onSubmit={addEmployeeApp}>
        <TextField
          label="Todo"
          variant="standard"
          type="text"
          id="todo"
          name="todo"
          placeholder="Enter Todo"
        />
        <select name="status">
          <option value="complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
        </select>
        <Button variant="contained" class="add" type="submit">
          Add
        </Button>
      </form>
    );
  };
  export default EmployeeForm;