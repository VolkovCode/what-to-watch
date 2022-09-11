import React from 'react';
import * as moment from 'moment';

const Review = ({review}) => {

  const date = moment(review.date).format(`MMMM D, YYYY`);
  const dateToISO = moment(review.date).format(`YYYY-MM-DD`);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {review.comment}
        </p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={dateToISO}>
            {date}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
};

export default Review;
