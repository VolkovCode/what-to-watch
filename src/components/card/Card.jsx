import React, { useState } from "react";
import { Link } from "react-router-dom";
import { titleToSrc } from "../../utils/utils.js";
import VideoPlayer from "../video-player/Player.jsx";

const Card = ({ movies }) => {
  const [playPreview, setPlayPreview] = useState(false);
  const handlePlayPreview = () => {
    setPlayPreview(true);

  };
  const handleDisplayPoster = () => {
    setPlayPreview(false);
  };
  return (
    <div >

      <div className="catalog__movies-list">
        {movies.map((movie) => (
          <article onMouseOver={(e) => handlePlayPreview()} onMouseOut={(e) => handleDisplayPoster()} key={movie.id} className="small-movie-card catalog__movies-card">
            {playPreview
              ? (<VideoPlayer />)
              : (<div><div className="small-movie-card__image">
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
              </h3></div>)}

          </article>
        ))}
      </div>

    </div>
  );
};

export default Card;
