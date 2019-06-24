import { GET_EXPENSES, ADD_EXPENSE } from "../actions/types.js";

const initialState = {
  expenses: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EXPENSES:
      //   console.log(action.payload);
      return {
        expenses: action.payload
      };

    case ADD_EXPENSE:
      //   console.log(action.payload);
      return {
        ...state,
        expenses: [action.payload, ...state.expenses]
      };

    default:
      return state;
  }
}
