import React from 'react';

function RatingComponent({ rating, onRatingClicked }) {
  const maxRating = 5;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - Math.ceil(rating);

  const handleStarClick = (clickedRating) => {
    onRatingClicked(clickedRating);
  };

  return (
    <div className="rating">
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="star full-star" onClick={() => handleStarClick(index + 1)}>
          &#9733;
        </span>
      ))}
      {hasHalfStar && (
        <span className="star half-star" onClick={() => handleStarClick(fullStars + 0.5)}>
          &#9733;
        </span>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="star empty-star" onClick={() => handleStarClick(fullStars + index + 1)}>
          &#9734;
        </span>
      ))}
    </div>
  );
}

export default RatingComponent;
