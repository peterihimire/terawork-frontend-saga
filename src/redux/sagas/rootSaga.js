import { all } from "redux-saga/effects";

import watcherRandomMovieSaga from "./randomMovieSaga";
import watcherMovieSaga from "./movieSaga";

export default function* rootSaga() {
  yield all([watcherRandomMovieSaga(), watcherMovieSaga()]);
}
