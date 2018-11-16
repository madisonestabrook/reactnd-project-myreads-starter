import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BrowserRouter from 'react-router-dom/BrowserRouter';
// Modified from https://reacttraining.com/react-router/web/guides/quick-start
ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
)
