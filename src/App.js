
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Banner from './compStatic/Banner.jsx';
import AboutMe from './compInfoTabs/AboutMe';
import TechStack from './compInfoTabs/TeckStack';
import Projects from './compInfoTabs/Projects';
import ContactMe from './compInfoTabs/ContactMe';


function App() {
  return (
    <>
    <Banner/>
    <Route  exact path = "/" component = {AboutMe}/>
      <Route path = "/aboutme" element = {<AboutMe/>}/>
      <Route path = "/teckstack" element = {<TechStack />}/>
      <Route path = "/projects" element = {<Projects />}/>
      <Route path = "/contactme" element = {<ContactMe />}/>
    </>
  );
}

export default App;
