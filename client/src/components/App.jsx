import React from 'react';
import TitleAndStarRating from './TitleAndStarRating/TitleAndStarRating';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <h1>
        <TitleAndStarRating />
      </h1>
    );
  }
}

export default App;
