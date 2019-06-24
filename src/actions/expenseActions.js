import { GET_EXPENSES } from "./types.js";
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
