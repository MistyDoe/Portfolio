import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from './compInfoTabs/AboutMe';
import TechStack from './compInfoTabs/TeckStack';
import Projects from './compInfoTabs/Projects';
import ContactMe from './compInfoTabs/ContactMe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path = "/" element = {<AboutMe/>}/>
      <Route path = "/aboutme" element = {<AboutMe/>}/>
      <Route path = "/teckstack" element = {<TechStack />}/>
      <Route path = "/projects" element = {<Projects />}/>
      <Route path = "/contactme" element = {<ContactMe />}/>
    </Routes>
  </BrowserRouter>

);

reportWebVitals();
