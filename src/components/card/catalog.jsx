import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ActionCreator} from "../../store/action.js";
import {fetchMoviesList} from "../../store/api-actions.js";
import {fetchMovies, getMoviesError, getMoviesStatus, resetState, selectAllMovies} from "../../store/movies/moviesSlice.js";
import CardPoster from "./card-poster.jsx";

const Card = () => {
  const visibleCardsCount = 8;
  const movies = useSelector(selectAllMovies);
  const movieStatus = useSelector(getMoviesStatus);
  const error = useSelector(getMoviesError);
  const shownMovies = movies.slice(0, visibleCardsCount);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieStatus === `idle`) {
      dispatch(fetchMovies());
      // dispatch(resetState());
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
