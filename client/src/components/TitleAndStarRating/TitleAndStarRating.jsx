import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating/Rating';

class TitleAndStarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({});
    this.handleDummyClick = this.handleDummyClick.bind(this);
  }

  handleDummyClick() {
    alert('Sorry, that page is unavailable.');
  }

  render() {
    const { name, rating, lowestPrice } = this.props;
    return (
      <div className="titleAndStarRating">
        <h1 className="productName">
          {name}
        </h1>
        <Rating
          rating={rating}
          lowestPrice={lowestPrice}
          handleDummyClick={this.handleDummyClick}
        />
      </div>
    );
  }
}

TitleAndStarRating.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  lowestPrice: PropTypes.string.isRequired,
};

export default TitleAndStarRating;
