import React from 'react';
import './App.css'

import MainPage from './componets/pages/MainPage';
import SearchPage from './componets/pages/SearchPage';
import NoMatch from './componets/pages/NoMatch';

import {Route, Switch} from 'react-router';


class BooksApp extends React.Component {

  render() {
    return (
      <Switch>
      <Route exact path ='/' component = { MainPage } />
      <Route exact path ='/search' component = { SearchPage } />
      <Route component = {NoMatch} />>
      </Switch>
  // Switch from https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md
    );
    }
  }

export default BooksApp
