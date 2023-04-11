import { FETCH_RESULT, RESET_RESULT } from "../ACTIONS";

const InitialState = {
  content: [],
};

const jobsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_RESULT:
      return {
        ...state,
        content: action.payload,
      };
    case RESET_RESULT:
      return InitialState;
    default:
      return state;
  }
};

export default jobsReducer;
