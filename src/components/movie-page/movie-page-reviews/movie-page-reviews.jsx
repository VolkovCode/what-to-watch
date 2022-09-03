import React, { useEffect } from "react";
import {connect} from "react-redux";
import {Link, useParams} from "react-router-dom";
import { getReviws } from "../../../store/api-actions";
import Review from "../reviews/review";

const MoviePageReviews = ({reviews, onLoadReviews}) => {
  console.log(reviews);
  const {id} = useParams();
  useEffect(() => {
    onLoadReviews(id);
    console.log(reviews);
  }, []);
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review) => <Review key={review.id} review={review} />)}
      </div>
      {/* <div className="movie-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">
              The mannered, madcap proceedings are often delightful,
              occasionally silly, and here and there, gruesome and/or
              heartbreaking.
            </p>

            <footer className="review__details">
              <cite className="review__author">Matthew Lickona</cite>
              <time className="review__date" dateTime="2016-12-20">
                December 20, 2016
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">7,2</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">
              It is certainly a magical and childlike way of storytelling,
              even if the content is a little more adult.
            </p>

            <footer className="review__details">
              <cite className="review__author">Paula Fleri-Soler</cite>
              <time className="review__date" dateTime="2016-12-20">
                December 20, 2016
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">7,6</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">
              It is certainly a magical and childlike way of storytelling,
              even if the content is a little more adult.
            </p>

            <footer className="review__details">
              <cite className="review__author">Paula Fleri-Soler</cite>
              <time className="review__date" dateTime="2016-12-20">
                December 20, 2016
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">7,0</div>
        </div>
      </div> */}
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
