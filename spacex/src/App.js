import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Launches from './components/Launches';

class App extends Component {

  render() {
   
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={ Home } />
          <Route path='/launches' component={ Launches } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
