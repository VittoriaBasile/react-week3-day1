const InitialState = {
  favourites: {
    content: [],
  },
};
const mainReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_COMPANY":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };

    case "DELETE_COMPANY":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((_, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
