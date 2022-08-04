import React from "react";
import {getGenres} from "../../store/selectors";
import {connect} from 'react-redux';

const GenresList = ({genres}) => {
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

const mapStateToProps = (state) => ({
  genres: getGenres(state)
});

// const mapDispatchToProps = (dispatch) => ({

// });

export {GenresList};
export default connect(mapStateToProps, null)(GenresList)
