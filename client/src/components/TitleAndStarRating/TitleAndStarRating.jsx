import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating/Rating';

function TitleAndStarRating(props) {
  const { name, rating } = props;
  return (
    <div className="titleAndStarRating">
      <h1>
        {name}
      </h1>
      <Rating rating={rating} />
    </div>
  );
}

TitleAndStarRating.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default TitleAndStarRating;
