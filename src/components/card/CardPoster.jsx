import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/Player.jsx';

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
  return (
    <article onMouseOut={() => setPlayPreview(false)} onMouseEnter={handlePlayPreview} onMouseLeave={handleDisplayPoster} className="small-movie-card catalog__movies-card">
      {playPreview
        ? <VideoPlayer src={movie.preview_video_link} isPlayingProp={playPreview} />
        : (<><div className="small-movie-card__image">
          <img src={movie.preview_image} alt={movie.name} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${movie.id}`}>{movie.name}</Link>
        </h3></>)}
    </article>
  );
};

export default CardPoster;
