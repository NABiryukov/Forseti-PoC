import React, { Component } from 'react';

import Layer from '../../Layer/index';
import Main from '../../../routes';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Layer>
          <Main />
        </Layer>
      </div>
    );
  }
}

export default App;
