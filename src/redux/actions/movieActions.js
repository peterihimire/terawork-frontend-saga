import { ActionTypes } from "../constants/action-types";

// export const getMovies = () => {
//   return {
//     type: ActionTypes.GET_MOVIES_REQUESTED,
//   };
// };
export const getMovies = (movies) => {
  return {
    type: ActionTypes.GET_MOVIES_REQUESTED,
    payload: movies,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: ActionTypes.SELECTED_MOVIE,
    payload: movie,
  };
};

export const searchValiu = (value) => {
  return {
    type: ActionTypes.SEARCH_VALIU,
    payload: value,
  };
};

// export const getRandomMovies = () => {
//   return {
//     type: ActionTypes.GET_RANDOM_REQUESTED,
//   };
// };

export const getRandomMovies = (randomMovies) => {
  return {
    type: ActionTypes.GET_RANDOM_REQUESTED,
    payload: randomMovies,
  };
};
