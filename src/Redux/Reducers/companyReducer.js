import { FETCH_RESULT } from "../ACTIONS";

const InitialState = {
  content: [],
};

const companyReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_RESULT:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
