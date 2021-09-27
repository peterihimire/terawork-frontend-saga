import { all } from "redux-saga/effects";

import watcherRandomMovieSaga from "./randomMovieSaga";
import watcherMovieSaga from "./movieSaga";
import watcherSelectedMovieSaga from "./selectedMovieSaga";

// ALL SAGAS ARE LISTED IN THIS ROOT SAGA FILE
export default function* rootSaga() {
  yield all([watcherRandomMovieSaga(), watcherMovieSaga(),  watcherSelectedMovieSaga()]);
}
