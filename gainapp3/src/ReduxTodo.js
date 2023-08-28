import {useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import {add, clearall, del, fetchAction} from "./actions/todoactions";


const ReduxTodo = () => {
  const dispatch = useDispatch();
  let step = 4;
  const [todos] = useSelector((state) => {
    console.log(state);
    return [state.todos];
  });
  useEffect(() => {
    // console.log(state)
    dispatch(fetchAction());
  },[])
  const addTodo = (event) => {
    event.preventDefault();
    const newData={
        name:event.target.name.value,
        status:event.target.status.value
    }
    dispatch(add(newData))
 
    console.log("herer",todos)
}
const deleteme=(indx)=>{
    dispatch(del(indx))

}
const reset = () => {
    dispatch(clearall());
  };

  return (
    <div>
        <form onSubmit={addTodo}>
        <input type="text" name='name'></input>
        <input type="text" name='status'></input>

      <button variant="outlined" >
        Add
      </button>
      </form>
      <div>
        { todos.map((m,indx)=>  (<div>
     {m.name} {m.status}
     <button onClick={()=>deleteme(indx)}>Delete</button>
            </div>)
         )}
      </div>
      <button variant="outlined" onClick={reset}>
        Delete All
      </button>
    </div>
  );
};
export default ReduxTodo;