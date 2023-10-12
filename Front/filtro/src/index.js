import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter

import App from './App';

ReactDOM.render(
  <Router> {/* Envuelve tu aplicación en un Router */}
    <App />
  </Router>,
  document.getElementById('root')
);
