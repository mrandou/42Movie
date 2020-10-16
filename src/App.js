import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyApp from './Style/StyledComponents'
import HomePage from './Pages/HomePage'
import MoviePage from './Pages/MoviePage'
import Error404 from './Pages/404Page'
import Header from './Organisms/Header';
import Footer from './Organisms/Footer';

function App() {
  return (
    <MyApp> 
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Movie/:id" component={MoviePage}/>
          <Route component={Error404} />
        </Switch>
        <Footer />
      </Router>
    </MyApp>
  );
}

export default App;
