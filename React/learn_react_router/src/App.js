//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Components
import Header from './Components/All/Header'
import Content from './Components/All/Content'
import Footer from './Components/All/Footer'

//Assets
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    };
  render() {
      const { children } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Header/>
        </header>
          <div className="container pt-5">
              <Content body={children}/>
          </div>
          <div className="fixed-bottom">
              <Footer/>
          </div>
      </div>
    );
  }
}

export default App;
