import React, {useEffect} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {ActionCreator} from "../../store/action.js";
import {fetchMoviesList} from "../../store/api-actions.js";
import moviesSlice, { fetchMovies, getMoviesError, getMoviesStatus, selectAllMovies } from "../../store/movies/moviesSlice.js";
import {getMovies, getVisibleCardsCount} from "../../store/selectors.js";
import CardPoster from "./card-poster.jsx";

// {movies, visibleCardsCount, isDataLoaded, onLoadData, resetFilters}

const Card = () => {
  const visibleCardsCount = 8;
  const movies = useSelector(selectAllMovies);
  const movieStatus = useSelector(getMoviesStatus);
  const error = useSelector(getMoviesError);
  const shownMovies = movies.slice(0, visibleCardsCount);
  // useEffect(() => {
  //   if (!isDataLoaded) {
  //     onLoadData();
  //   }
  //   return resetFilters();s
  // }, [isDataLoaded]);

  // if (!isDataLoaded) {
  //   return (
  //     <p>Loading...</p>
  //   );
  // }

  const dispatch = useDispatch();
  useEffect(() => {
    if (movieStatus === `idle`) {
      dispatch(fetchMovies());
    }
  }, [movieStatus, dispatch]);

  let content;
  if (movieStatus === `loading`) {
    content = <p>Loading...</p>;
  } else if (movieStatus === `succeeded`) {
    content = <div className="catalog__movies-list">
      {shownMovies.map((movie) => (
        <CardPoster key={movie.id} movie={movie} />
      ))}
    </div>;
  } else if (movieStatus === `failed`) {
    content = <p>{error}</p>;
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default Card;
  // return (
  //   <div >
      // <div className="catalog__movies-list">
      //   {shownMovies.map((movie) => (
      //     <CardPoster key={movie.id} movie={movie} />
      //   ))}
      // </div>

  //   </div>
  // );

// const mapStateToProps = (state) => ({
//   movies: getMovies(state),
//   visibleCardsCount: getVisibleCardsCount(state),
//   isDataLoaded: state.isDataLoaded,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onLoadData() {
//     dispatch(fetchMoviesList());
//   },
//   resetFilters() {
//     dispatch(ActionCreator.resetFilters());
//   }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Card);
