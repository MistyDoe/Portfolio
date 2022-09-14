import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, Routes, Route, Navigate, HashRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
  <App />
  </HashRouter>
</React.StrictMode>   
      

);

reportWebVitals();
