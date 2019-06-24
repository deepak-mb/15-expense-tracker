import {
  GET_EXPENSES,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  GET_EXPENSE
} from "../actions/types.js";

const initialState = {
  expenses: [],
  expense: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EXPENSES:
      //   console.log(action.payload);
      return {
        expenses: action.payload
      };

    case GET_EXPENSE:
      //   console.log(action.payload);
      return {
        expense: action.payload
      };

    case ADD_EXPENSE:
      //   console.log(action.payload);
      return {
        ...state,
        expenses: [action.payload, ...state.expenses]
      };

    case DELETE_EXPENSE:
      //   console.log(action.payload);
      return {
        ...state,
        expenses: state.expenses.filter(
          expense => expense.id !== action.payload
        )
      };

    default:
      return state;
  }
}
