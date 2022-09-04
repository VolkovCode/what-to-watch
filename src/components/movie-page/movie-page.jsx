import React, {useEffect, useState} from "react";
import MoviePageDetails from "./movie-page-details/movie-page-details";
import MoviePageReviews from "./movie-page-reviews/movie-page-reviews";
import {Link, useParams} from "react-router-dom";
import MoviePageOverview from "./movie-page-overview/movie-page-overview";
import Header from "../header/header";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../data/constants";
import {fetchMovie} from "../../store/api-actions";
import RecommendFilms from "./recomend-films/recomend-films";
import MylistButton from "./my-list-buttons/mylist-button";

const MoviePage = ({authorizationStatus, film, onLoadMovie}) => {
  // const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;
  const {id} = useParams();
  const [activeLink, setActiveLink] = useState(`Overview`);
  useEffect(() => {
    onLoadMovie(id);
  }, [id]);
  const getPageElement = (activeLink) => {
    switch (activeLink) {
      case `Overview`:
        return <MoviePageOverview />;
      case `Details`:
        return <MoviePageDetails />;
      case `Reviews`:
        return <MoviePageReviews />;
      default:
        return <MoviePageOverview />;
    }
  };
  return (
    <div>
      <section className="movie-card movie-card--full" style={{'background': film.background_color}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img
              src={film.background_image}
              alt={film.name}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MylistButton id = {id}/>
                <Link to={`/films/${id}/review`} className="btn movie-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={film.poster_image}
                alt={film.name}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className={`movie-nav__item ` + (activeLink === `Overview` ? `movie-nav__item--active` : ``)}>
                    <Link to={``} onClick={() => setActiveLink(`Overview`)} className="movie-nav__link">
                      Overview
                    </Link>
                  </li>
                  <li className={`movie-nav__item ` + (activeLink === `Details` ? `movie-nav__item--active` : ``)}>
                    <Link to={``} href="#" onClick={() => setActiveLink(`Details`)} className="movie-nav__link">
                      Details
                    </Link>
                  </li>
                  <li className={`movie-nav__item ` + (activeLink === `Reviews` ? `movie-nav__item--active` : ``)}>
                    <Link to={``} onClick={() => setActiveLink(`Reviews`)} className="movie-nav__link">
                      Reviews
                    </Link>
                  </li>
                </ul>
              </nav>

              {getPageElement(activeLink)}
            </div>
          </div>
        </div>
      </section>

      <RecommendFilms />
    </div>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  film: state.activeFilm,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMovie(id) {
    dispatch(fetchMovie(id));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
