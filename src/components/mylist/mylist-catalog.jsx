import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getFavouriteMovies } from '../../store/api-actions';
import CardPoster from '../card/CardPoster';

const MyListCatalog = ({myFilms, loadMyFilms}) => {
  console.log(myFilms)
  useEffect(() => {
    loadMyFilms();
  }, []);
  return (
    <div className="catalog__movies-list">{myFilms.map((film) => <CardPoster key={film.id} movie={film} />)}</div>
  );
};

const mapStateToProps = (state) => ({
  myFilms: state.favouriteMovies
});

const mapDispatchToProps = (dispatch) => ({
  loadMyFilms() {
    dispatch(getFavouriteMovies());
  }
});

export {MyListCatalog};
export default connect(mapStateToProps, mapDispatchToProps)(MyListCatalog);
