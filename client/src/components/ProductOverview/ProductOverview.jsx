import React from 'react';
import PropTypes from 'prop-types';
import aws from '../../../../AWS/aws_key';

function ProductOverview(props) {
  const {
    color1Images,
    color2Images,
    color1Thumbnails,
    color2Thumbnails,
    currentColor,
  } = props;
  return (
    <div className="overviewColumn">
      <div id="productImageView">
        <div id="productImageViewCarosel">
          <div id="imageView">
            <img src={`${aws}${color1Images[0]}`} alt="" />
          </div>
          <div id="thumbNails" />
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;

ProductOverview.propTypes = {
  color1Images: PropTypes.arrayOf(PropTypes.string).isRequired,
  color2Images: PropTypes.arrayOf(PropTypes.string).isRequired,
  color1Thumbnails: PropTypes.arrayOf(PropTypes.string).isRequired,
  color2Thumbnails: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
};
