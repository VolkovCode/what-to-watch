import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {getMovies, getVisibleCardsCount} from '../../store/selectors';

const ShowMore = ({movies, visibleCardsCount, showMore}) => {
  const condition = movies.length > visibleCardsCount;
  return (
    condition
      ? (<div className="catalog__more">
        <button onClick={() => showMore()} className="catalog__button" type="button">
          Show more
        </button>
      </div>)
      : (``)
  );
};

const mapDispatchToProps = (dispatch) => ({
  showMore() {
    dispatch(ActionCreator.showMore());
  }
});

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  visibleCardsCount: getVisibleCardsCount(state)
});

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);

