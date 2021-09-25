import { call, put, takeEvery } from "redux-saga/effects";

// GETS MOVIES FROM SERVER AND SAVES INTO REDUX STATE
// const url = `https://www.omdbapi.com/?s=${searchVal}&apikey=4a3b711b`;

// const fetchMovies = (searchVal) => {
//   return (
//     fetch(`https://www.omdbapi.com/?s=${searchVal}&apikey=4a3b711b`, {
//       method: "GET",
//     })
//       .then((response) => response.json())
//       // .then((jsonResponse) => console.log(jsonResponse.Search))
//       .then((jsonResponse) => jsonResponse.Search)
//       .catch((err) => {
//         throw err;
//       })
//   );
// };

export const fetchMovies = async (searchVal) => {
  const url = `https://www.omdbapi.com/?s=${searchVal}&apiKey=4a3b711b`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.Search[0]);
  const searchedMovies = await data.Search;
  return searchedMovies;
};

// SAGA GENERATORS
function* handleFetchMovies(action) {
  console.log("This should be the action payload..." + action.payload);
  try {
    const movies = yield call(fetchMovies, action.payload.value);
    yield put({ type: "GET_MOVIES_SUCCESS", movies: movies });
  } catch (error) {
    yield put({ type: "GET_MOVIES_ERROR", message: error.message });
  }
}

function* watcherMovieSaga() {
  yield takeEvery("GET_MOVIES_REQUESTED", handleFetchMovies);
}

export default watcherMovieSaga;
