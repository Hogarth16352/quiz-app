import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import '@mdi/font/css/materialdesignicons.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import './styles/styles.scss';
import 'materialize-css/dist/js/materialize.min.js';
import { QuizApp } from './QuizApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizApp />
    </BrowserRouter>    
  </React.StrictMode>,
);