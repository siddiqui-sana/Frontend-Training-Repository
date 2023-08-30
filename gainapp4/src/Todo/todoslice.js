import { createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {name: "eat icecream", status: "complete"},
        {name: "workout", status: "incomplete"},
    ],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            console.log(current)
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            console.log(action);
            state.todos = state.todos.filter((todos, index) => {
                console.log(action)
                if(index === action.payload) {
                    return false;
                }
                return true;
            });
        },
    },
});
console.log(todoSlice.actions);
export const {add, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
