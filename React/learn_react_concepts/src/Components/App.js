//Components
import React, { Component } from 'react';
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';
import Items from '../Data/Menu';
//Assets
import './global/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header menu={Items}/>
        <Content/>
        <Footer name="Repository of GitHub" year={2019}/>
      </div>
    );
  }
}

export default App;
