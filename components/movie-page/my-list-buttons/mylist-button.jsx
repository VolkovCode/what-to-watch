import React, {useState} from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../../data/constants';

import {getFavouriteMovies, makeFavourite} from '../../../store/api-actions';
import {selectFavouriteMovies} from '../../../store/selectors';

const MyListButton = ({authorizationStatus, id, addToFavouriteFilms, favouriteMovies, loadMyFilms}) => {
  const [buttonClicked, setbuttonClicked] = useState(true)
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;
  const navigate = useNavigate();

  useEffect(() => {
    loadMyFilms();
  }, [buttonClicked]);

  const onClickHandler = () => {
    if (!isAuthorized) {
      navigate(`/login`);
      return;
    }
    if (!isFavourite) {
      addToFavouriteFilms(id, 1);
      setbuttonClicked(!buttonClicked);
    } else {
      addToFavouriteFilms(id, 0);
      setbuttonClicked(!buttonClicked);
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

const mapStateToProps = (state) => ({
  favouriteMovies: selectFavouriteMovies(state),
  authorizationStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  addToFavouriteFilms(filmId, status) {
    dispatch(makeFavourite(filmId, status));
  },
  loadMyFilms() {
    dispatch(getFavouriteMovies());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
