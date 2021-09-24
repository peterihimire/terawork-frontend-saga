import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";

const rootReducers = combineReducers({
  allMovies: movieReducer,
});

export default rootReducers;
