import { combineReducers } from "redux";
import todoListReducer from "./todolist.reducer";

const reducer = combineReducers({ todos: todoListReducer });
export default reducer;
