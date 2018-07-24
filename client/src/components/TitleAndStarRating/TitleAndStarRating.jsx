import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating/Rating';

function TitleAndStarRating(props) {
  const { name, rating, lowestPrice } = props;
  return (
    <div className="titleAndStarRating">
      <h1 className="productName">
        {name}
      </h1>
      <Rating rating={rating} lowestPrice={lowestPrice} />
    </div>
  );
}

TitleAndStarRating.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  lowestPrice: PropTypes.bool.isRequired,
};

export default TitleAndStarRating;
