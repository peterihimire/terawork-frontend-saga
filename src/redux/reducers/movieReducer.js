import { ActionTypes } from "../constants/action-types";

const initialState = {
  searchValue: "",
  loading: true,
  movies: [],
  movie: {},
  randomMovies: [],
};

export const movieReducer = (state = initialState, action) => {
  console.log(state);
  console.log(action.type);
  console.log(action.payload);

  switch (action.type) {
    case ActionTypes.GET_MOVIES:
      console.log(state);
      return { ...state, movies: action.payload };
    case ActionTypes.SEARCH_VALIU:
      console.log(state);
      return { ...state, searchValue: action.payload };
    case ActionTypes.SELECTED_MOVIE:
      console.log(state);
      return { ...state, movie: action.payload };
    case ActionTypes.GET_RANDOM_MOVIES:
      console.log(state);
      return { ...state, randomMovies: action.payload };
    default:
      return state;
  }
};
