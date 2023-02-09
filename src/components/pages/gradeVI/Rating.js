import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

function RateStudent() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <StarRatingComponent
        name="rating"
        starCount={5}
        value={rating}
        onStarClick={(nextValue) => setRating(nextValue)}
      />
      <p>Selected Rating: {rating}</p>
    </div>
  );
}

export default RateStudent;