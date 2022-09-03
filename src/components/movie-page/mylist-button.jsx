import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';

import {getFavouriteMovies, makeFavourite} from '../../store/api-actions';
import {selectFavouriteMovies} from '../../store/selectors';

const MyListButton = ({id, addToFavouriteFilms, favouriteMovies, loadMyFilms}) => {
  // const {id} = useParams();

  useEffect(() => {
    loadMyFilms();
    console.log(isFavourite)
  }, []);

  const onClickHandler = () => {
    if (!isFavourite) {
      addToFavouriteFilms(id, 1);
      console.log(1)
    } else {
      addToFavouriteFilms(id, 0);
      console.log(2)
    }
  };

  let isFavourite = favouriteMovies.map((movie) => movie.id).includes(Number(id));

  const inListButton = (<svg viewBox="0 0 18 14" width="18" height="14">
    <use xlinkHref="#in-list"></use>
  </svg>);

  const addButton = (
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref="#add"></use>
    </svg>);

  return (
    <button onClick={onClickHandler} className="btn btn--list movie-card__button" type="button">
      {isFavourite
        ? inListButton
        : addButton
      }
      <span>My list</span>
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToFavouriteFilms(filmId, status) {
    dispatch(makeFavourite(filmId, status));
  },
  loadMyFilms() {
    dispatch(getFavouriteMovies());
  }
});

const mapStateToProps = (state) => ({
  favouriteMovies: selectFavouriteMovies(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
