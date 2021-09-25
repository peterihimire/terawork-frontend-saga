import React from "react";
import "./Search.css";
import searchIcon from "../assets/Search-Black.svg";
import searchIconWhite from "../assets/Search-White.svg";
import { useSelector, useDispatch } from "react-redux";
// import { ActionTypes } from "../constants/action-types";
import { searchValiu, getMovies } from "../redux/actions/movieActions";

const Search = () => {
  let searchVal = useSelector((state) => {
    return state.allMovies.searchValue;
  });
  console.log(searchVal);
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    e.preventDefault();
    const value = e.target.value;
    // UPDATE STATE WITH VALUE TO BE USED IN THE SEARCH
    dispatch(searchValiu(value));
    // dispatch({ type: "GET_MOVIE_REQUESTED", payload: { value } });
    dispatch(getMovies({ value }));
  };


  return (
    <div className="search">
      <form
      // onSubmit={getMovieSearch}
      >
        <div className="form-group">
          <div className="input-with-icon">
            <div className="search-icon-div">
              <img src={searchIcon} alt="search icon" className="search-icon" />
            </div>
            <input
              type="text"
              placeholder="Search"
              id="search"
              name="search"
              onChange={handleSearchInput}
            />
          </div>
          <div className="hidden-xs visible-xl">
            <button className="btn search-btn" type="submit">
              Search
            </button>
          </div>
          <div className="visible-xs hidden-xl">
            <button className="btn search-btn" type="submit">
              <img
                src={searchIconWhite}
                alt="search icon"
                className="search-icon"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
