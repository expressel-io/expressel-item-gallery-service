import React from 'react';
import TitleAndStarRating from './TitleAndStarRating/TitleAndStarRating';
import ProductOverview from './ProductOverview/ProductOverview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: null,
      Description: null,
      Color1: null,
      Color2: null,
      Options: null,
      Rating: null,
      LowestPrice: null,
      Color1Images: null,
      Color2Images: null,
      Color1Thumbnails: null,
      Color2Thumbnails: null,
      Color1ButtonImage: null,
      Color2ButtonImage: null,
      CurrentColor: null,
    };
  }

  componentDidMount() {
    axios.get('/app/home').then((response) => {
      const d = response.data;
      this.setState({
        Name: d.itemName,
        Description: d.itemDescription,
        Color1: d.itemColor1,
        Color2: d.itemColor2,
        Options: d.itemOptions,
        Rating: d.itemRating,
        LowestPrice: d.itemLowestPrice,
        Color1Images: d.itemColor1Images,
        Color2Images: d.itemColor2Images,
        Color1Thumbnails: d.itemColor1Thumbnails,
        Color2Thumbnails: d.itemColor2Thumbnails,
        Color1ButtonImage: d.itemColor1ButtonImage,
        Color2ButtonImage: d.itemColor2ButtonImage,
        CurrentColor: d.itemColor1,
      });
    });
  }

  render() {
    const {
      Name,
      Description,
      Color1,
      Color2,
      Options,
      Rating,
      LowestPrice,
      Color1Images,
      Color2Images,
      Color1Thumbnails,
      Color2Thumbnails,
      Color1ButtonImage,
      Color2ButtonImage,
      CurrentColor,
    } = this.state;

    if (Name !== null) {
      if (CurrentColor === Color1) {
        return (
          <h1>
            <TitleAndStarRating
              name={Name}
              rating={Rating}
              lowestPrice={LowestPrice}
            />
            <div className="productInfoRow">
              <ProductOverview
                images={Color1Images}
                thumbnails={Color1Thumbnails}
              />
            </div>
          </h1>
        );
      }
      return (
        <h1>
          <TitleAndStarRating
            name={Name}
            rating={Rating}
            lowestPrice={LowestPrice}
          />
          <div className="productInfoRow">
            <ProductOverview
              images={Color2Images}
              thumbnails={Color2Thumbnails}
            />
          </div>
        </h1>
      );
    }
    return (
      <div />
    );
  }
}

export default App;
