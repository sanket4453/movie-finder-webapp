import React, { Component } from 'react'
import Header from './Header';
import Home from './Home';
import '../index.css'
import MovieList from './MovieList';
import { BrowserRouter, Route } from "react-router-dom";
import MovieDetails from './MovieDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
          <Header/>
          <div className="container">
            <Route path="/" exact={true} component={Home}/>
            <Route path="/movies" component={MovieList}/>
            <Route path="/details" component={MovieDetails}/>
              
            </div>
          
          </div>
      </BrowserRouter>
    )
  }
}

export default App
