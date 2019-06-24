import { GET_EXPENSES, GET_CATEGORIES, ADD_EXPENSE } from "./types.js";
import axios from "axios";

export const getExpenses = () => async dispatch => {
  await axios.get(`http://localhost:3000/expenses`).then(res => {
    // console.log(res);
    dispatch({
      type: GET_EXPENSES,
      payload: res.data
    });
  });
};

export const getCategories = () => async dispatch => {
  await axios.get(`http://localhost:3000/categories`).then(res => {
    // console.log(res);
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data
    });
  });
};

export const addExpense = (expense) => async dispatch => {
  await axios.post(`http://localhost:3000/expenses`,expense).then(res => {
    // console.log(res);
    dispatch({
      type: ADD_EXPENSE,
      payload: res.data
    });
  });
};
