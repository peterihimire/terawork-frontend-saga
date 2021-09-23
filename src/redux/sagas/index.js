import { all } from "react-dom/effects";

import movieSaga from "./movieSaga";

export default function* rootSaga() {
  yield all([movieSaga()]);
}
