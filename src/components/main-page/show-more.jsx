import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const ShowMore = ({showMore}) => {
  return (
    <div className="catalog__more">
      <button onClick={() => showMore()} className="catalog__button" type="button">
        Show more
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showMore() {
    dispatch(ActionCreator.showMore());
  }
});

export {ShowMore};
export default connect(null, mapDispatchToProps)(ShowMore);

