import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from "react-router-dom";
import App from './App';
import AboutMe from './compInfoTabs/AboutMe';
import TechStack from './compInfoTabs/TeckStack';
import Projects from './compInfoTabs/Projects';
import ContactMe from './compInfoTabs/ContactMe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter >
   <App/>   
  </HashRouter>

);

reportWebVitals();
