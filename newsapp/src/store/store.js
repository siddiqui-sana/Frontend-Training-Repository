import {createStore,applyMiddleware} from "redux";
import NewsReducer from "../reducers/NewsReducer";
import thunk from "redux-thunk";
// const combinedReducersObject = combineReducers({
//     newss: NewsReducer,
// });

let Store = createStore(NewsReducer, applyMiddleware(thunk));

export default Store;