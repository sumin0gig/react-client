import { combineReducers } from "redux";
import getDataReducer from "./getDataReducer";
import getTed  from "./getTed";

const rootReducer= combineReducers({getDataReducer, getTed});
export default rootReducer;