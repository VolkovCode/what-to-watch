import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchReviws, selectAllReviews} from "../../../store/reviews/reviewsSlice";
import Review from "../reviews/review";

const MoviePageReviews = () => {
  const {id} = useParams();
  const reviews = useSelector((state) => selectAllReviews(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviws(id));
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

export default MoviePageReviews;
