import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchMoviesList} from "../../store/api-actions.js";
import {getMovies, getVisibleCardsCount} from "../../store/selectors.js";
import CardPoster from "./CardPoster.jsx";

const Card = ({movies, visibleCardsCount, isDataLoaded, onLoadData}) => {
  const shownMovies = movies.slice(0, visibleCardsCount);
  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

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
  }
});

export {Card};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
