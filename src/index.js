import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from './compInfoTabs/AboutMe';
import TechStack from './compInfoTabs/TeckStack';
import Projects from './compInfoTabs/Projects';
import ContactMe from './compInfoTabs/ContactMe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />}/>
      <Route path = "/aboutme" element = {<AboutMe/>}/>
      <Route path = "/teckstack" element = {<TechStack />}/>
      <Route path = "/projects" element = {<Projects />}/>
      <Route path = "/contactme" element = {<ContactMe />}/>
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
