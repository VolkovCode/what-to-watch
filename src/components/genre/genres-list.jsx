import React, {useState} from "react";
import {getGenres} from "../../store/selectors";
import {connect} from 'react-redux';
import {ActionCreator} from "../../store/action";
import {ALL_GENRES} from "../../data/constants";

const GenresList = ({genres, filterMovies, resetFilters}) => {
  const cls = `catalog__genres-item catalog__genres-item`;
  const [chosenGenre, setChosenGenre] = useState(`All genres`);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li
          key={index}
          className={chosenGenre === genre ? cls + `--active` : cls}
        >
          <a
            style={{cursor: `pointer`}}
            onClick={() => {
              setChosenGenre(genre);
              resetFilters();
              if (genre !== ALL_GENRES) {
                filterMovies(genre);
              }
            }}
            className="catalog__genres-link">
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

const mapDispatchToProps = (dispatch) => ({
  filterMovies(genre) {
    dispatch(ActionCreator.filterMovies(genre));
  },
  resetFilters() {
    dispatch(ActionCreator.resetFilters());
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
