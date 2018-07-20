import React from 'react';
import Rating from './Rating/Rating';

function TitleAndStarRating(props) {
  return (
    <div className="titleAndStarRating">
      <h1>
        This is the Item Name
      </h1>
      <Rating props={props} />
    </div>
  );
}

export default TitleAndStarRating;
