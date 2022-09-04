import React, { useEffect } from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {getReviws} from "../../../store/api-actions";
import Review from "../reviews/review";

const MoviePageReviews = ({reviews, onLoadReviews}) => {
  const {id} = useParams();

  useEffect(() => {
    onLoadReviews(id);
  }, []);

  const reviewsHalfLength = Math.round(reviews.length / 2);
  const firstHalfReviews = reviews.slice(0, reviewsHalfLength);
  const secondHalfReviews = reviews.slice(reviewsHalfLength);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstHalfReviews.map((review) => <Review key={review.id} review={review} />)}
      </div>
      <div className="movie-card__reviews-col">
        {secondHalfReviews.map((review) => <Review key={review.id} review={review} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reviews: state.comments
});

const mapDispatchToProps = (dispatch) => ({
  onLoadReviews(id) {
    dispatch(getReviws(id));
  }
});

export {MoviePageReviews};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePageReviews);
