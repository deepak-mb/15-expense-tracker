import { GET_CATEGORIES } from "../actions/types.js";

const initialState = {
  categories: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      // console.log(action.payload);
      return {
        categories: action.payload
      };

    default:
      return state;
  }
}
