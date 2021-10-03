import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './componets/navbar/Navbar';
import HomeList from './componets/homeList.js/HomeList';
import HomeState from './context/home/HomeState';
import './App.css';

function App() {
  return (
    <HomeState>
      <Router>
        <Navbar />
        <Route exact path='/' component={HomeList} />
        <Route exact path='/page/:pageNumber' component={HomeList} />
      </Router>
    </HomeState>
  );
}

export default App;
