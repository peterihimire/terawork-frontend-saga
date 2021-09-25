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

const fetchMovie = async (selectedID) => {
  const url = `http://www.omdbapi.com/?i=${selectedID}&apikey=4a3b711b`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

// SAGA GENERATORS
function* handleFetchMovie(action) {
  console.log("This should be the action payload..." + action.payload);
  try {
    // GETS THE VALUE FROM THE PAYLOAD TO BE USED IN THE FETCHMOVIES API CALL
    const movie = yield call(fetchMovie, action.payload.movieID);
    yield put({ type: "SELECTED_MOVIE_SUCCESS", movie: movie });
  } catch (error) {
    yield put({ type: "SELECTED_MOVIE_ERROR", message: error.message });
  }
}

function* watcherSelectedMovieSaga() {
  yield takeEvery("SELECTED_MOVIE_REQUESTED", handleFetchMovie);
}

export default watcherSelectedMovieSaga;
