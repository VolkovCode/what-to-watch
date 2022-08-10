import React, {useState} from "react";
import {connect} from "react-redux";
import {getMovies, getVisibleCardsCount} from "../../store/selectors.js";
import CardPoster from "./CardPoster.jsx";

const Card = ({movies, visibleCardsCount}) => {
  const shownMovies = movies.slice(0, visibleCardsCount);
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
  visibleCardsCount: getVisibleCardsCount(state)
});


export {Card};
export default connect(mapStateToProps, null)(Card);
