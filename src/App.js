import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import MoviePage from './Pages/MoviePage'
import Error404 from './Pages/404Page'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/Movie/:id">
          <MoviePage />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
