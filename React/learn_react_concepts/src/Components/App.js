//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';
import Items from '../Data/Menu';
//Assets
import './global/css/App.css';

class App extends Component {
    static propTypes = {
      children: PropTypes.object.isRequired
    };
  render() {
      const { children } = this.props;
    return (
      <div className="App">
        <Header menu={Items}/>
        <Content body={children}/>
        <Footer name="Repository of GitHub" year={2019}/>
      </div>
    );
  }
}

export default App;
