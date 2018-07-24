import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const { rating, lowestPrice } = props;
  return (
    <div className="rating">
      {rating}
      <div className="lowestPrice">
        {lowestPrice}
      </div>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  lowestPrice: PropTypes.bool.isRequired,
};

export default Rating;
