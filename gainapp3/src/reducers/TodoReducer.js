const initialState = [{task:"eat ",
status:"done"}];
const TodoReducer = (state=initialState, action) =>{
    console.log("state",state, action);
    if(action.type === 'add'){
        let newTodo = action.payload;
        let newState = [...state, newTodo];
        return newState;
    }
    if(action.type === 'del'){
        let indexToDelete = action.payload;
        let newState = state.filter((val, index) => {
            if(index === action.payload) 
            return false;
        return true;
        });
        return newState;
    }
    if(action.type === 'clearAll'){
        let newState = [];
        return newState;
    }
    if(action.type === 'fetch_todos'){
        let newTodos = action.payload;
        let newState = newTodos;
        return newState;
    }
    return state;
};

// export default CountReducer;
export default TodoReducer;