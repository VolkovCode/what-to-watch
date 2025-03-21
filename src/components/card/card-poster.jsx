import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/player.jsx';

const CardPoster = ({movie}) => {
  const [playPreview, setPlayPreview] = useState(false);

  let playWithDelay;

  const handlePlayPreview = () => {
    playWithDelay = setTimeout(() => setPlayPreview(true), 1000);
  };

  const handleDisplayPoster = () => {
    setPlayPreview(false);
    clearTimeout(playWithDelay);
  };

  useEffect(() => {
    clearTimeout(playWithDelay);
    setPlayPreview(false);
    return setPlayPreview(false);
  }, []);

  return (
    <article onMouseOver={handlePlayPreview} onMouseOut={handleDisplayPoster} onMouseLeave={handleDisplayPoster} className="small-movie-card catalog__movies-card">
      {playPreview
        ? <VideoPlayer src={movie.preview_video_link} isPlayingProp={playPreview} />
        : (<Link onClick={handleDisplayPoster} className="small-movie-card__link" to={`/films/${movie.id}`}><div className="small-movie-card__image">
          <img src={movie.preview_image} alt={movie.name} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          {movie.name}
        </h3></Link>)}
    </article>
  );
};

export default CardPoster;
