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
      return { ...state, loading: false, movies: action.movies };
    case ActionTypes.GET_MOVIES_ERROR:
      console.log(state);
      return { ...state, loading: false, error: action.message };

    case ActionTypes.SEARCH_VALIU:
      console.log(state);
      return { ...state, searchValue: action.payload };

    case ActionTypes.SELECTED_MOVIE_REQUESTED:
      console.log(state);
      return { ...state, loading: true };
    case ActionTypes.SELECTED_MOVIE_SUCCESS:
      console.log(state);
      return { ...state, loading: false, movie: action.movie };
    case ActionTypes.SELECTED_MOVIE_ERROR:
      console.log(state);
      return { ...state, loading: false, error: action.message };

    case ActionTypes.GET_RANDOM_REQUESTED:
      console.log(state);
      return { ...state, loading: true };
    case ActionTypes.GET_RANDOM_SUCCESS:
      console.log(state);
      return { ...state, loading: false, randomMovies: action.randomMovies };
    case ActionTypes.GET_RANDOM_ERROR:
      console.log(state);
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
