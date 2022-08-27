import React, {useState, useRef, useEffect} from 'react';
import Logo from '../logo/Logo';
import {useParams, Link} from 'react-router-dom';
import {addReview} from '../../store/api-actions';
import {connect} from "react-redux";
import {REVIEW} from '../../data/constants';
import { useMemo } from 'react';

const AddReview = ({postReview}) => {
  const {id} = useParams();
  const errRef = useRef();
  const textFormRef = useRef();

  const [reviewForm, setReviewForm] = useState({
    rating: `8`,
    comment: ``,
  });

  useEffect(() => {
    textFormRef.current.focus();
  }, []);

  const [reviewLengthError, setReviewLengthError] = useState(false);
  const handleReviewRatingChange = (e) => {
    // const {name, value} = e.target;
    setReviewForm(
        {...reviewForm, rating: e.target.value}
    );
  };

  const handleReviewTextChange = (e) => {
    setReviewLengthError(false);
    setReviewForm(
        {...reviewForm, comment: e.target.value}
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {comment} = reviewForm;
    if (comment.length >= REVIEW.MIN_LENGTH && comment <= REVIEW.MAX_LENGTH) {
      postReview(id, reviewForm);
    } else {
      setReviewLengthError(true);
      errRef.current.focus();

    }

  };

  const memoizedLogo = useMemo(() => <Logo />, []);
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          {memoizedLogo}
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">The Grand Budapest Hotel</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>
      <div className="add-review">
        <form onSubmit={handleSubmit} action="#" className="add-review__form">
          <div className="rating">
            <div onChange={handleReviewRatingChange} className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-6" type="radio" name="rating" value="6" />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-7" type="radio" name="rating" value="7" />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-8" type="radio" name="rating" value="8" defaultChecked />
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-9" type="radio" name="rating" value="9" />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-10" type="radio" name="rating" value="10" />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>
            </div>
          </div>
          {reviewLengthError && <p ref={errRef} style={{'color': `red`}}>Отзыв должен быть длинной не меньше {REVIEW.MIN_LENGTH} и не больше {REVIEW.MAX_LENGTH} символов.</p>}
          <div className="add-review__text">
            <textarea ref={textFormRef} onChange={handleReviewTextChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  postReview(id, {rating, comment}) {
    dispatch(addReview(id, {rating, comment}));
  }
});

export {AddReview};
export default connect(null, mapDispatchToProps)(AddReview);
