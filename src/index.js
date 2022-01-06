import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import MyForm from './MyForm';
//import FavoriteColor from './FavoriteColor';
//import ReducerTutorial from './ReducerTutorial';

ReactDOM.render(
  <React.StrictMode>
    <App />    
  </React.StrictMode>,
  //<App />   
  //<h1> Oye </h1>,
  document.getElementById('root')
);

// Calling another .js file to execute from 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
