import React, { useState } from "react";
import CardPoster from "./CardPoster.jsx";

const Card = ({ movies }) => {
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

export default Card;
