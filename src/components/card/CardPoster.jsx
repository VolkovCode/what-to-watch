import React from 'react';

const CardPoster = () => {
  return (
    <div><div className="small-movie-card__image">
      <img
        src={titleToSrc(movie.title)}
        alt={movie.title}
        width="280"
        height="175"
      />
    </div>
    <h3 className="small-movie-card__title">
      <Link className="small-movie-card__link" to={`/films/${movie.id}`}>
        {movie.title}
      </Link>
    </h3></div>
  )
}

export default CardPoster;
