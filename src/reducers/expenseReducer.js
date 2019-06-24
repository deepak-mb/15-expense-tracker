import { GET_EXPENSES } from "../actions/types.js";

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
    default:
      return state;
  }
}
