import React, { useEffect } from "react";
import SideNav from "../components/SideNav";
import Title from "../components/Title";
import "../components/MovieItem.css";
import "../components/Result.css";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import "../components/MovieSideBar.css";
import { useSelector, useDispatch } from "react-redux";
import { getRandomMovies } from "../redux/actions/movieActions";

const HomePage = () => {
  // // USED TO DISPATCH ACTIONS TO THE REDUCERS
  const dispatch = useDispatch();

  // GETS MOVIES FROM STATE AND SERVES THE APP
  const randMovies = useSelector((state) => {
    return state.allMovies.randomMovies;
  });
  console.log("This is the random movies array" + randMovies);
  useEffect(() => {
    dispatch(getRandomMovies());
  }, [dispatch]);

  // // GETS MOVIES FROM SERVER AND SAVES INTO REDUX STATE
  // const randomMovies = useCallback(() => {
  //   fetch(`https://www.omdbapi.com/?s=man&apikey=4a3b711b`)
  //     .then((response) => response.json())
  //     .then((jsonResponse) => {
  //       if (jsonResponse.Response === "True") {
  //         console.log("This is the home random movies" + jsonResponse.Search);
  //         dispatch(getRandomMovies(jsonResponse.Search));
  //       } else {
  //         // setErrorMessage(jsonResponse.Error);
  //         // setLoading(false);
  //       }
  //     });
  // }, [dispatch]);

  return (
    <>
      <div id="page-container" className="App">
        <div id="content-wrapper">
          <SideNav />
          <div className="main-content">
            <div className="main-content-container">
              <div className="main-home-logo hidden-xl visible-xs visible-md">
                <img src={logo} alt="logo" />
              </div>
              <Title title="Movies Search App" />

              <div className="result">
                <div className="result-head">
                  <p>Random Movies</p>
                </div>
                {/* DISPLAYS ALL THE MOVIES RESULT IN A GRID */}
                {randMovies && (
                  <div className="movie-list-grid">
                    {randMovies.map((movie, index) => {
                      return (
                        <div className="" key={movie.imdbID && index}>
                          <article className="movie-item" key={movie.imdbID && index}>
                            <div className="movie-image-div">
                              <img src={movie.Poster} alt="movie item" />
                            </div>
                            <div className="movie-btn-div">
                              <Link
                                // to={`${props.match.url}/${movie.imdbID}`}
                                to='/'
                                className="btn"
                                // onClick={getSingleMovie}
                              >
                                View
                              </Link>
                            </div>
                          </article>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
// let location = useLocation();
// let history = useHistory();
// console.log(location);
// console.log(history);
// console.log(movies[4]);

// const [menuState, setMenuState] = useState(false);

// const openHandler = () => {
//   setMenuState(true);
// };
// const closeHandler = () => {
//   setMenuState(false);
// };

// const slideInPage = useEffect(() => {
//   const timer = setTimeout(() => {
//     console.log("has to work after 5 secs.");
//   }, 5000);
//   return () => clearTimeout(timer);
// }, []);
