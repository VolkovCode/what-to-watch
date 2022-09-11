import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPromoMovie, getPromoMovie} from '../../store/movies/moviesSlice';
import Header from '../header/header';
import MylistButton from '../movie-page/my-list-buttons/mylist-button';

const PromoCard = ({}) => {
  const dispatch = useDispatch();
  const promoMovie = useSelector(getPromoMovie);
  console.log(1)
  useEffect(() => {
    dispatch(fetchPromoMovie());
  }, []);


  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img
          src={promoMovie.background_image}
          alt={promoMovie.name}
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img
              src={promoMovie.poster_image}
              alt={promoMovie.name}
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoMovie.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoMovie.genre}</span>
              <span className="movie-card__year">{promoMovie.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button
                className="btn btn--play movie-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              {/* <MylistButton id = {promoMovie.id}/> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PromoCard);
