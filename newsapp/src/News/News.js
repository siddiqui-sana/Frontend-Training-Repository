import Button from "@mui/material/Button";
import NewsForm from './NewsForm';
import NewsList from './NewsList';
import { add, clearall ,del} from "../actions/newsactions";
import {useDispatch,useSelector} from "react-redux"
const News = () => {
  const dispatch=useDispatch();
  const addNews = (event) => {
    event.preventDefault();
    const formObj = event.target;
    
    let newsObj = {
        city: formObj.city.value,
        news: formObj.news.value,
        description: formObj.description.value,
      };
      dispatch(add(newsObj))
  };
  const deleteNews = (indexTodelete) => {
    dispatch(del(indexTodelete));

  };
  const clearNews = () => {
    dispatch(clearall());
  };

  return (
    <div id="todo-list">
      <h1>NEWS</h1>
      <NewsForm addNews={addNews} />
      <div id="todolist">
        <NewsList
        />
      </div>
      <br />
      <Button className="clear" variant="contained" onClick={clearNews}>
        Clear All
      </Button>
    </div>
  );
};


export default News;