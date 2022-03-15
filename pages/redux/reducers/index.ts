import { combineReducers } from "redux";
import reducer from "./noteReducers";

const reducers = combineReducers({
  repositories: reducer,
});

export default reducers;
