import { call, put, takeEvery } from "redux-saga/effects";

// GETS MOVIES FROM SERVER AND SAVES INTO REDUX STATE
const url = `https://www.omdbapi.com/?s=man&apikey=4a3b711b`;

const fetchRandomMovies = () => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((jsonResponse) => jsonResponse.Search)
    .catch((err) => {
      throw err;
    });
};

// SAGA GENERATORS
function* handleFetchRandomMovies(action) {
  try {
    const randomMovies = yield call(fetchRandomMovies);
    yield put({ type: "GET_RANDOM_SUCCESS", randomMovies: randomMovies });
  } catch (error) {
    yield put({ type: "GET_RANDOM_ERROR", message: error.message });
  }
}

function* watcherRandomMovieSaga() {
  yield takeEvery("GET_RANDOM_REQUESTED", handleFetchRandomMovies);
}

export default watcherRandomMovieSaga;

 