import { combineReducers } from "redux";
import { movieReducer } from "../reducers/movieReducer";

const rootReducers = combineReducers({
  allMovies: movieReducer,
});

export default rootReducers;
