import React from 'react';
import {useSelector} from 'react-redux';
import {getRecommendedMovies} from '../../../store/movies/moviesSlice';
import CardPoster from '../../card/card-poster';
import Footer from '../../footer/footer';

const RecommendFilms = () => {
  const relatedMovies = useSelector(getRecommendedMovies);

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div className="catalog__movies-list">
          {relatedMovies.map((movie) => <CardPoster key={movie.id} movie={movie}/>)}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RecommendFilms;
