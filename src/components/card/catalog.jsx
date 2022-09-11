import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, getMoviesError, getMoviesStatus, resetState, selectAllMovies} from "../../store/movies/moviesSlice.js";
import CardPoster from "./card-poster.jsx";

const Card = () => {
  const visibleCardsCount = 8;
  const movies = useSelector(selectAllMovies);
  const moviesStatus = useSelector(getMoviesStatus);
  const error = useSelector(getMoviesError);
  const shownMovies = movies.slice(0, visibleCardsCount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, []);

  useEffect(() => {
    if (moviesStatus === `idle`) {
      dispatch(fetchMovies());
    }
  }, [moviesStatus, dispatch]);

  let content;
  if (moviesStatus === `loading`) {
    content = <p>Loading...</p>;
  } else if (moviesStatus === `succeeded`) {
    content = <div className="catalog__movies-list">
      {shownMovies.map((movie) => (
        <CardPoster key={movie.id} movie={movie} />
      ))}
    </div>;
  } else if (moviesStatus === `failed`) {
    content = <p>{error}</p>;
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default Card;
