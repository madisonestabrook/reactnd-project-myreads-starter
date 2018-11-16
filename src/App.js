import React from 'react';
import './App.css'
import { Router } from "react-router-dom";

import MainPage from './componets/pages/MainPage';
import SearchPage from './componets/pages/SearchPage';

import Route from 'react-router-dom/Route';
class BooksApp extends React.Component {
  render() {
    return (
      <div>
      <Route exact path ='/' component = { MainPage } />
      <Route exact path ='/search' component = { SearchPage } />
      </div>
    );
    }
  }

export default BooksApp
