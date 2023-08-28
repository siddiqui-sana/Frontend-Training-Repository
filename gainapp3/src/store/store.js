import {createStore, combineReducers, applyMiddleware} from "redux";
import CountReducer from "../reducers/CountReducer";
import TodoReducer from "../reducers/TodoReducer";
import EmployeeAppReducer from "../reducers/EmployeeAppReducer";
import thunk from "redux-thunk";
const combinedReducersObject = combineReducers({
    counter: CountReducer,
    todos: TodoReducer,
    employees: EmployeeAppReducer,
});
let Store = createStore(combinedReducersObject, applyMiddleware(thunk));

export default Store;