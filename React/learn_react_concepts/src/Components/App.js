//Components
import React, { Component } from 'react';
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

//Assets
import './global/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content name="Repository of GitHub" year={2019} />
        <Footer />
      </div>
    );
  }
}

export default App;
