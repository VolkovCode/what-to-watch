import React, {useEffect} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action.js";
import {fetchMoviesList} from "../../store/api-actions.js";
import {getMovies, getVisibleCardsCount} from "../../store/selectors.js";
import CardPoster from "./card-poster.jsx";

const Card = ({movies, visibleCardsCount, isDataLoaded, onLoadData, resetFilters}) => {
  const shownMovies = movies.slice(0, visibleCardsCount);
  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
    return resetFilters();
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <div >
      <div className="catalog__movies-list">
        {shownMovies.map((movie) => (
          <CardPoster key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  visibleCardsCount: getVisibleCardsCount(state),
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchMoviesList());
  },
  resetFilters() {
    dispatch(ActionCreator.resetFilters());
  }
});

export {Card};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
