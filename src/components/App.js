import React, { Component } from 'react';
import { TopMenu } from './TopMenu';
import { Converter } from './Converter';
import { Footer } from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <Converter />
        <Footer />
      </div>
    );
  }
}

export default App;
