import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './menu'


ReactDOM.render(
  <React.StrictMode>
  <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
