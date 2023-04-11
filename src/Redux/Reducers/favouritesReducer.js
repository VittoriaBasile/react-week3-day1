import { ADD_COMPANY, DELETE_COMPANY } from "../ACTIONS";

const InitialState = {
  content: [],
};
const favouritesReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      return {
        ...state,

        content: [...state.content, action.payload],
      };

    case DELETE_COMPANY:
      return {
        ...state,

        content: state.content.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
