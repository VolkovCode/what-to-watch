import React from "react";
import {titleToSrc} from "../../utils/utils.js";

const Card = ({movies}) => {
  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => (
        <article key={movie.id} className="small-movie-card catalog__movies-card">
          <div className="small-movie-card__image">
            <img
              src={titleToSrc(movie.title)}
              alt={movie.title}
              width="280"
              height="175"
            />
          </div>
          <h3 className="small-movie-card__title">
            <a className="small-movie-card__link" href="movie-page.html">
              {movie.title}
            </a>
          </h3>
        </article>
      ))}
    </div>
  );
};

export default Card;
