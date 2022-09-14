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
    <BrowserRouter>
    <Routes>
      <Route path = "/Portfolio/" element = {<AboutMe/>}/>
      <Route path = "/Portfolio/aboutme" element = {<AboutMe/>}/>
      <Route path = "/Portfolio/teckstack" element = {<TechStack />}/>
      <Route path = "/Portfolio/projects" element = {<Projects />}/>
      <Route path = "/Portfolio/contactme" element = {<ContactMe />}/>
    </Routes>
  </BrowserRouter>

);

reportWebVitals();
