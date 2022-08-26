import React from 'react';
import {connect} from 'react-redux';
import {getRecommendedMovies} from '../../../store/selectors';
import CardPoster from '../../card/CardPoster';
import Footer from '../../footer/Footer';

const RecommendFilms = ({relatedMovies}) => {
  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div className="catalog__movies-list">
          {relatedMovies.map((movie) => <CardPoster key={movie.key} movie={movie}/>)}
        </div>
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  relatedMovies: getRecommendedMovies(state)
});

export {RecommendFilms};
export default connect(mapStateToProps)(RecommendFilms);
