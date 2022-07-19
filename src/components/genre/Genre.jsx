import React from "react";

const Genre = ({genres}) => {
  const cls = `catalog__genres-item catalog__genres-item--active`;
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li
          key={index}
          className = {index === 0 ? cls : `catalog__genres-item catalog__genres-item`}
        >
          <a href="#" className="catalog__genres-link">
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Genre;
