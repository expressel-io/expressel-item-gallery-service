import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const { rating, lowestPrice, handleDummyClick } = props;

  function generateLPBadge() {
    if (lowestPrice === 'true') {
      return (
        'Lowest Price'
      );
    }
    return (
      ''
    );
  }

  return (
    <div>
      <div className="rating">
        <span className="stars">
          <span className="star">
            &#9733;
          </span>
          <span className="star">
            &#9733;
          </span>
          <span className="star">
            &#9733;
          </span>
          <span className="star">
            &#9733;
          </span>
          <span className="star">
            &#9733;
          </span>
        </span>
        <span id="reviewsLink" onClick={handleDummyClick} onKeyPress={handleDummyClick} role="link" tabIndex="0">
          {`${rating} reviews`}
        </span>
      </div>
      <span id="lowestPriceBadge">
        {generateLPBadge()}
      </span>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
  lowestPrice: PropTypes.string.isRequired,
  handleDummyClick: PropTypes.func.isRequired,
};

export default Rating;
