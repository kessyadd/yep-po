import React, { Component } from 'react';
import './App.css';
import './components/Header.js';
import { Header } from './components/Header.js';
import Carsl from './components/Carousel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Carsl/>
        
      </div>
    );
  }
}

export default App;
