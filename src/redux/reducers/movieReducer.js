import { ActionTypes } from "../constants/action-types";

const initialState = {
  searchValue: "",
  loading: false,
  error: null,
  movies: [],
  movie: {},
  randomMovies: [],
};

export const movieReducer = (state = initialState, action) => {
  console.log(state);
  console.log(action.type);
  console.log(action.payload);

  switch (action.type) {
    case ActionTypes.GET_MOVIES_REQUESTED:
      console.log(state);
      return { ...state, loading: true };
    case ActionTypes.GET_MOVIES_SUCCESS:
      console.log(state);
      return { ...state, loading: false, movies: action.payload };
    case ActionTypes.GET_MOVIES_ERROR:
      console.log(state);
      return { ...state, loading: false, error: action.payload };

    case ActionTypes.SEARCH_VALIU:
      console.log(state);
      return { ...state, searchValue: action.payload };
    case ActionTypes.SELECTED_MOVIE:
      console.log(state);
      return { ...state, movie: action.payload };

    case ActionTypes.GET_RANDOM_REQUESTED:
      console.log(state);
      return { ...state, loading: true };
    case ActionTypes.GET_RANDOM_SUCCESS:
      console.log(state);
      return { ...state, loading: false, randomMovies: action.randomMovies };
    case ActionTypes.GET_RANDOM_ERROR:
      console.log(state);
      return { ...state, loading: false, error: action.message };

    default:
      return state;
  }
};
