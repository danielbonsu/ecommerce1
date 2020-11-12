import React from 'react';
import './Rating.scss';
const Rating = ({ rating }) => {
  return (
    <div className='rating'>
      <span>
        {rating > 0.5 ? (
          <i class='fas fa-star golden'></i>
        ) : (
          <i class='fas fa-star-half-alt golden'></i>
        )}
      </span>

      <span>
        {rating > 1.5 <= 2 ? (
          <i class='fas fa-star golden'></i>
        ) : (
          rating >
          <i class='fas fa-star-half-alt golden'></i>
        )}
      </span>

      <span>
        {rating > 1.5 ? (
          <i class='fas fa-star golden'></i>
        ) : (
          <i class='fas fa-star-half-alt golden'></i>
        )}
      </span>

      <span>
        {rating > 1.5 ? (
          <i class='fas fa-star golden'></i>
        ) : (
          <i class='fas fa-star-half-alt golden'></i>
        )}
      </span>
      <span>
        {rating > 1.5 ? (
          <i class='fas fa-star golden'></i>
        ) : (
          <i class='fas fa-star-half-alt golden'></i>
        )}
      </span>
    </div>
  );
};

export default Rating;
