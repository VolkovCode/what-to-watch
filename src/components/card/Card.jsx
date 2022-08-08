import React, {useState} from "react";
import { connect } from "react-redux";
import { getMovies } from "../../store/selectors.js";
import CardPoster from "./CardPoster.jsx";

const Card = ({movies}) => {
  return (
    <div >
      <div className="catalog__movies-list">
        {movies.map((movie) => (
          <CardPoster key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: getMovies(state)
});


export {Card};
export default connect(mapStateToProps, null)(Card);
