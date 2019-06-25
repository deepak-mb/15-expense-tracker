import {
  GET_EXPENSES,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  GET_EXPENSE,
  EDIT_EXPENSE
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

    case EDIT_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.map(expense =>
          expense.id === action.payload.id
            ? (expense = action.payload)
            : expense
        )
      };
    default:
      return state;
  }
}
