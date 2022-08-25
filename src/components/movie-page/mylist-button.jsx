import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { makeFavourite } from '../../store/api-actions';

const MyListButton = ({id, addToFavouriteFilms}) => {

  const onClickHandler = () => {
    addToFavouriteFilms(id, 1);
  };
  return (
    <button onClick={onClickHandler} className="btn btn--list movie-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToFavouriteFilms(filmId, status) {
    dispatch(makeFavourite(filmId, status));
  }
});

export default connect(null, mapDispatchToProps)(MyListButton);
