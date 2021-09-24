import { call, put, takeEvery } from "redux-saga/effects";

// GETS MOVIES FROM SERVER AND SAVES INTO REDUX STATE
const url = `https://www.omdbapi.com/?s=man&apikey=4a3b711b`;

const fetchMovies = () => {
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
function* handleFetchMovies(action) {
  try {
    const randomMovies = yield call(fetchMovies);
    yield put({ type: "GET_RANDOM_SUCCESS", randomMovies: randomMovies });
  } catch (error) {
    yield put({ type: "GET_RANDOM_ERROR", message: error.message });
  }
}

function* watcherMovieSaga() {
  yield takeEvery("GET_RANDOM_REQUESTED", handleFetchMovies);
}

export default watcherMovieSaga;

// const fetchMovies = useCallback(() => {
//   fetch(`https://www.omdbapi.com/?s=man&apikey=4a3b711b`, { method: "GET" })
//     .then((response) => response.json())
//     .then((jsonResponse) => {
//       if (jsonResponse.Response === "True") {
//         console.log("This is the home random movies" + jsonResponse.Search);
//         dispatch(getRandomMovies(jsonResponse.Search));
//       } else {
//         // setErrorMessage(jsonResponse.Error);
//         // setLoading(false);
//       }
//     })
//     .catch((err) => {
//       throw err;
//     });
// }, [dispatch]);
 