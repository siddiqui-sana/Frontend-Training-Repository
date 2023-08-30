import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
const NewsForm = ({ addNews }) => {
    return (
      <form onSubmit={addNews}>
        <input type="text" name="city"></input>
        <input type="text" name="news"></input>
        <input type="text" name="description"></input>
        {/* <select name="status">
          <option value="complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
        </select> */}
        <Button variant="contained" class="add" type="submit">
          Add
        </Button>
        
      </form>
    );
  };
  export default NewsForm;