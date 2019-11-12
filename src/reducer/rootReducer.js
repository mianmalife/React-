import { combineReducers } from "redux";
import products from "./productReducer";
import adds from "./addReducer";

export default combineReducers({
  products,
  adds
});
