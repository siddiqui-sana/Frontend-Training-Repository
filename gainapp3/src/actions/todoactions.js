import axios from "axios";

const del = (payload)=>({type:"del", payload});
const clearall = () => ({type: "clearall"});

// export {add, del, clearall};
const add = (todoObj) => {

    const addTodo = (dispatch) => {
        axios.post("/todos", todoObj).then((res) => {
            console.log(res.data);
            dispatch(fetchAction());
                // dispatch({type:"fetch_todos",payload:res.data})
        });
    };
    return addTodo;
};

const fetchAction = () => {
    const fetchFunc = (dispatch) => {
        axios
        .get("/todos")
        .then((res) => {
            console.log(res.data);
            let todos = res.data;
            dispatch({type: "fetch_todos", payload: todos});
        })
        .catch((err) => {
            console.log(err);
        });
    };
    return fetchFunc;
};
export { add, del,clearall, fetchAction };