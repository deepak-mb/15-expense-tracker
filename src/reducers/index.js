import { combineReducers } from "redux";
import expenseReducer from "./expenseReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
  expenses: expenseReducer,
  categories: categoriesReducer
});
