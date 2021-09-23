import { call, put, takeEvery } from "redux-saga/effects";

// GETS MOVIES FROM SERVER AND SAVES INTO REDUX STATE
const randomMovies = useCallback(() => {
  fetch(`https://www.omdbapi.com/?s=man&apikey=4a3b711b`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (jsonResponse.Response === "True") {
        console.log("This is the home random movies" + jsonResponse.Search);
        dispatch(getRandomMovies(jsonResponse.Search));
      } else {
        // setErrorMessage(jsonResponse.Error);
        // setLoading(false);
      }
    })
    .catch((err) => {
      throw err;
    });
}, [dispatch]);

// useEffect(() => {
//   randomMovies();
// }, [randomMovies]);

// SAGA GENERATORS
function* getMovies(action) {
  try {
    const randomMovies = yield call(randomMovies);
    yield put({ type: "GET_RANDOM_MOVIES", randomMovies: randomMovies });
  } catch (e) {
    // yield put ({})
    console.log(e);
  }
}
function* movieSaga() {
  yield takeEvery("GET_RANDOM_MOVIES", getMovies);
}

export default movieSaga;
