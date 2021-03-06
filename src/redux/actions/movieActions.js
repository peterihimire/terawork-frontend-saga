import { ActionTypes } from "../constants/action-types";

export const getMovies = (movies) => {
  return {
    type: ActionTypes.GET_MOVIES_REQUESTED,
    payload: movies,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: ActionTypes.SELECTED_MOVIE_REQUESTED,
    payload: movie,
  };
};

export const searchValiu = (value) => {
  return {
    type: ActionTypes.SEARCH_VALIU,
    payload: value,
  };
};

export const getRandomMovies = (randomMovies) => {
  return {
    type: ActionTypes.GET_RANDOM_REQUESTED,
    payload: randomMovies,
  };
};
