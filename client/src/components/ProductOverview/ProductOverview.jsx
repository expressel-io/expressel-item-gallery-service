import React from 'react';
import PropTypes from 'prop-types';
import aws from '../../../../AWS/aws_key';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateCurrentImage = this.updateCurrentImage.bind(this);
  }

  updateCurrentImage(e) {
    const newImage = e.target.firstChild.src.replace('thumbnails', 'fullsize');
    this.setState({
      currentImage: newImage,
    });
  }

  render() {
    const {
      images,
      thumbnails,
    } = this.props;
    const {
      currentImage,
    } = this.state;

    this.thumbnailElements = thumbnails.map(thumbnail => (
      <div className="thumbnail" key={thumbnail} onMouseEnter={this.updateCurrentImage}>
        <img className="thumbnailImage" src={`${aws}${thumbnail}`} alt="" />
      </div>));

    if (currentImage) {
      return (
        <div className="overviewColumn">
          <div id="productImageView">
            <div id="productImageViewCarosel">
              <div id="imageView">
                <img src={currentImage} alt="" />
              </div>
              <div id="thumbnailPicker">
                {this.thumbnailElements}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="overviewColumn">
        <div id="productImageView">
          <div id="productImageViewCarosel">
            <div id="imageView">
              <img src={`${aws}${images[0]}`} alt="" />
            </div>
            <div id="thumbnailPicker">
              {this.thumbnailElements}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductOverview;

ProductOverview.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumbnails: PropTypes.arrayOf(PropTypes.string).isRequired,
};
