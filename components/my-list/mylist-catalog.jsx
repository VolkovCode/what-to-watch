import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getFavouriteMovies } from '../../store/api-actions';
import { selectFavouriteMovies } from '../../store/selectors';
import CardPoster from '../card/card-poster';

const MyListCatalog = ({myFilms, loadMyFilms}) => {
  useEffect(() => {
    loadMyFilms();
  }, []);
  return (
    <div className="catalog__movies-list">{myFilms.map((film) => <CardPoster key={film.id} movie={film} />)}</div>
  );
};

const mapStateToProps = (state) => ({
  myFilms: selectFavouriteMovies(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadMyFilms() {
    dispatch(getFavouriteMovies());
  }
});

export {MyListCatalog};
export default connect(mapStateToProps, mapDispatchToProps)(MyListCatalog);
