import {useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import {add, clearall, del} from "./actions/newsactions";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ReduxNews = () => {
  const dispatch = useDispatch();
  const [newss] = useSelector((state) => {
    console.log(state);
    return [state];
  });
  useEffect(() => {
    // console.log(state)
    // dispatch(fetchAction());
  },[])
  const addNews = (event) => {
    event.preventDefault();
    const newData={
        city:event.target.city.value,
        news:event.target.news.value,
        description:event.target.description.value
    }
    dispatch(add(newData))
 
    console.log("herer",newss)
}
const deleteme=(indx)=>{
    dispatch(del(indx))

}
const reset = () => {
    dispatch(clearall());
  };

  return (
    <div><h1>Welcome to the News App</h1>
        <form onSubmit={addNews}>
        <TextField id="standard-basic" variant="standard" type="text" name='city' placeholder="City Name" />
        <TextField id="standard-basic"  variant="standard" type="text" name='news' placeholder="News"/>
        <TextField id="standard-basic"  variant="standard" type="text" name="description" placeholder="Description"/>
        <br/>
      <button variant="outlined" >
        Add
      </button>
      <br/>
      </form>
      <div>
        { newss.map((m,indx)=>  (<div>
     <i>City:</i> {m.city} <br/><i>News:</i> {m.news} <br/><i>Description:</i> {m.description}
     <br/>
     <button onClick={()=>deleteme(indx)}>Delete</button>
            </div>)
         )}
      </div>
      <Button variant="outlined" color="error" onClick={reset}>
        Delete All
      </Button>
    </div>
  );
};
export default ReduxNews;