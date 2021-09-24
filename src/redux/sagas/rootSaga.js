import { all } from "redux-saga/effects";

import watcherRandomMovieSaga from "./randomMovieSaga";


export default function* rootSaga() {
  yield all([watcherRandomMovieSaga()]);
}
