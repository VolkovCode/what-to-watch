import React, {useEffect, useMemo, useState} from "react";
import Footer from "../footer/Footer";
import MoviePageDetails from "./MoviePageDetails";
import MoviePageReviews from "./MoviePageReviews";
import {Link, useParams} from "react-router-dom";
import MoviePageOverview from "./MoviePageOverview";
import Header from "../header/header";
import { connect } from "react-redux";
import { AuthorizationStatus } from "../../data/constants";
import { fetchMovie } from "../../store/api-actions";
import MyListButton from "./mylist-button";

const MoviePage = ({authorizationStatus, film, onLoadMovie}) => {
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const {id} = useParams();
  const [activeLink, setActiveLink] = useState(`Overview`);
  useEffect(() => {
    onLoadMovie(id);
  }, []);
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
      <section className="movie-card movie-card--full">
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
                <MyListButton />
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
                    <a onClick={() => setActiveLink(`Details`)} className="movie-nav__link">
                      Details
                    </a>
                  </li>
                  <li className={`movie-nav__item ` + (activeLink === `Reviews` ? `movie-nav__item--active` : ``)}>
                    <a onClick={() => setActiveLink(`Reviews`)} className="movie-nav__link">
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>

              {getPageElement(activeLink)}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img
                  src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                  alt="Fantastic Beasts: The Crimes of Grindelwald"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">
                  Fantastic Beasts: The Crimes of Grindelwald
                </a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img
                  src="img/bohemian-rhapsody.jpg"
                  alt="Bohemian Rhapsody"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">
                  Bohemian Rhapsody
                </a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img
                  src="img/macbeth.jpg"
                  alt="Macbeth"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">
                  Macbeth
                </a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img
                  src="img/aviator.jpg"
                  alt="Aviator"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">
                  Aviator
                </a>
              </h3>
            </article>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  film: state.activeFilm,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMovie(id) {
    dispatch(fetchMovie(id));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
