import React from "react";
import { useSelector } from "react-redux";
import { getActiveMovie } from "../../../store/movies/moviesSlice";
import {convertScore} from "../../../utils/utils";

const MoviePageOverview = () => {
  const movie = useSelector((state) => getActiveMovie(state));
  if (!(`starring` in movie)) {
    return (<div className="movie-rating">
      Loading...
    </div>);
  }
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{convertScore(movie.rating)}</span>
          <span className="movie-rating__count">{movie.scores_count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>
          {movie.description}
        </p>
        <p className="movie-card__director">
          <strong>Director: {movie.director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>
            Starring: {movie.starring.join(`, `)}
          </strong>
        </p>
      </div>
    </>
  );
};

export default MoviePageOverview;
