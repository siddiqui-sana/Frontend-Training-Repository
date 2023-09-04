import {createStore,applyMiddleware} from "redux";
import NewsReducer from "../reducers/NewsReducer";
import thunk from "redux-thunk";

let Store = createStore(NewsReducer, applyMiddleware(thunk));
export default Store;